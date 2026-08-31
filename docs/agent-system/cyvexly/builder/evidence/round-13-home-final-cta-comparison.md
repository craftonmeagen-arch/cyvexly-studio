# Round 13 Home final CTA — rendered comparison

## Source and target

- Starting source: `061fb00` (the reconciled round-12 source).
- Reference: `mockups/01-home.png`, especially its compact split final CTA with
  bright copy on the left and a luminous planetary/network horizon on the
  right.
- Preserved pre-implementation plan:
  `round-13-home-final-cta-visual-plan.md`.
- Scope stayed on the Home final CTA. Portfolio photography, real client
  screens, business claims, and Owner-gated content were not invented.

## Baseline versus final render

The exact production baseline at 1440px was a `1104x316` centered dark panel.
It had readable copy and a working CTA, but its only visual object was a broad
white radial wash over the shared grid. At 390px it was `327x411.5`; the wash
reduced note contrast and did not establish the reference's system-art
hierarchy. The baseline screenshots and geometry records are retained as
`round-13-home-final-cta-baseline-{desktop,phone}.{png,json}`.

The exact final production render keeps the 1104px desktop width and grows by
only 22px to `1104x338`. Copy now occupies the left side while an original
code-native signal graphic builds a blue planetary horizon, orbital traces,
route lines, and luminous nodes on the right. The panel retains a restrained
grid, dark glass depth, readable body/note colors, and the existing `/start`
action. The 768px state is `705x416` with the same split hierarchy. The 390px
state is `327x432`, centers the copy, lowers the horizon behind it, and keeps
the action and note clear. The full Home render shows the new panel completing
the page's late-stage visual rhythm without competing with the hero video or
mid-page diagrams.

## Measured acceptance

- Exact renders were opened at 1440x900, 768x1024, and 390x844, plus a full
  1440px Home capture. A 320px boundary and 390px/24px-root stress state remain
  contained with zero document overflow.
- Nine width boundaries (`320`, `390`, `639`, `640`, `767`, `768`, `1023`,
  `1024`, `1440`) retain one panel, one CTA heading, one `/start` action, one
  page H1, and no horizontal overflow. Copy is centered below 768px and left
  aligned from 768px upward.
- Conservative foreground/background calculations are 14.97–17.87:1 for the
  white heading, 11.12–13.28:1 for the body, and 8.66–10.34:1 for the note.
- The visual SVG is `aria-hidden="true"` with `role="presentation"`; the
  accessibility tree exposes the real CTA heading/link and no planet/horizon/
  network name. The SVG's oversized lower-right ink is deliberate horizon
  cropping inside the panel's `overflow:hidden`, not source clipping.
- Native CDP mouse input hit the actual `a[href="/start"]` and navigated to
  `/start`. The first proof attempt used stale coordinates while smooth scroll
  was still in flight; post-scroll hit-target verification corrected the
  instrument and refuted a product defect.
- The production phone route sweep retains expected 200/404 statuses, one
  `main`/H1, complete image alternatives, and zero overflow. Browser logs have
  no unexpected warning/error and no runtime exception; the only network 404s
  are Next prefetches of the documented Owner-blocked `/about`, `/privacy`, and
  `/terms` routes.

## Target disposition and limits

This round closes the reference-visible final-CTA artwork gap identified in
the round-12 handoff and Council `CYC-R14-20260830-01`. It materially improves
the Home page's glassy/futuristic composition without another global token
pass. It does not claim final Owner parity: the reference still contains
portfolio imagery that cannot be truthfully replaced without Owner-supplied or
approved media. The actual second computer, physical Safari/Firefox, field
performance, deployment, and Owner preference remain outside this proof.
