# Cyvexly Build Summary

Older setup and rounds 1-6 are preserved in
`docs/archive/CYVEXLY_BUILD_SUMMARY_ARCHIVE.md`.

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
