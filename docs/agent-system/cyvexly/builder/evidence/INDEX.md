# Builder Evidence Index

Retain only durable evidence cited by an active report, source decision, or required handoff. Temporary captures belong in role-owned disposable storage and are deleted after inspection.

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
