import { marketplaceEndpoints } from '@/services/endpoints/marketplace';

/**
 * Marketplace domain API. The store calls this rather than the endpoint module
 * directly, so request/response reshaping has a home that is not the reducer.
 */
export const marketplaceApi = {
  bootstrap: () => marketplaceEndpoints.bootstrap(),
  fetchListings: (params) => marketplaceEndpoints.listings(params),
  publishListing: (listing) => marketplaceEndpoints.createListing(listing),
  cancelListing: (id) => marketplaceEndpoints.cancelListing(id),
  sendOffer: (offer) => marketplaceEndpoints.createOffer(offer),
  acceptOffer: (threadId) => marketplaceEndpoints.respondToOffer(threadId, 'accept'),
  rejectOffer: (threadId) => marketplaceEndpoints.respondToOffer(threadId, 'reject'),
  counterOffer: (threadId, price) =>
    marketplaceEndpoints.respondToOffer(threadId, 'counter', { price }),
  pay: (payment) => marketplaceEndpoints.pay(payment),
  fetchTransactions: (params) => marketplaceEndpoints.transactions(params),
};

export default marketplaceApi;
