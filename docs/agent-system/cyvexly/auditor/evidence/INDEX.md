# Auditor Evidence Index

## IFA-2026-08-30-R1

- `auditor-20260830T1324Z-route-probe.md` — in-app-browser route results and built route table; supports `CYV-IFA-001`.
- `auditor-20260830T1324Z-contrast-probe.md` — measured primary CTA contrast at 1440×900; supports `CYV-IFA-004`.
- `auditor-20260830T1324Z-current-desktop.png` — 1440×900 home hero; supports current visual observations and `CYV-IFA-002`/`CYV-IFA-003`.
- `auditor-20260830T1324Z-current-tablet.png` — 768×1024 home hero; supports current visual observations and `CYV-IFA-003`.
- `auditor-20260830T1324Z-current-mobile.png` — 390×844 home hero; supports current responsive observations and `CYV-IFA-002`.
- `auditor-20260830T1324Z-current-mobile-full.png` — full 390px-wide home page; supports current visual observations and `CYV-IFA-002`.
- `auditor-20260830T1324Z-desktop.png`, `auditor-20260830T1324Z-tablet.png`, `auditor-20260830T1324Z-mobile.png` — initial immutable-snapshot baseline captures showing the pre-current-surface Next.js scaffold; retained to document source movement during this first round.

## IFA-2026-08-30-R2

- `auditor-20260830T1738Z-route-probe.md` — refreshed route reachability, filters, FAQ/menu state, contact validation, semantics, and mobile overflow; supports `CYV-IFA-001` disposition and current filter observations.
- `auditor-20260830T1738Z-metadata-probe.md` — production-build metadata warning, static localhost OG URLs, and preview no-index controls; supports `CYV-IFA-005`.
- `auditor-20260830T1738Z-case-study-desktop.png` — 1440px full case-study render; supports current concept-visual observations.
- `auditor-20260830T1738Z-work-mobile.png` — 390px full Work page render with filter chips and concept cards; supports `CYV-IFA-002`/`CYV-IFA-006`.
- `auditor-20260830T1738Z-work-redesign-empty.png` — desktop empty-state filter render; supports the truthful but sparse filter observation.
- `auditor-20260830T1738Z-pricing-desktop.png` — 1440px full Pricing render with package icons and tables.

## IFA-2026-08-30-R3

- `auditor-20260830T2115Z-planner-probe.md` — real Planner validation, conditional fields, save/restore, review/edit, mobile state, and the untriggered mailto confirmation limitation.
- `auditor-20260830T2115Z-route-probe.md` — current route reachability, Work filters, concept-visual disposition, and post-snapshot scratch-route observation.
- `auditor-20260830T2115Z-planner-mobile.png` — opened and visually inspected 390×844 Planner viewport.
- `auditor-20260830T2115Z-work-full.png` — opened and visually inspected full Work page with three distinct concept compositions.
- `auditor-20260830T2115Z-work-desktop.png` — opened and visually inspected Work desktop viewport.
- `auditor-20260830T2115Z-case-study.png` — opened and visually inspected full Vellora Care case-study render.

## IFA-2026-08-31-R4

- `auditor-20260831T1841Z-004-services-media-probe.md` — independent Home hero media and five service-detail route probe, responsive renders, source/status reconciliation, and disclosed managed-permission/build limits.
- `auditor-20260831T1841Z-004-runtime-metrics.json` — machine-readable viewport, video, route, negative-route, and verification metrics.
- `auditor-20260831T1841Z-004-home-desktop.jpg` — opened and visually inspected 1440×900 Home hero render.
- `auditor-20260831T1841Z-004-home-phone.jpg` — opened and visually inspected 390×844 requested phone render (375px layout viewport).
- `auditor-20260831T1841Z-004-service-desktop.jpg` — opened and visually inspected Business Websites detail desktop render.
- `auditor-20260831T1841Z-004-service-phone.jpg` — opened and visually inspected Business Websites detail phone render.

## IFA-2026-08-31-R5

- `auditor-20260831T1936Z-005-metadata-probe.md` — launch-readiness audit of static/rendered metadata, no-index controls, generated assets, media range delivery, and managed-environment limits.
- `auditor-20260831T1936Z-005-runtime-metrics.json` — machine-readable metadata and asset status metrics.
- `auditor-20260831T1936Z-005-og-image.png` — generated OG image opened and visually inspected.

## IFA-2026-08-31-R6

- `auditor-20260831T2013Z-006-accepted-layout-404-probe.md` — accepted-commit narrow-layout/breakpoint sweep and hydrated dynamic-404 metadata finding (`CYV-IFA-008`), with Builder lock isolation recorded.
- `auditor-20260831T2013Z-006-runtime-metrics.json` — machine-readable 320px/1023-1024 breakpoint, route sweep, and dynamic-404 title metrics.
- `auditor-20260831T2013Z-006-home-320.jpg` — opened and visually inspected 320px Home render.
- `auditor-20260831T2013Z-006-service-404.jpg` — opened and visually inspected 320px custom 404 render.

## IFA-2026-08-31-R7

- `auditor-20260831T2054Z-007-pricing-scope-probe.md` — independent accepted Round-18 Pricing scope-system visual, interaction, responsive, semantics, and regression-smoke probe.
- `auditor-20260831T2054Z-007-runtime-metrics.json` — machine-readable Pricing viewport, boundary, interaction, route-smoke, and semantics metrics.
- `auditor-20260831T2054Z-007-pricing-320.png` — opened and visually inspected 320px Pricing hero.
- `auditor-20260831T2054Z-007-pricing-390.png` — opened and visually inspected 390px Pricing hero.
- `auditor-20260831T2054Z-007-pricing-768.png` — opened and visually inspected 768px split hero/package start.
- `auditor-20260831T2054Z-007-pricing-1024.png` — opened and visually inspected 1024px breakpoint hero/package start.
- `auditor-20260831T2054Z-007-pricing-1440.png` — opened and visually inspected 1440px desktop hero/package start.
- `auditor-20260831T2054Z-007-pricing-full.png` — opened and visually inspected complete desktop Pricing page.
- `auditor-20260831T2054Z-007-pricing-full-390.png` — opened and visually inspected complete mobile Pricing page.
- `auditor-20260831T2054Z-007-pricing-bottom-390.png` — opened and visually inspected terminal mobile footer state.

## IFA-2026-08-31-R8

- `auditor-20260831T2152Z-008-planner-restore-race.md` — saved-draft hydration timing, immediate-input loss reproduction, source cause, and closure test (`CYV-IFA-009`).
- `auditor-20260831T2152Z-008-runtime-metrics.json` — machine-readable phone/desktop restore timeline, race outcome, containment, and diagnostic metrics.
- `auditor-20260831T2152Z-008-planner-restored-step3.png` — opened immediate Step 1 render before restore.
- `auditor-20260831T2152Z-008-planner-restored-step3-settled.png` — opened settled Step 3 render after draft hydration.

## IFA-2026-08-31-R9

- `auditor-20260831T2250Z-009-successor-404-planner-gate.md` — accepted-successor dynamic 404 metadata closure and Planner restore-gate/saved-draft proof, including managed-permission and no-draft limits.
- `auditor-20260831T2250Z-009-runtime-metrics.json` — machine-readable route, mobile containment, Planner gate timeline, restore, diagnostics, and verification metrics.
- `auditor-20260831T2250Z-009-work-404.png` — opened and visually inspected mobile custom 404 render.
- `auditor-20260831T2250Z-009-planner-gate.png` — opened and visually inspected mobile restore-gate render.
- `auditor-20260831T2250Z-009-planner-restored-step1.png` — opened and visually inspected mobile restored Step 1 render.
