# Round 123 portfolio-focus evidence

- Candidate source: global round 123 working tree based on local product source
  `84dbbb3` / accepted deployed source `2a53e31`.
- Product question: do Aurora Spaces and Vellora Care strengthen buyer trust
  beside the two inspectable Velora and Nexora demonstrations?
- Disposition: no. The two schematic studies were removed from featured work,
  case-study generation, service proof, and the sitemap. Their former URLs now
  use the normal 404. This also removes the Velora/Vellora name collision.
- Current presentation: two built fictional demonstrations, three concrete
  capabilities per Work card, and separate case-study/demo actions. Services
  point only to these built examples with scope-specific, bounded copy.

## Visual comparison

Compared the rendered Work page with
`mockups/03-work-case-study.png`. The reference's architectural ice-blue glass,
clear intro, project-card field, and decisive closing action remain present.
Its six equal schematic concept cards are deliberately not preserved: current
Owner direction prioritizes two or three strong inspectable examples, and the
rendered product now gives two built demonstrations more space and evidence.

Retained rendered captures:

- `work-desktop-1440.png` — complete 1440×900-layout capture.
- `work-mobile-390.png` — 390×844 viewport capture of the Work entry state.

The same page was visibly inspected in Codex IAB at 1440×900, 768×1024, and
390×844. No clipping, horizontal overflow, browser warning, or browser error
was observed. The Nexora case-study action and demo transition were exercised
with real keyboard activation. No inquiry was submitted.

## Automated proof

- `pnpm exec tsc --noEmit` — pass.
- `pnpm run lint` — pass with one unchanged historical evidence warning.
- `pnpm exec next build --webpack` — pass; 50 generated routes.
- `node scripts/buyer-journey-smoke.mjs` — 29-route pass, including both
  retired URLs at 404 and their exclusion from `sitemap.xml`.
- `node velora/smoke.mjs ...` — pass with zero failures/runtime/network errors;
  includes desktop/mobile Work and case-study transitions.
- `node scripts/nexora-demo-smoke.mjs` — pass at 1440×900 and 390×844 with
  range/filter interaction, no-index, zero runtime errors, and zero overflow.
