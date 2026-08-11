import { useNavigate } from "react-router-dom";
import Avatar from "@/components/common/Avatar/Avatar";
import Badge from "@/components/common/Badge/Badge";
import Button from "@/components/common/Button/Button";
import { useI18n } from "@/context/I18nContext";
import { listingPath } from "@/constants";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatShortDate } from "@/utils/formatDate";
import { cx } from "@/utils/cx";
import { marketplaceActions } from "../../marketplaceStore";

const ROW =
  "grid min-w-[780px] grid-cols-[2fr_1fr_1.1fr_1.1fr_1.3fr_0.9fr] gap-3 px-[22px]";
const NUM = "text-right font-mono text-sm font-semibold tabular-nums";

/** Marketplace listings, one row per live listing. */
export default function ListingTable({ listings }) {
  const { t, lang } = useI18n();
  const navigate = useNavigate();

  const cancelListing = (listingId) => {
    marketplaceActions.cancelListing(listingId);
  };

  return (
    <>
      <div className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="overflow-x-auto">
          <div
            className={cx(
              ROW,
              "border-b border-line py-[13px] text-[11px] font-extrabold uppercase tracking-[0.05em] text-muted",
            )}
          >
            <div>{t("seller")}</div>
            <div className="text-right">{t("qty")}</div>
            <div className="text-right">{t("ask")}</div>
            <div className="text-right">{t("total")}</div>
            <div>{t("type")}</div>
            <div />
          </div>

          {listings.length === 0 && (
            <div className="px-[22px] py-10 text-center text-[13.5px] font-bold text-muted">
              {t("emptyListings")}
            </div>
          )}

          {listings.map((listing) => (
            <div
              key={listing.id}
              className={cx(
                ROW,
                "items-center border-b border-canvas py-[15px] last:border-b-0 hover:bg-surface-alt",
              )}
            >
              <div className="flex min-w-0 items-center gap-[11px]">
                <Avatar
                  initials={listing.initials}
                  paletteIndex={listing.av}
                  name={listing.seller}
                />
                <div>
                  <div className="text-[13.5px] font-bold">
                    {listing.seller}
                  </div>
                  <div className="text-[11.5px] font-semibold text-muted">
                    {listing.id} ·{" "}
                    {t("expiresMeta", {
                      date: listing.expiresAt
                        ? formatShortDate(listing.expiresAt, lang)
                        : "—",
                    })}
                  </div>
                </div>
              </div>

              <div className={NUM}>{listing.qty}</div>
              <div className={cx(NUM, "font-bold")}>
                {formatCurrency(listing.price)}
              </div>
              <div className={cx(NUM, "text-body")}>
                {formatCurrency(listing.qty * listing.price)}
              </div>

              <div>
                <Badge tone={listing.allowOffers ? "green" : "neutral"}>
                  {listing.allowOffers ? t("offersOk") : t("fixedPrice")}
                </Badge>
              </div>

              <div className="text-right">
                {listing.mine ? (
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-xs font-extrabold text-muted">
                      {t("yourListing")}
                    </span>
                    {listing.status === "payment_pending" ? (
                      <span className="text-xs font-extrabold text-brand">
                        {t("awaitingPayment")}
                      </span>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => cancelListing(listing.id)}
                      >
                        {t("cancelListing")}
                      </Button>
                    )}
                  </div>
                ) : (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => navigate(listingPath(listing.id))}
                  >
                    {t("view")}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 text-xs font-semibold text-muted">
        {t("reservedNote")}
      </div>
    </>
  );
}
