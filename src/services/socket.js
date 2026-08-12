import { io } from "socket.io-client";
import { ENV } from "@/constants/env";
import { getAuthToken } from "@/services/api";

let socket;

export function connectMarketplaceSocket({ onEvent } = {}) {
  const token = getAuthToken();
  if (!token) return null;

  if (socket) socket.disconnect();

  socket = io(ENV.SOCKET_URL, {
    auth: { token },
    extraHeaders: {
      "x-auth-token": token,
    },
  });

  const events = [
    "marketplace.connected",
    "listing.created",
    "listing.locked",
    "listing.unlocked",
    "listing.sold",
    "listing.cancelled",
    "offer.created",
    "offer.accepted",
    "offer.declined",
    "offer.countered",
    "order.buyer_payment_pending",
    "order.seller_payment_pending",
    "order.failed",
    "order.expired",
    "shares.transferred",
  ];

  events.forEach((eventName) => {
    socket.on(eventName, (payload) => onEvent?.(eventName, payload));
  });

  socket.on("connect", () =>
    onEvent?.("socket.connected", { socketId: socket.id }),
  );

  socket.on("connect_error", (error) =>
    onEvent?.("socket.error", { message: error.message }),
  );

  return socket;
}

export function disconnectMarketplaceSocket() {
  if (!socket) return;
  socket.disconnect();
  socket = null;
}
