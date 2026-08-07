import { useNavigate } from 'react-router-dom';
import {
  BarChartIcon,
  HistoryIcon,
  MessagesIcon,
  SearchIcon,
  Sparkline,
  TagIcon,
  TrendUpIcon,
} from '@/assets/icons';
import Badge from '@/components/common/Badge/Badge';
import Card from '@/components/common/Card/Card';
import { Page } from '@/components/layout/PageWrapper/PageWrapper';
import { useI18n } from '@/context/I18nContext';
import { ROUTES } from '@/constants';
import { formatCurrency } from '@/utils/formatCurrency';
import { useMarketplace } from '@/features/marketplace/hooks';
import { ActivityFeed, StatCard } from '@/features/marketplace/components';
import {
  selectEstimatedValue,
  selectOpenOfferCount,
  selectSharesForSale,
} from '@/features/marketplace/marketplaceSelectors';
import {
  activityFixture,
  marketStatsFixture,
} from '@/features/marketplace/marketplaceFixtures';

const HERO_LABEL = 'text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-white/55';

/** Marketplace overview: portfolio, market stats, shortcuts and recent activity. */
export default function Home() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const state = useMarketplace();

  const sharesForSale = selectSharesForSale(state);
  const estimatedValue = selectEstimatedValue(state);
  const openOffers = selectOpenOfferCount(state);

  const tiles = [
    {
      to: ROUTES.BROWSE,
      icon: <SearchIcon size={18} />,
      title: t('browseTile'),
      desc: t('browseDesc'),
    },
    {
      to: ROUTES.SELL,
      icon: <TagIcon size={18} />,
      title: t('sellTile'),
      desc: t('sellDesc'),
    },
    {
      to: ROUTES.OFFERS,
      icon: <MessagesIcon size={18} />,
      title: t('offersTile'),
      desc: t('offersDesc'),
      badge: openOffers > 0 ? openOffers : null,
    },
    {
      to: ROUTES.TRANSACTIONS,
      icon: <HistoryIcon size={18} />,
      title: t('historyTile'),
      desc: t('historyDesc'),
    },
  ];

  return (
    <Page>
      <div className="grid grid-cols-1 gap-4 min-[620px]:grid-cols-2 min-[1080px]:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <Card
          inverse
          padding="none"
          className="flex flex-col justify-between p-[26px]"
        >
          <div>
            <div className={HERO_LABEL}>{t('myShares')}</div>
            <div className="mt-1.5 font-mono text-4xl font-bold tracking-[-0.01em] tabular-nums min-[620px]:text-[44px]">
              {state.myShares}
            </div>
            <div className="mt-0.5 text-[13px] font-semibold text-white/65">
              {t('reservedLine', { count: state.reserved })}
            </div>
          </div>

          <div className="mt-[18px] flex items-baseline gap-2">
            <span className={HERO_LABEL}>{t('estValue')}</span>
            <span className="font-mono text-[19px] font-semibold tabular-nums text-mint">
              {formatCurrency(estimatedValue)}
            </span>
          </div>
        </Card>

        <StatCard
          label={t('lastPrice')}
          icon={<TrendUpIcon size={15} />}
          value={formatCurrency(marketStatsFixture.lastPrice)}
          trend={{
            label: `+${marketStatsFixture.changePct}%`,
            chart: <Sparkline points={marketStatsFixture.sparkline} />,
          }}
        />

        <StatCard
          label={t('activeListings')}
          icon={<TagIcon size={15} />}
          value={state.listings.length}
          meta={t('listingSharesLine', { count: sharesForSale })}
        />

        <StatCard
          label={t('vol30')}
          icon={<BarChartIcon size={15} />}
          value={marketStatsFixture.volume30dShares}
          meta={`${t('sharesTraded')} · ${marketStatsFixture.volume30dValue}`}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 min-[620px]:grid-cols-2 min-[1080px]:grid-cols-4">
        {tiles.map((tile) => (
          <Card
            key={tile.to}
            as="button"
            interactive
            padding="none"
            className="relative p-[22px]"
            onClick={() => navigate(tile.to)}
          >
            <span className="flex size-[38px] items-center justify-center rounded-control bg-brand-soft text-brand">
              {tile.icon}
            </span>

            {tile.badge != null && (
              <span className="absolute right-[18px] top-[18px]">
                <Badge tone="solid">{tile.badge}</Badge>
              </span>
            )}

            <span className="mt-3.5 block text-[15px] font-extrabold tracking-[-0.01em]">
              {tile.title}
            </span>
            <span className="mt-1 block text-[12.5px] font-semibold leading-[1.45] text-body">
              {tile.desc}
            </span>
          </Card>
        ))}
      </div>

      <ActivityFeed
        items={activityFixture}
        onViewAll={() => navigate(ROUTES.TRANSACTIONS)}
      />
    </Page>
  );
}
