import { cx } from "@/utils/cx";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-control border font-sans font-extrabold cursor-pointer transition-colors disabled:cursor-not-allowed";

const VARIANTS = {
  primary:
    "border-transparent bg-brand text-white shadow-brand hover:bg-brand-dark disabled:bg-line-strong disabled:shadow-none",
  secondary:
    "border-line bg-surface text-ink hover:border-brand-border hover:bg-brand-soft hover:text-brand",
  neutral: "border-line bg-surface text-body hover:bg-canvas",
  success: "border-transparent bg-success text-white hover:bg-success-dark",
  ghost: "border-transparent bg-transparent text-body hover:text-ink",
  icon: "size-[34px] rounded-chip border-line bg-surface p-0 text-body hover:bg-brand-soft",
};

const SIZES = {
  sm: "px-[15px] py-[7px] text-[12.5px]",
  md: "px-5 py-[11px] text-[13px]",
  lg: "px-[18px] py-[13px] text-sm",
};

export default function Button({
  variant = "primary",
  size = "md",
  block = false,
  type = "button",
  className,
  children,
  ...rest
}) {
  return (
    <button
      type={type}
      className={cx(
        BASE,
        VARIANTS[variant],
        variant !== "icon" && SIZES[size],
        block && "w-full",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
