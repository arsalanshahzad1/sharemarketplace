import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@/assets/icons';
import Badge from '@/components/common/Badge/Badge';
import Button from '@/components/common/Button/Button';
import Card, { SectionLabel } from '@/components/common/Card/Card';
import Input, { Select } from '@/components/common/Input/Input';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import { Page } from '@/components/layout/PageWrapper/PageWrapper';
import { useI18n } from '@/context/I18nContext';
import { EXPIRY_OPTIONS, ROUTES } from '@/constants';
import { formatCurrency } from '@/utils/formatCurrency';
import { toNumber, validateListing } from '@/utils/validators';
import { cx } from '@/utils/cx';
import { useMarketplace } from '@/features/marketplace/hooks';
import { marketplaceActions } from '@/features/marketplace/marketplaceStore';
import {
  selectAvailableShares,
  selectLastTradePrice,
} from '@/features/marketplace/marketplaceSelectors';
import { OrderSummary } from '@/features/marketplace/components';

const STEPS = { DETAILS: 1, REVIEW: 2, PUBLISHED: 3 };

const FACT_LABEL = 'text-[11px] font-extrabold uppercase tracking-[0.05em] text-muted';
const FACT_VALUE = 'mt-1 font-mono text-2xl font-bold tabular-nums';

/** Three-step wizard for listing shares: details, review, confirmation. */
export default function Sell() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const state = useMarketplace();
  const available = selectAvailableShares(state);
  const lastTradePrice = selectLastTradePrice(state);

  const [step, setStep] = useState(STEPS.DETAILS);
  const [draft, setDraft] = useState({
    qty: 20,
    price: lastTradePrice || '',
    allowOffers: true,
    expiry: '14',
  });
  const [error, setError] = useState(null);

  const qty = toNumber(draft.qty);
  const price = toNumber(draft.price);

  const goToReview = () => {
    const problem = validateListing({ qty: draft.qty, price: draft.price, available });
    if (problem) {
      setError(t(problem));
      return;
    }
    setError(null);
    setStep(STEPS.REVIEW);
  };

  const publish = () => {
    const listing = marketplaceActions.publishListing({
      qty: draft.qty,
      price: draft.price,
      allowOffers: draft.allowOffers,
      expiryDays: draft.expiry,
    });
    if (listing) setStep(STEPS.PUBLISHED);
  };

  const expiryLabel =
    draft.expiry === '0' ? t('noExpiry') : `${draft.expiry} ${t('daysSuffix')}`;

  return (
    <Page width="narrow">
      <PageHeader title={t('sellTitle')} backTo={ROUTES.HOME} backLabel={t('back')} />

      <div className="mb-4 flex gap-2">
        {[STEPS.DETAILS, STEPS.REVIEW, STEPS.PUBLISHED].map((value) => (
          <div
            key={value}
            className={cx(
              'h-1 flex-1 rounded-[2px] transition-colors',
              step >= value ? 'bg-brand' : 'bg-line',
            )}
          />
        ))}
      </div>

      {step === STEPS.DETAILS && (
        <Card padding="roomy">
          <div className="flex items-center justify-between gap-3">
            <SectionLabel>{t('sellDetails')}</SectionLabel>
            <Badge tone="green">
              {available} {t('available')}
            </Badge>
          </div>

          <div className="mt-5 [&>*+*]:mt-4">
            <Input
              label={t('sharesToSell')}
              size="lg"
              type="number"
              value={draft.qty}
              suffix={`${t('max')} ${available}`}
              onChange={(e) => setDraft((d) => ({ ...d, qty: e.target.value }))}
              error={error}
            />

            <Input
              label={t('askPerShare')}
              size="lg"
              type="number"
              prefix="MX$"
              value={draft.price}
              suffix={`${t('lastTrade')} ${formatCurrency(lastTradePrice)}`}
              onChange={(e) => setDraft((d) => ({ ...d, price: e.target.value }))}
            />

            <button
              type="button"
              aria-pressed={draft.allowOffers}
              onClick={() => setDraft((d) => ({ ...d, allowOffers: !d.allowOffers }))}
              className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl border border-line bg-transparent px-4 py-[15px] text-left font-[inherit] text-[inherit]"
            >
              <span>
                <span className="block text-[13.5px] font-extrabold">
                  {t('allowOffersLbl')}
                </span>
                <span className="mt-0.5 block text-xs font-semibold text-body">
                  {t('allowOffersDesc')}
                </span>
              </span>

              <span
                className={cx(
                  'relative h-6 w-[42px] flex-none rounded-full transition-colors',
                  draft.allowOffers ? 'bg-success' : 'bg-line-strong',
                )}
              >
                <span
                  className={cx(
                    'absolute top-[3px] size-[18px] rounded-full bg-white shadow-sm transition-[left]',
                    draft.allowOffers ? 'left-[21px]' : 'left-[3px]',
                  )}
                />
              </span>
            </button>

            <Select
              label={t('expiry')}
              value={draft.expiry}
              onChange={(e) => setDraft((d) => ({ ...d, expiry: e.target.value }))}
            >
              {EXPIRY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {t(option.labelKey)}
                </option>
              ))}
            </Select>

            <Button block size="lg" onClick={goToReview}>
              {t('reviewListing')}
            </Button>
          </div>
        </Card>
      )}

      {step === STEPS.REVIEW && (
        <Card padding="roomy">
          <SectionLabel>{t('reviewTitle')}</SectionLabel>

          <div className="mt-[18px] grid grid-cols-2 gap-3.5">
            <div className="rounded-field bg-canvas p-4">
              <div className={FACT_LABEL}>{t('sharesToSell')}</div>
              <div className={FACT_VALUE}>{qty}</div>
            </div>
            <div className="rounded-field bg-canvas p-4">
              <div className={FACT_LABEL}>{t('askPerShare')}</div>
              <div className={FACT_VALUE}>{formatCurrency(price)}</div>
            </div>
          </div>

          <OrderSummary
            rows={[
              { label: t('listingValue'), value: formatCurrency(qty * price) },
              {
                label: t('offersLbl'),
                value: t(draft.allowOffers ? 'yes' : 'no'),
                text: true,
              },
              { label: t('expiry'), value: expiryLabel, text: true },
            ]}
          />

          <div className="mt-[18px] rounded-xl bg-brand-soft px-4 py-[13px] text-[12.5px] font-semibold text-brand-dark">
            {t('reserveWarn')}
          </div>

          <div className="mt-[22px] flex gap-2.5">
            <Button
              variant="neutral"
              size="lg"
              className="flex-1"
              onClick={() => setStep(STEPS.DETAILS)}
            >
              {t('back')}
            </Button>
            <Button size="lg" className="flex-[2]" onClick={publish}>
              {t('publish')}
            </Button>
          </div>
        </Card>
      )}

      {step === STEPS.PUBLISHED && (
        <Card padding="none" className="px-[26px] py-10 text-center">
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-success-soft text-success">
            <CheckIcon size={26} />
          </span>

          <div className="mt-4 text-xl font-extrabold tracking-[-0.01em]">
            {t('listingLive')}
          </div>
          <div className="mt-2 text-[13.5px] font-semibold leading-relaxed text-body">
            {t('sellLiveLine', { qty, price: formatCurrency(price) })}
          </div>

          <div className="mt-[26px] flex flex-wrap justify-center gap-2.5">
            <Button size="lg" onClick={() => navigate(ROUTES.BROWSE)}>
              {t('viewInMarket')}
            </Button>
            <Button variant="neutral" size="lg" onClick={() => navigate(ROUTES.HOME)}>
              {t('backHome')}
            </Button>
          </div>
        </Card>
      )}
    </Page>
  );
}
