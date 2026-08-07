import { useId } from "react";
import { cx } from "@/utils/cx";

const LABEL = "mb-1.5 block text-xs font-extrabold text-body";

const CONTROL =
  "flex items-center rounded-control border bg-surface-alt px-3.5 transition-colors";

const FIELD_SIZES = {
  sm: "py-[11px] text-[15px]",
  md: "py-3 text-base",
  lg: "py-[13px] text-[17px]",
};

const AFFIX = "flex-none whitespace-nowrap text-xs font-extrabold text-muted";

export default function Input({
  label,
  prefix,
  suffix,
  error,
  size = "md",
  id,
  className,
  ...rest
}) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cx("block", className)}>
      {label && (
        <label className={LABEL} htmlFor={inputId}>
          {label}
        </label>
      )}

      <div
        className={cx(
          CONTROL,
          error
            ? "border-brand"
            : "border-line focus-within:border-brand-border",
        )}
      >
        {prefix && (
          <span className={cx(AFFIX, "mr-2 text-[13px]")}>{prefix}</span>
        )}
        <input
          id={inputId}
          className={cx(
            "min-w-0 flex-1 border-none bg-transparent font-mono font-semibold text-ink tabular-nums outline-none",
            FIELD_SIZES[size],
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />
        {suffix && <span className={cx(AFFIX, "ml-2")}>{suffix}</span>}
      </div>

      {error && (
        <div
          className="mt-1.5 text-xs font-bold text-brand"
          id={`${inputId}-error`}
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
}

export function Select({ label, id, children, className, ...rest }) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <div className={cx("block", className)}>
      {label && (
        <label className={LABEL} htmlFor={selectId}>
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cx(
          "w-full cursor-pointer rounded-control border border-line bg-surface-alt px-3.5 py-[13px] text-sm font-bold text-ink outline-none",
        )}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}
