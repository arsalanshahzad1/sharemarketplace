import { CURRENCY_LOCALE, CURRENCY_PREFIX } from '@/constants';

/**
 * Formats a peso amount the way the registry displays it: prefixed, grouped,
 * and rounded to whole pesos. `formatCurrency(1150)` -> "MX$1,150".
 */
export const formatCurrency = (amount) =>
  CURRENCY_PREFIX + Math.round(Number(amount) || 0).toLocaleString(CURRENCY_LOCALE);

/** Same as `formatCurrency`, with an explicit +/- sign. */
export const formatSigned = (amount, direction) =>
  (direction === 'in' ? '+' : '−') + formatCurrency(amount);

/** "MX$1,150 × 15 = MX$17,250" */
export const formatLineTotal = (price, qty) =>
  `${formatCurrency(price)} × ${qty} = ${formatCurrency(price * qty)}`;

/** Percentage difference of `value` against `base`, rounded to whole percent. */
export const percentDelta = (value, base) =>
  base > 0 ? Math.round(((value - base) / base) * 100) : 0;
