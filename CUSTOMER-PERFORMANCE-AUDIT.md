# Customer Website — Performance Audit (Initial)

Branch: `admin-phase1`  
Scope: root `index.html` only  
Audit date: 2026-11-25

## Preservation constraints

- Do not change layout, colors, typography, spacing, content, responsive behavior, or existing animations.
- Do not modify the Three.js turf view: scene geometry, camera, lighting, textures, materials, model switching, controls, or animation loop.
- Do not deploy to production or merge into `main`.

## Observations from the current source

1. The page loads Three.js r128 from cdnjs as a render-blocking external script.
2. The head already preconnects to Google Fonts. The Three.js CDN did not have a preconnect hint.
3. The hero turf texture is generated synchronously on the main thread using a 560×560 canvas, approximately 26,000 procedural grass strokes and 5,000 specks, then converted to a JPEG data URL.
4. The Three.js view creates a 2,048×1,280 canvas texture and performs substantial procedural drawing (including 60,000 grass strokes and 70,000 specks) when its scene initializes. Its render loop is already gated by an IntersectionObserver while the view is off-screen. **This 3D code has not been changed.**
5. The page uses requestAnimationFrame to coalesce scroll-driven parallax work and a passive scroll listener.
6. Booking availability and checkout are currently simulated in the browser with localStorage and a timeout. This is prototype behavior, not safe production booking or payment logic.
7. No ordinary `<img>` elements or video elements were found in the inspected customer source; the visible turf textures are canvas-generated.

## Change made

- Added a browser preconnect hint for `https://cdnjs.cloudflare.com`, the existing Three.js script host.
- No visual styles, page markup structure, booking behavior, Three.js source, scene configuration, or animation logic was modified.

## Next optimization candidates (not yet applied)

1. Measure the current page with Lighthouse and browser performance profiling before changing code.
2. Profile the hero canvas generation separately; any optimization must preserve its final texture and appearance.
3. Consider splitting/defer-loading non-critical code only after a controlled test proves the 3D view and initial appearance remain identical. Do not edit the 3D scene itself.
4. Replace localStorage-based demo booking with a backend API before production; enforce shared-ground slot uniqueness on the server/database.
5. Add production error monitoring and API request budgets once the backend exists.

## Validation status

- Source-level inspection completed.
- Visual regression, Lighthouse, mobile-device profiling, and live hosting load tests have **not** been run because the Hostinger plan has not yet been purchased and no deployed staging URL is available.
