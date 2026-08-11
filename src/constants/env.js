const bool = (value, fallback) =>
  value === undefined ? fallback : String(value).toLowerCase() === "true";

const num = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  SOCKET_URL: import.meta.env.VITE_SOCKET_URL ?? "http://localhost:5100",
  AUTH_TOKEN: import.meta.env.VITE_AUTH_TOKEN ?? "",
  CONEKTA_PUBLIC_KEY: import.meta.env.VITE_CONEKTA_PUBLIC_KEY ?? "",
  API_TIMEOUT: num(import.meta.env.VITE_API_TIMEOUT, 15000),
  USE_MOCK_API: bool(import.meta.env.VITE_USE_MOCK_API, true),
  COMMISSION_PCT: num(import.meta.env.VITE_COMMISSION_PCT, 0),
  PAY_WINDOW_MINS: num(import.meta.env.VITE_PAY_WINDOW_MINS, 30),
  IS_DEV: import.meta.env.DEV,
};
