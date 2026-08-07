import { cx } from '@/utils/cx';

/** Radio group of payment rails. */
export default function PaymentMethodList({ methods, selected, onSelect }) {
  return (
    <div className="mt-4 flex flex-col gap-2.5" role="radiogroup">
      {methods.map((method) => {
        const isSelected = selected === method.key;

        return (
          <button
            key={method.key}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(method.key)}
            className={cx(
              'flex w-full cursor-pointer items-center gap-3.5 rounded-field border-[1.5px] p-4 text-left font-[inherit] text-[inherit] transition-colors',
              isSelected ? 'border-brand bg-brand-soft' : 'border-line bg-surface',
            )}
          >
            <span
              className={cx(
                'flex size-[38px] flex-none items-center justify-center rounded-control text-[11px] font-extrabold',
                isSelected ? 'bg-brand text-white' : 'bg-canvas text-body',
              )}
            >
              {method.icon}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-sm font-extrabold">{method.name}</span>
              <span className="mt-px block text-xs font-semibold text-body">
                {method.desc}
              </span>
            </span>

            <span
              className={cx(
                'flex size-5 flex-none items-center justify-center rounded-full border-2',
                isSelected ? 'border-brand' : 'border-line-strong',
              )}
            >
              {isSelected && <span className="size-2.5 rounded-full bg-brand" />}
            </span>
          </button>
        );
      })}
    </div>
  );
}
