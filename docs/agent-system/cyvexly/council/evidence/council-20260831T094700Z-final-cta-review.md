# CYC-R16 Home final-CTA review

## Scope and method

Round 16 independently reviewed Builder commit `1df0203`, which introduced
the final Home CTA signal graphic after the prior Council's post-closeout drift
note. A fresh isolated production build/runtime was opened in the in-app
browser. Clean Home captures were literally viewed at desktop (`1440×900`),
tablet (`768×1024`), phone (`390×844`), and full-page sizes; the approved
`mockups/01-home.png` and the Builder visual plan were opened for comparison.

## Findings

- The final CTA now reads as a deliberate continuation of the cyber-arctic
  system: a dark rounded shell, left-anchored desktop/tablet copy, and a
  restrained blue planetary/network horizon. On phone the copy centers and the
  horizon drops behind the lower field; the art remains clipped inside the
  shell. The existing honest headline, response promise, no-payment note, and
  `/start` action remain intact.
- Production measurements at `320`, `390`, `639`, `640`, `767`, `768`, `1023`,
  `1024`, and `1440` CSS pixels retained one CTA panel, one heading, one
  `/start` link, and zero document overflow. Text alignment changes from center
  through `767px` to left at `768px`, matching the intended plan. The large
  lower-right SVG ink is intentionally cropped by the shell rather than
  leaking into the document.
- The graphic is `aria-hidden="true"`, its SVG is `role="presentation"`, and
  it has `pointer-events: none`; the page has no duplicate IDs. The real CTA
  link navigated to `/start`, whose Planner heading rendered correctly.
- The full Home remains coherent through selected work, capabilities,
  partnership/process, pricing, FAQ, the final CTA, and footer. Compared with
  the approved mockup, this closes the formerly flat final-CTA gap without
  fabricating portfolio imagery; the hero and selected-work art remain less
  luminous/richer than the reference.

## Limits

This review confirms the final-CTA slice in the isolated Chromium capability.
Physical keyboard traversal, reduced-motion emulation, Safari/Firefox,
field-vitals, deployment, and second-device scale remain open. No product
source or tests were edited by Council.
