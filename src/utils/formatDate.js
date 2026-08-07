const LOCALES = { en: "en-US", es: "es-MX" };

/**
 * `new Date('2026-08-20')` is parsed as UTC midnight, which renders as the
 * previous day west of Greenwich. Date-only strings are read as local instead.
 */
const toDate = (value) => {
  if (value instanceof Date) return value;
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value));
  if (dateOnly) {
    const [, y, m, d] = dateOnly;
    return new Date(Number(y), Number(m) - 1, Number(d));
  }
  return new Date(value);
};

/** "Aug 5" / "5 ago" */
export const formatShortDate = (value, lang = "en") =>
  toDate(value).toLocaleDateString(LOCALES[lang] ?? LOCALES.en, {
    month: "short",
    day: "numeric",
  });

/** "Aug 5, 2026" / "5 ago 2026" */
export const formatLongDate = (value, lang = "en") =>
  toDate(value).toLocaleDateString(LOCALES[lang] ?? LOCALES.en, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

/** Adds whole days to a date without mutating the input. */
export const addDays = (value, days) => {
  const next = new Date(toDate(value).getTime());
  next.setDate(next.getDate() + Number(days));
  return next;
};

/** Seconds remaining until `deadline`, floored at zero. */
export const secondsUntil = (deadline) =>
  Math.max(0, Math.floor((deadline - Date.now()) / 1000));

/** Seconds as "MM:SS". */
export const formatCountdown = (totalSeconds) => {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const mm = String(Math.floor(safe / 60)).padStart(2, "0");
  const ss = String(safe % 60).padStart(2, "0");
  return `${mm}:${ss}`;
};
