export default function Toast({ children }) {
  if (!children) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-7 left-1/2 z-100 flex -translate-x-1/2 animate-pop items-center gap-2.5 rounded-xl bg-ink-900 px-[22px] py-[13px] text-[13.5px] font-bold text-white shadow-toast"
    >
      <span className="size-2 flex-none rounded-full bg-mint" />
      {children}
    </div>
  );
}
