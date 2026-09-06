# Cyvexly Next Builder Handoff

## Round 61 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-06, 50-minute hard
time limit (unattended)
**Start source:** `1854a3f` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item
(`IFA-2026-09-06-R51`) and found/fixed a second real defect in the same
rate-limiter code round 60 had just fixed.
**Completion:** REAL SOURCE FIX LANDED — see below.

### What was checked

- `IFA-2026-09-06-R51` (reviewed commit `6f41600`, round 59's HEAD,
  predating round 60's rate-limiter fix) is a **twenty-seventh
  consecutive independent confirmation, not a new finding** — 0 active
  code defects. Moved to `exchange/processed/`.
- **Found and fixed an unbounded-memory-growth defect in
  `checkRateLimit` (`src/lib/mailer.ts`).** The in-memory `Map` tracking
  submission timestamps per key never deleted a key once created — a
  stale key's timestamps filter down to an empty array but the key
  itself stays in the map forever. Any caller varying its own key grows
  the map without bound; the `x-forwarded-for` fallback in `getClientIp`
  (still the only path for non-Cloudflare traffic, e.g. the direct
  Render origin round 60 already named as a residual bypass) is exactly
  such a caller, since the client fully controls that header. A pure
  in-process memory-exhaustion DoS, independent of round 60's already-
  named rate-limit-bypass gap.
- **Fixed:** added periodic pruning — every 5 minutes, or immediately if
  the map exceeds 5,000 tracked keys, delete any key whose timestamps
  are all outside the 15-minute window. No change to external rate-limit
  behavior.
- Verified: `tsc --noEmit`/`lint`/`build` all clean (same pre-existing,
  unrelated lint warning in the round-42 evidence script). Real `next
  start` server on port 5173: same-IP 6-request regression still 429s on
  the 6th, both before and after the change; a 5,200-request concurrent
  burst with unique spoofed `x-forwarded-for` values completed with zero
  fetch errors and no server-log errors (exercising the size-triggered
  immediate prune); the same-IP regression re-checked immediately after
  the burst still correctly 429'd on the 6th on both `/api/contact` and
  `/api/planner`. A 14-route sweep found zero regressions.
- Committed and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`LISTENING` before stopping). Removed this
  round's scratch server log, PID file, and burst-test script.

### Recommended next workstream

Re-sweep for any newly published Auditor findings first; keep hunting
for genuinely new adversarial angles in the rate-limiter/mailer surface
(two real defects found there in two consecutive rounds — 60 and 61 —
after 25+ rounds of clean audits, so this area rewarded closer scrutiny).
The residual Cloudflare-bypass gap named in round 60 is still an account-
level gate, not Builder-reachable. Genuinely Owner-gated items are
unchanged: Resend account/DNS/API key, analytics/Search Console
ownership, exact LLC name, About/legal/visual review, final
indexability approval (see `CYVEXLY_OWNER_DIRECTION.md`).

## Round 60 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-06, 50-minute hard
time limit (unattended)
**Start source:** `6f41600` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item
(`IFA-2026-09-06-R50`) and found/fixed a real security defect via
adversarial testing that no prior Auditor round had named.
**Completion:** REAL SOURCE FIX LANDED — see below.

### What was checked

- `IFA-2026-09-06-R50` (reviewed commit `32a0e10`, round 58's HEAD,
  predating round 59's meta-description fix) is a **twenty-sixth
  consecutive independent confirmation, not a new finding** — 0 active
  code defects. Moved to `exchange/processed/`.
- **Found and fixed a real security defect — the Contact/Planner rate
  limiter's client-IP detection was trivially bypassable.**
  `getClientIp()` (`src/lib/mailer.ts`) took the first (leftmost)
  comma-separated value from the client-supplied `X-Forwarded-For`
  header, which a client fully controls since a proxy conventionally
  appends its own observed peer to the header rather than replacing it.
  Proved this live against the real route: 7 POST requests to
  `/api/contact`, each carrying a unique spoofed `X-Forwarded-For`, all
  bypassed the 5-per-15-minute limiter that correctly 429'd a 6th request
  sharing one real key.
- **Fixed:** production traffic to `cyvexly.com` is confirmed (round 53)
  to run through Cloudflare in front of Render, so `getClientIp` now
  checks `cf-connecting-ip` first (set by Cloudflare's edge, not
  forgeable by the client), falling back to the old X-Forwarded-For logic
  only when that header is absent.
- Verified: `tsc --noEmit`/`lint`/`build` all clean (same pre-existing,
  unrelated lint warning in the round-42 evidence script). Real `next
  start` server on port 5173: re-ran the spoofed-header attack with a
  fixed `CF-Connecting-IP` present — the 6th request now correctly 429s
  on both `/api/contact` and `/api/planner`. A fresh full-site crawl (20
  HTML routes + sitemap/robots/manifest + an invalid path) found zero
  broken internal links, zero duplicate titles/descriptions, correct
  redirects/404s, zero regressions.
- Committed (`4102764`) and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server twice (verified the
  real listener PID via `netstat`/`LISTENING` each time). Removed this
  round's own scratch files, and successfully removed the two
  Windows-locked scratch logs from rounds 57/58 that earlier rounds
  couldn't clear.

### Recommended next workstream

**Named, not Builder-reachable:** the rate-limiter fix has a residual gap
— an attacker hitting the direct Render origin
(`cyvexly-studio.onrender.com`) instead of `cyvexly.com` bypasses
Cloudflare and can forge `cf-connecting-ip` at the origin directly.
Closing it needs a Render/Cloudflare account-level control (Authenticated
Origin Pulls, or an IP allowlist on the Render origin) — see
`CYVEXLY_APP_DEBT.md`. Otherwise: re-sweep for any newly published
Auditor findings first; genuinely Owner-gated items are unchanged (Resend
account/DNS/API key, analytics/Search Console ownership, exact LLC name,
About/legal/visual review, final indexability approval).

Round 59 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_59_REPORT.md` (moved
there round 61 to keep this file under its 12,288-byte hot-file cap).
Round 59 fixed a 6-char meta-description overage on Home.

Round 58 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_58_REPORT.md` (moved
there round 60 to keep this file under its 12288-byte hot-file cap).
Round 58 fixed a hot-file-cap violation, a handoff-rotation defect, and
shipped `html lang="en-US"`.

Round 57 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_57_REPORT.md` (moved
there round 59 to keep this file under its 12,288-byte hot-file cap).
Round 57 trimmed 5 oversized meta descriptions.

Round 56 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_56_REPORT.md` (moved
there round 58 to keep this file under its 12288-byte hot-file cap). Round
56 added OfferCatalog JSON-LD to `/pricing`.

Round 55 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_55_REPORT.md` (moved
there round 56 to keep this file under its 12288-byte hot-file cap). Round
55 added Service JSON-LD to the five `/services/[slug]` detail pages.

Round 54 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_54_REPORT.md` (moved
there round 58 to restore correct latest-three rotation — this file had
incorrectly kept round 54 live while round 55 was archived; see the
archive file's note). Round 54 added per-slug Open Graph images for
`services/[slug]` and `work/[slug]`.

Round 53 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_53_REPORT.md` (moved
there round 57 to keep this file under its 12288-byte hot-file cap). Round
53 was the full launch-readiness pass: verified domain/HTTPS live,
replaced Contact/Planner `mailto:` with real server-side Resend delivery,
added dormant GA4/GSC scaffolding, fixed a stale Privacy Policy section,
and ran a sitewide audit finding zero defects.

Round 52 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_52_REPORT.md (moved there
round 55 to keep this file under its 12288-byte hot-file cap). Round 52
added per-route Open Graph images for 8 static marketing routes.

Round 50 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_50_REPORT.md (moved there
round 52 to keep this file under its 12288-byte hot-file cap). Round 50
added COOP/CORP security headers and `/.well-known/security.txt`.

Round 51 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_51_REPORT.md (moved
there round 53 to keep this file under its 12288-byte hot-file cap).
Round 51 added sitewide Open Graph/Twitter Card metadata.

Round 49 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_49_REPORT.md (moved there
round 51 to keep this file under its 12288-byte hot-file cap). Round 49
added route-segment/root-layout error boundaries and viewport theme-color/
color-scheme metadata.

Round 48 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_48_REPORT.md (moved there
round 50 to keep this file under its 12288-byte hot-file cap). Round 48
added raster 192/512 PNG manifest icons and fixed a print-legibility defect.

Round 47 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_47_REPORT.md (moved there
round 49 to keep this file under its 12288-byte hot-file cap). Round 47
implemented the Apple touch icon.

Round 46 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_46_REPORT.md (moved there
round 49 to keep this file under its 12288-byte hot-file cap). Round 46
removed five dead scaffold SVG assets and added the Web App Manifest.

Round 45 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_45_REPORT.md (moved there
round 48 to keep this file under its 12288-byte hot-file cap). Round 45
implemented BreadcrumbList JSON-LD for service-detail and case-study
routes.

Rounds 39-44 closeout detail is archived at their correspondingly named
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_<N>_REPORT.md` files
(consolidated round 61 to keep this file under its 12,288-byte hot-file
cap): FAQPage JSON-LD (44), sitewide Organization JSON-LD (43), Contact
honeypot fix (42), no defect found (41), Planner scroll/focus fix (40,
`71d233f`), skip-to-main-content fix (39). Rounds 38, 37, 36, 35, 33-34,
31-32, and 28-30 are archived at their correspondingly named files under
`docs/archive/chunks/`. The current Chunk 5 scope and Owner gates are
summarized in `CYVEXLY_ACTIVE_CHUNK.md` and `CYVEXLY_OWNER_DIRECTION.md`.
