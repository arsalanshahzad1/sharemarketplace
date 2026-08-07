import { useNavigate } from 'react-router-dom';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import { Page } from '@/components/layout/PageWrapper/PageWrapper';
import { useI18n } from '@/context/I18nContext';
import { ROUTES } from '@/constants';
import { useMarketplace } from '@/features/marketplace/hooks';
import { marketplaceActions } from '@/features/marketplace/marketplaceStore';
import { threadPrice } from '@/features/marketplace/marketplaceSelectors';
import { EmptyThreads, OfferThread } from '@/features/marketplace/components';

/** Every negotiation the shareholder is party to, buying or selling. */
export default function Offers() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { threads } = useMarketplace();

  const proceedToPayment = (thread) => {
    marketplaceActions.startPayment({
      seller: thread.counterparty,
      qty: thread.qty,
      price: threadPrice(thread),
      threadId: thread.id,
      listingId: thread.listingId,
    });
    navigate(ROUTES.PAYMENT);
  };

  return (
    <Page>
      <PageHeader title={t('offersTitle')} backTo={ROUTES.HOME} backLabel={t('back')} />

      <div className="flex flex-col gap-4">
        {threads.map((thread) => (
          <OfferThread
            key={thread.id}
            thread={thread}
            onAccept={() => marketplaceActions.acceptThread(thread.id)}
            onReject={() => marketplaceActions.rejectThread(thread.id)}
            onCounter={(price) => marketplaceActions.submitCounter(thread.id, price)}
            onPay={() => proceedToPayment(thread)}
          />
        ))}

        {threads.length === 0 && <EmptyThreads>{t('noOffers')}</EmptyThreads>}
      </div>
    </Page>
  );
}
