# Cyvexly Council Coverage Map

## Reviewed in CYC-R1-20260830-01

- Surface: Home / Foundation & Home chunk.
- Viewports: desktop `1440×900`, tablet `768×1024`, phone `390×844`.
- Flows/states: initial Home, mobile menu open/close, FAQ expand/collapse.
- Dimensions: visual hierarchy, responsive layout/overflow, accessibility
  structure, color contrast, truthful concept-work presentation, content
  cohesion, and console health.
- Comparison: approved `mockups/01-home.png` and `CYVEXLY_VISION_PLAN.md`
  Home/navigation requirements.
- Methods: in-app-browser visible captures, DOM interaction, read-only computed
  styles/geometry, source inspection, TypeScript check.

## Unreviewed / next

- Connected Services/Work → Project Planner path and its error/confirmation
  states.
- Attended pixel-level comparison, keyboard-only and reduced-motion runtime,
  automated accessibility audit, cross-browser behavior, production build
  completion, and route-by-route navigation.
- Case-study visual treatments after truthful concept assets exist.

## Reviewed in CYC-R2-20260830-01

- Surfaces: Project Planner (`/start`), Process, Work, Services.
- Viewports: desktop `1440×900`, tablet `768×1024`, phone `390×844`.
- Flows/states: nine-step Planner progression with synthetic non-submitting
  values; empty sitemap and consent validation; review summary; Work filters and
  mobile menu; Work → Planner CTA; Process timeline; Services mobile table.
- Dimensions: responsive status communication, scroll affordances, visual
  hierarchy, interaction, accessibility semantics, concept-art fidelity,
  console health, and build/tooling truth.
- Comparison: approved `mockups/04-process-planner.png` and
  `mockups/02-services-pricing.png`, plus the vision's Planner requirements.
- Methods: real in-app browser screenshots and interaction, read-only geometry
  and contrast probes, source inspection, typecheck, lint, production build.

## Unreviewed / next

- Planner keyboard-only and reduced-motion behavior across all nine steps,
  including focus order and progress semantics.
- Automated axe, cross-browser verification, valid form/email side effect,
  attended pixel comparison of final concept imagery, favicon 16px legibility,
  and owner-gated metadata/domain decisions.

## Reviewed in CYC-R5-20260830-01

- Surfaces: Home and Services shared concept-card rendering, Work index,
  `/favicon.ico`, `/icon.svg`, `/opengraph-image`, and all twelve public routes.
- Viewports: Home `1440×900`, `768×1024`, `390×844`; Work desktop; Services
  phone. Captures were opened and compared with `mockups/01-home.png`.
- Findings: effective favicon and scratch-route hygiene verified resolved;
  Home/Services flat-gradient inconsistency verified resolved; abstract versus
  higher-fidelity concept-art framing remains Owner-gated.
- Methods: isolated in-app browser, opened screenshots, direct served-asset
  fetch/raster inspection, DOM/overflow/landmark probes, source/status review,
  and lint/typecheck/production build.

## Unreviewed / next

- Production-domain metadata and Planner submission boundary after Owner
  domain/email decisions.
- Physical Tab-key traversal and visibly reduced-motion behavior in a genuinely
  attended or differently capable browser; current session clicks did not toggle
  controls and remain method-limited.
- About, Privacy, and Terms after Owner supplies identity and jurisdiction facts;
  cross-browser and real external mail side effects remain unclaimed.

## Reviewed in CYC-R4-20260830-01

- Surfaces: Home, Work, all primary public routes, `/icon.svg`,
  `/opengraph-image`, and first served `/favicon.ico`.
- Viewports: `1440×900`, `768×1024`, `390×844`; real mobile menu, Work Concept
  filter, and Pricing FAQ interactions.
- Methods: isolated in-app browser, opened visual captures, route-wide
  semantics/overflow probes, source/status inspection, lint, typecheck, and
  production build.
- Findings: SVG/OG mark improved and is legible; actual first favicon remains
  Vercel default; Home Selected work visual gap and keyboard/reduced-motion
  remain open.

## Unreviewed / next

- Planner keyboard-only and reduced-motion runtime behavior; physical keyboard
  evidence and focus/error/progress semantics remain unclaimed.
- Effective branded favicon after Builder correction, scratch-route cleanup,
  Owner-gated metadataBase/email, and a final Home visual-concreteness decision.

## Reviewed in CYC-R3-20260830-01

- Surfaces: Planner nine-step progression and validation, Services/Pricing
  responsive tables, mobile navigation, Pricing FAQ, Contact semantics, Work
  index and Aurora case-study route, plus public-route semantics.
- Viewports: fresh phone `390×844`, tablet `768×1024`, and desktop `1440×900`.
- Findings closed: Planner active-step visibility (`CYC-R2-F001`), Services/
  Pricing mobile table clipping (`CYC-R2-F004`), and Next.js smooth-scroll
  warning (`CYC-R2-F005`).
- Methods: isolated in-app browser, real form/menu/accordion interactions,
  rendered screenshots, viewport geometry, route-wide landmark/label/overflow
  probes, browser diagnostics, lint, typecheck, and production build.

## Unreviewed / next

- Planner keyboard-only traversal and reduced-motion runtime behavior across
  all nine steps, including focus order, error announcement, and progress
  semantics.
- Automated axe, cross-browser verification, valid form/email side effect,
  attended pixel comparison of final concept imagery, favicon 16px legibility,
  and owner-gated metadata/domain decisions.
