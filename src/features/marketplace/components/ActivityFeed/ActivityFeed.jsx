import { useI18n } from "@/context/I18nContext";
import { cx } from "@/utils/cx";

export default function ActivityFeed({ items, onViewAll }) {
  const { t, tm } = useI18n();

  return (
    <div className="mt-4 rounded-card border border-line bg-surface px-[22px] py-2">
      <div className="flex items-center justify-between pb-1.5 pt-3.5">
        <div className="text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-muted">
          {t("activity")}
        </div>
        <button
          type="button"
          onClick={onViewAll}
          className="cursor-pointer border-none bg-transparent p-0 text-[12.5px] font-extrabold text-brand"
        >
          {t("viewAll")}
        </button>
      </div>

      {items.length === 0 && (
        <div className="border-t border-canvas py-8 text-center text-[13.5px] font-bold text-muted">
          No marketplace activity yet.
        </div>
      )}

      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-wrap items-center gap-3.5 border-t border-canvas py-[13px]"
        >
          <span
            className={cx(
              "flex size-[30px] flex-none items-center justify-center rounded-chip text-[13px] font-extrabold",
              item.tone === "red"
                ? "bg-brand-soft text-brand"
                : "bg-success-soft text-success",
            )}
          >
            {item.icon}
          </span>

          <div className="order-3 basis-full text-[13.5px] font-semibold sm:order-none sm:flex-1 sm:basis-auto">
            {tm(item.message)}
          </div>

          <div
            className={cx(
              "whitespace-nowrap font-mono text-[13.5px] font-semibold tabular-nums",
              item.positive && "text-success",
            )}
          >
            {item.amount}
            {item.amountKey ? ` ${t(item.amountKey)}` : ""}
          </div>

          <div className="w-[70px] flex-none text-right text-xs font-semibold text-muted">
            {item.time}
          </div>
        </div>
      ))}
    </div>
  );
}
