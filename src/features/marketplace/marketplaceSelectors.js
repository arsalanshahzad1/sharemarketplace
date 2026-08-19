import { THREAD_ROLE, THREAD_STATUS, TX_STATUS } from '@/constants';
import { ENV } from '@/constants/env';

/** Pure derivations over marketplace state. Components read these, not raw state. */

export const selectListings = (state) => state.listings;

export const selectLiveListings = (state) =>
  state.listings.filter(
    (listing) =>
      (listing.status === 'active' && Number(listing.availableQty ?? listing.qty) > 0) ||
      listing.status === 'payment_pending',
  );

export const selectListingById = (id) => (state) =>
  state.listings.find((listing) => listing.id === id) ?? null;

export const selectMyListings = (state) =>
  state.listings.filter((listing) => listing.mine);

export const selectSharesForSale = (state) =>
  selectLiveListings(state).reduce(
    (total, listing) =>
      listing.status === 'active' ? total + Number(listing.availableQty ?? listing.qty) : total,
    0,
  );

export const selectAvailableShares = (state) =>
  Math.max(0, state.myShares - state.reserved);

export const selectLastTradePrice = (state) =>
  Number(state.lastTradePrice || 0);

export const selectEstimatedValue = (state) =>
  Number(state.myShares || 0) * Number(state.currentSharePrice || 0);

export const selectVolume30d = (state) => {
  const shares = Number(state.volume30dShares || 0);
  return {
    shares,
    value: state.volume30dValue ?? shares * Number(state.currentSharePrice || 0),
  };
};

export const selectRecentActivity = (state) => {
  const notifications = state.notifications.slice(0, 5).map((item) => ({
    id: item.id,
    icon: "!",
    tone: item.unread ? "red" : "green",
    message: item.message,
    amount: "",
    time: item.time,
  }));

  if (notifications.length) return notifications;

  return state.transactions.slice(0, 5).map((tx) => ({
    id: tx.id,
    icon: tx.dir === "buy" ? "+" : "$",
    tone: tx.dir === "buy" ? "green" : "red",
    message:
      tx.dir === "buy"
        ? `Purchased ${tx.qty} shares from ${tx.counterparty}`
        : `Sold ${tx.qty} shares to ${tx.counterparty}`,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "MXN",
    }).format(Number(tx.qty || 0) * Number(tx.price || 0)),
    positive: tx.dir === "sell",
    time: tx.date,
  }));
};

/** Threads that need the shareholder to do something. */
export const selectActionableThreads = (state) =>
  state.threads.filter(
    (thread) =>
      thread.status === THREAD_STATUS.YOUR_TURN ||
      thread.status === THREAD_STATUS.AGREED,
  );

export const selectOpenOfferCount = (state) => selectActionableThreads(state).length;

export const selectHasUnread = (state) =>
  state.notifications.some((notification) => notification.unread);

export const selectPendingPayouts = (state) =>
  state.transactions.filter((tx) => tx.status === TX_STATUS.PENDING);

/** Most recent price named in a thread — the number currently on the table. */
export const threadPrice = (thread) =>
  [...thread.events].reverse().find((event) => event.price)?.price ?? 0;

/** A buyer-side thread that has been agreed is ready for checkout. */
export const isPayable = (thread) =>
  thread.status === THREAD_STATUS.AGREED && thread.role === THREAD_ROLE.BUYER;

export const isActionable = (thread) => thread.status === THREAD_STATUS.YOUR_TURN;

/** Chip label + tone for each negotiation state. */
export const THREAD_STATUS_META = {
  [THREAD_STATUS.AWAITING]: { labelKey: 'stAwaiting', tone: 'neutral' },
  [THREAD_STATUS.YOUR_TURN]: { labelKey: 'stYourTurn', tone: 'red' },
  [THREAD_STATUS.AGREED]: { labelKey: 'stAgreed', tone: 'green' },
  [THREAD_STATUS.REJECTED]: { labelKey: 'stRejected', tone: 'muted' },
  [THREAD_STATUS.AWAITING_PAY]: { labelKey: 'stAwaitingPay', tone: 'amber' },
  [THREAD_STATUS.SETTLED]: { labelKey: 'stSettled', tone: 'green' },
};

/** Label key for each negotiation event type. */
export const EVENT_LABEL_KEYS = {
  offer: 'evOffer',
  counter: 'evCounter',
  accept: 'evAccept',
  reject: 'evReject',
  paid: 'evPaid',
};

/**
 * Buyer-side order maths. The commission is charged on top of the share value,
 * so the buyer's total exceeds the seller's proceeds by the fee.
 */
export const calcOrder = (qty, price, feePct = ENV.COMMISSION_PCT, options = {}) => {
  const subtotal = qty * price;
  const fee = (subtotal * feePct) / 100;
  const totalBeforeConekta = subtotal + fee;
  const conektaFeePct = 3;
  const conektaFee = options.includeConektaFee
    ? Number(((totalBeforeConekta * conektaFeePct) / 100).toFixed(2))
    : 0;
  const total = Number((totalBeforeConekta + conektaFee).toFixed(2));

  return {
    subtotal,
    fee,
    totalBeforeConekta,
    conektaFee,
    total,
    feePct,
    conektaFeePct,
  };
};
