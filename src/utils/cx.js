/**
 * Joins class names, dropping anything falsy. Lets components write
 * `cx(BASE, active && 'bg-brand', className)` without stray spaces.
 */
export const cx = (...parts) => parts.filter(Boolean).join(' ');

export default cx;
