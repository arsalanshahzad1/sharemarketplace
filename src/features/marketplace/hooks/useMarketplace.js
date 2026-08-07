import { marketplaceActions, useMarketplaceStore } from '../marketplaceStore';

/**
 * The marketplace state plus its actions.
 *
 * Bootstrapping is the app shell's job (`PageWrapper`), not this hook's — a
 * page reached by deep link must not depend on having called `useMarketplace`
 * to have data, or hooks that read a single slice (`useListing`) would render
 * against an empty store.
 */
export default function useMarketplace() {
  const state = useMarketplaceStore();
  return { ...state, actions: marketplaceActions };
}
