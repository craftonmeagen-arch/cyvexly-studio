# Cyvexly Active Chunk — Archived Round Reports 31-39

Archived from `CYVEXLY_ACTIVE_CHUNK.md` in round 43 to restore the file's
latest-three rotation (§7.14) and keep it under its byte cap. These rounds'
detail had drifted to staying live well past three rounds; the summarized
outcomes remain in `CYVEXLY_BUILD_SUMMARY.md`/`CYVEXLY_APP_DEBT.md`'s
"Resolved round N" sections. This is the full original text, unedited.

## Round 39 report — global round 39 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R30` (reviewed commit
`af9fa82`, round 37's HEAD). It is a sixth consecutive independent
confirmation, not a new finding. Moved to `exchange/processed/`. Re-ran
`tsc`/`lint`/`build` clean before making any change.

Ran a genuinely new QA angle — a keyboard/ARIA accessibility sweep, the one
vision §17 item-10 category the prior five "nothing new" rounds (31, 35-38)
had not covered — and **found and fixed a real defect**: no skip-to-main-
content link existed on any of the 20 public routes, so keyboard-only users
had to tab through the full primary nav every page load (WCAG 2.4.1 Bypass
Blocks, Level A). Added `id="main-content"` to `<main>` in all 15 page files
and a visually-hidden-until-focused skip link as `SiteHeader`'s first
element. An initial test method (scripted `.focus()`) produced a false-
positive "no focus indicator anywhere" reading; investigated before trusting
it and found Chrome's `:focus-visible` only activates on real keyboard
input — rewrote the check to dispatch genuine `Input.dispatchKeyEvent` Tab
presses, which confirmed the site's existing focus styling already works
correctly (zero missing indicators across 14 routes). Verified the fix the
same way: real Tab+Enter key events on three routes correctly reveal and
activate the new skip link. Full detail in `CYVEXLY_APP_DEBT.md`'s "Resolved
round 39" section and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

This shows the reachable-work queue was not actually exhausted — it had
simply not been probed from this one angle yet. The next Builder should keep
looking for uncovered vision §17 item-10 QA categories (see the handoff's
candidates list) rather than assuming the same "nothing left" conclusion.

## Round 38 report — global round 38 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R29` (reviewed commit
`52178f7`, round 36's HEAD). It is a fourth consecutive independent
confirmation, not a new defect — its own summary states "100% clean... all
reachable code-level implementation work for Chunk 5 is complete." Moved to
`exchange/processed/`.

Re-ran `pnpm exec tsc --noEmit`, `pnpm run lint`, and `pnpm run build` — all
clean, no source changed. Since rounds 31-37 already covered
functional/security/link/metadata/live-production/performance QA, this round
ran a genuinely new angle: a full-site console/network diagnostics sweep
across all 20 public routes (not previously done beyond a handful of
spot-checked routes). Started the real production server and drove it with
the round-8-established local headless-Chrome/CDP technique, recording every
console error/warning and every real network failure. **Zero console
errors/warnings and zero real network failures found on any route** — script
and raw output preserved in `builder/evidence/round-38-route-sweep*` for
reproducibility. No defect found.

**Five consecutive rounds (31, 35, 36, 37, 38) now confirm zero
reachable-without-an-Owner-gate defects**, now spanning every QA category
vision §17 item 10 names. Full detail and the strengthened recommendation to
reduce/pause scheduled Builder cadence until an Owner gate clears are in
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s round-38 entry.

## Round 37 report — global round 37 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R28` (reviewed commit
`92acb98`, round 35's HEAD). It is a third consecutive independent
confirmation, not a new defect: its own isolated review-port build (port
`5273`) re-verified hot-file byte caps (47 files, all within cap), `CYV-IFA-012`
CLOSED, all 20 routes' canonical tags, all 6 security headers/CSP, and a
32-link site-wide crawl with zero broken links — all PASS, matching rounds
35-36. Moved to `exchange/processed/`.

Re-ran `pnpm exec tsc --noEmit`, `pnpm run lint`, and `pnpm run build` — all
clean, no source changed. Since two full release-QA sweeps (rounds 31, 35)
and one live-production sweep (round 36) had already covered functional/
security/link/metadata QA with nothing new, this round instead checked the
one vision §17 item-10 QA category no prior round had explicitly measured:
**performance.** Inspected the real build output: `.next/static/chunks` is
764KB total across the whole app (largest chunk 228KB — the React/Next
framework runtime, not app code), and `public/media/` holds one 3.8MB
autoplay hero video plus a 12KB poster. Read
`src/components/hero-showcase-video.tsx` to check whether that video is
handled responsibly: it uses `preload="metadata"` (not `"auto"`, so the
browser does not download the full 3.8MB file until playback actually
starts) with a poster image shown first, and already pauses/skips autoplay
under `prefers-reduced-motion`, `navigator.connection.saveData`, and
`document.hidden` (built in an earlier round, per
`CYVEXLY_OWNER_DIRECTION.md`'s playback-chrome direction). **No defect
found** — this is already the standard responsible pattern for an autoplay
background video, not a gap.

**Three consecutive rounds (35, 36, 37) now confirm zero reachable-without-
an-Owner-gate defects**, and this round's fresh look at a previously-
unchecked QA category (performance) corroborates rather than contradicts
that. Full detail and the explicit recommendation to reduce/pause scheduled
Builder cadence until an Owner gate clears are in
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s round-37 entry.

## Round 36 report — global round 36 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R27`. It is an
independent confirmation of round 35's own findings, not a new defect: its
own real multi-viewport CDP screenshots verify `CYV-IFA-012` CLOSED
(1440/768/390px, zero collision/overflow), all 20 routes' canonical tags,
all 6 security headers/CSP, and a 32-link site-wide crawl with zero broken
links — all PASS. Moved to `exchange/processed/`. Re-ran `tsc --noEmit`/
`lint` clean as a sanity check; no source changes this round.

**Two consecutive rounds (35, 36) now confirm zero reachable-without-an-
Owner-gate defects.** Full detail in `CYVEXLY_APP_DEBT.md`'s "Resolved
round 36" section and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`, including the
recommendation to surface the remaining Owner gates directly rather than
spend further scheduled rounds re-confirming the same empty result.

## Round 35 report — global round 35 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R26`. Its finding
(`CYV-IFA-012` "STILL OPEN") reviewed commit `bdf0263` — round 33's HEAD,
before round 34's fix (`0afb789`) landed. Re-verified against current
`main` via real DOM measurement (`getBoundingClientRect()` on the Contact
page's email/phone `<a>` tags: correctly stacked, no overlap) — the fix is
genuinely present; this was stale evidence, not a new defect. Moved to
`exchange/processed/`.

Ran a full release-QA sweep (first since round 31's — 3 rounds of narrow
changes since: CSP, canonical tags, contact-link fix). `tsc`/`lint`/`build`
(27 routes) clean; zero worldwide/payment-brand/stale-claim matches in
generated HTML; sitemap/robots/canonical/noindex correct on every route;
a link-crawl script found zero broken internal links; a real running
production server's HTTP headers (all 6 security headers incl. CSP), 404
handling, and sitemap/robots content-types all verified via `curl`;
`/about` verified rendering real content via the live in-app Browser.
**No new reachable-without-an-Owner-gate defect found** — Chunk 5's
remaining scope is unchanged (DNS/domain, email-provider delivery,
analytics ownership, exact LLC name).

Found and corrected two stale `CYVEXLY_CHUNK_DEBT.md` entries left
uncorrected since rounds 29-30 actually resolved them (About/Privacy/Terms
404 claim; OG-image metadata domain-block claim). Archived rounds 31-32's
handoff detail and round 29's app-debt detail to keep both hot files under
cap. Full detail in `CYVEXLY_APP_DEBT.md`'s "Resolved round 35" section and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

## Round 34 report — global round 34 (scheduled/unattended session)

Read all four unread Auditor inbox items (`IFA-2026-09-05-R22` through
`R25`) before planning, per orientation. Their one persistent, reachable,
Owner-gate-free finding — `CYV-IFA-012`, a visual string collision on
`/contact` (`design@cyvexly.com(317) 572-5780` with no separating
whitespace) — had gone unfixed across all four rounds because rounds 30-33
worked on unrelated files. Fixed it: wrapped the email/phone `<a>` tags in a
`flex flex-col gap-2` container. `tsc`/`lint`/`build` (27 routes) clean;
verified in real generated HTML and via real in-app-Browser screenshots at
1440px, 785px, and 390px (zero collision, zero console errors, zero
overflow). Checked the footer for the same pattern — already correctly
block-separated, not affected. Committed (`0afb789`) and pushed to
`origin/main`. Full detail in `CYVEXLY_APP_DEBT.md`'s "Resolved round 34"
section and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`. Moved all four consumed
inbox items to `exchange/processed/` in the external review root.

No other reachable-without-an-Owner-gate defect surfaced in those four
reports beyond `CYV-IFA-012` — confirmed by re-checking `CYV-IFA-005`
(closed, unchanged) and `CYV-IFA-006`/DNS/analytics/LLC-name (genuinely
Owner-blocked, unchanged).

## Round 33 report — global round 33 (scheduled/unattended session)

Reviewed round 32's two locally-committed-but-unpushed commits (CSP fix +
six-role migration): re-ran `tsc --noEmit`/`lint`/`build` clean independently,
then pushed `be60862..8c07262` to `origin/main`.

Closed the last reachable code-only follow-up from `CYVEXLY_APP_DEBT.md`
item 1: added `alternates: { canonical: "/<path>" }` to the root layout and
every route's metadata export (11 static pages, 2 dynamic `generateMetadata`
functions). Verified in real production build output — grepped generated
HTML across the home page, every static route, one service-detail route,
and one case-study route for `<link rel="canonical"` — all resolve to the
correct absolute `https://cyvexly.com/...` URL. `tsc --noEmit`, `lint`, and
`build` (27 routes) pass clean. Full detail in `CYVEXLY_APP_DEBT.md`'s
"Resolved round 33" section and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

Chunk 5's remaining scope (real Contact/Planner email delivery, DNS/domain
connection, analytics/search ownership, final indexability approval) is now
Owner-gated per `CYVEXLY_OWNER_DIRECTION.md` — see the handoff for the next
recommended check before assuming no reachable work remains.

## Round 32 report — global round 32 (scheduled/unattended session)

Added the Content-Security-Policy header `CYVEXLY_APP_DEBT.md` item 3 called
for, but caught mid-round that the textbook nonce + `'strict-dynamic'`
recipe would have silently broken hydration on this site's mostly-static
route architecture (real generated HTML has no `nonce` on Next's own inline
hydration scripts) — corrected to a static `default-src 'self'` policy with
`'unsafe-inline'` limited to `script-src`/`style-src`, verified against a
real running production server (headers via `curl`, interactivity via the
in-app Browser driving the Planner form through a step). Full detail in
`CYVEXLY_APP_DEBT.md`'s "Resolved round 32" section.

Also committed the two-round-old "six-role rule-system migration" diff that
rounds 30-31 had each found pre-existing and left uncommitted, after running
its own self-validation harness (`Test-RoleSetup.ps1`) and fixing the one
real defect it surfaced — `CYVEXLY_NEXT_BUILDER_HANDOFF.md` had grown past
its 12288-byte hot-file cap from accumulated round history, fixed by
archiving rounds 28-30's detail to `docs/archive/chunks/
CYVEXLY_BUILDER_HANDOFF_ROUNDS_28_30_REPORT.md`. Both the migration and the
CSP change are committed to local `main` but deliberately not pushed to
`origin/main` this round — see `CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s round-32
entry for why and what the next round/Owner should do.

## Round 31 report — global round 31 (scheduled/unattended session)

Full-site release-QA sweep (all 27 routes, first since About/Privacy/Terms
landed round 30): `tsc`/`lint`/`build` clean, zero broken internal links
(Node script cross-checked every generated `href` against real routes),
sitemap complete, footer legal links present sitewide, no stale worldwide/
payment/founder claims, 375/768/1440px responsive with no overflow,
`noindex` consistent. Found and closed one reachable gap: `next.config.ts`
had no security headers at all. Added `X-Content-Type-Options`,
`X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and
`Strict-Transport-Security`; verified present on real fetch responses and
that the site still renders correctly. CSP intentionally deferred to its own
round — see `CYVEXLY_APP_DEBT.md` open item 3. Full detail in
`CYVEXLY_NEXT_BUILDER_HANDOFF.md` and `CYVEXLY_APP_DEBT.md`'s "Resolved
round 31" section.
