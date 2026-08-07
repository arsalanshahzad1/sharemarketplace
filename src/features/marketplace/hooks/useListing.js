import { useMarketplaceStore } from '../marketplaceStore';
import { selectListingById } from '../marketplaceSelectors';

/** A single listing by id, or `null` once it has been sold or cancelled. */
export default function useListing(listingId) {
  return useMarketplaceStore(selectListingById(listingId));
}
