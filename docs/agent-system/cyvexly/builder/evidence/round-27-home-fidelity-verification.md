# Round 27 Home fidelity verification

## Visible result

The Owner's public baseline and approved mockup 06 were opened at the same
desktop scale before implementation. The baseline had the correct split and
media but read as two opaque cards over a flat grid. The final visible in-app
Browser render adds a Home-specific architectural glass scene: three layered
planes, three luminous columns, two cross-stage beams, circuit traces and
nodes, coordinate marks, a reflected floor, a protected double-rim copy pane,
an instrumented media chassis, and an inset credibility deck.

The final 1440×900 first viewport is retained at
`round-27-home-1440-final.png`; the complete Home is retained at
`round-27-home-1440-full-page.png`. Tablet and phone renders confirm the split
becomes a contained stack and decorative density reduces rather than competing
with text. The final phone render is `round-27-home-390-final.png`.

## Plan-to-product comparison

- The environment now has discrete foreground/background planes and luminous
  structure rather than depending on global color intensity.
- The copy remains on a calm light field with a double refractive rim; the
  darker architectural traces stay decorative and do not cross the text at
  full strength.
- The real video remains the dark focal stage. Its source, poster, copy,
  `0.75×` rate, looping, data-saving/reduced-motion behavior, and absence of
  visible/native playback chrome are unchanged.
- The credibility points now sit inside one inset glass deck with a visible
  perimeter and internal divisions, matching the approved composition more
  closely than the prior full-width flat strip.

## Responsive and interaction proof

- 1440: `scrollWidth === clientWidth === 1425`; one main; one H1; sticky/z50
  header; 594px copy; 727px media; 1361px inset rail.
- 768: `scrollWidth === clientWidth === 753`; 705px copy and media; compact
  navigation visible.
- 390: `scrollWidth === clientWidth === 375`; 343px copy and media; one
  architectural column remains while the secondary planes/rails are hidden.
- Pointer click pauses the named showcase surface. Native Enter resumes it;
  `aria-label`/`aria-pressed` update and the rate remains `0.75`.
- Browser warning/error diagnostics are empty.

## Build and scope

`pnpm run lint`, `pnpm run build`, and `pnpm exec tsc --noEmit` pass. The
optimized build generates 23 pages; the pre-existing Owner/domain-blocked
`metadataBase` warning is unchanged. No product copy, price, route, form,
navigation behavior, media source, package, legal boundary, or scheduler/
automation state changed.

This is rendered implementation proof, not a claim of final Owner acceptance.
