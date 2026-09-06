# Archived: Round 65 resolved detail (from CYVEXLY_APP_DEBT.md)

Moved here round 68 to keep `CYVEXLY_APP_DEBT.md` under its 30,720-byte
hot-file cap.

## Resolved round 65

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R54`** — a
  thirtieth consecutive independent confirmation (reviewed commit
  `25118e3`, round 63's HEAD), 0 active code defects. Moved to
  `exchange/processed/`.
- **Adversarially reviewed a new surface** (mailer/rate-limiter/origin-
  gate had gone five rounds clean): the Planner's ~30-field pipeline and
  the Privacy/Terms legal copy. Client/server required-field validation
  matches exactly; header-injection defense and HTML-escaping cover
  every emailed field; `isValidEmail`'s single-`@` regex rules out
  comma-smuggling a second address. Legal-page claims (no cookies/
  analytics/database/payments, draft/no-index) still match shipped
  behavior.
- **Found and fixed: neither API route bounded request body size.** App
  Router Route Handlers impose no default body-size limit, so
  `request.json()` buffered an arbitrarily large POST into memory — the
  same unbounded-per-request shape as round 61's rate-limiter leak on
  this file. Added `readJsonWithLimit()` (`src/lib/mailer.ts`): reads the
  body stream chunk-by-chunk, rejecting once the byte count exceeds a
  100,000-byte cap (real max Planner submission ≈22KB) rather than
  trusting the spoofable `Content-Length` header. Wired into both
  `/api/contact` and `/api/planner`, returning 413 `payload-too-large`.
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173: normal submission still 503; missing fields still 400
  validation; malformed JSON still 400; 150KB body now 413s on both
  routes; a realistic ~15KB full-size Planner payload still parses to
  normal validation, not 413. Committed and pushed.
- **Environment fix, documented in `CYVEXLY_ENVIRONMENT.md`:** this
  session's shell had no `node`/`pnpm` on PATH by default — fixed
  per-PowerShell-call by prepending the real Node install directory and
  `%APPDATA%\npm`.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID first); removed scratch logs/PID file.
