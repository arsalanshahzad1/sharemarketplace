import { avatarColors } from "@/constants";
import { cx } from "@/utils/cx";

const SIZES = {
  sm: "size-[26px] text-[11px]",
  md: "size-8 text-xs",
  lg: "size-[38px] text-[13px]",
  xl: "size-12 text-base",
};

export default function Avatar({
  initials,
  paletteIndex = 0,
  size = "md",
  self = false,
  name,
  className,
}) {
  const { bg, fg } = avatarColors(paletteIndex);

  return (
    <span
      className={cx(
        "flex flex-none items-center justify-center rounded-full font-extrabold uppercase",
        SIZES[size],
        self && "bg-gradient-to-br from-ink-900 to-ink-800 text-white",
        className,
      )}
      style={self ? undefined : { background: bg, color: fg }}
      title={name}
      aria-hidden={name ? undefined : "true"}
    >
      {initials}
    </span>
  );
}
