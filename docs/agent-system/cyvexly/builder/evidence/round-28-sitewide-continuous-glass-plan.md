# Round 28 — sitewide continuous architectural-glass plan

**Owner authority:** `mockups/06-sitewide-blue-glass-owner-direction.png`

**Current source:** `8c2e777` on `main` at round start.

## Observed baseline

- The visible in-app Browser shows that the Home hero has discrete glass architecture, but the middle and lower Home sections fall back to broad pale-blue bands.
- The Home partnership and process area contains a large unstructured gap between sections; the process content reads as ordinary white cards on a blue gradient rather than as part of the approved luminous glass environment.
- The same failure shape is visible in the middle of Services and Pricing: content remains readable, but section backgrounds are flat, cards are comparatively opaque, and the fixed circuit/rail layer is too suppressed to create believable depth.
- Existing round-27 full-page evidence: `round-27-home-1440-full-page.png`.

## Target composition

1. Keep one continuous bright ice-blue architectural environment behind the complete site, not only the Home hero.
2. Use persistent luminous vertical rails, horizontal structural beams, layered portal planes, circuit traces, nodes, coordinates, and restrained refraction as the shared background grammar.
3. Turn each major content section into a bounded glass bay with a bright outer rim, inner cyan edge, protected blue-white field, and a controlled shadow/reflection. Allow the architectural environment to remain visible between bays.
4. Reduce card opacity enough to read as translucent glass while retaining dark-text contrast. Copy, forms, tables, and controls remain on protected fields; decorative marks stay behind them.
5. Preserve the Home hero/video composition, canonical copy, routes, pricing, forms, navigation semantics, and video behavior.
6. Adapt density responsively: desktop keeps the complete structural lattice; tablet removes secondary planes; phone keeps one portal/rail and simplified beams with no horizontal overflow.

## Implementation boundary

- Strengthen the shared `SiteAtmosphere` structure and shared visual tokens/selectors.
- Replace flat `glass-section` / `glass-continuation` slabs with framed section bays.
- Apply the same bay treatment to existing unclassified direct sections so Work, Process, Pricing, FAQ, Contact, Planner, service details, legal/utility, and 404 routes do not fall back to the old theme.
- Do not invent new product content, metrics, claims, or imagery.

## Falsifiers and proof

- Fail if the Home middle still reads as separated flat bands or ordinary white cards.
- Fail if Services, Pricing, Planner, or another representative route family retains an old-theme flat gap.
- Fail if decorative structure competes with normal text or form controls.
- Fail if any representative viewport gains horizontal overflow, loses one main/H1, or breaks sticky navigation.
- Compare the actual visible in-app Browser renders against mockup 06 at Home desktop/middle, representative secondary routes, tablet, and phone.
- Run lint, optimized build, and TypeScript after visual convergence.
