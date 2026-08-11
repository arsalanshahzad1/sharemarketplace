import { api, mockResponse } from "@/services/api";
import { ENV } from "@/constants/env";
import {
  listingsFixture,
  threadsFixture,
  transactionsFixture,
  notificationsFixture,
  portfolioFixture,
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
        })
      : api.get("marketplace/bootstrap"),

  listings: (params) =>
    ENV.USE_MOCK_API
      ? mockResponse(listingsFixture)
      : api.get("marketplace/listings-ui", { params }),

  createListing: (listing) =>
    ENV.USE_MOCK_API
      ? mockResponse(listing)
      : api.post("marketplace/listings", {
          qty: listing.qty,
          price: listing.price,
          allowOffers: listing.allowOffers,
          expiresAt: listing.expiresAt,
        }),

  cancelListing: (listingId) =>
    ENV.USE_MOCK_API
      ? mockResponse({ id: listingId, status: "cancelled" })
      : api.delete(`marketplace/listings/${listingId}`),

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
