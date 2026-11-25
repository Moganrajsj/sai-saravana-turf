# Sai Saravana Turf Admin — React Phase 1

This is an initial React + Vite + TypeScript scaffold located in its own `admin/` directory. The existing customer-facing website at the repository root is intentionally untouched.

## Run locally
```bash
cd admin
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Current status
- React app shell and responsive status view are in place.
- The original admin HTML design reference is preserved in the Phase 1 downloadable project package, but is not duplicated into this branch.
- The admin interface is not yet a production admin application. It has no live API, authentication, or database connection.
- Any sample prices, records, and settings from the prototype must be confirmed before being used as real business rules.

## Next steps
1. Convert the sidebar, top navigation, dashboard and modules into native React components.
2. Add typed API services and connect the shared booking backend.
3. Add protected admin authentication and role checks.
4. Confirm actual pricing, slot hours, advance payment and cancellation policies before enabling live bookings.