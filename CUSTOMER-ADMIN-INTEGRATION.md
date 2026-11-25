# Customer Website ↔ Admin Panel Integration Map

Branch: `admin-phase1`  
Status: frontend and API contract planning only. No production API or database is connected.

## Customer-visible features mapped to admin-managed data

| Admin section | Customer website/account behavior | Proposed customer API |
|---|---|---|
| Sports & Pricing | Show active sports, current rates and applicable charges | `GET /api/customer/sports` |
| Slot Management | Display live available, booked and blocked hours | `GET /api/customer/availability?date=YYYY-MM-DD&sport=...` |
| Bookings | Create booking, show confirmation and booking history | `POST /api/customer/bookings`, `GET /api/customer/bookings` |
| Customers | Customer account/profile and verified mobile number | `POST /api/customer/auth/otp/request`, `POST /api/customer/auth/otp/verify`, `GET /api/customer/auth/me` |
| QR Tickets | Display customer-owned booking ticket/QR | `GET /api/customer/bookings/:id/ticket` |
| Payments | Show payment state, advance paid and remaining balance | `POST /api/customer/payments/order`, `POST /api/customer/payments/verify`, `GET /api/customer/bookings/:id/payment` |
| Notifications | Booking, payment and cancellation updates | `GET /api/customer/notifications` |
| Settings / Booking rules | Show customer-facing operating hours, booking window and cancellation policy | `GET /api/customer/public-settings` |

## Customer pages added

- `/login/`: mobile OTP sign-in/create-account screen.
- `/account/`: customer account shell with upcoming/past bookings, ticket access and profile.
- Root customer site: add a visible account entry point in the existing navigation.

## Authentication contract

- Mobile OTP is the proposed customer sign-in method because the existing booking form already collects an Indian mobile number.
- OTP delivery and verification must be performed server-side through a configured SMS/OTP provider.
- Successful verification creates a server session using a Secure, HttpOnly, SameSite cookie.
- Do not store auth tokens or OTPs in localStorage/sessionStorage.
- OTP request throttling, expiry, retry limits, abuse controls and phone verification are backend responsibilities.
- The account UI must not invent a successful session. Until the API exists, it displays a clear connection error.

## Authorization and data boundaries

- Customers may only read their own profile, bookings, tickets, payment records and notifications.
- A customer-supplied booking ID is not authorization. The API must verify ownership on every request.
- Employee check-in and admin management endpoints must never be exposed to customer sessions.
- Admin settings must be split into public booking rules and private operational/security settings.
- Cancellation/reschedule controls are intentionally not exposed until the business cancellation policy and cutoff are confirmed.
- Customer account does not expose employee records, reports, internal revenue analytics, manual bookings, slot blocking or admin role settings.

## Shared ground / concurrency

- Football, Box Cricket and Pickleball share one physical ground.
- Availability must be computed from one shared inventory, not separate sport calendars.
- Slot holds, booking confirmation, payment state transitions and webhook processing must be enforced server-side with transactions and unique inventory constraints.

## Important current limitations

- The existing root booking checkout is still a demo and simulates payment/booking in browser storage.
- The admin panel and employee portal are still prototype screens with mock/demo data.
- The customer OTP, account, booking, ticket, payment and notification endpoints listed here are API contracts; no backend implementation exists in this branch yet.
- The UI must not be presented as live customer authentication until the API and OTP provider are implemented and tested.
- Rates and booking rules displayed in the existing prototype are not confirmed business policy. Confirm actual values before using them as production data.
