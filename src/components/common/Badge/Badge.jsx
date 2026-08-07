import { cx } from "@/utils/cx";

const TONES = {
  red: "bg-brand-soft text-brand",
  green: "bg-success-soft text-success",
  amber: "bg-warn-soft text-warn",
  neutral: "bg-canvas text-body",
  muted: "bg-canvas text-muted",
  solid: "bg-brand text-white",
};

export default function Badge({
  tone = "neutral",
  uppercase = false,
  className,
  children,
}) {
  return (
    <span
      className={cx(
        "inline-block whitespace-nowrap rounded-full text-[11.5px] font-extrabold",
        uppercase
          ? "px-[13px] py-1 uppercase tracking-[0.03em]"
          : "px-[11px] py-[3px]",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
