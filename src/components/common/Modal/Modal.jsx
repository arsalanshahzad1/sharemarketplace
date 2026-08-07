import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export default function Modal({ open, onClose, title, footer, children }) {
  const dialogRef = useRef(null);
  useOnClickOutside(dialogRef, () => onClose?.(), open);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-200 flex animate-fade-up items-center justify-center bg-ink/45 p-6 backdrop-blur-[2px]">
      <div
        ref={dialogRef}
        className="max-h-full w-full max-w-[480px] animate-pop overflow-y-auto rounded-panel bg-surface p-[26px] shadow-pop"
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
      >
        {(title || onClose) && (
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="text-[17px] font-extrabold tracking-[-0.01em]">
              {title}
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="size-[30px] flex-none cursor-pointer rounded-chip border-none bg-canvas text-base leading-none text-body hover:bg-brand-soft hover:text-brand"
              >
                ×
              </button>
            )}
          </div>
        )}
        {children}
        {footer && <div className="mt-[22px] flex gap-2.5">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
