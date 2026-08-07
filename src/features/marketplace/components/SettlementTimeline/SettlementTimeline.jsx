import { CheckIcon } from '@/assets/icons';
import { cx } from '@/utils/cx';

/**
 * Post-payment progress: escrow received, shares transferred, payout scheduled.
 * Steps light up as the store advances `doneStep`.
 *
 * @param steps  [{ label, desc }]
 * @param step   how many steps have completed (0–steps.length)
 */
export default function SettlementTimeline({ steps, step }) {
  return (
    <>
      {steps.map((item, index) => {
        const done = step >= index + 1;
        const isLast = index === steps.length - 1;

        return (
          <div key={item.label} className="flex gap-3.5">
            <div className="flex w-7 flex-none flex-col items-center">
              <span
                className={cx(
                  'z-10 flex size-7 items-center justify-center rounded-full text-white transition-colors duration-300',
                  done ? 'bg-success' : 'bg-canvas',
                )}
              >
                {done ? (
                  <CheckIcon size={14} strokeWidth={3} />
                ) : (
                  <span className="size-2 rounded-full bg-muted" />
                )}
              </span>

              {!isLast && (
                <span
                  className={cx(
                    'w-0.5 flex-1 min-h-[18px] transition-colors duration-300',
                    done ? 'bg-mint-line' : 'bg-line',
                  )}
                />
              )}
            </div>

            <div className="pb-5">
              <div className="text-sm font-extrabold">{item.label}</div>
              <div className="mt-0.5 text-[12.5px] font-semibold leading-[1.45] text-body">
                {item.desc}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
