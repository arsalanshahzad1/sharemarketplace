/**
 * Single market statistic: label, icon chip, value and a footnote or trend row.
 */
export default function StatCard({ label, icon, value, meta, trend, children }) {
  const trendTone = trend?.tone === "down" ? "text-brand" : "text-success";
  const trendBg = trend?.tone === "down" ? "bg-brand-soft" : "bg-success-soft";
  const iconTone = trend ? trendTone : "text-brand";
  const iconBg = trend ? trendBg : "bg-brand-soft";

  return (
    <div className="flex flex-col justify-between gap-[18px] rounded-card border border-line bg-surface p-5">
      <div className="flex items-center justify-between gap-2.5">
        <div className="text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-muted">
          {label}
        </div>
        {icon && (
          <span className={`flex size-[30px] flex-none items-center justify-center rounded-chip ${iconBg} ${iconTone}`}>
            {icon}
          </span>
        )}
      </div>

      <div>
        <div className="font-mono text-[26px] font-bold tracking-[-0.01em] tabular-nums">
          {value}
        </div>

        {trend ? (
          <div className={`mt-1.5 flex items-center gap-2 ${trendTone}`}>
            <span className={`rounded-full px-[9px] py-0.5 text-xs font-extrabold ${trendBg} ${trendTone}`}>
              {trend.label}
            </span>
            {trend.icon || trend.chart}
          </div>
        ) : (
          meta && (
            <div className="mt-1.5 text-[12.5px] font-semibold text-body">{meta}</div>
          )
        )}

        {children}
      </div>
    </div>
  );
}
