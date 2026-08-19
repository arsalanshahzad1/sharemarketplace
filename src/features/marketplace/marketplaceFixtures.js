import { THREAD_ROLE, THREAD_STATUS, TX_DIRECTION, TX_STATUS } from '@/constants';

/**
 * Demo data for the shareholder marketplace. Dates are ISO strings and copy is
 * stored as `{ key, params }` message descriptors, so both are localised at
 * render time rather than baked into the fixture.
 */

export const portfolioFixture = {
  myShares: 120,
  reserved: 15,
  currentSharePrice: 1150,
};

export const listingsFixture = [
  {
    id: 'L-1042',
    seller: 'Alejandra Ríos',
    initials: 'AR',
    av: 0,
    qty: 25,
    price: 1150,
    allowOffers: true,
    listedAt: '2026-08-01',
    expiresAt: '2026-08-20',
    mine: false,
  },
  {
    id: 'L-1038',
    seller: 'Carlos Mendoza',
    initials: 'CM',
    av: 1,
    qty: 60,
    price: 1120,
    allowOffers: true,
    listedAt: '2026-07-29',
    expiresAt: '2026-08-28',
    mine: false,
  },
  {
    id: 'L-1036',
    seller: 'María F. Ortiz',
    initials: 'MO',
    av: 2,
    qty: 10,
    price: 1200,
    allowOffers: false,
    listedAt: '2026-07-27',
    expiresAt: '2026-08-26',
    mine: false,
  },
  {
    id: 'L-1031',
    seller: 'Jorge Luna',
    initials: 'JL',
    av: 3,
    qty: 40,
    price: 1095,
    allowOffers: true,
    listedAt: '2026-07-24',
    expiresAt: '2026-08-23',
    mine: false,
  },
  {
    id: 'L-1029',
    seller: 'Sofía Vargas',
    initials: 'SV',
    av: 1,
    qty: 15,
    price: 1175,
    allowOffers: false,
    listedAt: '2026-07-22',
    expiresAt: null,
    mine: false,
  },
  {
    id: 'L-1044',
    seller: 'Daniela Cruz',
    initials: 'DC',
    av: 0,
    qty: 15,
    price: 1180,
    allowOffers: true,
    listedAt: '2026-08-03',
    expiresAt: '2026-08-17',
    mine: true,
  },
];

export const threadsFixture = [
  {
    id: 'T-1',
    listingId: 'L-1044',
    role: THREAD_ROLE.SELLER,
    counterparty: 'Ricardo Peña',
    initials: 'RP',
    av: 2,
    qty: 15,
    status: THREAD_STATUS.YOUR_TURN,
    events: [
      { by: 'them', type: 'offer', price: 1130, time: 'Today 09:12' },
    ],
  },
];

export const transactionsFixture = [
  {
    id: 'TX-2093',
    dir: TX_DIRECTION.SELL,
    counterparty: 'Sofía Vargas',
    qty: 5,
    price: 1140,
    date: '2026-07-28',
    status: TX_STATUS.DONE,
  },
  {
    id: 'TX-2041',
    dir: TX_DIRECTION.BUY,
    counterparty: 'Jorge Luna',
    qty: 10,
    price: 1080,
    date: '2026-07-12',
    status: TX_STATUS.DONE,
  },
];

export const notificationsFixture = [
  {
    id: 'N-3',
    message: {
      key: 'notifSeedOffer',
      params: { name: 'Ricardo Peña', price: 'MX$1,130', id: 'L-1044' },
    },
    time: 'Today 09:12',
    unread: true,
  },
  {
    id: 'N-2',
    message: { key: 'notifListingLive', params: { id: 'L-1044', qty: 15 } },
    time: 'Aug 3',
    unread: false,
  },
  {
    id: 'N-1',
    message: { key: 'notifSeedPayout', params: { amount: 'MX$5,700' } },
    time: 'Jul 30',
    unread: false,
  },
];

/** Static market statistics shown on the home summary. */
export const marketStatsFixture = {
  currentSharePrice: 1150,
  lastTradePrice: 1150,
  previousTradePrice: 1080,
  lastTradeDirection: 'up',
  volume30dShares: 320,
  volume30dValue: 368000,
};

/** Recent-activity feed on the home page. */
export const activityFixture = [
  {
    id: 'A-3',
    icon: '↓',
    tone: 'red',
    message: { key: 'actOffer', params: { name: 'Ricardo Peña', id: 'L-1044' } },
    amountKey: 'perShare',
    amount: 'MX$1,130',
    time: 'Today',
  },
  {
    id: 'A-2',
    icon: '●',
    tone: 'green',
    message: { key: 'actListingLive', params: { id: 'L-1044', qty: 15 } },
    amount: 'MX$17,700',
    time: 'Aug 3',
  },
  {
    id: 'A-1',
    icon: '$',
    tone: 'green',
    message: { key: 'actPayout', params: { id: 'TX-2093' } },
    amount: '+MX$5,700',
    positive: true,
    time: 'Jul 30',
  },
];
