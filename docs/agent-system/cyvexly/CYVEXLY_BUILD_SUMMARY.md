# Cyvexly Build Summary

## Setup baseline — 2026-08-30

- Owner-approved role packets copied into the project.
- Project-scoped Builder, Supervisor, Auditor, and Council environments configured.
- No product round or source change was performed as part of role setup.
- No recurring scheduler was created.

## Round 1 — 2026-08-30

- Established the actual source baseline: initialized Git, scaffolded a
  Next.js 16 + TypeScript + Tailwind v4 application, and committed it as
  source truth.
- Implemented the cyber-arctic design system (color tokens, Space
  Grotesk/Inter/JetBrains Mono typography, glass/grid utilities) from
  `CYVEXLY_VISION_PLAN.md` §4.
- Built the full Home page (hero, credibility strip, selected work,
  capabilities, difference statement, process preview, pricing preview, FAQ
  preview, final CTA, footer) matching vision §6.1 and `mockups/01-home.png`.
- Verified with clean build/typecheck/lint and real dev-server content,
  console/network, and interaction checks (desktop + mobile viewports).
- Fixed two reachable tooling defects: a BOM/encoding bug that made
  `Claim-BuilderLock.ps1` fail to parse on every invocation, and Next.js
  auto-appending an agent-rules block into the Owner-authored root
  `AGENTS.md`. Details in `CYVEXLY_WATCH.md`.
- Opened and closed Chunk 1 (Foundation & Home) in the same round; closed the
  visual-comparison gap using real screenshots a concurrently-running
  Auditor round happened to publish, which also surfaced and led to a fix
  for a real tablet-width header overlap bug.
- Opened Chunk 2 (core marketing pages) and built/verified `/process`.
- See `CYVEXLY_ACTIVE_CHUNK.md` for the full round report and
  `CYVEXLY_CHUNK_DEBT.md` / `CYVEXLY_APP_DEBT.md` for open items.

## Round 2 — 2026-08-30

- Built and verified five more Chunk 2 pages: `/services` (7 service groups
  with icon badges, "popular website types" section fixing previously-dead
  footer anchors, service-combination table, FAQ), `/pricing` (5 package
  tiers, comparison table, add-ons, care plans, payment schedule, FAQ),
  `/contact` (accessible form with client-side validation and a
  mailto-bridge submit path, since no email-delivery service is authorized
  yet), `/work` (filterable portfolio grid), and `/work/[slug]` (case-study
  template with full content for all three concept projects, including a
  real color-swatch + typography "visual direction" section added after
  comparing against `mockups/03-work-case-study.png`).
- Opened Chunk 4 early and built three of its items: a custom `/not-found`
  page, the full `/faq` library (11 categories, 30 Q&As), and
  `/accessibility` statement. Deliberately did not attempt `/privacy` or
  `/terms` — they need Owner-supplied jurisdiction facts first (see
  `CYVEXLY_APP_DEBT.md` item 3).
- Chunk 2 is now effectively complete except the Owner-blocked About page.
- Found and fixed one real runtime bug (Next.js 16 dynamic `params` is a
  Promise; a hand-written sync type passed typecheck/build but broke every
  real request) and one real visual-comparison gap (missing case-study
  "visual system excerpt") — see `CYVEXLY_WATCH.md` and
  `CYVEXLY_CHUNK_DEBT.md`.
- Verified every new and pre-existing route via a live dev server: real
  rendered content, zero console errors, all network requests successful,
  working interactions (FAQ accordions, mobile nav, work filter, contact
  form validation + submit) confirmed via `javascript_tool`-dispatched real
  DOM events (`computer` click/type actions proved non-functional in this
  unattended session — see `CYVEXLY_WATCH.md`), and no horizontal overflow
  at 375px mobile width on any new page.
- With time remaining, continued past the initial page build: added a
  hand-authored SVG favicon (`icon.svg`, Chunk 4's fourth item this round),
  then ran a real measured heading-hierarchy check across all seven round-2
  pages (not just code review) and found/fixed one genuine defect (`/work`
  skipped H1→H3). Also found the reserved Builder port 5173 occupied by an
  unrelated foreign process mid-round and worked around it on scratch ports
  rather than touching it — see `CYVEXLY_WATCH.md`.

## Round 3 — 2026-08-30

- Closed Pricing icon-parity debt: added five hand-authored package icons
  matching the existing Services icon pattern, verified via the real dev
  server.
- Independently re-verified and formally closed Chunk 2 (Core marketing
  pages) per §7.9 — only the Owner-blocked About page remains, honestly
  bounded.
- Ran the §4.12 Outcome Reachability Check for Chunk 3's email-delivery
  mechanism before opening it: sending a real confirmation email "from
  Cyvexly" is unreachable until both a transactional-email provider and
  the production domain are decided; the Planner's UI is a genuinely
  separable, authorized, reachable slice recommended for the next round.
- Fixed a real launch-readiness gap from vision §15: added `robots.txt`
  and a site-wide `noindex, nofollow` meta default (opt-in via one env
  var), since neither existed and the site would have been fully
  crawlable by default.
- Built a real, on-brand social-sharing (Open Graph) image via Next's
  `ImageResponse`, then tested — rather than assumed — whether it needed
  the undecided domain: the dev server initially suggested it didn't, but
  checking the actual production build output caught that the
  auto-generated meta URLs would ship broken (`http://localhost:3000`)
  without `metadataBase`. The image asset itself is kept; the metadata
  wiring stays correctly deferred.
- Found a real, previously-unverified favicon defect using a new proxy
  technique (a served, `curl`-fetched image opened with `Read` renders
  as a real viewable image in this session, unlike a live browser-tab
  screenshot): the current favicon mark is not legible at 16x16, the
  actual default browser-tab size. Routed to an attended session for
  confirmation and redesign rather than guessing a fix.
- Ran a first structured launch-readiness pass against all 14 items in
  vision §15, producing a concrete current-state list for the next
  Builder/Owner rather than a general "not ready yet."
- Rotated the round-2 full report out of `CYVEXLY_ACTIVE_CHUNK.md` into
  `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND2_REPORT.md` to stay under the
  30KB hot-path cap; fixed the archive index, which had gone stale since
  round 2's own archival.

## Round 4 — 2026-08-30

- Opened Chunk 3 (Project Planner) and built the full nine-step UI/state/
  validation at `/start` per vision §6.9/§9: a config-driven field set
  (`planner-config.ts`), a reusable field-component library
  (`planner-fields.tsx`), a clickable numbered progress rail matching the
  mockup (`planner-progress.tsx`), and the full wizard
  (`planner-form.tsx`) with per-step validation, "not sure — recommend
  it" escape hatches, conditional questions, a review step with edit
  links, a spam-protection honeypot, and a client-side "save & continue
  later" draft. Submission reuses Contact's `mailto:` interim bridge,
  explicitly labeled as not yet sending a real confirmation email from
  Cyvexly (still blocked on the domain + email-provider decision, per
  round 3's §4.12 Reachability Check).
- Found and fixed a real CSS Grid "blowout" mobile-overflow bug during
  verification: the Planner's two-column `lg:`-only grid layout let a
  horizontally-scrollable progress rail force the entire page 622px wide
  on a 375px viewport, because the grid item had no `min-w-0` and
  couldn't shrink below its content's min-content size. Root-caused by
  walking the DOM for the actual widest element, fixed at the source with
  one `min-w-0` class, then re-verified zero overflow across all nine
  steps individually.
- Verified the whole flow through real dispatched DOM events (per-step
  required-field validation, conditional field reveal/hide, progress-rail
  jump-back with state persistence, save/reload draft restore, the full
  nine-step review summary reflecting every entered value, and final-step
  submit-button gating on the two required checkboxes) rather than code
  reading alone. Did not complete a real `mailto:` submission, matching
  the Auditor's own established discipline for Contact.
- Rotated the round-3 full report out of `CYVEXLY_ACTIVE_CHUNK.md` into
  `docs/archive/chunks/CYVEXLY_CHUNK4_ROUND3_REPORT.md` to stay under the
  30KB hot-path cap; updated the archive index.
- With time remaining in the scheduled work window, ran a grep-based
  field-usage audit of the new `planner-form.tsx` and found two real
  gaps: a `pagesOther` and an `essentialPages` field were typed and
  initialized but never rendered (both explicit vision §9 step-4
  requirements). Fixed and re-verified live. Separately found that the
  Planner's step-change scroll-to-top used `window.scrollTo({behavior:
  "smooth"})`, which bypasses the site's global CSS
  `prefers-reduced-motion` rule; fixed by checking `matchMedia` at call
  time and verified both branches via a `scrollTo`/`matchMedia` spy.
- Landed as 13 total commits (one initial + twelve "(cont.)" follow-on
  fixes, including three groups of Planner buttons with missing/duplicate
  accessible names found by re-auditing the round's own work).

## Round 5 — 2026-08-30

- Revisited two open items from the closed Chunk 2 (closed does not mean
  frozen), both independently flagged as reachable, well-scoped, and not
  Owner-blocked by every input read this round.
- Rebuilt `/process`'s steps section as a connected vertical timeline
  (numbered circle badges linked by a continuous line, matching
  `mockups/04-process-planner.png`), added a "Typical timing" summary
  table (derived directly from existing `processSteps` data) and an "Our
  collaboration promise" panel (grounded in already-established facts —
  approval points, two-business-day response time, 14-day post-launch
  support). Closed `CYVEXLY_CHUNK_DEBT.md` item 1, open since round 1.
- Replaced the Work grid/case-study flat two-tone gradients — flagged
  independently by both the Auditor (`CYV-IFA-002`) and the Council
  (`CYC-R1-F002`) as their own "Next" priority finding — with
  `src/components/concept-preview.tsx`: three distinct, hand-authored
  abstract SVG compositions, one per concept project, each visualizing
  that project's own already-written creative "decisions" and reusing
  only its own established palette. Found and fixed a real design-system
  violation during self-review (an invented color not in any project's
  palette) via a grep-based cross-check before commit. Pixel-verified all
  three via the established `ImageResponse`-proxy technique (a temporary
  scratch route, deleted immediately after inspection per the
  ephemeral-evidence rule). A direct comparison against
  `mockups/03-work-case-study.png` also found the case-study page was
  entirely missing a "Desktop & mobile experience" device-frame preview
  section; built it too, reusing the same artwork, and verified zero
  overflow at desktop/tablet/mobile widths. Partially closed
  `CYVEXLY_CHUNK_DEBT.md` item 2 — real photographic/screen-sequence
  imagery, what both reviewers' closure tests actually ask for, remains
  open pending an Owner framing decision on whether abstract concept
  artwork is an acceptable permanent answer for fictional case studies. A
  brief web search found that general design-industry practice for
  speculative portfolio work centers on disclosure (which Cyvexly's
  "Concept project" labeling already provides), not a specific visual-
  fidelity bar — useful context for that Owner decision, not a substitute
  for it. Also ran a full clean production-build verification (not just
  the dev server) as a final check, given this project's own established
  history of dev/build behavior differences.
- The Browser pane's live-tab screenshot limitation persisted from every
  prior round, and a related new symptom appeared mid-round
  (`clientWidth`/`innerWidth` reading `0`, `visibilityState` reading
  `"hidden"`) that blocked further viewport-dependent measurement — worked
  around using DOM/fetch verification and the `ImageResponse`-proxy
  technique instead of claiming untestable geometry as verified. See
  `CYVEXLY_WATCH.md` and `CYVEXLY_ACTIVE_CHUNK.md`'s round-5 report for
  full detail.

## Round 6 — 2026-08-30

- Read the Council's now-formally-published `CYC-R2-20260830-01` report
  (landed after round 5 closed) and fixed its three reachable, non-Owner-
  blocked findings: the Planner progress rail at `/start` didn't keep the
  active step visible at 390px/768px (`CYC-R2-F001`), the Services
  "Common combinations" table clipped its right column at 390px with no
  scroll affordance (`CYC-R2-F004`), and a Next.js console warning about
  `scroll-behavior`/`data-scroll-behavior` on `<html>` (`CYC-R2-F005`).
- A grep for the same table-overflow defect shape found and fixed two more
  instances on Pricing (the package-comparison and add-ons tables) that
  the Council hadn't audited this round — same reflow-to-cards fix applied
  for consistency.
- Verified all three fixes through a real dev server (driving the full
  nine-step Planner via dispatched DOM events, measuring the progress
  rail and reflowed tables at 390px/768px/1280px), a full sitewide
  structural sweep (all twelve routes, zero regressions), and a clean
  production-build pass with real built-HTML grep confirmation for each
  fix. Isolated and documented a new instance of the session's known
  frame-compositing limitation (`scrollIntoView({behavior:"smooth"})`
  doesn't animate here) using a monkey-patch-and-verify technique that
  proves the fix's logic and intended end state without needing a working
  live-tab screenshot. See `CYVEXLY_ACTIVE_CHUNK.md`'s round-6 report and
  `CYVEXLY_WATCH.md` for full detail.
- Rotated the round-5 full report out of `CYVEXLY_ACTIVE_CHUNK.md` into
  `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND5_REPORT.md`, and rotated
  `CYVEXLY_WATCH.md`'s rounds 1-4 (in two passes, as new content needed
  the room) into `docs/archive/CYVEXLY_WATCH_ARCHIVE.md` to bring both
  hot-path files back under their §7.14 caps (Watch had grown to ~26.8KB
  against its 20KB cap; a pre-existing overage, not caused by this round,
  repaired at closeout per §7.14).
- Refreshed the vision §15 launch-readiness pass round 3 first established
  (gone stale after three rounds of real progress): still not launch-ready,
  same four Owner-input blockers, but concrete measurable progress (fewer
  sitemap gaps, the Planner now assessable and partially ready, stronger
  accessibility/portfolio evidence). Tested `computer{action:"key"}`
  directly for the first time and confirmed it produces zero real keyboard
  events in this session (same frame-compositing limitation as clicks/
  screenshots), closing the loop on the Council's suggested keyboard-
  traversal-testing follow-up honestly rather than leaving it untried.
- **Incident:** near closeout, a too-broad process-stop filter briefly
  stopped a concurrently-running Council round's own dev-server processes
  (`council-20260830T204540Z`, port 5373) — a real cross-role
  non-interference violation. The Council round self-healed within
  minutes, confirmed with direct evidence (fresh registered PIDs, port
  responding again). Full account and the root-cause fix for future
  process-stop filters are in `CYVEXLY_WATCH.md` and
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

## Round 7 — 2026-08-30

- Redesigned the favicon/OG-image C/Y signal mark to fix the real 16px
  legibility defect found round 3, unfixed for three rounds while
  waiting on an "attended session" that never materialized in this
  session type. Tested three candidate designs against the current mark
  with real pixel evidence (16/32/64px, light and dark backgrounds) via
  the established `ImageResponse`-proxy technique before choosing a
  single-weight fused orbit-arc-plus-checkmark design; verified through
  the real shipping `icon.svg`/`opengraph-image` routes in both dev and
  a clean production build, zero regressions. `CYVEXLY_CHUNK_DEBT.md`
  item 3's favicon half is now resolved.
- Ran a real DOM/accessibility-tree-level keyboard-traversal, focus-
  order, error-announcement, and progress-semantics audit of all nine
  Planner steps — the Council's own explicit "Next Council question" —
  using `javascript_tool`, `read_page`'s computed accessibility tree,
  and `get_page_text`, since live `computer` key presses remain proven
  unreachable in this session type. Found and verified: correct focus
  order, native form controls with proper `<label>`/`<fieldset>`/
  `<legend>` wiring on most steps, a correctly-built `aria-pressed`
  toggle-group pattern on the one step using custom buttons, real
  `role="alert"`/`aria-describedby` error wiring throughout, distinguishing
  `aria-label`s on the review step's eight identical-text "Edit" buttons,
  a measured-sufficient (5.06:1) focus-visible indicator on the Planner/
  Contact text-field pattern, and no additional reduced-motion gap
  beyond the two already-fixed effects. Honestly bounded as a
  complementary proof layer, not a substitute for real Tab-key testing.
- Made no code changes for the keyboard audit (verification only).
  Rotated `CYVEXLY_ACTIVE_CHUNK.md`'s round-6 full report to
  `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND6_REPORT.md` and
  `CYVEXLY_WATCH.md`'s round-5 entries to
  `docs/archive/CYVEXLY_WATCH_ARCHIVE.md` to stay under both files'
  §7.14 hot-path caps.
- **Follow-on, same round:** building a real multi-resolution
  `favicon.ico` (found: `src/app/favicon.ico` had never actually been
  replaced — still the generic Next.js scaffold icon, not even the old
  C/Y mark) surfaced a real bug in the favicon redesign just committed:
  the mark genuinely overflowed its 32x32 viewBox by 14 units, measured
  precisely rather than assumed, small enough at the sizes first checked
  to escape notice. Fixed by rescaling/recentering the same design and
  re-verifying its true bounding box stays inside the viewBox at every
  target size. Landed as a second source commit (`ce6d273`) fixing the
  first (`97f7b69`), plus this round's documentation-update commits.

## Round 8 — 2026-08-30

- Closed the current Council's independently confirmed Home selected-work
  presentation gap at the source: Home still rendered flat gradient bands while
  Work/case studies used truthful project-specific abstract SVGs. A whole-source
  pattern search found Services had the same stale rendering, so both surfaces
  now reuse the existing `ConceptPreview` component rather than introducing a
  second artwork system.
- Preserved card geometry, responsive breakpoints, links, and explicit
  `CONCEPT PROJECT` disclosure. Product change committed as `d04dc9d`.
- Established a stronger unattended visual-proof method: local Chrome 151
  headless + Chrome DevTools Protocol, driven by Node 24's built-in WebSocket.
  This bypasses the in-app Browser pane's known suspended compositor without
  changing it. CDP exact device metrics also exposed that raw Windows
  `--window-size=390` can misleadingly crop a wider minimum layout; exact CDP
  390px evidence proved the product itself has no horizontal overflow.
- Verification passed: lint, production build (only the known Owner/domain-
  blocked `metadataBase` warning), post-build typecheck, 15-route live sweep,
  opened Home/Services visual captures at 1440/768/390, exact
  `scrollWidth === clientWidth` checks, three-card/three-preview counts, and
  source/diff reconciliation. Rotated round 7 from the near-full active hot-path
  file and retained only cited round-8 captures/metrics.
- Audited 395 internal-link instances across twelve rendered pages and 27 unique
  route/hash targets: no unexpected status or fragment failure; only the known
  Owner-blocked About, Privacy, and Terms targets returned 404.
- Used CDP native Chromium Tab/Enter dispatch to close round 7's remaining
  keyboard-proof gap at exact 1440px and 390px. The first run found validation
  alerts were correctly exposed but focus remained on `Continue`; fixed the
  Planner to focus its first invalid control and gave radio/checkbox groups
  stable names plus linked error IDs (`da9c6d9`). The identical post-fix run
  passed with no offscreen/unindicated focus stop, hidden desktop-nav leak at
  phone width, or overflow, and focused `input#fullName` after Enter. A second
  390px production-runtime matrix advanced all nine steps and proved the same
  first-error focus/error linkage across radio cards, checkbox cards, and
  ordinary checkboxes.
- A final terminology sweep found the case-study artwork still announced itself
  as a `concept visual placeholder`. Corrected that stale user-facing accessible
  label to `abstract concept visual` (`4bdab10`) and proved the final build has
  15 new-label matches across generated Work HTML/RSC and zero old matches.
