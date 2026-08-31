# Round 12 Home mid-page visual plan

**Source baseline:** `dc900bb`; current rendered reference:
`round-10-home-desktop-full.png` plus round 11's hero captures; accepted target:
`mockups/01-home.png`.

## Observed discrepancy

- The current difference panel is a 1152px-wide centered text block with no
  visual object. The accepted mockup uses an approximately 38/62 diagram/copy
  composition: a luminous dimensional system object gives the section a clear
  visual anchor and reinforces the bespoke-partner message.
- The current five-step Home process is text-only. The accepted mockup uses a
  continuous route line, numbered nodes, and distinct line icons to turn the
  same sequence into an immediately scannable system.
- Rounds 9-11 strengthened glass tokens, the shared header, card grammar, and
  hero motion. Repeating another opacity/blur adjustment would not close these
  remaining structural gaps.

## Intended composition and states

- Build one reusable decorative `PartnershipSignalGraphic`: layered translucent
  wireframe cubes, orbit traces, and restrained signal nodes using only the
  existing arctic/cyber/cyan palette. It remains decorative (`aria-hidden`) and
  never carries information that is absent from the adjacent copy.
- Change the difference panel to a two-column visual/copy composition from the
  `md` breakpoint upward, with left-aligned copy. At narrow widths, stack the
  compact diagram above centered copy; preserve at least 24px internal edge
  space and no horizontal scrolling.
- Build five small process icons and a responsive route treatment. At desktop,
  a continuous line sits behind five numbered nodes; at tablet/phone, cards
  reflow without a misleading connector crossing rows. Titles, descriptions,
  order, semantics, and links remain unchanged.
- Use no animation. The result is identical under reduced motion and introduces
  no new asset download, dependency, credential, or foundational platform
  decision.

## Accessibility, performance, and proof target

- Keep the process as one semantic ordered list and decorative SVGs out of the
  accessibility tree. Preserve one H1, heading order, keyboard behavior, and
  current text contrast.
- Compare opened production renders at exact 1440x900, 768x1024, and 390x844
  against this plan and the accepted mockup. Require no overlap/clipping, exact
  viewport containment, five process nodes/icons, one partnership graphic, and
  readable stacking at all three sizes.
- Run lint, clean production build, post-build TypeScript, route/semantic/
  overflow checks, and a final source/diff reconciliation. Any new visible gap
  found by the render becomes a fix or an explicit handoff finding.

## Round boundary

This round advances the active glass/futuristic Owner direction through one
coherent Home mid-page structure slice. It does not claim final Owner parity,
replace the Owner-supplied hero media, change business copy, or touch blocked
About/legal/domain/email work.
