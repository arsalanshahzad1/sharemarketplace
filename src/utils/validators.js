export const toNumber = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

export const isPositiveNumber = (value) => toNumber(value) > 0;

export const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value ?? "").trim());

/** A quantity must be a whole number in [1, available]. */
export const validateQuantity = (value, available) => {
  const qty = toNumber(value);
  if (qty <= 0) return "errQtyPositive";
  if (!Number.isInteger(qty)) return "errQtyWhole";
  if (available != null && qty > available) return "errQtyExceeds";
  return null;
};

/** A price per share must be a positive amount. */
export const validatePrice = (value) =>
  isPositiveNumber(value) ? null : "errPricePositive";

/** Both fields must pass before an offer or listing can be submitted. */
export const validateOffer = ({ price, qty, maxQty }) =>
  validatePrice(price) ?? validateQuantity(qty, maxQty);

export const validateListing = ({ price, qty, available }) =>
  validatePrice(price) ?? validateQuantity(qty, available);

/** Clamps a number into an inclusive range. */
export const clamp = (value, min, max) =>
  Math.min(Math.max(toNumber(value), min), max);
