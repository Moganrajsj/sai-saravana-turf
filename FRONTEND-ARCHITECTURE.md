# Sai Saravana Turf — Frontend workspace

This branch contains the three supplied frontend layers, kept separate and with the original visual direction preserved.

## Portal entry points

| Layer | Entry point | Purpose |
|---|---|---|
| Customer website | `/` → root `index.html` | Public site, sport exploration and booking flow |
| Employee portal | `/employee` → `employee/index.html` | Staff login, QR scan/check-in and booking lookup |
| Admin portal | `/admin` → `admin/index.html` | Dashboard, bookings, slot management, pricing, customers, employees, QR tickets, payments, reports and settings |

## Hosting-conscious architecture

- The three frontends are static HTML/CSS/JavaScript entry points. They do not require three separate servers.
- They can be served from one domain and one static hosting deployment, using the paths above.
- Keep the booking API as a separate service behind a configurable API base URL. The frontends must not connect directly to the database.
- A small MySQL-backed API can be hosted on a suitable shared/web-app plan if it supports the required server runtime, persistent webhook endpoints and scheduled/expiry processing. Otherwise use a small VPS. Confirm those capabilities and renewal pricing before purchasing.
- Avoid depending on Vercel serverless functions opening direct MySQL connections repeatedly; use a managed/persistent API connection strategy if Vercel is used.
- Keep media assets compressed and avoid adding large frontend frameworks or animation libraries unless they materially improve the experience.

## Important status

These are frontend prototypes, not production booking systems yet. The customer checkout currently simulates payment/booking, and the employee/admin screens use demo or placeholder data/actions. Authentication, QR verification, booking availability, shared-ground slot locking, Razorpay verification, WhatsApp delivery and reports must be connected to trusted backend endpoints before launch.

The supplied prototype pricing and settings are reference defaults only. Confirm the actual rates, peak/off-peak rules, operating hours, advance amount, cancellation policy and employee/admin permissions before enabling real bookings.

## Local preview

Each portal is currently a static frontend. For a quick preview, serve the repository root with any static file server and open `/`, `/employee/`, and `/admin/`.

The `admin/src` directory is an initial React migration scaffold; the current admin portal entry point remains the preserved standalone HTML prototype while the native React conversion is pending.
