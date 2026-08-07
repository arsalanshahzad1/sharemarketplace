import { useNavigate } from 'react-router-dom';
import { ClockIcon } from '@/assets/icons';
import Button from '@/components/common/Button/Button';
import Card, { SectionLabel } from '@/components/common/Card/Card';
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

/** Checkout: pick a rail, review the order, move funds into escrow. */
export default function Payment() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { deal, payMethod, payPhase, payDeadline } = useMarketplace();
  const methods = usePaymentMethods();
  const countdown = usePaymentCountdown(payDeadline);

  // A settled deal stays in the store until the confirmation screen is left;
  // reaching checkout again in that window is not a live order.
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

  const order = calcOrder(deal.qty, deal.price, ENV.COMMISSION_PCT);
  const processing = payPhase === PAY_PHASE.PROCESSING;

  const buttonLabel = processing
    ? t('processing')
    : !payMethod
      ? t('selectMethod')
      : `${t('payNow')} ${formatCurrency(order.total)}`;

  const submit = async () => {
    const paid = await marketplaceActions.payNow();
    if (paid) navigate(ROUTES.PAYMENT_SUCCESS);
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
        </Card>

        <Card>
          <SectionLabel>{t('orderSummary')}</SectionLabel>

          <OrderSummary
            rows={[
              { label: t('seller'), value: deal.seller, text: true },
              {
                label: `${deal.qty} × ${formatCurrency(deal.price)}`,
                value: formatCurrency(order.subtotal),
              },
              {
                label: `${t('fee')} (${order.feePct}%)`,
                value: formatCurrency(order.fee),
              },
            ]}
            total={{ label: t('totalDue'), value: formatCurrency(order.total) }}
          />

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
