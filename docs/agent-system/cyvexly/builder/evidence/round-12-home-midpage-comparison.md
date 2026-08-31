# Round 12 Home mid-page rendered comparison

**Compared:** accepted `mockups/01-home.png`; pre-change
`round-10-home-desktop-full.png`; final production renders
`round-12-home-midpage-{desktop,tablet,phone}.png`; runtime metrics
`round-12-home-midpage-runtime-proof.json`.

## Result

The previously text-only difference panel now has the mockup's intended
diagram/copy rhythm. A luminous wireframe partnership system occupies the left
visual field, while the unchanged bespoke-partner message forms a clear
left-aligned copy block at tablet/desktop widths. The diagram is original
code-native SVG, uses only the established palette, and is supplementary rather
than fake product imagery. Its measured ink box is `304x218` inside a
`360x260` viewBox, leaving positive clearance on every edge.

The five-step preview now reads as a system instead of five detached text
columns: numbered signal nodes share one desktop route line and every stage has
a distinct line icon. At tablet and phone widths the connector intentionally
drops out and each stage becomes a contained glass card, avoiding a false line
across wrapped rows. The ordered-list semantics, stage order, titles, and copy
are unchanged.

## Measured states

- Desktop `1440x900`: the difference panel is `1104x313.11`; the process route
  is `1104x211.83`. One diagram, five nodes, five icons, one H1, and no overflow.
- Tablet `768x1024`: the panel is `720x363`; the two-column composition holds;
  five process cards reflow to two columns then one. No overflow.
- Phone `390x844`: the panel is `342x574.83`; the diagram stacks above centered
  copy; five cards form a single readable column. No overflow.
- The 13-route phone audit found expected 200/404 statuses, exactly one `main`
  and one H1, no visible unnamed controls, and `scrollWidth === clientWidth` in
  every case. CDP recorded zero runtime exceptions and zero console errors.

## Visual-plan/target disposition

- **Closed in this slice:** missing system object in the difference section;
  text-only process preview; lack of a visual route between desktop stages.
- **Deliberate adaptation:** the original SVG is a restrained wireframe system
  rather than a literal copy of the mockup's cube. Tablet/phone process stages
  use glass cards because the desktop connector cannot truthfully survive row
  wrapping.
- **Still open:** the accepted mockup remains brighter and uses more elaborate
  photographic/project artwork and planetary final-CTA art. The Owner must
  judge final parity; this round does not self-certify it.

## Proof boundary

The renders were captured from the clean production build on the Builder-owned
5183 runtime using exact CDP device metrics and opened for inspection. They do
not prove physical Safari/Firefox rendering, the Owner's second computer, field
performance, or subjective Owner acceptance.
