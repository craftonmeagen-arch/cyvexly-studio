# Cyvexly Active Chunk

**Chunks:** 3 — Project Planner (opened round 4, in progress) and 4 —
Utility/legal pages (opened round 2, in progress) retain incomplete closure
items. **Chunk 5 — United States Launch Completion & Business Operations is
now OPEN**, started round 29. Its integrated verification will close the
overlapping delivery and launch items in Chunks 3 and 4. Chunk 2 — Core
marketing pages — remains closed but revisitable.

**Round 62** (scheduled/unattended, 50-minute limit) found no new
Auditor item and instead prepared dormant, Builder-reachable scaffolding
for the round-60-named Cloudflare-bypass gap: an origin-secret header
check that stays inert until the Owner adds a matching Cloudflare
Transform Rule and Render env var. See the round-62 report below and
`CYVEXLY_APP_DEBT.md` item 3.

**Round 61** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R51` (27th consecutive confirmation, 0 active code
defects) and found/fixed a second real defect in round 60's own new
rate-limiter code: the in-memory tracking `Map` never deleted a key, so
an attacker varying its own key (the spoofable `x-forwarded-for`
fallback) could grow it without bound — a memory-exhaustion DoS. See the
round-61 report below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 61"
section.

**Round 60** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R50` (26th consecutive confirmation, 0 active code
defects) and found/fixed a real security defect no prior Auditor round
had named: the Contact/Planner rate limiter's client-IP detection was
trivially bypassable via a spoofed `X-Forwarded-For` header. See the
round-60 report below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 60"
section.

**Round 59** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R49` (25th consecutive confirmation, 0 active code
defects; its hot-file-cap observation on `CYVEXLY_CURRENT_STATE.md` was
already stale, fixed round 58) and fixed the one real finding it raised:
the Home route's meta description at 166 chars, 6 over the ~155-160 char
budget round 57 established sitewide. See the round-59 report below and
`CYVEXLY_APP_DEBT.md`'s "Resolved round 59" section.

**Round 58** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R48` (24th consecutive confirmation, 0 active code
defects; its "Production Domain & DNS Connection" gate note is stale,
corrected by round 53) and fixed the one real finding it raised: a
hot-file-cap violation in `CYVEXLY_CURRENT_STATE.md` (archived rounds
52-56's duplicated detail, rewrote it as a lean dashboard). Also found and
fixed a rotation-order defect in `CYVEXLY_NEXT_BUILDER_HANDOFF.md` (round
54 had stayed live out of order ahead of round 55), and shipped an
`html lang="en"` → `en-US` correction matching the US-only launch market
(named as untried in round 57's handoff). See the round-58 report below
and `CYVEXLY_APP_DEBT.md`'s "Resolved round 58" section.

**Round 55** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R45` (21st consecutive confirmation, 0 active code
defects; reviewed commit `26bc8b2`, predating round 54's per-slug OG
images) and shipped Service JSON-LD for the five `/services/[slug]`
detail pages — previously the only structured-data type missing from the
site's core commercial routes. See the round-55 report below and
`CYVEXLY_APP_DEBT.md`'s "Resolved round 55" section.

**Round 54** (interactive session) dispositioned Auditor item
`IFA-2026-09-06-R44` (20th consecutive confirmation, 0 active code
defects; its "domain DNS still needed" gate note was stale, already
corrected by round 53) and shipped per-slug Open Graph images for the
`services/[slug]` and `work/[slug]` dynamic routes — the exact gap round
52's handoff named as pre-existing and untried. See the round-54 report
below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 54" section.

**Round 53** (interactive session, Owner direction `2026-09-05-15` — "take
Cyvexly to production-ready and launch-ready") verified the domain/HTTPS/
canonicalization is already fully live (correcting a stale debt entry),
replaced Contact/Planner `mailto:` submission with real server-side email
delivery via Resend, added dormant GA4/GSC scaffolding, fixed a stale
Privacy Policy section, and ran a sitewide audit finding zero defects. See
the round-53 report below and `CYVEXLY_APP_DEBT.md` items 1-2.

**Round 52** (scheduled/unattended, 50-minute limit) dispositioned the
nineteenth consecutive Auditor confirmation (`IFA-2026-09-06-R43`, 0 active
code defects) and shipped per-route Open Graph images — every route shared
Home's single generated `opengraph-image`, so shared links for About/
Services/Pricing/Work/Process/Contact/FAQ/Project Planner all showed the
same generic Home preview. See the round-52 report below and
`CYVEXLY_APP_DEBT.md`'s "Resolved round 52" section.

**Round 51** (scheduled/unattended, 50-minute limit) dispositioned the
eighteenth consecutive Auditor confirmation (`IFA-2026-09-06-R42`, 0 active
code defects) and shipped sitewide Open Graph and Twitter Card metadata —
every route had `title`/`description`/canonical but none defined
`og:site_name`, `og:type`, `og:locale`, or `twitter:card`, so shared links
carried no branded preview and Twitter/X never rendered the large-image
card at all. See the round-51 report below and `CYVEXLY_APP_DEBT.md`'s
"Resolved round 51" section.

**Round 50** (scheduled/unattended, 50-minute limit) dispositioned the
seventeenth consecutive Auditor confirmation (`IFA-2026-09-05-R41`, 0 active
code defects), fixed a real hot-memory rotation defect in this file (round
47's report had gone un-archived and round 48's report was accidentally
duplicated in its place), and shipped COOP/CORP security headers plus a
`/.well-known/security.txt` file. See the round-50 report below and
`CYVEXLY_APP_DEBT.md`'s "Resolved round 50" section.

**Round 29** (scheduled/unattended, 50-minute limit) opens Chunk 5 and closes
one bounded workstream: public contact identity (`design@cyvexly.com`, `(317)
572-5780`) sitewide, the code-only half of production metadata/discovery
(`metadataBase`, `sitemap.xml`), and a United States-only truth audit removing
stale "worldwide"/international-market and unsupported-payment-method claims.
See the round-29 report below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 29"
section. Chunk 5's About page, Privacy/Terms, real inquiry delivery,
domain/DNS connection, analytics, and full release QA remain open — this is
one workstream, not chunk completion.

**Current status:** The nine-step Planner UI/state/validation remains built and
verified at `/start`; real server-side email still needs an authorized provider,
credentials, and verified sending domain. `/not-found`, `/faq`, and
`/accessibility` are complete; `/privacy` and `/terms` can now be drafted for
Indiana/United States operations once the exact registered LLC name is
confirmed; the favicon is fixed. The Owner has confirmed `cyvexly.com`,
`design@cyvexly.com`, `(317) 572-5780`, United States-only availability, and a
logo-led/no-personal-founder About direction. Payment and real portfolio
replacement are tabled. Round 19 prevents
invalid dynamic-route metadata from replacing the correct hydrated 404 title
and gates the Planner until saved-draft restoration completes. Round 20 removes
the Home reel's visible muted/duration, progress, and circular playback chrome,
slows playback to `0.75×`, and preserves pause/resume on the complete named
media surface. Round 21 carries the Owner-approved pale-blue architectural
glass environment across route families with protected copy fields and verified
contrast. Round 22 restores the shared sticky header, completes Home/Services section
continuity, and defers the unavailable About link without inventing content.
Round 23 repairs shared validation contrast. Round 24 implements authoritative
Owner direction `2026-09-01-10` over every full public page height. Round 25
hardens the shared navigation lifecycle/current semantics and closes one
enlarged-root Services overflow without changing that appearance. Round 26
strengthens the shared visible environment after Owner rejection. Round 27
rebuilds Home's first viewport as a discrete architectural-glass scene after
the Owner found Round 26 insufficient. Round 28 carries that architecture
through middle/lower sections and all matching route families with persistent
scene structure and protected bounded glass bays. Round 18 replaces
Pricing's sparse text-only entry with a split glass scope signal and coordinated
package field while preserving every package fact. Round 17 replaces
the Services combination table with five mockup-aligned, icon-led glass
pathways and a Planner handoff, including compact-desktop breakpoint hardening.
Round 16 implements Owner direction 2026-08-31-07 as a larger integrated Home
reel inside a light-ice-blue glass stage. Round 15 makes the accepted Home
video visible on the real Render site by aligning the deployment branch with
accepted source. Round 14's five focused service-detail journeys and safe
Planner preselection remain intact alongside rounds 11-13's Home systems.

## Active chunk boundaries

### Chunk 3 — Project Planner

- **Outcome:** A calm, nine-step conversational form at `/start`, covering the
  complete vision field plan and eventually sending a real automatic
  confirmation email from Cyvexly.
- **Built:** UI, state, validation, conditional fields, review/edit, draft save,
  responsive progress rail, and DOM/accessibility-tree audit.
- **Remaining:** the real server-side delivery path. The production domain is
  now confirmed; a business-inbox/transactional-email provider, credentials,
  sending-domain verification, internal receipt, visitor confirmation, and
  production delivery proof remain.
- **Closure boundary:** the UI remains fully proved and the delivery gap is
  implemented and publicly proved after provider/account authorization; if an
  account gate remains, it must be named precisely rather than treated as an
  unknown domain decision.

### Chunk 4 — Utility, legal & launch readiness

- **Outcome:** utility/legal routes, metadata assets, and launch-readiness
  conditions from vision §15.
- **Built:** custom 404, FAQ, Accessibility statement, favicon/ICO, OG image,
  robots/no-index preview default.
- **Remaining:** logo-led About, Indiana/United States Privacy/Terms, exact LLC
  legal-name confirmation, `cyvexly.com` DNS/HTTPS/canonical setup,
  production-domain metadata, sitemap, indexing release, analytics/search
  ownership, and full production QA. Chunk 5 owns this integrated completion.

### Chunk 5 — United States Launch Completion & Business Operations (NEXT)

- **Authority:** Owner direction `2026-09-04-14`, vision §17, and the Chunk 5
  entry in `CYVEXLY_PROJECT_CHUNK_MAP.md`.
- **Outcome:** launch a truthful, contactable, searchable, legally coherent
  United States business site on canonical `https://cyvexly.com`.
- **Required scope:** domain/HTTPS/canonical redirects; metadata/canonicals/
  social URLs/sitemap/staged robots; `design@cyvexly.com` and public phone;
  logo-led About; Indiana/United States Privacy and Website Terms; secure real
  Contact/Planner delivery and visitor confirmation; privacy-aware analytics
  and search ownership; United States/payment/portfolio truth audit; complete
  public release QA.
- **Deferred:** payment-provider integration and real-client portfolio
  replacement. Do not invent, activate, or claim either.
- **Owner gates:** exact registered LLC name; account-bound DNS/Render access;
  inbox/transactional-email provider authorization and securely entered
  secrets; analytics/Search Console ownership or no-analytics decision; About/
  legal/public-visual review; final indexability approval.
- **Closure boundary:** all Chunk 5 requirements pass on the production domain,
  and the carried Chunk 3/4 operational items are closed. A partial domain-only,
  legal-only, or UI-only release does not close this chunk.

## Round 62 report — global round 62 (scheduled/unattended session)

No new Auditor inbox item was published this round (the last consumed
item was `IFA-2026-09-06-R51`, dispositioned round 61).

**Prepared dormant scaffolding for the residual Cloudflare-bypass gap**
round 60 named and round 61's finding shared a root cause with: an
attacker hitting the direct Render origin (`cyvexly-studio.onrender.com`)
skips Cloudflare and can forge `cf-connecting-ip` themselves, since
nothing between the attacker and Render overwrites it on that path.
Fully closing this needs a Cloudflare-dashboard control (a Transform
Rule, or Authenticated Origin Pulls) this role cannot configure — but the
origin-side half of a shared-secret-header mitigation is pure code and
is Builder-reachable now, dormant until the Owner does the one-time
Cloudflare/Render setup.

Added `isTrustedOrigin()` (`src/lib/mailer.ts`): returns `true`
unconditionally while `CF_ORIGIN_SECRET` is unset (today's state, so
zero behavior change), and once set, requires an exact-matching
`x-cf-origin-secret` request header, rejecting anything else with 403.
Wired into both `/api/contact` and `/api/planner` as the first check in
each `POST` handler. Exact Owner activation steps recorded in
`CYVEXLY_APP_DEBT.md` item 3.

**Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
pre-existing, unrelated lint warning in the round-42 evidence script).
Real `next start` server on port 5173, tested in both states:
- **Dormant** (`CF_ORIGIN_SECRET` unset): a request with no secret header
  and one with a wrong secret header both still reach the normal 503
  not-configured response on `/api/contact` — unaffected.
- **Activated** (`CF_ORIGIN_SECRET` set): a request with no header and
  one with a wrong header both correctly 403 on `/api/contact` and
  `/api/planner`; a request with the exact matching header passes
  through to the normal validation/mailer path on both routes.
A 14-route regression sweep (12 HTML routes + sitemap.xml/robots.txt + an
invalid path) was clean in the activated state. Safe to commit and push
immediately since the gate stays inert for real production traffic until
the Owner completes the Cloudflare/Render step.

Cleaned up: stopped both owned `next start` server instances (verified
the real listener PID via `netstat`/`LISTENING` before each stop).
Removed this round's scratch server logs and PID files.

## Round 61 report — global round 61 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-06-R51` (reviewed
commit `6f41600`, round 59's HEAD, predating round 60's rate-limiter
IP-spoofing fix). **Twenty-seventh consecutive independent confirmation,
not a new finding** — 0 active code defects. Moved to `exchange/processed/`.

**Found a second real defect in the same rate-limiter code round 60 had
just fixed, through adversarial review of that fix rather than a fresh
feature sweep.** `checkRateLimit` (`src/lib/mailer.ts`) stores its sliding
window in a plain `Map<string, number[]>` keyed by client IP, but never
deleted a key once created — after a key's timestamps all age out of the
15-minute window, the filtered-to-empty array is still written back with
`.set()`, so the key lives in memory forever. Any caller that can vary its
own key grows the map without bound. The `x-forwarded-for` fallback path
in `getClientIp` (still active for non-Cloudflare traffic, e.g. the direct
Render origin round 60 already named as a residual bypass) is exactly
such a caller: an attacker can mint an unlimited number of distinct
`x-forwarded-for` values, so this is a pure in-process memory-exhaustion
DoS with no rate limit of its own to slow it down — independent of, and
additive to, round 60's already-named Cloudflare-bypass gap.

**Fixed:** added `pruneStaleEntries()`, called from `checkRateLimit`
whenever 5 minutes have elapsed since the last prune or the map exceeds
5,000 tracked keys (whichever comes first), deleting any key whose
timestamps are now all outside the window and compacting the rest.
Bounds worst-case memory to roughly one 5-minute burst plus the window's
worth of genuinely active keys, without changing the limiter's external
behavior.

**Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
pre-existing, unrelated lint warning in the round-42 evidence script).
Real `next start` server on port 5173: (1) regression — 6 requests from
one spoofed IP to `/api/contact` still correctly 429 on the 6th, both
before and after the change; (2) new-defect proof — a 5,200-request
concurrent burst, each with a unique spoofed `x-forwarded-for`, completed
with zero fetch errors and no server-log errors/exceptions (exercising
the size-triggered immediate prune, since 5,200 exceeds the 5,000-key
threshold well before the 5-minute timer would fire); a same-IP 6-request
regression check immediately afterward still correctly 429'd on the 6th,
proving the prune did not corrupt live rate-limit state. Same check
repeated on `/api/planner`. A 14-route sweep (12 HTML routes +
sitemap.xml/robots.txt + an invalid path) found zero regressions.
Committed and pushed.

Cleaned up: stopped the owned `next start` server (verified the real
listener PID via `netstat`/`LISTENING` before stopping). Removed this
round's scratch server log, PID file, and burst-test script under the OS
temp scratchpad.

## Round 60 report — global round 60 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-06-R50` (reviewed
commit `32a0e10`, round 58's HEAD, predating round 59's meta-description
fix). **Twenty-sixth consecutive independent confirmation, not a new
finding** — 0 active code defects. Moved to `exchange/processed/`.

**Found a real security defect through adversarial testing that no prior
Auditor round had named.** `getClientIp()` (`src/lib/mailer.ts`) keyed the
Contact/Planner rate limiter off the first (leftmost) comma-separated
value in the client-supplied `X-Forwarded-For` header — fully attacker
controlled, since a proxy conventionally appends its own observed peer to
the header rather than replacing it. Proved this live: 7 POST requests to
`/api/contact`, each with a unique spoofed `X-Forwarded-For`, all sailed
past the 5-per-15-minute limiter that correctly 429'd a 6th request
sharing one real key — a one-line client change defeated the
"proportionate accessible spam/rate protection" Owner direction
`2026-09-04-14` requires.

**Fixed:** production traffic to `cyvexly.com` is confirmed (round 53) to
run through Cloudflare in front of Render, so `getClientIp` now checks
`cf-connecting-ip` first — set by Cloudflare's edge and overwritten on
every request, never passed through from the client — falling back to
the old (still-spoofable) `X-Forwarded-For` logic only when that header
is absent.

**Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
pre-existing, unrelated lint warning in the round-42 evidence script).
Real `next start` server on port 5173: re-ran the exact spoofed-header
attack with a fixed `CF-Connecting-IP` present — the 6th request now
correctly 429s regardless of the (still-varying, still-spoofed)
`X-Forwarded-For`, on both `/api/contact` and `/api/planner`. A fresh
full-site crawl (20 HTML routes + sitemap/robots/manifest + an invalid
path) found zero duplicate titles/descriptions, zero broken internal
links (22 checked), correct trailing-slash redirects, correct 404s, and
correct immutable/no-cache cache-header split between hashed
`_next/static` assets and unhashed `public/` files. Committed (`4102764`)
and pushed.

**Named, not fixed — a genuine Owner/account gate:** an attacker can
still bypass this by hitting the direct Render origin
(`cyvexly-studio.onrender.com`) instead of `cyvexly.com`, skipping
Cloudflare and forging `cf-connecting-ip` at the origin directly. Closing
that needs a Render/Cloudflare account-level control (Authenticated
Origin Pulls, or an IP allowlist on the Render origin) this role cannot
configure.

Cleaned up: stopped the owned `next start` server twice (before and after
the rebuild; verified the real listener PID via `netstat`/`LISTENING`
each time). Removed this round's own scratch server logs/crawl script,
and successfully retried removing the two Windows-locked scratch logs
named in round 58's handoff (now gone).

Round 59's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_59_REPORT.md` (moved
there round 62 to restore latest-three rotation) — 60, 61, 62 stay live.
Round 59 trimmed Home's meta description to fit the sitewide budget.

Round 58's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_58_REPORT.md` (moved
there round 61 to restore latest-three rotation) — 59, 60, 61 stay live.
Round 58 fixed a hot-file-cap violation, a handoff-rotation defect, and
shipped `html lang="en-US"`.

Round 53's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_53_REPORT.md` (moved there
round 58 to restore latest-three rotation) — 54, 55, 58 stay live. Round 53
was the full launch-readiness pass: verified domain/HTTPS live, replaced
Contact/Planner `mailto:` with real server-side Resend delivery, added
dormant GA4/GSC scaffolding, fixed a stale Privacy Policy section, and ran
a sitewide audit finding zero defects.

Round 54's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_54_REPORT.md` (moved there
round 59 to restore correct latest-three rotation — this file had kept 54
live alongside 55 and 58, one round too many). Round 54 added per-slug
Open Graph images for `services/[slug]` and `work/[slug]`.

Round 55's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_55_REPORT.md` (moved there
round 60 to restore latest-three rotation) — 58, 59, 60 stay live. Round 55
added Service JSON-LD to the five `/services/[slug]` detail pages.

Round 51's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_51_REPORT.md` (moved there
round 54 to restore latest-three rotation) — 52, 53, 54 stay live. Round 51
added sitewide Open Graph and Twitter Card metadata.

Round 50's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_50_REPORT.md` (moved there
round 53 to restore latest-three rotation). Round 50
added COOP/CORP security headers and `/.well-known/security.txt`, and
fixed a hot-memory rotation defect.

Round 48's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_48_REPORT.md` (moved there
round 51 to restore latest-three rotation) — 49, 50, 51 stay live. Round 48
added raster 192/512 PNG manifest icons and fixed a print-legibility
defect.

Round 49's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_49_REPORT.md` (moved there
round 52 to restore latest-three rotation) — 50, 51, 52 stay live. Round 49
added route-segment/root-layout error boundaries and viewport theme-color/
color-scheme metadata.

Round 45's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_45_REPORT.md` (moved there
round 48 to restore latest-three rotation). Round 45 implemented
BreadcrumbList JSON-LD for service-detail and case-study routes.

Round 44's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_44_REPORT.md` (moved there
round 47 to restore latest-three rotation) — 45, 46, 47 stay live. Round 44
implemented FAQPage JSON-LD for `/faq`.

Round 43's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_43_REPORT.md` (moved there
round 46 to restore latest-three rotation) — 44, 45, 46 stay live. Round 43
found the site had no structured data at all and added sitewide
`Organization` JSON-LD.

Round 42's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_42_REPORT.md` (moved there
round 45 to restore latest-three rotation). Round 42 found and fixed the
Contact form's missing spam-protection honeypot and live-verified the
Planner's honeypot for the first time; also swept the Planner review step
for RTL/very-long-name overflow with no defect found.

Rounds 40-41 full reports are archived at docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_40_41_REPORT.md (moved there round 44 to restore latest-three rotation). Round 41 closed both of round 40's named QA candidates (WCAG 1.4.10 reflow/zoom, a Back-button re-check) with no defect found. Round 40 found and fixed the Planner step-advance scroll/focus/live-region defect (`71d233f`).

Rounds 31-39 full reports are archived at docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md (moved there round 43 to restore latest-three rotation). Summarized outcomes remain in CYVEXLY_BUILD_SUMMARY.md and CYVEXLY_APP_DEBT.md.

## Prior round summaries

- **Round 1:** established Next.js/TypeScript/Tailwind source truth, design
  system, Home, and Process; closed Chunk 1. Full report:
  `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND1_REPORT.md`.
- **Round 2:** built Services, Pricing, Contact, Work/case studies, FAQ,
  Accessibility, and 404; fixed a Next.js 16 dynamic-params runtime bug. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND2_REPORT.md`.
- **Round 3:** closed Chunk 2 with About honestly bounded, ran the Planner email
  reachability check, added no-index/robots and OG asset, and refreshed launch
  readiness. Full report: `docs/archive/chunks/CYVEXLY_CHUNK4_ROUND3_REPORT.md`.
- **Round 4:** opened Chunk 3 and built/verified the full Planner, including
  mobile-overflow, missing-field, reduced-motion, and accessible-name fixes.
  Full report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND4_REPORT.md`.
- **Round 5:** rebuilt Process as a connected timeline and replaced Work/case-
  study gradients with truthful project-specific `ConceptPreview` SVGs. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND5_REPORT.md`.
- **Round 6:** fixed three Council findings plus two same-shape Pricing table
  issues; root-caused the unattended-browser compositor limitation. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND6_REPORT.md`.
- **Round 7:** redesigned/fixed the favicon and real ICO, and audited Planner
  keyboard-accessibility properties through DOM/accessibility-tree evidence.
  Full hot-path snapshot/report:
  `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND7_REPORT.md`.

- **Round 8:** unified truthful concept artwork across Home, Services, and Work;
  established exact CDP rendering and fixed Planner first-error focus. Full
  report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND8_REPORT.md`.
- **Round 9:** fixed cross-computer scale drift from browser font defaults/rem
  breakpoints and strengthened shared glass/large-text resilience. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND9_REPORT.md`.
- **Round 10:** ran the wider method audit and added the inset glass header,
  credibility icon rail, and capability-card grammar. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND10_REPORT.md`.
- **Round 11:** integrated the Owner-supplied Home showcase video with honest
  provenance, motion/data-saver controls, and responsive media proof. Full
  report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND11_REPORT.md`.
- **Round 12:** added the Home partnership diagram and five-stage process-route
  visual system. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND12_REPORT.md`.
- **Round 13:** replaced the flat Home final CTA with a split luminous
  planetary/network composition. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND13_REPORT.md`.
- **Round 14:** added five focused service-detail journeys and safe Planner
  preselection. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_SERVICES_ROUND14_REPORT.md`.
- **Round 15:** repaired the deployment/source branch mismatch so the accepted
  Home video appeared on the real Render site. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_DEPLOYMENT_ROUND15_REPORT.md`.
- **Round 16:** implemented the larger integrated Owner-directed Home reel.
  Full report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND16_REPORT.md`.
- **Round 17:** replaced the Services combination table with five icon-led
  audience pathways. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_SERVICES_ROUND17_REPORT.md`.

Rounds 18 and 19 are archived at
`docs/archive/chunks/CYVEXLY_SHARED_PRICING_ROUND18_REPORT.md` and
`docs/archive/chunks/CYVEXLY_SHARED_FOUNDATIONS_ROUND19_REPORT.md`.

Round 24 is archived at
`docs/archive/chunks/CYVEXLY_SHARED_THEME_ROUND24_REPORT.md`.

Round 25 is archived at
`docs/archive/chunks/CYVEXLY_SHARED_FOUNDATIONS_ROUND25_REPORT.md`.

Rounds 26-29 (Owner-rejection visual-fidelity corrections and the Chunk 5
opening workstream) are archived at
`docs/archive/chunks/CYVEXLY_SHARED_THEME_ROUNDS_26_29_REPORT.md`.
