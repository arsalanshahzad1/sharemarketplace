import { Navigate, useNavigate } from 'react-router-dom';
import { CheckIcon } from '@/assets/icons';
import Button from '@/components/common/Button/Button';
import Card from '@/components/common/Card/Card';
import { Page } from '@/components/layout/PageWrapper/PageWrapper';
import { useI18n } from '@/context/I18nContext';
import { ROUTES } from '@/constants';
import { ENV } from '@/constants/env';
import { formatCurrency } from '@/utils/formatCurrency';
import { useMarketplace } from '@/features/marketplace/hooks';
import { calcOrder } from '@/features/marketplace/marketplaceSelectors';
import { SettlementTimeline } from '@/features/marketplace/components';

/** Confirmation screen: escrow received, then transfer and payout land in turn. */
export default function PaymentSuccess() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { deal, doneStep } = useMarketplace();

  // Reached without a completed purchase — nothing to confirm.
  if (!deal) return <Navigate to={ROUTES.HOME} replace />;

  // The settled deal is deliberately left in the store: clearing it here would
  // trip the redirect above mid-navigation and bounce the user home. The next
  // `startPayment` resets checkout state, and the Payment screen refuses to
  // reopen a deal whose phase is already `done`.

  const order = calcOrder(deal.qty, deal.price, ENV.COMMISSION_PCT);

  const steps = [
    { label: t('doneStep1'), desc: t('doneStep1Desc') },
    { label: t('doneStep2'), desc: t('doneStep2Desc', { qty: deal.qty }) },
    { label: t('doneStep3'), desc: t('doneStep3Desc') },
  ];

  return (
    <Page width="narrow">
      <Card inverse padding="none" className="p-[34px] text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-mint/15 text-mint">
          <CheckIcon size={26} />
        </span>

        <div className="mt-3.5 text-[22px] font-extrabold tracking-[-0.01em]">
          {t('doneTitle')}
        </div>
        <div className="mt-1.5 text-[13.5px] font-semibold text-white/65">
          {t('doneLine', {
            qty: deal.qty,
            name: deal.seller,
            total: formatCurrency(order.subtotal),
          })}
        </div>
      </Card>

      <Card padding="roomy" className="mt-4">
        <SettlementTimeline steps={steps} step={doneStep} />

        <div className="mt-2 flex gap-2.5 [&>*]:flex-1">
          <Button size="lg" onClick={() => navigate(ROUTES.TRANSACTIONS)}>
            {t('viewReceipt')}
          </Button>
          <Button variant="neutral" size="lg" onClick={() => navigate(ROUTES.HOME)}>
            {t('backHome')}
          </Button>
        </div>
      </Card>
    </Page>
  );
}
