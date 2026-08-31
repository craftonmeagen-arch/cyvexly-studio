# Builder Evidence Index

Retain only durable evidence cited by an active report, source decision, or required handoff. Temporary captures belong in role-owned disposable storage and are deleted after inspection.

## Global round 10 — structural Home glass-system pass

- `round-10-home-glass-system-visual-plan.md` — pre-implementation reference,
  measured discrepancy, responsive constraints, methodology change, and proof
  plan.
- `round-10-home-desktop.png`, `round-10-home-tablet.png`, and
  `round-10-home-phone.png` — opened exact 1440×900, 768×1024, and 390×844
  production renders of the new inset glass header, hero, and icon-led
  credibility system.
- `round-10-home-desktop-full.png` — opened 1440×4672 full-page production
  render verifying both capability rows and the complete lower-page flow.
- `round-10-home-desktop-glass-cards.png` — opened production comparison of
  the selected-work and newly icon-bearing capability glass cards.
- `round-10-home-phone-menu.png` — opened exact 390×844 production render of
  the expanded glass navigation sheet.
- `round-10-home-phone-root-24-stress.png` — opened explicit 24px-root
  resilience stress render; the interface reflows and remains width-contained.
- `round-10-responsive-runtime-proof.json` — exact viewport/root/header/H1/
  icon geometry, corrected mobile-menu state, native CDP Tab/Enter focus order,
  13-route phone-width semantic/overflow sweep, 65-case shared-header boundary
  sweep, 26-case landmark/heading/control-name audit, and 24px-root stress
  metrics.
- `round-10-home-glass-system-comparison.md` — post-implementation rendered
  comparison, measured acceptance, honest remaining gap, and runtime audibles.

## Global round 9 — scale consistency and glass-fidelity pass

- `round-9-scale-glass-visual-plan.md` — preserved baseline, root-cause
  hypothesis, spatial/visual target, responsive state map, proof plan, and
  falsifiers written before source implementation.
- `round-9-owner-reference-apparent-large.png` and
  `round-9-owner-reference-normal.png` — exact Owner-supplied 1917×889 and
  1701×815 source captures, retained with source provenance for comparison.
- `round-9-pre-fix-font24-profile-1440.json` — controlled pre-fix reproduction:
  24px author root, 1425×108 header, 72px H1, hidden desktop navigation at a
  1440px viewport despite 100% page zoom.
- `round-9-case-study-standard-profile-1440.{png,json}` and
  `round-9-case-study-font24-profile-1440.{png,json}` — production-runtime
  post-fix pair. CSS geometry matches exactly across the normal and custom-24px
  browser-default profiles: 16px root, 1152×78 header, 48px H1, visible desktop
  nav/CTA, and zero overflow.
- `round-9-case-study-1024-dpr1.5.{png,json}` — opened high-DPR laptop render;
  same CSS geometry as the DPR-1 control and zero overflow.
- `round-9-home-1440.{png,json}` and
  `round-9-home-1440-glass-cards.{png,json}` — opened production Home hero and
  card-surface captures used for mockup comparison after the shared glass,
  atmosphere, header, CTA, and orbit upgrade.
- `round-9-home-720-zoom-proxy.{png,json}` and
  `round-9-home-390.{png,json}` — opened compact/zoom-equivalent and phone
  production renders; both reflow to the compact header and record zero
  horizontal overflow.
- `round-9-sitewide-standard-profile.json`,
  `round-9-sitewide-font24-profile.json`,
  `round-9-sitewide-edge-standard-profile.json`, and
  `round-9-sitewide-edge-font24-profile.json` — four 33-case production audits
  spanning 11 routes at desktop, high-DPR laptop, and phone widths; all 132
  cases pass responsive scale, semantic/control-name, nav, glass, and overflow
  checks.
- `round-9-header-interaction-{standard-profile,font24-profile,
  edge-standard-profile,edge-font24-profile}.json` — native CDP mouse/Tab proof
  for the 390px menu in both engines and both browser-default profiles.
- `round-9-sitewide-minimum-font24-profile.json` — 33-case post-fix Chrome
  accessibility stress audit at minimum font size 24px. It records zero failures
  after `2d82b0b` removed Pricing/Process phone overflow.
- `round-9-pricing-390-minimum-font24.{png,json}` and
  `round-9-process-390-minimum-font24.{png,json}` — opened post-fix large-text
  phone renders and geometry records for the two routes changed by `2d82b0b`;
  each page remains width-contained at the 390px audit viewport.

The Builder also ran a temporary custom-24px-profile 720px control and a DPR-1
1024px control. Both matched their standard-profile/DPR counterparts exactly;
their exhausted screenshots and temporary profiles were deleted at closeout.

## Global round 8 — Home/Services selected-work reconciliation

- `round-8-home-work-visual-plan.md` — pre-implementation baseline, target,
  responsive composition, and acceptance comparison.
- `round-8-browser/round-8-home-390-selected-work.{png,json}` — opened exact
  390px Home section capture plus CDP geometry/overflow measurements.
- `round-8-browser/round-8-home-768-selected-work.{png,json}` — opened exact
  768px Home section capture plus CDP measurements.
- `round-8-browser/round-8-services-390-recent-work.{png,json}` — opened exact
  390px Services section capture plus CDP measurements.
- `round-8-browser/round-8-services-1440-recent-work.{png,json}` — opened exact
  1440px Services section capture plus CDP measurements.
- `round-8-sitewide-audit.json` — exact 1440px/390px CDP geometry and
  structural results for Home, Services, Work, Pricing, and Planner. All ten
  states have one `h1`, one `main`, no heading-level skips, no empty accessible
  control names, no unaccounted empty image alternatives, and zero horizontal
  overflow. The ten full-page audit screenshots were opened, inspected, and
  deleted after their verification purpose was exhausted.
- `round-8-planner-native-keyboard-audit.json` — post-fix native Chromium Tab
  and Enter traversal at exact 1440x900 and 390x844. It records 17 desktop and
  12 phone focus stops through `Continue`, no offscreen/unindicated focus stop,
  no hidden desktop-nav leak at phone width, no horizontal overflow, and focus
  moving to `input#fullName` after three linked empty-step validation errors.
- `round-8-planner-validation-focus-matrix.json` — exact 390px production-
  runtime follow-through across every validation-control shape. It records
  first-error focus plus linked error text for step 3 radio cards, step 4/5
  checkbox cards, step 8 radio cards, and step 9 consent checkboxes.
- `round-8-planner-validation-focus-matrix-reduced-motion.json` — identical
  all-step 390px matrix with `prefers-reduced-motion: reduce` emulated. It
  records the same five first-error targets and linked messages as the standard
  motion run.

All four metrics records show three project cards, three project-specific SVG
previews, and `scrollWidth === clientWidth`. Raw CLI screenshots and unique
Chrome profiles were inspected and deleted; only cited evidence remains.
