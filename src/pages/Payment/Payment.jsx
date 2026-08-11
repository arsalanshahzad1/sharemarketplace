import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClockIcon } from '@/assets/icons';
import Button from '@/components/common/Button/Button';
import Card, { SectionLabel } from '@/components/common/Card/Card';
import Input from '@/components/common/Input/Input';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import { Page } from '@/components/layout/PageWrapper/PageWrapper';
import { useI18n } from '@/context/I18nContext';
import { PAY_PHASE, ROUTES } from '@/constants';
import { ENV } from '@/constants/env';
import { formatCurrency } from '@/utils/formatCurrency';
import {
  useMarketplace,
  usePaymentCountdown,
  usePaymentMethods,
} from '@/features/marketplace/hooks';
import { marketplaceActions } from '@/features/marketplace/marketplaceStore';
import { calcOrder } from '@/features/marketplace/marketplaceSelectors';
import {
  EscrowHint,
  OrderSummary,
  PaymentMethodList,
} from '@/features/marketplace/components';

const CONEKTA_SCRIPT_URL = 'https://cdn.conekta.io/js/latest/conekta.js';

function loadConektaScript() {
  if (window.Conekta) return Promise.resolve(window.Conekta);

  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${CONEKTA_SCRIPT_URL}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve(window.Conekta), { once: true });
      existing.addEventListener('error', reject, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = CONEKTA_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve(window.Conekta);
    script.onerror = () => reject(new Error('Unable to load Conekta tokenizer.'));
    document.head.appendChild(script);
  });
}

const onlyDigits = (value) => String(value || '').replace(/\D/g, '');

function formatCardNumber(value) {
  return onlyDigits(value)
    .slice(0, 19)
    .replace(/(.{4})/g, '$1 ')
    .trim();
}

function formatExpiry(value) {
  const digits = onlyDigits(value).slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function parseExpiry(value) {
  const digits = onlyDigits(value).slice(0, 4);
  return {
    month: digits.slice(0, 2),
    year: digits.slice(2, 4),
  };
}

function detectBrand(cardNumber) {
  const digits = onlyDigits(cardNumber);
  if (/^4/.test(digits)) return 'Visa';
  if (/^(5[1-5]|2[2-7])/.test(digits)) return 'Mastercard';
  if (/^3[47]/.test(digits)) return 'American Express';
  return 'Card';
}

/** Checkout: collect card details, tokenize with Conekta, then pay backend order. */
export default function Payment() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { deal, payMethod, payPhase, payDeadline } = useMarketplace();
  const methods = usePaymentMethods();
  const countdown = usePaymentCountdown(payDeadline);
  const [card, setCard] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });
  const [tokenizing, setTokenizing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  useEffect(() => {
    if (!ENV.CONEKTA_PUBLIC_KEY) return;

    loadConektaScript()
      .then((Conekta) => {
        Conekta?.setPublicKey?.(ENV.CONEKTA_PUBLIC_KEY);
      })
      .catch((error) => setPaymentError(error.message));
  }, []);

  if (!deal || payPhase === PAY_PHASE.DONE) {
    return (
      <Page width="medium">
        <PageHeader title={t('payTitle')} backTo={ROUTES.HOME} backLabel={t('back')} />
        <Card>
          <div className="px-6 py-12 text-center text-sm font-bold text-muted">
            {t('noDeal')}
          </div>
        </Card>
      </Page>
    );
  }

  const order = calcOrder(deal.qty, deal.price, ENV.COMMISSION_PCT, {
    includeConektaFee: true,
  });
  const processing = payPhase === PAY_PHASE.PROCESSING || tokenizing;
  const expiry = parseExpiry(card.expiry);
  const rawCardNumber = onlyDigits(card.number);
  const baseAmount = order.subtotal;

  const buttonLabel = processing
    ? t('processing')
    : !payMethod
      ? t('selectMethod')
      : `${t('payNow')} ${formatCurrency(order.total)}`;

  const validateCard = () => {
    if (!ENV.CONEKTA_PUBLIC_KEY) return 'Conekta public key is missing.';
    if (rawCardNumber.length < 13) return 'Enter a valid card number.';
    if (!card.name.trim()) return 'Enter the cardholder name.';
    if (!expiry.month || !expiry.year) return 'Enter expiry as MM/YY.';
    if (Number(expiry.month) < 1 || Number(expiry.month) > 12) {
      return 'Enter a valid expiry month.';
    }
    if (onlyDigits(card.cvc).length < 3) return 'Enter a valid CVC.';
    return null;
  };

  const createToken = async () => {
    const validationError = validateCard();
    if (validationError) throw new Error(validationError);

    const Conekta = await loadConektaScript();
    Conekta.setPublicKey(ENV.CONEKTA_PUBLIC_KEY);

    return new Promise((resolve, reject) => {
      Conekta.Token.create(
        formRef.current,
        (token) =>
          resolve({
            tokenId: token.id,
            brand: detectBrand(rawCardNumber),
            last4: rawCardNumber.slice(-4),
            cardholderName: card.name.trim(),
            expiry: `${expiry.month}/${expiry.year}`,
          }),
        (error) => reject(new Error(error?.message || 'Unable to tokenize card.')),
      );
    });
  };

  const submit = async () => {
    try {
      setPaymentError(null);
      setTokenizing(true);
      const token = await createToken();
      setTokenizing(false);

      const paid = await marketplaceActions.payNow({ tokenId: token.tokenId });
      if (paid) navigate(ROUTES.PAYMENT_SUCCESS);
    } catch (error) {
      setTokenizing(false);
      setPaymentError(error.message);
    }
  };

  return (
    <Page width="medium">
      <PageHeader
        title={t('payTitle')}
        backTo={ROUTES.HOME}
        backLabel={t('back')}
        actions={
          <div className="flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-soft px-[15px] py-[7px] text-[12.5px] font-extrabold text-brand">
            <ClockIcon size={14} />
            <span className="text-brand-dark">
              {t('payWindow')}{' '}
              <span className="font-mono tabular-nums">{countdown.label}</span>
            </span>
          </div>
        }
      />

      <div className="grid grid-cols-1 items-start gap-4 min-[900px]:grid-cols-[1.4fr_1fr]">
        <Card>
          <SectionLabel>{t('payMethod')}</SectionLabel>
          <PaymentMethodList
            methods={methods}
            selected={payMethod}
            onSelect={marketplaceActions.selectPayMethod}
          />

          {payMethod === 'conekta' && (
            <form ref={formRef} className="mt-5 [&>*+*]:mt-4" onSubmit={(e) => e.preventDefault()}>
              <Input
                label="Card number"
                inputMode="numeric"
                autoComplete="cc-number"
                value={card.number}
                onChange={(event) =>
                  setCard((current) => ({
                    ...current,
                    number: formatCardNumber(event.target.value),
                  }))
                }
                placeholder="4242 4242 4242 4242"
              />

              <Input
                label="Cardholder name"
                autoComplete="cc-name"
                value={card.name}
                onChange={(event) =>
                  setCard((current) => ({
                    ...current,
                    name: event.target.value.toUpperCase(),
                  }))
                }
                placeholder="FULL NAME"
              />

              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Expiry"
                  inputMode="numeric"
                  autoComplete="cc-exp"
                  value={card.expiry}
                  onChange={(event) =>
                    setCard((current) => ({
                      ...current,
                      expiry: formatExpiry(event.target.value),
                    }))
                  }
                  placeholder="MM/YY"
                />
                <Input
                  label="CVC"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  value={card.cvc}
                  onChange={(event) =>
                    setCard((current) => ({
                      ...current,
                      cvc: onlyDigits(event.target.value).slice(0, 4),
                    }))
                  }
                  placeholder="123"
                  error={paymentError}
                />
              </div>

              <input type="hidden" data-conekta="card[number]" value={rawCardNumber} readOnly />
              <input type="hidden" data-conekta="card[name]" value={card.name.trim()} readOnly />
              <input type="hidden" data-conekta="card[exp_month]" value={expiry.month} readOnly />
              <input type="hidden" data-conekta="card[exp_year]" value={expiry.year} readOnly />
              <input type="hidden" data-conekta="card[cvc]" value={onlyDigits(card.cvc)} readOnly />
            </form>
          )}
        </Card>

        <Card>
          <SectionLabel>{t('orderSummary')}</SectionLabel>

          <OrderSummary
            rows={[
              { label: t('seller'), value: deal.seller, text: true },
              {
                label: `${deal.qty} x ${formatCurrency(deal.price)}`,
                value: formatCurrency(baseAmount),
              },
              {
                label: `${t('fee')} (${order.feePct}%)`,
                value: formatCurrency(order.fee),
              },
              {
                label: `${t('conektaServiceFee')} (${order.conektaFeePct}%)`,
                value: formatCurrency(order.conektaFee),
              },
            ]}
            total={{ label: t('totalDue'), value: formatCurrency(order.total) }}
          />

          <div className="mt-3 rounded-field border border-line bg-canvas px-4 py-3 text-xs font-bold leading-relaxed text-body">
            {t('conektaFeeAck', {
              pct: order.conektaFeePct,
              amount: formatCurrency(order.conektaFee),
            })}
          </div>

          <EscrowHint>{t('escrowShort')}</EscrowHint>

          <Button
            block
            size="lg"
            className="mt-[18px]"
            disabled={!payMethod || processing}
            onClick={submit}
          >
            {buttonLabel}
          </Button>
        </Card>
      </div>
    </Page>
  );
}
