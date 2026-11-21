# Shuttle Service — shuttleservice.co.nz

Storefront for private and group shuttle hire in Auckland (point-to-point, groups, airport as one of three uses), operated by Book A Ride NZ and wired into the live
bookaride.co.nz booking platform. Every booking lands in the same database,
admin dashboard and inbox as bookaride.co.nz bookings.

## How it works

- **Frontend** (`frontend/`): React 18 + Vite + Tailwind CSS, six languages.
- **Booking system**: there is no backend in this repo. `vercel.json` proxies
  every `/api/*` request to `https://www.bookaride.co.nz/api/*` (bookings, live
  pricing, Stripe checkout, address autocomplete, Google reviews).
- **Booking page**: `src/pages/BookNow.jsx` and its components are mirrored
  byte-for-byte from the bookaride.co.nz repo. See `CLAUDE.md`.

## Deploy (Vercel)

1. Import this repo as a new Vercel project. Build settings come from `vercel.json`.
2. No environment variables are required.
3. Production branch: `main`.
4. Add `www.shuttleservice.co.nz` (primary) and `shuttleservice.co.nz` (redirects to www).

The platform must list this site's origin in `resolveFrontendOrigin()`
(`api/_lib/payment-link.js` in `Book-A-Ride-Gap-Digital/BookARide`), otherwise
Stripe returns paying customers to bookaride.co.nz.

## Local development

```bash
cd frontend
npm install
npm run dev      # /api is proxied to the live platform
npm run build    # checks the booking mirror and the locales, builds, prerenders
```

Preview deployments: every branch other than `main` gets its own preview URL on Vercel.
