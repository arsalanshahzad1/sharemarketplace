# Shareholder Marketplace — JAVA TIMES CAFFÈ · JAVA 300

A secondary marketplace where verified shareholders list, negotiate and transfer
shares. Payments are held in escrow until the registry confirms the transfer.

## Getting started

```bash
npm install
cp .env.example .env    # defaults work out of the box
npm run dev             # http://localhost:5173
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production bundle into `dist/` |
| `npm run preview` | Serve the built bundle |
| `npm run lint` | ESLint over `src/` (zero warnings enforced) |

The app runs against in-memory fixtures while `VITE_USE_MOCK_API=true`. Set it to
`false` and point `VITE_API_BASE_URL` at a backend to switch to real requests —
no call sites change, only `services/endpoints/*`.

## Project structure

```
src/
├── assets/            Icons (React components), images, fonts
├── components/
│   ├── common/        Generic UI: Button, Input, Modal, Card, Badge, Avatar, Toast, PageHeader
│   └── layout/        Navbar, Footer, PageWrapper (app shell)
├── pages/             One folder per route
├── features/          Domain modules
│   ├── auth/          authSlice, authApi, hooks
│   └── marketplace/   store, selectors, api, fixtures, hooks, components
├── hooks/             Shared hooks: useDebounce, useLocalStorage, useInterval, useOnClickOutside
├── context/           AuthContext, I18nContext
├── store/             createStore / useStore primitive
├── services/          api.js (HTTP client) + endpoints/
├── routes/            AppRoutes, ProtectedRoute
├── utils/             formatCurrency, formatDate, validators, cx
├── constants/         Routes, enums, env, message catalog
└── styles/            global.css — the only stylesheet in the project
```

### Conventions

- **Absolute imports.** `@/` resolves to `src/` (see `vite.config.js`). No `../../../`.
- **Pages compose, features decide.** A page lays out components and calls
  actions. Business rules live in `features/*/`.

## Styling

Tailwind v4, configured entirely in `src/styles/global.css` — there is no
`tailwind.config.js` and no per-component stylesheet. The `@theme` block is the
design system: `--color-brand` yields `bg-brand`/`text-brand`/`border-brand`,
`--radius-card` yields `rounded-card`, and so on. Add a token there and the
utility exists everywhere.

Two rules worth knowing:

- **Never let two utilities set the same property.** `cx(BASE, variant)` where
  BASE has `border-transparent` and the variant has `border-line` is a coin
  flip — whichever Tailwind emits last wins. Branch instead:
  `error ? 'border-brand' : 'border-line'`. `Button`, `Card` and `Input` are
  written this way, and `Card`'s `padding="none"` exists so a caller can set its
  own padding without a conflict.
- **Repeated class strings belong in a component, not `@apply`.** `Button`,
  `Card` and `Badge` own their variant maps; pages stay declarative.

Runtime-chosen colours (shareholder avatar palettes) stay inline styles — they
are data, so they cannot be static utility classes.

## State

`store/store.js` is a ~60-line observable store built on `useSyncExternalStore` —
no Redux or Zustand dependency. Each feature owns a slice (`marketplaceStore`,
`authSlice`) exposing state plus an actions object.

Derived values are pure selectors in `marketplaceSelectors.js` rather than fields
in state, so there is one source of truth for holdings, fees and thread status.

## Internationalisation

English and Spanish, switchable in the header and persisted to localStorage.

Store actions record **message descriptors** — `{ key, params }` — never rendered
strings. `useI18n().tm(message)` resolves them at render time, so switching
language re-renders toasts and notifications that already exist rather than
leaving them frozen in the language they were created in.

Copy lives in `constants/messages.js`. A missing key renders as the key itself,
which makes gaps obvious instead of silently blank.

## The demo counterparty

There is no backend, so `marketplaceStore` simulates the other side of a trade on
timers (`SIMULATION_DELAYS`): a seller counters ~3s after an offer, a buyer pays
~4s after an offer is accepted. Every timer handle is held by a scheduler and
cancelled together on teardown.
