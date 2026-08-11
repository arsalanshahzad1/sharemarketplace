/**
 * UI copy, keyed by language. Placeholders use `{name}` syntax and are filled
 * by the `t(key, params)` helper in `context/I18nContext`.
 *
 * Store actions record message *keys*, never rendered strings, so a language
 * switch re-renders existing toasts and notifications in the new language.
 */

export const MESSAGES = {
  en: {
    /* Chrome */
    fundraiser: "Fundraiser",
    marketplace: "Marketplace",
    notifications: "Notifications",
    dashboard: "Dashboard",

    /* Portfolio summary */
    myShares: "My shares",
    estValue: "Est. value",
    lastPrice: "Last trade price",
    activeListings: "Active listings",
    vol30: "30-day volume",
    sharesTraded: "shares traded",
    reservedLine: "{count} reserved in live listings",
    listingSharesLine: "{count} shares for sale",

    /* Home tiles */
    browseTile: "Browse listings",
    browseDesc: "Shares for sale from other shareholders",
    sellTile: "Sell shares",
    sellDesc: "Create a listing at your asking price",
    offersTile: "My offers",
    offersDesc: "Track negotiations and respond",
    historyTile: "Transactions",
    historyDesc: "Completed share transfers",
    activity: "Recent activity",
    viewAll: "View all",

    /* Browse */
    browseTitle: "Marketplace listings",
    live: "live",
    seller: "Seller",
    qty: "Shares",
    ask: "Price / share",
    total: "Total",
    type: "Type",
    view: "View",
    yourListing: "Your listing",
    cancelListing: "Cancel listing",
    awaitingPayment: "Awaiting payment",
    offersOk: "Offers welcome",
    fixedPrice: "Fixed price",
    expiresMeta: "expires {date}",
    reservedNote:
      "Listed shares are reserved and cannot be sold twice. Cancelled or expired listings release shares back to the seller.",
    emptyListings: "No listings are live right now.",

    /* Listing detail */
    listing: "Listing",
    verified: "Verified shareholder",
    listedOn: "Listed",
    expiresOn: "Expires",
    escrowNote:
      "Card payments are captured by the platform account. Seller settlement is reconciled after the registry transfer is confirmed.",
    orderSummary: "Order summary",
    fee: "Marketplace fee",
    conektaServiceFee: "Conekta service fee",
    totalDue: "Total due",
    buyAtAsk: "Buy at asking price",
    makeOffer: "Make an offer",
    fixedOnly: "This seller only accepts the asking price.",
    offerPrice: "Your price per share",
    offerQty: "Quantity",
    max: "Max",
    offerTotal: "Offer total",
    sendOffer: "Send offer",
    cancel: "Cancel",
    perShare: "/ share",
    offerSameAsAsk: "Same as asking price",
    offerBelowAsk: "{pct}% below asking price",
    offerAboveAsk: "{pct}% above asking price",
    listingNotFound: "That listing is no longer available.",

    /* Sell */
    sellTitle: "Sell shares",
    sellDetails: "Listing details",
    available: "available",
    sharesToSell: "Shares to sell",
    askPerShare: "Asking price per share",
    lastTrade: "Last trade",
    allowOffersLbl: "Allow offers",
    allowOffersDesc: "Buyers can negotiate below your asking price",
    expiry: "Listing expiry",
    days7: "7 days",
    days14: "14 days",
    days30: "30 days",
    noExpiry: "No expiry",
    daysSuffix: "days",
    reviewListing: "Review listing",
    reviewTitle: "Review your listing",
    listingValue: "Listing value",
    offersLbl: "Offers",
    yes: "Allowed",
    no: "Fixed price only",
    reserveWarn:
      "These shares will be reserved while the listing is live. You can cancel anytime to release them.",
    back: "Back",
    publish: "Publish listing",
    listingLive: "Your listing is live",
    sellLiveLine: "{qty} shares reserved and listed at {price} per share.",
    viewInMarket: "View in marketplace",
    backHome: "Back to marketplace",

    /* Offers */
    offersTitle: "My offers",
    sendCounter: "Send counter",
    counter: "Counter",
    reject: "Reject",
    accept: "Accept",
    dealAgreed: "Deal agreed at",
    proceedPay: "Proceed to payment",
    noOffers:
      "No open offers. Make an offer on a listing to start a negotiation.",
    threadTitleSeller: "Offer received from {name}",
    threadTitleBuyer: "Your offer to {name}",
    threadSubtitle: "{id} · {qty} shares",
    you: "You",
    youInitial: "Y",

    /* Payment */
    payTitle: "Payment",
    payWindow: "Pay within",
    payMethod: "Payment method",
    escrowShort:
      "Your card payment is captured by the platform account and reconciled after the share transfer is confirmed.",
    conektaFeeAck:
      "An additional {pct}% ({amount}) will be charged to cover the Conekta card service fee.",
    payNow: "Pay",
    processing: "Processing…",
    selectMethod: "Select a payment method",
    noDeal: "There is no deal awaiting payment.",
    pmStpDesc: "Instant bank transfer",
    pmConektaDesc: "Credit or debit card",
    pmOxxoDesc: "Cash payment with voucher",
    pmRampName: "Crypto on-ramp",
    pmRampDesc: "Pay in crypto, converted to MXN",

    /* Payment success */
    doneTitle: "Payment received",
    doneLine: "You bought {qty} shares from {name} for {total}.",
    viewReceipt: "View transaction",
    doneStep1: "Payment received",
    doneStep1Desc: "The card charge was captured by the platform account.",
    doneStep2: "Shares transferred",
    doneStep2Desc:
      "The share registry now records you as the owner of {qty} shares.",
    doneStep3: "Seller settlement pending",
    doneStep3Desc:
      "Seller settlement is handled through the platform reconciliation process.",

    /* Transactions */
    historyTitle: "Transactions",
    txId: "Reference",
    counterparty: "Counterparty",
    price: "Price",
    status: "Status",
    bought: "Bought from",
    sold: "Sold to",
    completed: "Completed",
    payoutPending: "Settlement pending",
    registryNote:
      "Every completed transaction is recorded permanently in the share registry.",
    emptyTxs: "No transactions yet.",

    /* Thread status chips */
    stAwaiting: "Awaiting reply",
    stYourTurn: "Action needed",
    stAgreed: "Deal agreed",
    stRejected: "Rejected",
    stSettled: "Settled",
    stAwaitingPay: "Awaiting payment",

    /* Thread event labels */
    evOffer: "made an offer",
    evCounter: "countered",
    evAccept: "accepted",
    evReject: "rejected",
    evPaid: "paid — shares transferred",

    /* Toasts */
    justNow: "Just now",
    toastOfferSent: "Offer sent to {name}",
    toastCountered: "{name} countered at {price}",
    toastDealAgreed: "Deal agreed — proceed to payment",
    toastOfferAccepted: "Offer accepted — awaiting buyer payment",
    toastOfferRejected: "Offer rejected",
    toastCounterSent: "Counter sent",
    toastCounterAccepted: "{name} accepted your counter",
    toastSharesTransferred: "Shares transferred - settlement pending",
    toastListingCancelled: "Listing cancelled",

    /* Notifications */
    notifCountered: "{name} countered at {price} per share",
    notifCounterAccepted: "{name} accepted your counter of {price}",
    notifPaid: "{name} paid - seller settlement is pending reconciliation",
    notifListingLive: "Your listing {id} is live — {qty} shares reserved",
    notifPaymentConfirmed:
      "Payment confirmed — {qty} shares transferred to your name",
    notifSeedOffer: "{name} made an offer of {price} on your listing {id}",
    notifSeedPayout: "Settlement of {amount} reconciled for your sale",

    /* Activity feed */
    actOffer: "{name} made an offer on your listing {id}",
    actListingLive: "Your listing {id} is live — {qty} shares reserved",
    actPayout: "Settlement reconciled for sale {id}",

    /* Dashboard */
    dashTitle: "Portfolio",
    dashHolding: "Shares held",
    dashReserved: "Reserved",
    dashAvailable: "Available to sell",
    dashOpenOffers: "Open negotiations",
    myListings: "My live listings",
    noMyListings: "You have no live listings.",
    reviewOffers: "Review offers",

    /* Validation */
    errQtyPositive: "Enter a quantity of at least 1.",
    errQtyWhole: "Shares must be a whole number.",
    errQtyExceeds: "You do not have that many shares available.",
    errPricePositive: "Enter a price above zero.",

    /* Auth */
    signIn: "Sign in",
    signOut: "Sign out",
    email: "Email",
    password: "Password",
    signInTitle: "Shareholder sign in",
    signInDesc: "Use your registry credentials to access the marketplace.",
    signInError: "We could not sign you in. Check your details and try again.",

    /* Not found */
    nfTitle: "Page not found",
    nfBody: "The page you were looking for is not part of the marketplace.",
    nfBack: "Back to marketplace",

    // footerRegistry: "Share registry operated by JAVA TIMES CAFFÈ · JAVA 300",
    // footerEscrow: "Payments held in escrow · Settled in MXN",
    // footerRights: "All transfers are recorded in the official share registry.",

    /* Errors */
    loadError: "Something went wrong while loading the marketplace.",
    retry: "Try again",
  },

  es: {
    /* Chrome */
    fundraiser: "Recaudación",
    marketplace: "Mercado",
    notifications: "Notificaciones",
    dashboard: "Panel",

    /* Portfolio summary */
    myShares: "Mis acciones",
    estValue: "Valor est.",
    lastPrice: "Último precio",
    activeListings: "Ofertas activas",
    vol30: "Volumen 30 días",
    sharesTraded: "acciones operadas",
    reservedLine: "{count} reservadas en publicaciones",
    listingSharesLine: "{count} acciones en venta",

    /* Home tiles */
    browseTile: "Explorar ofertas",
    browseDesc: "Acciones en venta de otros accionistas",
    sellTile: "Vender acciones",
    sellDesc: "Crea una publicación a tu precio",
    offersTile: "Mis ofertas",
    offersDesc: "Sigue tus negociaciones y responde",
    historyTile: "Transacciones",
    historyDesc: "Transferencias y pagos completados",
    activity: "Actividad reciente",
    viewAll: "Ver todo",

    /* Browse */
    browseTitle: "Publicaciones del mercado",
    live: "activas",
    seller: "Vendedor",
    qty: "Acciones",
    ask: "Precio / acción",
    total: "Total",
    type: "Tipo",
    view: "Ver",
    yourListing: "Tu publicación",
    cancelListing: "Cancelar",
    awaitingPayment: "Esperando pago",
    offersOk: "Acepta ofertas",
    fixedPrice: "Precio fijo",
    expiresMeta: "expira {date}",
    reservedNote:
      "Las acciones publicadas quedan reservadas y no pueden venderse dos veces. Al cancelar o expirar, se liberan al vendedor.",
    emptyListings: "No hay publicaciones activas en este momento.",

    /* Listing detail */
    listing: "Publicación",
    verified: "Accionista verificado",
    listedOn: "Publicado",
    expiresOn: "Expira",
    escrowNote:
      "El pago con tarjeta se captura en la cuenta de la plataforma. La liquidacion al vendedor se reconcilia despues de confirmar la transferencia en el registro.",
    orderSummary: "Resumen de orden",
    fee: "Comisión del mercado",
    conektaServiceFee: "Comisión de servicio Conekta",
    totalDue: "Total a pagar",
    buyAtAsk: "Comprar al precio de venta",
    makeOffer: "Hacer una oferta",
    fixedOnly: "Este vendedor solo acepta el precio de venta.",
    offerPrice: "Tu precio por acción",
    offerQty: "Cantidad",
    max: "Máx",
    offerTotal: "Total de la oferta",
    sendOffer: "Enviar oferta",
    cancel: "Cancelar",
    perShare: "/ acción",
    offerSameAsAsk: "Igual al precio de venta",
    offerBelowAsk: "{pct}% bajo el precio de venta",
    offerAboveAsk: "{pct}% sobre el precio de venta",
    listingNotFound: "Esa publicación ya no está disponible.",

    /* Sell */
    sellTitle: "Vender acciones",
    sellDetails: "Detalles de la publicación",
    available: "disponibles",
    sharesToSell: "Acciones a vender",
    askPerShare: "Precio por acción",
    lastTrade: "Último precio",
    allowOffersLbl: "Permitir ofertas",
    allowOffersDesc: "Los compradores pueden negociar bajo tu precio",
    expiry: "Vigencia",
    days7: "7 días",
    days14: "14 días",
    days30: "30 días",
    noExpiry: "Sin vencimiento",
    daysSuffix: "días",
    reviewListing: "Revisar publicación",
    reviewTitle: "Revisa tu publicación",
    listingValue: "Valor de la publicación",
    offersLbl: "Ofertas",
    yes: "Permitidas",
    no: "Solo precio fijo",
    reserveWarn:
      "Estas acciones quedarán reservadas mientras la publicación esté activa. Puedes cancelar en cualquier momento para liberarlas.",
    back: "Atrás",
    publish: "Publicar",
    listingLive: "Tu publicación está activa",
    sellLiveLine:
      "{qty} acciones reservadas y publicadas a {price} por acción.",
    viewInMarket: "Ver en el mercado",
    backHome: "Volver al mercado",

    /* Offers */
    offersTitle: "Mis ofertas",
    sendCounter: "Enviar contraoferta",
    counter: "Contraofertar",
    reject: "Rechazar",
    accept: "Aceptar",
    dealAgreed: "Trato cerrado en",
    proceedPay: "Ir al pago",
    noOffers:
      "Sin ofertas abiertas. Haz una oferta en una publicación para iniciar una negociación.",
    threadTitleSeller: "Oferta recibida de {name}",
    threadTitleBuyer: "Tu oferta a {name}",
    threadSubtitle: "{id} · {qty} acciones",
    you: "Tú",
    youInitial: "T",

    /* Payment */
    payTitle: "Pago",
    payWindow: "Paga en",
    payMethod: "Método de pago",
    escrowShort:
      "Tu pago con tarjeta se captura en la cuenta de la plataforma y se reconcilia despues de confirmar la transferencia de acciones.",
    conektaFeeAck:
      "Se cobrará un {pct}% adicional ({amount}) para cubrir la comisión de servicio de Conekta.",
    payNow: "Pagar",
    processing: "Procesando…",
    selectMethod: "Elige un método de pago",
    noDeal: "No hay ningún trato pendiente de pago.",
    pmStpDesc: "Transferencia bancaria inmediata",
    pmConektaDesc: "Tarjeta de crédito o débito",
    pmOxxoDesc: "Pago en efectivo con referencia",
    pmRampName: "Cripto (on-ramp)",
    pmRampDesc: "Paga con cripto, convertido a MXN",

    /* Payment success */
    doneTitle: "Pago recibido",
    doneLine: "Compraste {qty} acciones de {name} por {total}.",
    viewReceipt: "Ver transacción",
    doneStep1: "Pago recibido",
    doneStep1Desc:
      "El cargo con tarjeta fue capturado por la cuenta de la plataforma.",
    doneStep2: "Acciones transferidas",
    doneStep2Desc:
      "El registro de accionistas ahora te muestra como titular de {qty} acciones.",
    doneStep3: "Liquidacion al vendedor pendiente",
    doneStep3Desc:
      "La liquidacion al vendedor se maneja mediante el proceso de reconciliacion de la plataforma.",

    /* Transactions */
    historyTitle: "Transacciones",
    txId: "Referencia",
    counterparty: "Contraparte",
    price: "Precio",
    status: "Estado",
    bought: "Compra a",
    sold: "Venta a",
    completed: "Completada",
    payoutPending: "Liquidacion pendiente",
    registryNote:
      "Cada transacción completada queda registrada permanentemente en el registro de acciones.",
    emptyTxs: "Aún no hay transacciones.",

    /* Thread status chips */
    stAwaiting: "Esperando respuesta",
    stYourTurn: "Requiere acción",
    stAgreed: "Trato cerrado",
    stRejected: "Rechazada",
    stSettled: "Liquidada",
    stAwaitingPay: "Esperando pago",

    /* Thread event labels */
    evOffer: "hizo una oferta",
    evCounter: "contraofertó",
    evAccept: "aceptó",
    evReject: "rechazó",
    evPaid: "pagó — acciones transferidas",

    /* Toasts */
    justNow: "Ahora",
    toastOfferSent: "Oferta enviada a {name}",
    toastCountered: "{name} contraofertó {price}",
    toastDealAgreed: "Trato cerrado — procede al pago",
    toastOfferAccepted: "Oferta aceptada — esperando el pago del comprador",
    toastOfferRejected: "Oferta rechazada",
    toastCounterSent: "Contraoferta enviada",
    toastCounterAccepted: "{name} aceptó tu contraoferta",
    toastSharesTransferred: "Acciones transferidas - liquidacion pendiente",
    toastListingCancelled: "Publicación cancelada",

    /* Notifications */
    notifCountered: "{name} contraofertó {price} por acción",
    notifCounterAccepted: "{name} aceptó tu contraoferta de {price}",
    notifPaid: "{name} pago - la liquidacion al vendedor queda pendiente de reconciliacion",
    notifListingLive:
      "Tu publicación {id} está activa — {qty} acciones reservadas",
    notifPaymentConfirmed:
      "Pago confirmado — {qty} acciones transferidas a tu nombre",
    notifSeedOffer: "{name} hizo una oferta de {price} en tu publicación {id}",
    notifSeedPayout: "Liquidacion de {amount} reconciliada por tu venta",

    /* Activity feed */
    actOffer: "{name} hizo una oferta en tu publicación {id}",
    actListingLive:
      "Tu publicación {id} está activa — {qty} acciones reservadas",
    actPayout: "Liquidacion reconciliada por la venta {id}",

    /* Dashboard */
    dashTitle: "Portafolio",
    dashHolding: "Acciones en cartera",
    dashReserved: "Reservadas",
    dashAvailable: "Disponibles para vender",
    dashOpenOffers: "Negociaciones abiertas",
    myListings: "Mis publicaciones activas",
    noMyListings: "No tienes publicaciones activas.",
    reviewOffers: "Revisar ofertas",

    /* Validation */
    errQtyPositive: "Ingresa una cantidad de al menos 1.",
    errQtyWhole: "Las acciones deben ser un número entero.",
    errQtyExceeds: "No tienes tantas acciones disponibles.",
    errPricePositive: "Ingresa un precio mayor que cero.",

    /* Auth */
    signIn: "Iniciar sesión",
    signOut: "Cerrar sesión",
    email: "Correo",
    password: "Contraseña",
    signInTitle: "Acceso de accionistas",
    signInDesc: "Usa tus credenciales del registro para entrar al mercado.",
    signInError:
      "No pudimos iniciar tu sesión. Revisa tus datos e inténtalo de nuevo.",

    /* Not found */
    nfTitle: "Página no encontrada",
    nfBody: "La página que buscabas no forma parte del mercado.",
    nfBack: "Volver al mercado",

    /* Footer */
    // footerRegistry:
    //   "Registro de acciones operado por JAVA TIMES CAFFÈ · JAVA 300",
    // footerEscrow: "Pagos en custodia · Liquidados en MXN",
    // footerRights:
    //   "Todas las transferencias quedan registradas en el registro oficial de acciones.",

    /* Errors */
    loadError: "Ocurrió un problema al cargar el mercado.",
    retry: "Reintentar",
  },
};

export default MESSAGES;


