# Cyvexly Build Summary

## Owner launch direction — 2026-09-04

Round 29 opened Chunk 5 — United States Launch Completion & Business
Operations — under Owner direction `2026-09-04-14` and vision §17. Confirmed
facts are `cyvexly.com`, Indiana/United States LLC operations, United States-only
launch market, `design@cyvexly.com`, `(317) 572-5780`, and a logo-led About with
no public personal founder identity. The chunk integrates domain/discovery,
contact, About, legal, real Contact/Planner delivery, privacy-aware measurement,
truth audit, and production QA. Payment integration and real portfolio
replacement are deferred. Historical summaries below describe the source
baseline, not current decision gaps.

Older setup and rounds 1-10 are preserved in
`docs/archive/CYVEXLY_BUILD_SUMMARY_ARCHIVE.md`.

## Round 40 — 2026-09-05

Fixed a real Planner defect (`71d233f`): `goToStep()` scrolled to top
synchronously before React committed the new step's DOM, so scroll-anchoring
silently kept the old position and focus never left the Continue/Back
button. Moved scroll+focus into a post-render `useEffect` and added a polite
live-region step announcement for assistive tech. Verified before/after with
real CDP mouse events against a production server. TypeScript, lint, and
build passed; pushed to `origin/main`.

## Round 29 — 2026-09-04

Contact identity, phone, production metadata/sitemap, and United States/payment truth copy
implemented as f35a2a6 on main. TypeScript, lint and build passed; public adoption and
Owner visual acceptance remain unconfirmed. This completes one workstream, not Chunk 5.

## Round 27 — 2026-09-01

- Opened the public Home at 1440×900 in the visible in-app Browser and measured
  the Owner-rejected baseline: correct copy/media proportions but a flat grid
  and two opaque-card reading versus mockup 06's architectural glass space.
- Changed component grammar instead of repeating a global opacity pass. Home
  now has layered architectural planes, luminous columns and beams, circuit
  traces/nodes, coordinate marks, a reflected floor, a protected double-rim
  copy pane, a deeper media chassis, and an inset credibility deck.
- Preserved the established headline/actions, truthful content, real media,
  `0.75×` looping playback, data-saving/reduced-motion behavior, and absence of
  visible/native playback chrome.
- Opened final 1440×900, 768×1024, and 390×844 renders plus the complete Home.
  All states are exactly width-contained with one main/H1; phone retains one
  architectural column while hiding secondary density. Sticky/z50 navigation,
  pointer pause, native Enter resume, and clean browser diagnostics pass.
- ESLint, optimized 23-page build, and post-build TypeScript pass. Durable
  target visualization, baseline/final PNGs, runtime metrics, and verification
  are indexed under `builder/evidence/`. The Round 27 commit is pushed to
  `origin/main`; public Render adoption and Owner acceptance remain pending.

## Round 28 — 2026-09-01

- Confirmed the Owner's scrolled-Home diagnosis in the visible in-app Browser:
  the architectural first viewport gave way to flat pale section bands and
  ordinary cards; Services and Pricing repeated the same shared failure.
- Extended the shared environment with portal planes, luminous cross-stage
  beams, and a perspective horizon. Replaced flat continuation/direct-section
  surfaces with bounded, rim-lit translucent bays so the architecture remains
  visible between protected content fields through every route height.
- Darkened secondary graphite copy to `#46576e`; the conservative protected-
  field model measures `5.5986:1`. Phone hides secondary portal/rail/data
  density while keeping one portal and simplified beams.
- Visible IAB route-family renders, video/FAQ/menu interactions, and 54 measured
  states at desktop/tablet/phone widths pass. Every state is width-contained
  with one main/H1 and sticky/z50 navigation.
- ESLint, optimized 23-page build, and TypeScript pass. The existing
  Owner/domain-blocked `metadataBase` warning is unchanged. Round 28 is pushed
  to `origin/main`; public Render adoption and Owner acceptance remain pending.

Earlier rounds 11–26 are preserved in
docs/archive/role-migration-2026-09-05/CYVEXLY_BUILD_SUMMARY.md.
