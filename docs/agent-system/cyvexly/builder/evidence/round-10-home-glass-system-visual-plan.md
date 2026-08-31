# Round 10 visual plan — Home glass system

## Baseline and reference

- Starting source: `95232d5`; all pre-existing dirty files are Council-owned reports/evidence or the shared Council inbox line and are outside this round's ownership.
- Owner reference: `mockups/01-home.png` — an inset translucent header shell, small icon-led credibility cells, crisp outlined capability symbols, layered luminous surfaces, and a bright arctic signal atmosphere.
- Current rendered baseline: `round-9-home-1440.png` — responsive scale is stable and the orbit/CTA/glass tokens are improved, but the header still reads as a flat full-width bar, the credibility rail is text-only, and the capability cards lack the reference's icon-led visual rhythm.

## Measured discrepancy and target

1. **Header composition:** keep the sticky 78px desktop header envelope and existing 1024px navigation breakpoint, but move the content into an inset rounded glass shell with visible outer atmosphere and a distinct mobile drawer connected to it. It must remain full-width-safe at 390px and large-text-safe.
2. **Credibility rail:** preserve all five truthful claims and their semantic list, but give each claim a compact outlined signal icon and cell-like rhythm. At narrow widths the cells wrap without clipping or horizontal scrolling.
3. **Capability cards:** preserve all six descriptions and their grid, add the existing hand-authored service icon system, a subtle signal edge/arrow, and an interactive glass treatment without turning non-links into false controls.
4. **Atmosphere:** strengthen depth through reusable structural layers (`glass-shell`, `glass-panel-interactive`, `signal-rail`) rather than another sitewide opacity-only tweak. Text contrast and focus behavior remain primary.

## Responsive and accessibility constraints

- No root-font override, transform scaling, zoom, fixed page width, or breakpoint change.
- Header/mobile controls retain names, expanded state, and minimum 40px target; navigation remains keyboard reachable.
- Decorative icons are hidden from assistive technology; list/card text stays real text.
- Motion remains optional under the existing `prefers-reduced-motion` gate.
- Required checks: exact 1440, 768, and 390 CSS-pixel renders; viewport/document width equality; mobile-menu open/close state; full route structural and horizontal-overflow sweep.

## Round-10 methodology audit

Rounds 7–9 improved evidence quality, font-scale resilience, and the underlying glass/orbit tokens. The remaining visual gap is now compositional, so repeating the same token-tuning method would be a weak loop. This round changes method: compare the reference by reusable component structure (shell, icon rail, card grammar), implement the highest-reach primitives, and compare actual renders afterward. The approach is normal and reachable in the existing Next.js/Tailwind/CSS/SVG stack, needs no dependency, credential, external service, or production-platform exception, and is reversible at the component/class boundary.

## Proof and acceptance

- `pnpm run lint`, `pnpm exec tsc --noEmit`, and a clean `pnpm run build`.
- Real production runtime on Builder-owned port 5173, captured through Builder-owned Chrome/CDP at 1440×900, 768×1024, and 390×844.
- Inspect the three renders against this plan and the Owner mockup.
- Programmatically record H1/nav/list semantics, open-menu state, and width/overflow geometry; sweep every shipping route at phone width.
- Accept only if the result is visibly closer to the reference while remaining calm, truthful, readable, and responsive.
