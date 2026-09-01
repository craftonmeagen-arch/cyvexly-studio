# Round 26 visual plan — Owner-visible theme repair

## Outcome

Repair the shared visual system so the live site visibly belongs to the exact
Owner-approved `mockups/06-sitewide-blue-glass-owner-direction.png` world at a
glance. This is not another token or opacity pass. The intended result is a
continuous luminous ice-blue architectural environment, dimensional protected
glass, clearly present circuitry/data atmosphere, and controlled dark cyber
focal stages across every route while preserving the existing content,
interactions, and WCAG-readable copy.

## Source and evidence at plan time

- Start source: `2def780` on local `main`, synchronized with `origin/main`.
- Public route: `https://cyvexly-studio.onrender.com/` returned HTTP 200 and
  current `site-atmosphere` markup before this round.
- Owner-supplied current-product evidence:
  `.codex-remote-attachments/01a054a9-fdd5-76e3-8e4a-85952b5b1598/32f9695d-ff09-4fd2-b293-74461d59e3bb/1-Photo-1.jpg`
  (1100×1344 image). The Owner's direct verdict is that the page shows no
  meaningful change and looks nothing like the agreed mockup.
- Authoritative target:
  `mockups/06-sitewide-blue-glass-owner-direction.png` (1536×1024).
- Existing reviewer-owned dirty documentation and the Owner attachment are
  outside Builder ownership and will remain byte-preserved and excluded.

## Baseline discrepancy and root cause

The current page is a pale blue version of the previous layout, not the target
composition. It has a nearly flat background, faint grid, ordinary white cards,
weak edge light, and almost no legible wires/numerals/depth. The target has a
visibly blue architectural backplane, luminous rails and traced geometry,
stacked translucent panes, refracted white/cyan edges, substantial shadow and
glow, and deliberate dark high-tech stages.

The source explains the visual failure:

1. The fixed `SiteAtmosphere` sits below `main`, while `main` and most direct
   sections repaint nearly opaque pale gradients over it.
2. The remaining shared grid/wire signals use values as low as 4.5–16% alpha,
   so they disappear at ordinary display conditions.
3. Section-sized pale overlays flatten the page into bands and hide continuity.
4. The glass primitives depend mostly on white fill and soft shadow instead of
   the target's visible rim, lower edge, refraction, and depth layering.
5. Prior matrices checked markup/surface presence and containment; they did not
   establish perceptual parity. Selector presence is not a visual acceptance
   criterion for this round.

## Spatial and component target

### Shared environment

- A saturated-but-light ice-blue base remains visible through the entire page.
- Fine 44–52px grids, larger architectural bays, diagonal light corridors,
  circuit traces, nodes, coordinate ticks, and sparse decorative numerals are
  visible in exposed areas but never read as factual metrics.
- Section boundaries use translucent panes and illuminated seams instead of
  opaque alternating fills; no white/pale-blue blank band can cover the
  backplane.

### Protected content surfaces

- Navigation, introductions, copy, forms, cards, and tables use calm
  blue-white glass at sufficient opacity for near-black slate/graphite copy.
- Primary glass gets a crisp white top rim, cyan inner edge, darker lower edge,
  stronger cast depth, and a restrained refracted highlight.
- Text fields remain visually quiet; decorative structure fades behind them.

### Focal hierarchy

- The shared header becomes a convincing illuminated glass control rail and
  gains the existing Cyvexly signal mark beside the wordmark.
- Existing dark Home/video/final-CTA stages are strengthened rather than
  replaced.
- The shared footer becomes a controlled navy cyber terminal stage so every
  route ends with the dark/light contrast present in the mockup.
- No fake dashboards, client results, product scores, or generated interface
  claims are introduced.

## Responsive state map

- **1440×900:** full architectural bay depth, visible left/right rails and
  wiring, strong inset header, dimensional multi-column cards.
- **1100×1344:** preserve the same visual intensity in the Owner's observed
  class of view; allow responsive layout changes without shrinking the theme
  into a nearly white page.
- **768×1024:** reduce peripheral planes, retain the central grid/traces and
  clearly edged glass; stacked content stays comfortably readable.
- **390×844 / 320px stress:** one-column content, fewer peripheral numerals and
  planes, but still an unmistakable blue cyber-glass environment. No horizontal
  overflow, clipped glow, or decoration over form copy.

## Accessibility and interaction contract

- Normal text stays at or above 4.5:1 and large text at or above 3:1 against
  final composited protected fields; focus and component boundaries remain at
  least 3:1 where applicable.
- Existing keyboard navigation, menu behavior, forms, Planner restoration,
  reduced-motion behavior, media semantics, and route structure do not change.
- Decoration remains `aria-hidden` and pointer-inert.

## Implementation boundary

Change the shared visual source layer first: `globals.css`,
`SiteAtmosphere`, `SiteHeader`, and `SiteFooter`. Modify page markup only if a
route still blocks the shared environment after those primitives are corrected.
Do not change product copy, prices, packages, claims, Planner data, route
behavior, or the supplied media.

## Proof plan

1. Capture and open the real local Home plus representative Services, Pricing,
   Work, Contact, Planner, and 404 views at desktop/tablet/phone sizes.
2. Compare the Home/Services composition directly with mockup 06 and the
   Owner's current-product photograph, judging visual intensity, continuity,
   glass depth, focal hierarchy, and text protection—not selector presence.
3. Measure viewport/client/scroll widths, main/H1 counts, sticky header state,
   and representative final computed surfaces.
4. Exercise menu, FAQ/filter/form behavior where touched by shared styling.
5. Run lint, optimized build, and post-build TypeScript.
6. Preserve only cited visual evidence; clean Builder-owned runtime/profile
   artifacts; update canonical direction/state/handoff honestly.

## Completion boundary

This round may claim implementation only when opened renders show a material,
immediate difference from the Owner's current-product photograph and a direct
visual relationship to mockup 06. Automated structure/containment checks alone
cannot close the round. Final taste approval remains the Owner's decision.
