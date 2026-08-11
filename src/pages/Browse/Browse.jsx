import { useNavigate } from 'react-router-dom';
import Badge from '@/components/common/Badge/Badge';
import Button from '@/components/common/Button/Button';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import { Page } from '@/components/layout/PageWrapper/PageWrapper';
import { useI18n } from '@/context/I18nContext';
import { ROUTES } from '@/constants';
import { useMarketplace } from '@/features/marketplace/hooks';
import { ListingTable } from '@/features/marketplace/components';
import { selectLiveListings } from '@/features/marketplace/marketplaceSelectors';

/** Every live listing in the marketplace. */
export default function Browse() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const state = useMarketplace();
  const liveListings = selectLiveListings(state);

  return (
    <Page>
      <PageHeader
        title={t('browseTitle')}
        backTo={ROUTES.HOME}
        backLabel={t('back')}
        badge={
          <Badge tone="red">
            {liveListings.length} {t('live')}
          </Badge>
        }
        actions={
          <Button onClick={() => navigate(ROUTES.SELL)}>{t('sellTile')}</Button>
        }
      />
      <ListingTable listings={state.listings} />
    </Page>
  );
}
