import { LockIcon, ShieldIcon } from "@/assets/icons";
import { cx } from "@/utils/cx";

const VALUE = "whitespace-nowrap font-mono tabular-nums";

/**
 * @param rows   [{ label, value, text }] — `text` renders as prose, not a figure
 * @param total  { label, value }
 */
export default function OrderSummary({ rows, total }) {
  return (
    <div className="mt-4 flex flex-col gap-2.5 text-[13.5px] font-semibold leading-relaxed">
      {rows.map((row) => (
        <div key={row.label} className="flex justify-between gap-3">
          <span className="whitespace-nowrap text-body">{row.label}</span>
          <span className={row.text ? "text-right font-extrabold" : VALUE}>
            {row.value}
          </span>
        </div>
      ))}

      {total && (
        <div className="flex justify-between gap-3 border-t border-line pt-3 text-[15px] font-extrabold">
          <span className="whitespace-nowrap">{total.label}</span>
          <span className={VALUE}>{total.value}</span>
        </div>
      )}
    </div>
  );
}

const NOTE =
  "mt-[18px] flex items-start gap-2 rounded-xl px-4 py-[13px] text-[12.5px] font-semibold [&>svg]:mt-px [&>svg]:flex-none";

/** Escrow explainer shown under the listing detail summary. */
export function EscrowNote({ children }) {
  return (
    <div className={cx(NOTE, "bg-brand-soft text-brand-dark")}>
      <ShieldIcon size={15} />
      {children}
    </div>
  );
}

/** Quieter escrow note used at checkout. */
export function EscrowHint({ children }) {
  return (
    <div className={cx(NOTE, "mt-4 bg-canvas px-3.5 py-3 text-xs text-body")}>
      <LockIcon size={14} />
      {children}
    </div>
  );
}
