# Council Round 9 — CTA contrast, fidelity, and live-route review

- Review ID: `CYC-R9-20260830-01`
- Round: `council-20260831T025000Z`
- Source snapshot: `95232d5c1b94afc61f676c0706663f2f60638176`
- Snapshot dirty fingerprint: `41440C449D805ED64FBBA67442949A741F35EDDEB9ED2C0D723E61EA070C5A43`
- Runtime: Council-owned isolated runtime on `http://localhost:5373`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied

## Question

Freshly review the Builder's accepted `95c365f` primary-CTA contrast correction,
then inspect the current glass/futuristic treatment against the approved Home
mockup and smoke the important routes and states at the required viewpoints.

## Direct live observations

- The current Home page was opened and literally viewed in the in-app browser at
  `1440×900`, `768×1024`, and `390×844`. The hero, compact header, CTA pair,
  orbit graphic, credibility strip, cards, and final CTA were visible without
  clipping. The tablet and phone used the compact menu; the phone menu opened
  into a six-link sheet and closed cleanly.
- Home full-page and top-of-page captures were compared with the approved
  `mockups/01-home.png`. The current system is coherent, airy, and visibly
  glassier than the earlier baseline. It remains materially less detailed than
  the approved direction: the hero uses a simple SVG orbit instead of the
  mockup's luminous device treatment, and the selected-work/capability surfaces
  are restrained panels rather than the mockup's richer imagery and iconography.
  This is an Owner fidelity/artwork decision, not a reason to invent portfolio
  proof or to claim final parity.
- Pricing was viewed at desktop and phone widths; Process was viewed at phone
  width. Pricing package/add-on/care surfaces and Process timing cards remained
  readable, with no horizontal overflow. The approved compact stacking remains
  intact.
- Services and Work were also opened at phone width; service cards, Work
  filters, concept labels, and card artwork stayed contained and usable.

## CTA contrast verification

The fresh runtime computed the primary CTA as
`linear-gradient(135deg, rgb(15,102,224) 0%, rgb(18,105,224) 52%,
rgb(22,113,209) 100%)` with white text. WCAG relative luminance sampling gives
normal gradient-stop ratios of `5.254:1`, `5.094:1`, and `4.865:1`; the hover
stops are `7.610:1`, `6.034:1`, and `5.439:1`. Sampling 201 interpolated points
between each stop produced the same worst cases (`4.865:1` normal and
`5.439:1` hover), so the previously bright center/end failure is resolved.
The primary CTA remains a 46px-tall, 194px-wide control on the desktop header
and a usable full-width/stacked control in the compact layouts. A direct click
from Home resolved to `/start` (Project Planner) without submitting data.

## Route and interaction stress

The 15-route desktop and 15-route phone probes recorded one `main` and one `h1`
per render, zero document overflow, zero empty links, and zero missing image
alt attributes. The implemented routes returned page-specific titles; `/about`,
`/privacy`, and `/terms` continued to return the intentional custom 404 and
remain the documented Owner/jurisdiction debt. The console contained no
warnings or errors during the fresh route pass.

The empty Project Planner Step 1 Continue action focused `input#fullName` and
exposed its three linked alerts. The FAQ timing disclosure changed
`aria-expanded` from `false` to `true` and exposed the truthful 2–3/4–6/6–9/
8–14+ week ranges. Contact empty submit kept the user on `/contact`, marked
the four required controls invalid, and showed the single correction alert.

`pnpm exec eslint .` and `pnpm exec tsc --noEmit` both exited successfully in
the immutable Council runtime. This is a role-owned runtime check; no product
source or tests were changed.

## Evidence files

- `council-20260831T025000Z-home-full.png`
- `council-20260831T025000Z-home-desktop.png`
- `council-20260831T025000Z-home-tablet.png`
- `council-20260831T025000Z-home-phone.png`
- `council-20260831T025000Z-home-laptop.png`
- `council-20260831T025000Z-pricing-desktop.png`
- `council-20260831T025000Z-pricing-phone.png`
- `council-20260831T025000Z-process-phone.png`
- `council-20260831T025000Z-services-desktop.png`
- `council-20260831T025000Z-services-phone.png`
- `council-20260831T025000Z-work-phone.png`
- `council-20260831T025000Z-route-slice-a.json`
- `council-20260831T025000Z-route-slice-b.json`
- `council-20260831T025000Z-route-phone-stress.json`
- `council-20260831T025000Z-route-laptop-stress.json`
- `council-20260831T025000Z-route-720-stress.json`
- `council-20260831T025000Z-control-audit.json`
- `council-20260831T025000Z-scale-states.json`
