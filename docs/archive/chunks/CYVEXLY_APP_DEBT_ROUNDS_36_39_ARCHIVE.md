# Cyvexly App Debt — Archived Rounds 36-39 Detail

Archived from `CYVEXLY_APP_DEBT.md` in round 43 to keep the file
comfortably under its 30720-byte hot-file cap after adding round 43's
entry. This is the full original text, unedited.

## Resolved round 39

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R30`** — a sixth
  consecutive independent confirmation round (reviewed commit `af9fa82`,
  round 37's HEAD), not a new finding. Moved to `exchange/processed/`.
  `tsc --noEmit`/`lint`/`build` re-run clean before making any change.
- **New QA angle — keyboard/ARIA accessibility sweep, the one vision §17
  item-10 category rounds 31-38 had not covered.** Found and fixed a real,
  reachable defect: no skip-to-main-content link existed on any of the 20
  public routes, so keyboard-only users had to tab through the full primary
  nav on every page load before reaching content (WCAG 2.4.1 Bypass Blocks,
  Level A). Fixed by adding `id="main-content"` to `<main className="flex-1">`
  in all 15 page files and a visually-hidden-until-focused "Skip to main
  content" link as the first element `SiteHeader` renders. Verified with
  real `Input.dispatchKeyEvent` Tab/Enter presses (not scripted `.focus()`,
  which produced a false-positive "no focus indicator" reading during
  investigation before this fix — the site's existing global
  `::focus-visible` rule in `src/app/globals.css:605` works correctly under
  genuine keyboard input, confirmed across 14 routes × 12 tabs each with
  zero missing indicators). Post-fix: first Tab on `/`, `/about`, and
  `/services/business-websites` reveals the visible link, and Enter moves
  focus/hash to the real `<main id="main-content">` on all three. `tsc`/
  `lint`/`build` (27 routes) all pass clean after the change. Full method,
  scripts, and raw output at `docs/agent-system/cyvexly/builder/evidence/
  round-39-*`.
- **Sixth consecutive round confirms the reachable-work queue was not
  actually empty** — the prior five "nothing new" rounds (31, 35-38) had
  simply not yet covered this one QA category. See
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s round-39 entry for the corrected
  recommendation (keep looking for uncovered QA angles, don't assume
  exhaustion).

## Resolved round 38

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R29`** — a fourth
  consecutive independent confirmation round (reviewed commit `52178f7`,
  round 36's HEAD), not a new finding: its own isolated review-port build
  re-verified hot-file byte caps (47 files), `CYV-IFA-012` CLOSED (verified
  across its own R27/R28/R29 history), all 20 routes' canonical tags, all 6
  security headers/CSP, live-production parity across all 20 routes, and a
  32-link crawl with zero broken links — all PASS, matching rounds 35-37. Its
  own summary states "100% clean... all reachable code-level implementation
  work for Chunk 5 is complete." `tsc --noEmit`/`lint`/`build` re-run clean
  (no source touched). Moved to `exchange/processed/`.
- **New QA angle — full-site console/network diagnostics sweep, not
  previously done comprehensively.** Vision §17 item 10 requires "clean
  browser/server diagnostics"; prior rounds spot-checked console output on a
  handful of routes (Home, Contact, About, `/start`) but never all 20 public
  routes together. Started the real production server (`next start --port
  5173`) and drove it with the round-8-established local headless-Chrome/CDP
  technique (`chrome.exe --headless=new`, unique `--user-data-dir` under the
  OS temp root, `--remote-debugging-port`), using CDP `Network`/`Console`/
  `Log` domains to record every console error/warning and every network
  response ≥400 or non-cancellation load failure across all 20 routes (`/`,
  `/services`, `/work`, `/pricing`, `/process`, `/about`, `/contact`, `/faq`,
  `/accessibility`, `/privacy`, `/terms`, `/start`, all 5
  `/services/[slug]`, all 3 `/work/[slug]`). **Result: zero console
  errors/warnings and zero real network failures on every route** (an
  initial pass showed 5 `net::ERR_ABORTED` entries; investigation traced
  these to the script itself — normal Next.js link-prefetch requests
  canceled by navigating to the next route before they completed, not real
  page defects — confirmed by mapping request IDs to URLs via
  `Network.requestWillBeSent` and re-running with cancellation-aware
  filtering, which returned exactly zero on a clean re-run). No defect
  found — this corroborates rather than contradicts rounds 35-37's
  conclusion, from a genuinely new angle instead of repeating the same
  sweep. Full script preserved at
  `docs/agent-system/cyvexly/builder/evidence/round-38-route-sweep.js` and
  raw output at `round-38-route-sweep-output.json` for reproducibility.
  Cleaned up: stopped the owned `next start` process and headless Chrome
  process by exact PID, removed the temporary Chrome profile directory.
- **Fourth consecutive independently-confirmed round (35, 36, 37, 38) with
  zero reachable-without-an-Owner-gate defects**, now covering functional,
  security, link, metadata, live-production, performance, and full
  console/network diagnostics QA categories. See
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s round-38 entry for the escalation
  recommendation.

## Resolved round 37

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R28`** — a third
  consecutive independent confirmation round (reviewed commit `92acb98`), not
  a new finding: its own isolated review-port build re-verified hot-file
  byte caps (47 files), `CYV-IFA-012` CLOSED, all 20 routes' canonical tags,
  all 6 security headers/CSP, and a 32-link site-wide crawl with zero broken
  links — all PASS, matching rounds 35-36. `tsc --noEmit`/`lint`/`build`
  re-run clean as a sanity check (no source touched). Moved to
  `exchange/processed/`.
- **Performance spot-check — vision §17 item 10's "performance" QA category,
  not explicitly measured by any prior round.** Read real build output:
  `.next/static/chunks` totals 764KB across the whole app (largest chunk
  228KB, the React/Next framework runtime). `public/media/
  cyvexly-services-loop.mp4` is 3.8MB; verified `src/components/
  hero-showcase-video.tsx` handles it responsibly — `preload="metadata"`
  (not `"auto"`) with a poster image shown first, and existing logic already
  pauses/skips autoplay under `prefers-reduced-motion`,
  `navigator.connection.saveData`, and `document.hidden`. **No defect
  found** — already the correct pattern for an autoplay background video.
- **Archived stale-cap detail out of two hot files.** `CYVEXLY_ACTIVE_CHUNK.md`
  had drifted to 32460 bytes (over its 30720-byte cap) because rounds 26-29's
  full reports were never archived when later rounds landed; moved to
  `docs/archive/chunks/CYVEXLY_SHARED_THEME_ROUNDS_26_29_REPORT.md`, now
  20713 bytes. `CYVEXLY_NEXT_BUILDER_HANDOFF.md` would have exceeded its
  12288-byte cap with this round's entry added; archived rounds 33-34 to
  `docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUNDS_33_34_REPORT.md`
  (latest-three rule: 35, 36, 37 stay live), now 10633 bytes.
- **Three consecutive rounds (35, 36, 37) now confirm zero
  reachable-without-an-Owner-gate defects**, and this round's new QA angle
  (performance) corroborates rather than contradicts that. See
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s round-37 entry for the recommendation
  to reduce/pause scheduled Builder cadence until an Owner gate clears.

## Resolved round 36

- **Confirmed public Render adoption directly against the live production
  preview, not just build output or a local/isolated-review server.**
  Several rounds' entries above (32-35) note "public Render adoption ...
  remain pending" because their own verification only reached a local
  `next start`/dev server or the Auditor's isolated review port — none
  fetched the actual deployed `https://cyvexly-studio.onrender.com` site
  itself. This round did: navigated the real in-app Browser to
  `https://cyvexly-studio.onrender.com/contact` and confirmed via
  `getBoundingClientRect()` on the live page that the email/phone links sit
  at identical x/width with `y:1240.5`/`y:1276.5` (36px gap, no overlap —
  `CYV-IFA-012`'s fix is live in production, not only in the build
  artifact). A same-origin `fetch()` from that live page confirmed
  `<link rel="canonical" href="https://cyvexly.com/contact">` and all 6
  security headers including the exact CSP string, present on the real
  public HTTP response (`x-nextjs-cache: HIT`, confirming it served the
  actual deployed build, not a cold miss). Zero console errors. This
  closes the "public adoption pending" caveat for rounds 31-34's header/
  CSP/canonical/contact-link work — it is confirmed live, not just built.
  Extended the sweep to all 13 public routes plus `/sitemap.xml`,
  `/robots.txt`, and a 404 probe against the same live production origin:
  all return the expected status (200/404), content type, CSP, and HSTS.
  Also confirmed the staged-release gate is genuinely intact in production
  — live `/` carries `<meta name="robots" content="noindex, nofollow">`
  and `/robots.txt` is `Disallow: /` — so the site is not accidentally
  publicly indexable while Chunk 5 remains open.
- **Dispositioned Auditor inbox item `IFA-2026-09-05-R27`** — an
  independent confirmation round (reviewed commit `620ba77`), not a new
  finding: re-verified `CYV-IFA-012` CLOSED via its own real multi-viewport
  CDP screenshots (1440/768/390px, zero collision/overflow), all 20
  routes' canonical tags, all 6 security headers/CSP, and a 32-link
  site-wide crawl with zero broken links — all PASS, matching round 35's
  own conclusions. `tsc --noEmit`/`lint` re-run clean as a sanity check (no
  source touched). Moved to `exchange/processed/`. **This is the second
  consecutive round confirming zero reachable-without-an-Owner-gate
  defects** — see `CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s round-36 entry for
  the recommendation to surface this to the Owner.

