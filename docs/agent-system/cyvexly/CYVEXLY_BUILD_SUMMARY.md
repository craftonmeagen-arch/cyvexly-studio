# Cyvexly Build Summary

Older setup and rounds 1-7 are preserved in
`docs/archive/CYVEXLY_BUILD_SUMMARY_ARCHIVE.md`.

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

## Round 15 — 2026-08-31

- Resolved the Owner-reported live-video gap at the deployment/source layer.
  The public Render Home was serving default branch `main` at pre-video commit
  `c13ae7a`, while accepted Builder source had moved 52 commits ahead on
  `master`; the old public page had the Orbit graphic and no video/control.
- Proved `main` had zero unique commits, then safely fast-forwarded it to
  `57480e3` without force. Render changed its public ETag/content about 51
  seconds later. The local branch is now `main` tracking `origin/main` so a
  future ordinary push reaches the deployment branch; remote `master` remains
  preserved at the same source.
- Opened before, final desktop, and final phone public renders. The real site
  now has the contained 16:9 systems showcase and visible Play/Pause control;
  the old Orbit is absent and phone/desktop remain width-contained.
- Public poster/full/range requests pass correct WebP/MP4 MIME and byte-range
  behavior. Real browser playback, Pause/Play, the 30-second loop boundary,
  reduced-motion and data-saver holds plus explicit recovery, console, media
  decode, silent H.264 fast-start encoding, full route smoke, lint, optimized
  build, and post-build TypeScript pass.
- Product bytes were already correct, so no source/media edit was made. Three
  cited public captures, plan/verification records, Owner provenance, branch/
  environment continuity, and round records were added. Council-owned
  concurrent files/runtime were preserved; no scheduler or automation was
  touched.

## Round 16 — 2026-08-31

- Implemented Owner direction 2026-08-31-07 in product commit `14e12d4`. The
  Home-only hero expands to a roughly 1440px stage, the measured desktop reel
  grows from 528px to 726.56px, and an asymmetric grid gives media primary
  visual weight without displacing the canonical headline/actions.
- Added a protected translucent copy pane, coordinated light-ice-blue grids,
  refractions, edges, and glow, plus a padded player bezel. The real accepted
  30-second media remains unchanged; its new progress signal is derived from
  native playback state and the existing named control remains authoritative.
- Opened exact 1440/768/390 production renders. Desktop, tablet, phone, and the
  1023/1024 breakpoint are contained; phone keeps the full-width reel directly
  after the actions. Normal playback, Pause/Play, natural loop, reduced-motion,
  semantics, contrast, console, prerender-manifest route smoke, lint, optimized
  build, and post-build TypeScript pass.
- Public Render changed ETag/content about 61 seconds after the product push;
  the opened live Home has the Round 16 stage, advancing error-free video,
  named Pause control, exact width containment, and a clean console.
- Preserved the Owner-approved lighter-blue mockup and exact quoted direction.
  Rotated Build Summary rounds 5-6 and the exact Active Chunk round-13 report
  into archives to keep hot paths bounded. Council-owned concurrent files and
  evidence were excluded, and no scheduler or automation was touched.
- Owner acceptance on the public result and confirmation on the original
  second computer remain. Existing founder/legal/domain/email/art-framing
  decisions are unchanged.

## Round 17 — 2026-08-31

- Revisited the closed Services marketing slice in product commit `b5dfd50`
  after fresh Council R24
  explicitly recommended moving beyond the accepted Home hero. Replaced the
  remaining mockup-divergent combination table with five server-rendered,
  icon-led glass pathways while preserving every existing audience/service
  combination and adding only concise, supportable outcome copy.
- The new module uses three named service nodes, decorative plus connectors,
  an outcome, and a direct Planner handoff per card. The established line icons,
  ice-blue grid atmosphere, white edge light, cyan inner glow, and restrained
  glass depth bring this route closer to the accepted Services mockup without
  fabricating client work, prices, or operational claims.
- Opened optimized-production baseline/final renders at 1440/768/390 and
  measured 1280/1024/720 zoom-equivalent/320 boundaries. The first edge
  comparison found the three-column state unnecessarily cramped at 1024, so
  the final breakpoint holds two columns until 1280. All seven widths are
  exactly contained.
- One main/H1, five article cards, five named service lists, fifteen list items,
  native Planner navigation, 20 built routes/assets, and zero browser warnings
  or errors pass. ESLint, `tsc --noEmit`, and the 23-page optimized build pass;
  only the documented Owner/domain-blocked `metadataBase` warning remains.
- Public Render changed ETag/content after the product push. Opened public
  desktop and phone views show all five paths, exact width containment, and a
  clean browser console.
- Preserved the pre-implementation plan, full-page baseline/final evidence,
  focused desktop/tablet/phone renders, exact runtime metrics, and diff-to-plan
  verification. Rotated the exact Round 14 Active Chunk report into the archive
  to keep three active reports. Concurrent Council files/evidence remained
  excluded, and no scheduler or automation was touched.

## Round 18 — 2026-08-31

- Implemented the approved-mockup Pricing scope-system gap in product commit
  `7ec9c5c`: canonical copy now sits in a protected split-glass entry beside an
  original five-package orbital signal, and the unchanged package cards share
  a coordinated luminous constellation field.
- Preserved every package name, price, description, scope, timeline, order,
  CTA, FAQ, and lower comparison/add-on structure. The SVG is decorative,
  non-focusable, static, and code-native; no external asset, dependency, or
  unsupported claim was added.
- Opened exact 1440/768/390 optimized renders, the complete five-card desktop
  composition, a 390px 24px-root stress state, and final public desktop/phone
  views. Exact 1440/1024/1023/768/390/320 and root24 states are width-contained
  with one main/H1, no heading skip, and no empty control name.
- Rendered inspection found and fixed clipped overlap-card tops, then found and
  fixed a 14–17px horizontal scrollbar created by a rotated decorative ellipse.
  Native Chromium Enter reaches the Planner and expands the Pricing FAQ.
- ESLint, optimized 23-page build, post-build TypeScript, 22 page/asset
  requests, known-404 controls, and local/public Home MP4 range regression
  pass. Stale Builder-owned `.next/dev` and `.next/cache` were removed after an
  intermediate cache-persistence space warning; the clean rebuild passed.
- Public Pricing changed from ETag `"3azyangk3w2jpn"` to
  `"v7ek1wa7sw2w4f"`; opened Render output matches local production. Owner
  visual acceptance and original second-device confirmation remain pending.
  Concurrent reviewer files/evidence remained excluded, and no scheduler or
  automation was touched.

## Round 19 — 2026-08-31

- Fixed two fresh Auditor runtime findings in product commits `e716541` and
  `744cdd8`. Invalid service/work metadata now terminates through `notFound()`,
  and the Planner gates interactivity until saved-draft restoration completes.
- Reproduced the invalid-route server/hydration title mismatch, then proved the
  exact 404 title, noindex, landmarks, recovery links, containment, and clean
  browser state locally and publicly. All eight valid dynamic routes remain
  200 with expected titles.
- Proved initial Planner HTML has a polite busy status and no early form. A
  visible-control draft saved at Step 3 reloads at Step 3 with preserved
  synthetic values; clean-origin and service-prefill flows still settle at
  Step 1 without overflow.
- ESLint, optimized 23-page build, and post-build TypeScript pass with only the
  known Owner/domain-blocked `metadataBase` warning. Render adopted both
  product commits; public initial and hydrated states match the fix.
- Archived the exact Round 16 Active Chunk report to retain the latest three
  full reports. Concurrent Auditor/Council records and evidence remained
  excluded. The scheduler/automation remained active and untouched.

## Round 20 — 2026-08-31

- Implemented the Owner's newest Home reel direction in product commit
  `d6cd17c`: removed the visible muted/duration pill, advancing progress line,
  and circular Pause/Play control while preserving the substantial glass reel,
  source media, poster, identifier, and capability caption.
- Slowed authored playback from measured `1.0×` to `0.75×`; a 30-second source
  cycle now takes about 40 seconds. The complete clean media surface remains a
  named click/keyboard toggle, so removing the visible control does not remove
  the pause mechanism.
- Opened and preserved 1440/768/390 before/after renders. All final states have
  zero residual playback chrome and exact width containment; native media
  advanced about 1.58 seconds over two real seconds and click, Enter, and Space
  each toggled the reel correctly.
- ESLint, optimized 23-page build, post-build TypeScript, Home HTTP 200, MP4
  MIME/range delivery, and built-output absence of the removed strings/state
  pass. Public adoption is recorded in the Round 20 verification evidence.
- Concurrent Auditor/Council records and evidence were excluded. The recurring
  scheduler/automation remained active and untouched.

## Round 21 — 2026-08-31

- Implemented the Owner-approved site-wide blue-glass direction with one pale-
  blue atmosphere, protected route-introduction fields, translucent section
  continuation, and restrained decorative wiring/numerals.
- Opened optimized proof across ten route families and phone/desktop states.
  Every sample is width-contained; final composited normal-text contrast starts
  at 5.06:1. Work/Planner/Home-media interactions, route/MP4, lint, TypeScript,
  and the optimized 23-page build pass.
  Public Render changed ETag and serves the shared atmosphere after the push.

## Round 22 — 2026-09-01

- Recovered a verified-interrupted Builder mission under its exact preserved
  lock and dirty-byte set; no reset, replacement claim, or scheduler mutation.
- Fixed Auditor `CYV-IFA-010`: the shared direct-child selector no longer
  overrides the sticky header's position/z-index.
- Added full-width protected blue-glass continuation fields to five Home and
  three Services sections, preserving the Owner-approved atmosphere and at
  least 4.5:1 normal-text contrast.
- Deferred the visible global About link after fresh Council evidence confirmed
  the Owner-blocked route still returned 404; no identity content was invented.
- Product commit `4265fa4` is pushed to `origin/main`. Lint, TypeScript,
  optimized build, and a hydrated 154-state/18-route/eight-width production
  audit pass with zero verified failures. Public Home/Services adoption also
  passes at 1440 and 390 after Render deployed the commit.
