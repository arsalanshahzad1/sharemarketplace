const bool = (value, fallback) =>
  value === undefined ? fallback : String(value).toLowerCase() === "true";

const num = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  API_TIMEOUT: num(import.meta.env.VITE_API_TIMEOUT, 15000),
  USE_MOCK_API: bool(import.meta.env.VITE_USE_MOCK_API, true),
  COMMISSION_PCT: num(import.meta.env.VITE_COMMISSION_PCT, 1.5),
  PAY_WINDOW_MINS: num(import.meta.env.VITE_PAY_WINDOW_MINS, 30),
  IS_DEV: import.meta.env.DEV,
};
