import { createScheduler, createStore, createStoreHook } from "@/store/store";
import {
  EVENT_TYPE,
  PAY_PHASE,
  SIMULATION_DELAYS,
  THREAD_ROLE,
  THREAD_STATUS,
  TX_DIRECTION,
  TX_STATUS,
} from "@/constants";
import { ENV } from "@/constants/env";
import { formatCurrency } from "@/utils/formatCurrency";
import { addDays } from "@/utils/formatDate";
import { marketplaceErrorMessage } from "@/utils/marketplaceErrors";
import { toNumber } from "@/utils/validators";
import marketplaceApi from "./marketplaceApi";
import {
  listingsFixture,
  notificationsFixture,
  portfolioFixture,
  threadsFixture,
  transactionsFixture,
} from "./marketplaceFixtures";

const initialState = {
  status: "idle", // idle | loading | ready | error
  error: null,

  listings: [],
  threads: [],
  transactions: [],
  notifications: [],

  myShares: 0,
  reserved: 0,

  /** The agreed trade being paid for, or null outside checkout. */
  deal: null,
  payMethod: null,
  payPhase: PAY_PHASE.IDLE,
  payDeadline: null,
  /** How far the post-payment settlement timeline has advanced (0–3). */
  doneStep: 0,

  toast: null,
};

export const marketplaceStore = createStore(initialState);
export const useMarketplaceStore = createStoreHook(marketplaceStore);

const { getState, setState } = marketplaceStore;
const scheduler = createScheduler();

/** Monotonic suffix for client-generated ids. */
let sequence = 0;
const nextId = (prefix) =>
  `${prefix}-${Date.now().toString(36)}-${(sequence += 1)}`;

const justNow = () => ({ key: "justNow" });

/** Most recent price named in a thread — the number currently on the table. */
const latestPrice = (thread) =>
  [...thread.events].reverse().find((event) => event.price)?.price ?? 0;

const updateThread = (id, patch) =>
  setState((state) => ({
    threads: state.threads.map((thread) =>
      thread.id === id
        ? {
            ...thread,
            ...(typeof patch === "function" ? patch(thread) : patch),
          }
        : thread,
    ),
  }));

const appendEvent = (id, event) =>
  updateThread(id, (thread) => ({
    events: [...thread.events, { time: justNow(), ...event }],
  }));

export const marketplaceActions = {
  async load({ force = false } = {}) {
    if (!force && getState().status !== "idle") return;
    setState({ status: "loading", error: null });
    try {
      const data = await marketplaceApi.bootstrap();
      setState({
        status: "ready",
        listings: data.listings ?? (ENV.USE_MOCK_API ? listingsFixture : []),
        threads: data.threads ?? (ENV.USE_MOCK_API ? threadsFixture : []),
        transactions: data.transactions ?? (ENV.USE_MOCK_API ? transactionsFixture : []),
        notifications: data.notifications ?? (ENV.USE_MOCK_API ? notificationsFixture : []),
        myShares: data.portfolio?.myShares ?? (ENV.USE_MOCK_API ? portfolioFixture.myShares : 0),
        reserved: data.portfolio?.reserved ?? (ENV.USE_MOCK_API ? portfolioFixture.reserved : 0),
      });
    } catch (error) {
      setState({ status: "error", error: error.message });
    }
  },

  /** Cancels every pending simulated callback. Call on teardown or sign-out. */
  teardown() {
    scheduler.cancelAll();
  },

  /* ------------------------------------------------------------ notifications */

  showToast(message) {
    setState({ toast: message });
    scheduler.schedule(SIMULATION_DELAYS.TOAST_LIFETIME, () => {
      setState((state) => (state.toast === message ? { toast: null } : null));
    });
  },

  dismissToast() {
    setState({ toast: null });
  },

  notify(message) {
    setState((state) => ({
      notifications: [
        { id: nextId("N"), message, time: justNow(), unread: true },
        ...state.notifications,
      ],
    }));
  },

  markNotificationsRead() {
    setState((state) => ({
      notifications: state.notifications.map((n) =>
        n.unread ? { ...n, unread: false } : n,
      ),
    }));
  },

  /* -------------------------------------------------------------------- offers */

  upsertThread(thread) {
    if (!thread?.id) return;

    setState((state) => {
      const matchesThread = (item) =>
        item.id === thread.id ||
        (thread.rootOfferId && item.rootOfferId === thread.rootOfferId) ||
        (String(item.id).startsWith("T-") &&
          item.listingId === thread.listingId &&
          item.role === thread.role &&
          item.counterparty === thread.counterparty);

      const exists = state.threads.some(matchesThread);
      const threads = exists
        ? state.threads.map((item) => (matchesThread(item) ? thread : item))
        : [thread, ...state.threads];

      return {
        threads: threads.sort((a, b) => {
          const aTime = new Date(a.events?.[a.events.length - 1]?.time || 0).getTime();
          const bTime = new Date(b.events?.[b.events.length - 1]?.time || 0).getTime();
          return bTime - aTime;
        }),
      };
    });
  },

  /** Opens a negotiation on someone else's listing. */
  sendOffer(listing, { price }) {
    if (!listing.allowOffers) return null;

    const offerPrice = toNumber(price);
    const offerQty = listing.qty;
    if (offerPrice <= 0 || offerQty <= 0) return null;

    const thread = {
      id: nextId("T"),
      listingId: listing.id,
      role: THREAD_ROLE.BUYER,
      counterparty: listing.seller,
      initials: listing.initials,
      av: listing.av,
      qty: offerQty,
      status: THREAD_STATUS.AWAITING,
      events: [
        {
          by: "me",
          type: EVENT_TYPE.OFFER,
          price: offerPrice,
          time: justNow(),
        },
      ],
    };

    if (!ENV.USE_MOCK_API) {
      return marketplaceApi
        .sendOffer({ listingId: listing.id, price: offerPrice })
        .then((serverThread) => {
          if (serverThread?.id) marketplaceActions.upsertThread(serverThread);
          marketplaceActions.showToast({
            key: "toastOfferSent",
            params: { name: listing.seller },
          });
          return serverThread;
        })
        .catch((error) => {
          const message = marketplaceErrorMessage(error);
          marketplaceActions.showToast(message);
          throw error;
        });
    }

    setState((state) => ({ threads: [thread, ...state.threads] }));
    marketplaceActions.showToast({
      key: "toastOfferSent",
      params: { name: listing.seller },
    });

    // The seller splits the difference, rounded to the nearest 5 pesos.
    scheduler.schedule(SIMULATION_DELAYS.SELLER_COUNTER, () => {
      const counter = Math.round((offerPrice + listing.price) / 2 / 5) * 5;
      updateThread(thread.id, (current) => ({
        status: THREAD_STATUS.YOUR_TURN,
        events: [
          ...current.events,
          {
            by: "them",
            type: EVENT_TYPE.COUNTER,
            price: counter,
            time: justNow(),
          },
        ],
      }));
      const params = { name: listing.seller, price: formatCurrency(counter) };
      marketplaceActions.notify({ key: "notifCountered", params });
      marketplaceActions.showToast({ key: "toastCountered", params });
    });

    return thread;
  },

  /** Accepts the price currently on the table. */
  acceptThread(id) {
    const thread = getState().threads.find((t) => t.id === id);
    if (!thread) return;
    const price = latestPrice(thread);
    const isBuyer = thread.role === THREAD_ROLE.BUYER;

    updateThread(id, {
      status: isBuyer ? THREAD_STATUS.AGREED : THREAD_STATUS.AWAITING_PAY,
    });
    appendEvent(id, { by: "me", type: EVENT_TYPE.ACCEPT, price: null });
    marketplaceApi
      .acceptOffer(id)
      .then(() => !ENV.USE_MOCK_API && marketplaceActions.load({ force: true }))
      .catch(() => {});

    if (isBuyer) {
      marketplaceActions.showToast({ key: "toastDealAgreed" });
      return;
    }

    marketplaceActions.showToast({ key: "toastOfferAccepted" });
    if (!ENV.USE_MOCK_API) return;

    scheduler.schedule(SIMULATION_DELAYS.SETTLE, () =>
      marketplaceActions.settleSale(id, price),
    );
  },

  rejectThread(id) {
    updateThread(id, { status: THREAD_STATUS.REJECTED });
    appendEvent(id, { by: "me", type: EVENT_TYPE.REJECT, price: null });
    marketplaceApi
      .rejectOffer(id)
      .then(() => !ENV.USE_MOCK_API && marketplaceActions.load({ force: true }))
      .catch(() => {});
    marketplaceActions.showToast({ key: "toastOfferRejected" });
  },

  /** Sends a counter-offer and schedules the counterparty's reply. */
  submitCounter(id, price) {
    const counterPrice = toNumber(price);
    if (counterPrice <= 0) return;
    const thread = getState().threads.find((t) => t.id === id);
    if (!thread) return;

    updateThread(id, { status: THREAD_STATUS.AWAITING });
    appendEvent(id, {
      by: "me",
      type: EVENT_TYPE.COUNTER,
      price: counterPrice,
    });
    marketplaceActions.showToast({ key: "toastCounterSent" });

    if (!ENV.USE_MOCK_API) {
      marketplaceApi
        .counterOffer(id, counterPrice)
        .then((response) => {
          if (response?.threadId) return;
          if (response?.id) marketplaceActions.upsertThread(response);
        })
        .catch(() => {});
      return;
    }

    scheduler.schedule(SIMULATION_DELAYS.COUNTER_REPLY, () => {
      const current = getState().threads.find((t) => t.id === id);
      // The user may have moved on; only reply to a still-open counter.
      if (!current || current.status !== THREAD_STATUS.AWAITING) return;

      if (thread.role === THREAD_ROLE.SELLER) {
        // Buyer accepts the seller's counter, then pays.
        updateThread(id, { status: THREAD_STATUS.AWAITING_PAY });
        appendEvent(id, { by: "them", type: EVENT_TYPE.ACCEPT, price: null });
        const params = {
          name: thread.counterparty,
          price: formatCurrency(counterPrice),
        };
        marketplaceActions.notify({ key: "notifCounterAccepted", params });
        marketplaceActions.showToast({ key: "toastCounterAccepted", params });
        scheduler.schedule(SIMULATION_DELAYS.SETTLE, () =>
          marketplaceActions.settleSale(id, counterPrice),
        );
      } else {
        // Seller counters the buyer's counter, 20 pesos higher.
        const reply = counterPrice + 20;
        updateThread(id, { status: THREAD_STATUS.YOUR_TURN });
        appendEvent(id, { by: "them", type: EVENT_TYPE.COUNTER, price: reply });
        marketplaceActions.notify({
          key: "notifCountered",
          params: { name: thread.counterparty, price: formatCurrency(reply) },
        });
      }
    });
  },

  /**
   * Completes a sale the signed-in shareholder is the seller on: the buyer has
   * paid, so shares leave the portfolio and a pending payout is recorded.
   */
  settleSale(id, price) {
    const thread = getState().threads.find((t) => t.id === id);
    if (!thread || thread.status !== THREAD_STATUS.AWAITING_PAY) return;

    updateThread(id, { status: THREAD_STATUS.SETTLED });
    appendEvent(id, { by: "them", type: EVENT_TYPE.PAID, price: null });

    setState((state) => ({
      myShares: state.myShares - thread.qty,
      reserved: Math.max(0, state.reserved - thread.qty),
      listings: state.listings.filter((l) => l.id !== thread.listingId),
      transactions: [
        {
          id: `TX-${2100 + state.transactions.length}`,
          dir: TX_DIRECTION.SELL,
          counterparty: thread.counterparty,
          qty: thread.qty,
          price,
          date: new Date().toISOString(),
          status: TX_STATUS.PENDING,
        },
        ...state.transactions,
      ],
    }));

    marketplaceActions.notify({
      key: "notifPaid",
      params: { name: thread.counterparty },
    });
    marketplaceActions.showToast({ key: "toastSharesTransferred" });
  },

  /* ------------------------------------------------------------------ listings */

  upsertListing(listing) {
    if (!listing?.id) return;

    setState((state) => {
      const exists = state.listings.some((item) => item.id === listing.id);
      const listings =
        listing.status === "sold" || listing.status === "cancelled"
          ? state.listings.filter((item) => item.id !== listing.id)
          : exists
            ? state.listings.map((item) => (item.id === listing.id ? listing : item))
            : [listing, ...state.listings];

      return { listings };
    });
  },

  /** Publishes a listing and reserves the shares behind it. */
  publishListing({ qty, price, allowOffers, expiryDays }) {
    const listingQty = toNumber(qty);
    const listingPrice = toNumber(price);
    if (listingQty <= 0 || listingPrice <= 0) return null;

    const days = toNumber(expiryDays);
    const listing = {
      id: `L-${1045 + getState().listings.length}`,
      seller: "Daniela Cruz",
      initials: "DC",
      av: 0,
      qty: listingQty,
      price: listingPrice,
      allowOffers: Boolean(allowOffers),
      listedAt: new Date().toISOString(),
      expiresAt: days > 0 ? addDays(new Date(), days).toISOString() : null,
      mine: true,
    };

    if (!ENV.USE_MOCK_API) {
      return marketplaceApi.publishListing(listing).then((response) => {
        return marketplaceActions.load({ force: true }).then(() => response);
      });
    }

    setState((state) => ({
      listings: [listing, ...state.listings],
      reserved: state.reserved + listingQty,
    }));
    marketplaceActions.notify({
      key: "notifListingLive",
      params: { id: listing.id, qty: listingQty },
    });

    return listing;
  },

  cancelListing(id) {
    const listing = getState().listings.find((item) => item.id === id);
    if (!listing || !listing.mine) return Promise.resolve(false);

    setState((state) => ({
      listings: state.listings.filter((item) => item.id !== id),
      reserved: Math.max(0, state.reserved - listing.qty),
    }));

    return marketplaceApi
      .cancelListing(id)
      .then(() => {
        marketplaceActions.showToast({ key: "toastListingCancelled" });
        return ENV.USE_MOCK_API ? true : marketplaceActions.load({ force: true }).then(() => true);
      })
      .catch((error) => {
        setState((state) => ({
          listings: [listing, ...state.listings],
          reserved: state.reserved + listing.qty,
        }));
        marketplaceActions.showToast(error.message || "Could not cancel listing");
        return false;
      });
  },

  /* ------------------------------------------------------------------ checkout */

  /** Enters checkout for an agreed deal and starts the payment window. */
  startPayment(deal) {
    setState({
      deal,
      payMethod: null,
      payPhase: PAY_PHASE.IDLE,
      payDeadline: deal.lockExpiresAt
        ? new Date(deal.lockExpiresAt).getTime()
        : Date.now() + ENV.PAY_WINDOW_MINS * 60 * 1000,
      doneStep: 0,
    });
  },

  async checkoutListing(listing) {
    if (!listing || listing.dealInProgress || listing.status === "payment_pending") {
      return null;
    }

    const order = await marketplaceApi.checkoutListing(listing.id);
    const deal = {
      seller: listing.seller,
      qty: order.qty ?? listing.qty,
      price: order.price ?? listing.price,
      listingId: listing.id,
      orderId: order.orderId,
      lockExpiresAt: order.lockExpiresAt,
    };

    marketplaceActions.startPayment(deal);
    return deal;
  },

  selectPayMethod(method) {
    setState({ payMethod: method });
  },

  /**
   * Charges the buyer. Resolves once the funds are in escrow — the caller
   * navigates to the confirmation screen, where the settlement timeline plays.
   */
  payNow(options = {}) {
    const { deal, payMethod } = getState();
    if (!deal || !payMethod) return Promise.resolve(false);

    setState({ payPhase: PAY_PHASE.PROCESSING });
    const paymentPromise = marketplaceApi.pay({
      dealId: deal.orderId ?? deal.threadId ?? deal.listingId,
      method: payMethod,
      tokenId: options.tokenId,
    });

    if (!ENV.USE_MOCK_API) {
      return paymentPromise
        .then((payment) => {
          if (payment.status !== "completed" && payment.status !== "escrowed") {
            setState({ payPhase: PAY_PHASE.IDLE });
            marketplaceActions.showToast("Payment is pending confirmation.");
            return false;
          }

          setState({ payPhase: PAY_PHASE.DONE, doneStep: 1 });
          return marketplaceActions.load({ force: true });
        })
        .then((result) => result !== false)
        .catch((error) => {
          setState({ payPhase: PAY_PHASE.IDLE });
          marketplaceActions.showToast(error.message || "Payment failed");
          return false;
        });
    }

    return new Promise((resolve) => {
      scheduler.schedule(SIMULATION_DELAYS.PROCESS_PAYMENT, () => {
        setState((state) => ({
          payPhase: PAY_PHASE.DONE,
          doneStep: 1,
          myShares: state.myShares + deal.qty,
          listings: state.listings.filter((l) => l.id !== deal.listingId),
          transactions: [
            {
              id: `TX-${2100 + state.transactions.length}`,
              dir: TX_DIRECTION.BUY,
              counterparty: deal.seller,
              qty: deal.qty,
              price: deal.price,
              date: new Date().toISOString(),
              status: TX_STATUS.DONE,
            },
            ...state.transactions,
          ],
        }));

        if (deal.threadId) {
          updateThread(deal.threadId, { status: THREAD_STATUS.SETTLED });
          appendEvent(deal.threadId, {
            by: "me",
            type: EVENT_TYPE.PAID,
            price: null,
          });
        }

        marketplaceActions.notify({
          key: "notifPaymentConfirmed",
          params: { qty: deal.qty },
        });

        // Registry transfer and payout scheduling land shortly after escrow.
        scheduler.schedule(SIMULATION_DELAYS.TRANSFER_STEP, () =>
          setState({ doneStep: 2 }),
        );
        scheduler.schedule(SIMULATION_DELAYS.TRANSFER_STEP * 2, () =>
          setState({ doneStep: 3 }),
        );

        resolve(true);
      });
    });
  },

  /** Clears checkout state once the buyer leaves the confirmation screen. */
  clearDeal() {
    setState({
      deal: null,
      payMethod: null,
      payPhase: PAY_PHASE.IDLE,
      payDeadline: null,
      doneStep: 0,
    });
  },
};

export default marketplaceStore;
