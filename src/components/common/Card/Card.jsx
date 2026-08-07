import { cx } from "@/utils/cx";

const PADDING = {
  default: "p-6",
  tight: "p-5",
  roomy: "p-[26px]",
  flush: "p-0 overflow-hidden",
  none: "",
};

export default function Card({
  padding = "default",
  inverse = false,
  dashed = false,
  interactive = false,
  as: Tag = "div",
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cx(
        "border",
        inverse
          ? "rounded-panel border-none bg-gradient-to-br from-ink-900 to-ink-800 text-white"
          : cx(
              "rounded-card bg-surface",
              dashed ? "border-dashed border-line-strong" : "border-line",
            ),
        PADDING[padding],
        interactive &&
          "w-full cursor-pointer text-left font-[inherit] text-[inherit] transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-tile",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionLabel({ className, children }) {
  return (
    <div
      className={cx(
        "text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-muted",
        className,
      )}
    >
      {children}
    </div>
  );
}
