import { useNavigate } from 'react-router-dom';
import { BarChartIcon, MessagesIcon, TagIcon, TrendUpIcon } from '@/assets/icons';
import Button from '@/components/common/Button/Button';
import Card, { SectionLabel } from '@/components/common/Card/Card';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import { Page } from '@/components/layout/PageWrapper/PageWrapper';
import { useI18n } from '@/context/I18nContext';
import { ROUTES } from '@/constants';
import { formatCurrency } from '@/utils/formatCurrency';
import { useMarketplace } from '@/features/marketplace/hooks';
import {
  selectAvailableShares,
  selectEstimatedValue,
  selectMyListings,
  selectOpenOfferCount,
} from '@/features/marketplace/marketplaceSelectors';
import { ListingTable, StatCard } from '@/features/marketplace/components';

/**
 * The shareholder's own position: holdings, what is reserved against live
 * listings, and how many negotiations are waiting on them.
 */
export default function Dashboard() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const state = useMarketplace();

  const myListings = selectMyListings(state);
  const openOffers = selectOpenOfferCount(state);

  return (
    <Page>
      <PageHeader
        title={t('dashTitle')}
        backTo={ROUTES.HOME}
        backLabel={t('back')}
        actions={
          <Button variant="secondary" onClick={() => navigate(ROUTES.OFFERS)}>
            {t('reviewOffers')}
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 min-[620px]:grid-cols-2 min-[1080px]:grid-cols-4">
        <StatCard
          label={t('dashHolding')}
          icon={<TrendUpIcon size={15} />}
          value={state.myShares}
          meta={formatCurrency(selectEstimatedValue(state))}
        />
        <StatCard
          label={t('dashReserved')}
          icon={<TagIcon size={15} />}
          value={state.reserved}
          meta={t('reservedLine', { count: state.reserved })}
        />
        <StatCard
          label={t('dashAvailable')}
          icon={<BarChartIcon size={15} />}
          value={selectAvailableShares(state)}
        />
        <StatCard
          label={t('dashOpenOffers')}
          icon={<MessagesIcon size={15} />}
          value={openOffers}
        />
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <SectionLabel>{t('myListings')}</SectionLabel>
          <Button size="sm" onClick={() => navigate(ROUTES.SELL)}>
            {t('sellTile')}
          </Button>
        </div>

        {myListings.length > 0 ? (
          <ListingTable listings={myListings} />
        ) : (
          <Card dashed>
            <div className="p-8 text-center text-[13.5px] font-bold text-muted">
              {t('noMyListings')}
            </div>
          </Card>
        )}
      </div>
    </Page>
  );
}
