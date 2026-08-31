# CYC-R14 Home mid-page structure review

## Scope and method

Round 14 independently reviewed Builder commit `13d3673` (partnership-system
diagram and process route grammar) in a fresh Council snapshot/runtime. The
changed Home was opened in the in-app browser at `1440×900`, `768×1024`, and
`390×844`; clean production captures were literally viewed at each size and
full-page at desktop/tablet/phone. The approved `mockups/01-home.png` and the
Builder visual plan were opened side by side with the live Home.

## Findings

- The formerly text-only partnership panel now has an original wireframe cube,
  orbit traces, signal nodes, and adjacent copy. It is visually supplementary,
  uses the established palette, and is outside the accessibility tree.
- The five-stage Home process now has five numbered nodes and five distinct
  line icons. The desktop connector reads as one route; at tablet and phone it
  is intentionally removed and cards reflow without a connector crossing rows.
- Production measurements match the changed-surface intent: desktop panel
  `1104×313.11`, five steps/icons/nodes, and a visible connector; tablet panel
  `705×363` with connector `none`; phone panel `327×574.83` with connector
  `none`. All measured states had zero horizontal overflow.
- The full Home remains coherent from hero through selected work, capabilities,
  partnership panel, process, pricing, FAQ, CTA, and footer. The live treatment
  is materially closer to the reference, but the approved mockup still has a
  brighter globe/device hero and richer project/final-CTA artwork. Final parity
  remains an Owner framing decision.

## Interaction and proof boundary

At phone width the compact menu opened (`aria-expanded=true`) and closed without
overflow. The hero video toggled from Pause to Play and back, remaining muted,
looping, and inline; the partnership graphic reports `aria-hidden=true`. The
current production console is clean. The route sweep and focused a11y audit
found one `main`, one `h1`, no missing image alts, duplicate IDs, or visible
unnamed controls on the changed and connected routes.

Physical keyboard hardware, Safari/Firefox, field Web Vitals, the Owner's
second computer, and subjective final parity are not proven in this unattended
session.
