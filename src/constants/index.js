export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  BROWSE: "/marketplace",
  LISTING: "/marketplace/:listingId",
  SELL: "/sell",
  OFFERS: "/offers",
  PAYMENT: "/payment",
  PAYMENT_SUCCESS: "/payment/success",
  TRANSACTIONS: "/transactions",
  LOGIN: "/login",
  AUTH_CONTINUE: "/auth/continue",
  NOT_FOUND: "*",
};

export const listingPath = (listingId) => `/marketplace/${listingId}`;

export const LANGUAGES = ["en", "es"];
export const DEFAULT_LANGUAGE = "es";

export const CURRENCY_PREFIX = "MX$";
export const CURRENCY_LOCALE = "en-US";

export const LAST_TRADE_PRICE = 1150;

export const AVATAR_PALETTE = [
  { bg: "#FDECEF", fg: "#E4002B" },
  { bg: "#E7F6EF", fg: "#0E9F6E" },
  { bg: "#EEF0FF", fg: "#4F5AED" },
  { bg: "#FFF4E5", fg: "#C77700" },
];

export const avatarColors = (index = 0) =>
  AVATAR_PALETTE[index % AVATAR_PALETTE.length];

export const THREAD_STATUS = {
  AWAITING: "awaiting",
  YOUR_TURN: "yourTurn",
  AGREED: "agreed",
  REJECTED: "rejected",
  AWAITING_PAY: "awaitingPay",
  SETTLED: "settled",
};

export const THREAD_ROLE = { BUYER: "buyer", SELLER: "seller" };

export const EVENT_TYPE = {
  OFFER: "offer",
  COUNTER: "counter",
  ACCEPT: "accept",
  REJECT: "reject",
  PAID: "paid",
};

export const TX_DIRECTION = { BUY: "buy", SELL: "sell" };
export const TX_STATUS = { DONE: "done", PENDING: "pending" };

export const PAY_PHASE = {
  IDLE: "idle",
  PROCESSING: "processing",
  DONE: "done",
};

export const EXPIRY_OPTIONS = [
  { value: "7", labelKey: "days7" },
  { value: "14", labelKey: "days14" },
  { value: "30", labelKey: "days30" },
  { value: "0", labelKey: "noExpiry" },
];

export const SIMULATION_DELAYS = {
  SELLER_COUNTER: 3000,
  COUNTER_REPLY: 3500,
  SETTLE: 4000,
  PROCESS_PAYMENT: 1600,
  TRANSFER_STEP: 1200,
  TOAST_LIFETIME: 3200,
};
