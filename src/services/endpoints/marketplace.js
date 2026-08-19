import { api, mockResponse } from "@/services/api";
import { ENV } from "@/constants/env";
import {
  listingsFixture,
  threadsFixture,
  transactionsFixture,
  notificationsFixture,
  portfolioFixture,
  marketStatsFixture,
} from "@/features/marketplace/marketplaceFixtures";

export const marketplaceEndpoints = {
  bootstrap: () =>
    ENV.USE_MOCK_API
      ? mockResponse({
          listings: listingsFixture,
          threads: threadsFixture,
          transactions: transactionsFixture,
          notifications: notificationsFixture,
          portfolio: portfolioFixture,
          marketStats: marketStatsFixture,
        })
      : api.get("marketplace/bootstrap"),

  listings: (params) =>
    ENV.USE_MOCK_API
      ? mockResponse(listingsFixture)
      : api.get("marketplace/listings-ui", { params }),

  createListing: (listing) => {
    if (ENV.USE_MOCK_API) return mockResponse(listing);

    const payload = {
      qty: listing.qty,
      price: listing.price,
      allowOffers: listing.allowOffers,
    };

    if (listing.expiresAt) payload.expiresAt = listing.expiresAt;

    return api.post("marketplace/listings", payload);
  },

  cancelListing: (listingId) =>
    ENV.USE_MOCK_API
      ? mockResponse({ id: listingId, status: "cancelled" })
      : api.delete(`marketplace/listings/${listingId}`),

  checkoutListing: (listingId) =>
    ENV.USE_MOCK_API
      ? mockResponse({ orderId: listingId, listingId, status: "payment_pending" })
      : api.post(`marketplace/listings/${listingId}/buy`),

  createOffer: (offer) =>
    ENV.USE_MOCK_API
      ? mockResponse(offer)
      : api.post("marketplace/offers", offer),

  respondToOffer: (threadId, action, payload) =>
    ENV.USE_MOCK_API
      ? mockResponse({ threadId, action, ...payload })
      : api.post(`marketplace/offers/${threadId}/${action}`, payload),

  /** Charges the buyer and moves the funds into escrow. */
  pay: (payment) =>
    ENV.USE_MOCK_API
      ? mockResponse({ ...payment, status: "escrowed" })
      : api.post("marketplace/payments", payment),

  transactions: (params) =>
    ENV.USE_MOCK_API
      ? mockResponse(transactionsFixture)
      : api.get("marketplace/transactions", { params }),
};

export default marketplaceEndpoints;
