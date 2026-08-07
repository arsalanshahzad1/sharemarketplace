import PageHeader from '@/components/common/PageHeader/PageHeader';
import { Page } from '@/components/layout/PageWrapper/PageWrapper';
import { useI18n } from '@/context/I18nContext';
import { ROUTES } from '@/constants';
import { useMarketplace } from '@/features/marketplace/hooks';
import { TransactionTable } from '@/features/marketplace/components';

/** The shareholder's ledger: every completed transfer and pending payout. */
export default function Transactions() {
  const { t } = useI18n();
  const { transactions } = useMarketplace();

  return (
    <Page>
      <PageHeader title={t('historyTitle')} backTo={ROUTES.HOME} backLabel={t('back')} />
      <TransactionTable transactions={transactions} />
    </Page>
  );
}
