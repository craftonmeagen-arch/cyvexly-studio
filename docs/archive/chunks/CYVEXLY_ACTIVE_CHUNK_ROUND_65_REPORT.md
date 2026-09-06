# Cyvexly Active Chunk — Round 65 full report (archived)

Archived round 67 from `CYVEXLY_ACTIVE_CHUNK.md` to keep that file under
its 30,720-byte hot-file cap (round 67's own new report pushed the file
over cap even after archiving round 64 alone) — 66, 67 stay live.

## Round 65 report — global round 65 (scheduled/unattended session)

Dispositioned the one new Auditor inbox item, `IFA-2026-09-06-R54`
(reviewed commit `25118e3`, round 63's HEAD). **Thirtieth consecutive
independent confirmation, not a new finding** — 0 active code defects.
Moved to `exchange/processed/`.

**Redirected adversarial energy per round 64's recommendation** (the
mailer surface had gone five rounds clean): read the Planner's ~30-field
pipeline (`src/app/api/planner/route.ts`, `src/lib/mailer.ts`) and the
Privacy/Terms legal copy adversarially. Client (`validateStep`) and
server required-field checks match exactly; header-injection defense and
HTML-escaping cover every field reaching an email; `isValidEmail`'s
single-`@` structure rules out smuggling a second address via comma.
Legal-page claims (no cookies/analytics/database/payments, draft/no-index
status) still match shipped behavior.

**Found and fixed: neither API route bounded request body size.** App
Router Route Handlers impose no default body-size limit (unlike the
Pages API's 1mb `bodyParser`), so `request.json()` buffered an
arbitrarily large POST into memory — the same unbounded-per-request
shape as round 61's rate-limiter leak on this file, on the body instead
of a `Map`. Added `readJsonWithLimit()` (`src/lib/mailer.ts`): reads the
body stream chunk-by-chunk, aborting once the running byte count exceeds
a 100,000-byte cap (real max Planner submission ≈22KB) rather than
trusting the spoofable `Content-Length` header. Wired into both routes,
returning 413 `payload-too-large`.

**Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port 5173:
normal small submission still 503 not-configured; missing fields still
400 validation; malformed JSON still 400; a 150KB body now 413s on both
routes; a realistic ~15KB full-size Planner payload still parses to
normal validation, not 413.

**Environment note:** this session's shell had no `node`/`pnpm` on PATH
by default — fixed per-call by prepending the real Node directory and
`%APPDATA%\npm`; documented in `CYVEXLY_ENVIRONMENT.md` for next round.

Committed and pushed. Cleaned up: stopped the owned server (verified the
real listener PID first); removed scratch logs/PID file.
