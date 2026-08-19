import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar/Navbar";
// import Footer from "@/components/layout/Footer/Footer";
import Toast from "@/components/common/Toast/Toast";
import { useI18n } from "@/context/I18nContext";
import { useAuth } from "@/context/AuthContext";
import { cx } from "@/utils/cx";
import {
  marketplaceActions,
  useMarketplaceStore,
} from "@/features/marketplace/marketplaceStore";
import {
  connectMarketplaceSocket,
  disconnectMarketplaceSocket,
} from "@/services/socket";

export default function PageWrapper() {
  const { tm } = useI18n();
  const { isAuthenticated, user } = useAuth();
  const toast = useMarketplaceStore((state) => state.toast);
  const previousUserId = useRef(null);

  useEffect(() => {
    if (!isAuthenticated) {
      previousUserId.current = null;
      marketplaceActions.reset();
      disconnectMarketplaceSocket();
      return undefined;
    }

    const sessionChanged = previousUserId.current !== user?.id;
    previousUserId.current = user?.id || null;

    if (sessionChanged) {
      marketplaceActions.reset();
    }

    marketplaceActions.load({ force: true });
    const socket = connectMarketplaceSocket({
      onEvent(eventName, payload) {
        if (eventName === "socket.connected") {
          marketplaceActions.load({ force: true });
          return;
        }
        if (eventName === "marketplace.connected" || eventName === "socket.error") return;
        if (
          payload?.userId &&
          user?.id &&
          String(payload.userId) !== String(user.id)
        ) {
          return;
        }
        if (eventName.startsWith("offer.")) {
          if (payload?.thread) marketplaceActions.upsertThread(payload.thread);
          return;
        }
        if (eventName.startsWith("listing.")) {
          if (payload?.listing) marketplaceActions.upsertListing(payload.listing);
          return;
        }
        if (eventName === "market.stats.updated") {
          marketplaceActions.updateMarketStats(payload);
          return;
        }
        if (eventName === "portfolio.updated") {
          marketplaceActions.updatePortfolio(payload);
          return;
        }
        marketplaceActions.load({ force: true });
      },
    });

    return () => {
      socket?.disconnect();
      disconnectMarketplaceSocket();
    };
  }, [isAuthenticated, user?.id]);

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <Navbar />
      <main className="mx-auto w-full max-w-[1240px] flex-1 px-4 pb-12 pt-5 sm:px-7 sm:pb-16 sm:pt-7">
        <Outlet />
      </main>
      {/* <Footer /> */}
      <Toast>{tm(toast)}</Toast>
    </div>
  );
}

export function Page({ width = "full", className, children }) {
  return (
    <div
      className={cx(
        "animate-fade-up",
        width === "narrow" && "mx-auto max-w-[640px]",
        width === "medium" && "mx-auto max-w-[920px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
