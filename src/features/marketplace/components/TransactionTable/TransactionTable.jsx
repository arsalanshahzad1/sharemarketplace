import Badge from '@/components/common/Badge/Badge';
import { useI18n } from '@/context/I18nContext';
import { TX_DIRECTION, TX_STATUS } from '@/constants';
import { formatCurrency, formatSigned } from '@/utils/formatCurrency';
import { formatLongDate } from '@/utils/formatDate';
import { cx } from '@/utils/cx';

const ROW = 'grid min-w-[780px] grid-cols-[1.2fr_1.6fr_0.8fr_1fr_1.1fr_1.2fr] gap-3 px-[22px]';
const NUM = 'text-right font-mono text-sm font-semibold tabular-nums';

/** Settled and pending ledger entries. */
export default function TransactionTable({ transactions }) {
  const { t, lang } = useI18n();

  return (
    <>
      <div className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="overflow-x-auto">
          <div
            className={cx(
              ROW,
              'border-b border-line py-[13px] text-[11px] font-extrabold uppercase tracking-[0.05em] text-muted',
            )}
          >
            <div>{t('txId')}</div>
            <div>{t('counterparty')}</div>
            <div className="text-right">{t('qty')}</div>
            <div className="text-right">{t('price')}</div>
            <div className="text-right">{t('total')}</div>
            <div className="text-right">{t('status')}</div>
          </div>

          {transactions.length === 0 && (
            <div className="px-[22px] py-10 text-center text-[13.5px] font-bold text-muted">
              {t('emptyTxs')}
            </div>
          )}

          {transactions.map((tx) => {
            const isBuy = tx.dir === TX_DIRECTION.BUY;
            const settled = tx.status === TX_STATUS.DONE;

            return (
              <div
                key={tx.id}
                className={cx(ROW, 'items-center border-b border-canvas py-[15px] last:border-b-0 hover:bg-surface-alt')}
              >
                <div className="font-mono text-[13px] font-semibold text-body">{tx.id}</div>

                <div>
                  <div className="text-[13.5px] font-bold">
                    {t(isBuy ? 'bought' : 'sold')} {tx.counterparty}
                  </div>
                  <div className="text-[11.5px] font-semibold text-muted">
                    {formatLongDate(tx.date, lang)}
                  </div>
                </div>

                <div className={NUM}>{tx.qty}</div>
                <div className={NUM}>{formatCurrency(tx.price)}</div>
                <div className={cx(NUM, 'font-bold', !isBuy && 'text-success')}>
                  {formatSigned(tx.qty * tx.price, isBuy ? 'out' : 'in')}
                </div>

                <div className="text-right">
                  <Badge tone={settled ? 'green' : 'amber'}>
                    {t(settled ? 'completed' : 'payoutPending')}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 text-xs font-semibold text-muted">{t('registryNote')}</div>
    </>
  );
}
