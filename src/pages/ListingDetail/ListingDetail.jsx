import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShieldCheckIcon } from '@/assets/icons';
import Avatar from '@/components/common/Avatar/Avatar';
import Button from '@/components/common/Button/Button';
import Card, { SectionLabel } from '@/components/common/Card/Card';
import Input from '@/components/common/Input/Input';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import { Page } from '@/components/layout/PageWrapper/PageWrapper';
import { useI18n } from '@/context/I18nContext';
import { ROUTES } from '@/constants';
import { ENV } from '@/constants/env';
import { formatCurrency, percentDelta } from '@/utils/formatCurrency';
import { formatShortDate } from '@/utils/formatDate';
import { toNumber, validateOffer } from '@/utils/validators';
import { cx } from '@/utils/cx';
import { useListing } from '@/features/marketplace/hooks';
import {
  marketplaceActions,
  useMarketplaceStore,
} from '@/features/marketplace/marketplaceStore';
import { calcOrder } from '@/features/marketplace/marketplaceSelectors';
import { OrderSummary, EscrowNote } from '@/features/marketplace/components';

const FACT_LABEL = 'text-[11px] font-extrabold uppercase tracking-[0.05em] text-muted';
const FACT_VALUE = 'mt-1 font-mono text-2xl font-bold tabular-nums';

/** One listing: seller details, order summary, and buy or negotiate actions. */
export default function ListingDetail() {
  const { listingId } = useParams();
  const { t, lang } = useI18n();
  const navigate = useNavigate();
  const listing = useListing(listingId);
  const status = useMarketplaceStore((state) => state.status);

  const [offering, setOffering] = useState(false);
  const [offer, setOffer] = useState({ price: 0, qty: 0 });
  const [seededFor, setSeededFor] = useState(null);
  const [error, setError] = useState(null);

  // Seed the offer form from the listing: full quantity, 50 pesos under ask.
  // Adjusting during render rather than in an effect keeps the first paint
  // correct, and re-seeds only when a different listing is opened — a price
  // change elsewhere in the store must not overwrite what the buyer typed.
  if (listing && seededFor !== listing.id) {
    setSeededFor(listing.id);
    setOffer({ price: listing.price - 50, qty: listing.qty });
  }

  // On a deep link the store is still empty; wait for the bootstrap rather than
  // flashing "no longer available" at a listing that does exist.
  if (!listing && status !== 'ready') return null;

  if (!listing) {
    return (
      <Page>
        <PageHeader title={t('listing')} backTo={ROUTES.BROWSE} backLabel={t('back')} />
        <Card>
          <div className="px-6 py-12 text-center text-sm font-bold text-muted">
            {t('listingNotFound')}
          </div>
        </Card>
      </Page>
    );
  }

  const order = calcOrder(listing.qty, listing.price, ENV.COMMISSION_PCT);
  const offerTotal = toNumber(offer.price) * toNumber(offer.qty);
  const askTotal = listing.price * toNumber(offer.qty);
  const delta = percentDelta(offerTotal, askTotal);

  const deltaLine =
    delta === 0
      ? t('offerSameAsAsk')
      : delta < 0
        ? t('offerBelowAsk', { pct: Math.abs(delta) })
        : t('offerAboveAsk', { pct: delta });

  const buyAtAsk = () => {
    marketplaceActions.startPayment({
      seller: listing.seller,
      qty: listing.qty,
      price: listing.price,
      listingId: listing.id,
    });
    navigate(ROUTES.PAYMENT);
  };

  const sendOffer = () => {
    const problem = validateOffer({
      price: offer.price,
      qty: offer.qty,
      maxQty: listing.qty,
    });
    if (problem) {
      setError(t(problem));
      return;
    }
    setError(null);
    marketplaceActions.sendOffer(listing, offer);
    navigate(ROUTES.OFFERS);
  };

  const facts = [
    { label: t('qty'), value: listing.qty },
    { label: t('ask'), value: formatCurrency(listing.price) },
    { label: t('total'), value: formatCurrency(order.subtotal) },
  ];

  return (
    <Page>
      <PageHeader
        title={`${t('listing')} ${listing.id}`}
        backTo={ROUTES.BROWSE}
        backLabel={t('back')}
      />

      <div className="grid grid-cols-1 items-start gap-4 min-[900px]:grid-cols-[1.5fr_1fr]">
        <Card padding="roomy">
          <div className="flex items-center gap-3.5">
            <Avatar
              initials={listing.initials}
              paletteIndex={listing.av}
              size="xl"
              name={listing.seller}
            />
            <div>
              <div className="text-base font-extrabold">{listing.seller}</div>
              <div className="mt-0.5 flex items-center gap-1.5 text-xs font-bold text-success">
                <ShieldCheckIcon size={13} />
                {t('verified')}
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3.5 min-[520px]:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-field bg-canvas p-4">
                <div className={FACT_LABEL}>{fact.label}</div>
                <div className={FACT_VALUE}>{fact.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-[18px] text-[12.5px] font-semibold text-body">
            <span>
              {t('listedOn')} {formatShortDate(listing.listedAt, lang)}
            </span>
            <span>·</span>
            <span>
              {t('expiresOn')}{' '}
              {listing.expiresAt ? formatShortDate(listing.expiresAt, lang) : '—'}
            </span>
            <span>·</span>
            <span
              className={cx('font-extrabold', listing.allowOffers ? 'text-success' : 'text-body')}
            >
              {listing.allowOffers ? t('offersOk') : t('fixedPrice')}
            </span>
          </div>

          <EscrowNote>{t('escrowNote')}</EscrowNote>
        </Card>

        <Card>
          {offering ? (
            <div className="[&>*+*]:mt-3.5">
              <SectionLabel>{t('makeOffer')}</SectionLabel>

              <Input
                label={t('offerPrice')}
                type="number"
                prefix="MX$"
                value={offer.price}
                onChange={(e) => setOffer((o) => ({ ...o, price: e.target.value }))}
              />

              <Input
                label={t('offerQty')}
                type="number"
                suffix={`${t('max')} ${listing.qty}`}
                value={offer.qty}
                onChange={(e) => setOffer((o) => ({ ...o, qty: e.target.value }))}
                error={error}
              />

              <div>
                <div className="flex justify-between text-[13px] font-bold text-body">
                  <span>{t('offerTotal')}</span>
                  <span className="font-mono tabular-nums text-ink">
                    {formatCurrency(offerTotal)}
                  </span>
                </div>
                <div
                  className={cx(
                    'mt-1.5 text-xs font-bold',
                    delta < 0 ? 'text-success' : 'text-body',
                  )}
                >
                  {deltaLine}
                </div>
              </div>

              <Button block size="lg" onClick={sendOffer}>
                {t('sendOffer')}
              </Button>
              <Button block variant="ghost" onClick={() => setOffering(false)}>
                {t('cancel')}
              </Button>
            </div>
          ) : (
            <>
              <SectionLabel>{t('orderSummary')}</SectionLabel>

              <OrderSummary
                rows={[
                  {
                    label: `${listing.qty} × ${formatCurrency(listing.price)}`,
                    value: formatCurrency(order.subtotal),
                  },
                  {
                    label: `${t('fee')} (${order.feePct}%)`,
                    value: formatCurrency(order.fee),
                  },
                ]}
                total={{ label: t('totalDue'), value: formatCurrency(order.total) }}
              />

              <div className="mt-5 [&>button+button]:mt-2.5">
                <Button block size="lg" onClick={buyAtAsk}>
                  {t('buyAtAsk')}
                </Button>
                {listing.allowOffers && (
                  <Button block size="lg" variant="secondary" onClick={() => setOffering(true)}>
                    {t('makeOffer')}
                  </Button>
                )}
              </div>

              {!listing.allowOffers && (
                <div className="mt-3.5 text-center text-xs font-bold text-muted">
                  {t('fixedOnly')}
                </div>
              )}
            </>
          )}
        </Card>
      </div>
    </Page>
  );
}
