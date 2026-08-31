# Cyvexly Build Summary

Older setup and rounds 1-4 are preserved in
`docs/archive/CYVEXLY_BUILD_SUMMARY_ARCHIVE.md`.

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

## Round 9 — 2026-08-30

- Reproduced the Owner-observed 100%-zoom cross-computer scale discrepancy with
  a custom 24px browser-default profile and traced it to the implicit rem design
  root plus rem media-query breakpoints.
- Commit `8ec27c1` pins the author root at 16px, defines Tailwind breakpoints in
  CSS pixels, and upgrades the shared glass primitive, grid atmosphere, header,
  primary CTA, and hero orbit toward the accepted mockup's luminous depth.
- Normal and custom-24px browser profiles now produce exact matching geometry
  at 1440px; DPR 1/1.5 and 720px/390px states retain correct reflow and zero
  overflow. Lint, build, typecheck, real route sweep, and opened rendered
  comparison passed.
- Chrome and Edge then passed 132 route/profile/viewport checks and four native
  mobile-menu interaction checks. A separate minimum-font-24 audit exposed two
  phone overflows; commit `2d82b0b` fixed Pricing add-on and Process timing-row
  wrapping, after which all 33 large-text cases passed.
- Final CTA gradient-stop contrast math caught a sub-4.5:1 bright stop; commit
  `95c365f` retains the luminous treatment with 4.86–5.25:1 normal and
  5.44–7.61:1 hover contrast. Final lint/build/typecheck passed.
- Actual second-computer confirmation and Owner visual-parity judgment remain;
  no launch/domain/legal/email blockers changed.

## Round 10 — 2026-08-30

- Ran the every-fifth-round wider methodology audit. Rounds 7–9 had improved
  evidence quality, responsive scale, and glass tokens, but another opacity/
  blur tweak would have repeated a diminishing method. Round 10 instead mapped
  the accepted Home mockup to reusable structural primitives.
- Commit `6b81922` ships an inset rounded shared glass header/mobile sheet,
  five hand-authored credibility icons in a translucent signal rail, and the
  established service icons plus restrained signal edges on all six Home
  capability cards. Copy, claims, links, breakpoints, and root scale remain
  unchanged.
- Opened production renders at exact 1440, 768, and 390 widths plus the open
  compact menu, card section, and explicit 24px-root stress state. The header
  depth and icon-led rhythm are materially closer to `mockups/01-home.png`;
  final Owner parity remains an active judgment, not a Builder claim.
- Lint, clean production build, post-build TypeScript, a 13-route phone-width H1/overflow sweep,
  a 65-case shared-header boundary matrix, exact geometry/icon counts, native
  CDP Tab/Enter compact-menu traversal, a 26-case structural semantics/control
  audit, and the 24px-root resilience stress check passed. Port 5173 was
  occupied by an
  unrelated pre-lock EduAILenz Vite process; it was preserved and proof ran on
  Builder-owned 5183.
- A final clean production runtime status sweep passed all 15 expected routes/
  assets plus the intended 404. Across 300 internal-link instances, the only
  failing targets are the three already-bounded Owner-blocked routes.
- The four Owner decisions and second-computer confirmation remain unchanged.

## Round 11 — 2026-08-31

- Replaced Home's static orbit with the Owner-supplied 30-second systems
  showcase, delivered as a silent fast-start H.264 loop with a 12KB WebP poster,
  responsive glass framing, and a visible accessible Play/Pause control.
- Preserved autoplay only for visible, ordinary-motion sessions. Reduced motion
  and the browser's explicit data-saving preference hold the poster; explicit
  Play remains available, and an explicit user pause survives later visibility/
  connection changes. Product commit: `34a5bd3`.
- Opened exact 1440/768/390 production renders and proved normal advance/pause,
  the 30-second loop, reduced-motion still/native Enter playback, save-data
  before/after and live-change behavior, correct MIME/range delivery, 13 route
  statuses, and 12 phone semantic/overflow states. A cold 150ms/~1.64Mbps run
  recorded video/poster LCP at 1.004s and negligible layout shift.
- Lint, production build, and post-build TypeScript passed. The first post-fix
  build exposed that a live Chrome profile inside the project tree can be swept
  by Turbopack/Tailwind and fail on Chrome's locked cookie DB; the owned profile
  was removed, rerun outside the tree, and the build passed with only the known
  domain-blocked `metadataBase` warning.
- Existing Owner decisions and original-device confirmation remain unchanged;
  final mockup parity stays an Owner judgment.

## Round 12 — 2026-08-31

- Changed method from glass-token tuning to the next two reference-visible
  structural gaps: an original luminous partnership-system diagram now anchors
  the Home difference panel, and five distinct stage icons/numbered nodes form
  a connected desktop process route with contained tablet/phone cards.
- Product commit `13d3673` changes only the Home composition, two reusable SVG
  components, and shared CSS; business copy, routes, claims, media, and
  interactions remain unchanged.
- Opened exact 1440/768/390 production renders, a 1440x4731 full-page render,
  and a 24px-root phone stress state. All are width-contained; the SVG ink
  stays within its viewBox; CDP exposes the process as one list with five
  children and ignores the decorative diagram.
- Lint, production build, post-build TypeScript, and a 13-route phone status/
  heading/ID/image-alt/control-name/overflow audit passed with zero console
  errors or runtime exceptions. Only the known domain-blocked `metadataBase`
  warning remains.
- Rotated rounds 8-9 from Active Chunk, rounds 1-7 from Watch, and setup/rounds
  1-4 from Build Summary. All Builder hot files are back below their caps with
  exact history preserved in `docs/archive/`.

## Round 13 — 2026-08-31

- Used the Council-confirmed round-12 source and accepted Home mockup to select
  the largest remaining reachable parity gap: the final CTA's missing luminous
  system artwork. Portfolio imagery stayed bounded rather than being invented.
- Product commit `1df0203` converts the flat centered CTA into a compact split
  glass panel with an original decorative planetary/network horizon. Existing
  copy and `/start` behavior remain unchanged; phone centers the copy and lowers
  the horizon while desktop/tablet retain the split hierarchy.
- Opened exact 1440/768/390 changed-surface renders and a full Home capture.
  Nine 320-1440 width boundaries and a 390px/24px-root state are contained with
  zero document overflow. Heading/body/note contrast is 14.97+/11.12+/8.66+.
- Native CDP input hit the real CTA link and reached `/start`; the accessibility
  tree ignores the visual SVG. A 16-route phone production sweep passed status,
  `main`/H1, image-alt, and overflow checks. Runtime exceptions and unexpected
  console warnings/errors are zero; logged 404 prefetches are only the three
  documented Owner-blocked routes.
- Lint, clean production build, and post-build TypeScript pass. Round 10's full
  report rotated to the chunk archive so Active Chunk retains the latest three
  reports and remains below its hot-file cap.

## Round 14 — 2026-08-31

- Completed the vision §6.3 service-detail gap with one typed, reusable static
  template and exactly five routes: Business Websites, Website Redesigns,
  Landing Pages, E-commerce Websites, and Website Care. Product commit:
  `930e050`.
- Each detail journey includes the required outcome, problem, inclusions,
  labeled concept example, client inputs, price/timing factors, related
  package/starting price, FAQs, and `Include this in my project` CTA. The
  code-native orbital signal extends the cyber-arctic system without inventing
  client results or media.
- Converted Services-card/footer dead-end anchors into real route entries while
  preserving the legacy IDs. `/start?service=` adds an announced, editable
  type/goal/care starting point only when no local saved draft exists; saved
  user work stays authoritative.
- Lint, TypeScript, and optimized build pass with 23 generated pages. All five
  routes return 200 with correct title/H1/main/Planner links and no duplicate
  IDs. Exact 1440/768/390, 320px, 24px-root, long-copy, native navigation,
  reduced-motion, semantics, and all-five Planner mapping proofs pass.
- Visual review found and fixed a too-narrow exact-768px split hero by reserving
  the split for `lg`; the final stacked tablet render is retained. The known
  Owner-blocked `metadataBase` warning and `/about` prefetch 404 remain honestly
  bounded.
- Rotated round 11's exact Active Chunk report to the chunk archive so the hot
  path retains the latest three reports and remains below its cap.
