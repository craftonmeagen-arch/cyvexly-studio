# Cyvexly App Debt — Round 31 Archived Detail

Archived from `CYVEXLY_APP_DEBT.md` in round 38 to keep that file under its
30720-byte hot-file cap.

## Resolved round 31

- **Release-QA sweep across all 27 routes now that About/Privacy/Terms
  exist.** No round had looked at the whole site together since those three
  pages landed (round 30). Verified: `tsc --noEmit`/`lint`/`build` all clean
  (27 routes, zero warnings — the historical `metadataBase` warning is
  confirmed gone); a Node script cross-checked every internal `href` in the
  generated HTML against the actual generated route set — zero broken
  internal links (the one non-route hit, `/start`, is the intentionally
  dynamic Planner route, not a defect); `sitemap.xml` lists all 17 static/
  SSG routes including `/about`, `/privacy`, `/terms`; grepped generated HTML
  for `worldwide`, `hello@cyvexly`, `founder` (as a claim, not the honest
  "no founder mythology" disclosure line), and named payment brands — none
  found; footer `/privacy` and `/terms` links present on every generated page
  except Next's generic `_global-error` fallback (expected, has no shared
  layout). Used the real in-app Browser (this session type can composite/
  screenshot, confirmed again after round 30) to visually check About/
  Privacy/Terms at 375px/768px/1440px — no horizontal overflow at any width,
  hamburger nav correct at 768px (below the `lg` breakpoint), mobile menu
  opens via a real dispatched click and lists all expected links including
  About/Privacy/Terms/design@cyvexly.com/tel:+13175725780. Confirmed
  `noindex, nofollow` still present on the three new pages, consistent with
  every other page's staged-release gate. No defects found in the existing
  three pages.
- **Added baseline HTTP security headers (vision §17 item 10's "security
  headers" QA requirement) — reachable, no Owner gate.** `next.config.ts`
  had no `headers()` function at all. Added `X-Content-Type-Options: nosniff`,
  `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`,
  `Permissions-Policy` (denies camera/microphone/geolocation/payment/usb and
  disables `interest-cohort`, consistent with the Privacy Policy's "no
  tracking" claims), and `Strict-Transport-Security` (`max-age=63072000;
  includeSubDomains; preload`) applied to every route. CSP is deliberately
  not included yet — see the new "Open" item 3 above. Verified via a real
  `fetch()` against the running dev server that all five headers are present
  on the actual response (not just declared in config), then reloaded the
  Home page and confirmed it still renders correctly with zero new console
  errors (the only console entries are dev-mode HMR WebSocket messages,
  unrelated to the headers change and absent from a production build).
  `tsc --noEmit`, `lint`, and a full production `build` (27 routes) all pass
  after the change.
