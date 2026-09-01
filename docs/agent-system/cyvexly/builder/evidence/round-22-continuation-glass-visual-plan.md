# Round 22 visual plan — sticky navigation and continuation glass

## Evidence entering implementation

- Accepted product source: `1437f5b`; current docs successor: `a7e07ca`.
- Owner direction: use the approved pale-blue translucent-glass environment on
  every page, while preserving reliable word contrast.
- Independent Auditor `IFA-2026-09-01-R14` reproduced a real cascade regression:
  the global atmosphere selector changes the authored sticky `SiteHeader` to
  `position: relative; z-index: 1` at desktop and phone widths.
- Council `CYC-R35-20260901-01` opened Home and Services and found that the
  atmospheric hero and selected glass bands are followed by fully transparent
  major continuation sections.
- Builder opened the current optimized Home and Services entries at 1440x900.
  `round-22-continuity-baseline-home.png` and
  `round-22-continuity-baseline-services.png` confirm that the entry treatment
  is already strong and should not be redesigned.

## Intended visible result

1. Preserve the current inset glass header, hero/intro stages, video, cards,
   dark proof/CTA surfaces, copy, and spacing hierarchy.
2. Restore the header's authored sticky positioning and high stacking level so
   it remains available above the atmosphere and content while the user scrolls.
3. Introduce a shared, quieter `glass-continuation` band for the major Home and
   Services sections that currently expose the fixed atmosphere directly. The
   band will be less opaque than `glass-section`, so it reads as one continuous
   environment rather than a sequence of identical solid stripes.
4. Use full-width continuation bands with the existing `max-w-6xl` content
   frame inside. Do not enlarge type, change navigation breakpoints, alter video
   behavior, or invent new content.
5. Keep the dark final CTA panels intact; only their surrounding continuation
   field becomes translucent glass.

## Responsive states

- 1440 and 1280: inset sticky header remains centered; continuation bands span
  the viewport while content stays in the established 1152px frame.
- 768: compact navigation remains active; bands and inner content retain their
  current vertical rhythm and exact width containment.
- 390 and 320: no side clipping or horizontal scroll; the menu opens over
  content and remains visible after scroll; all card stacks and CTA copy remain
  unchanged.

## Contrast and accessibility boundary

- The shared continuation fill must retain the current protected-field
  principle: decoration stays behind a pale translucent layer and text is never
  placed directly over high-frequency wiring/data marks.
- Normal graphite and cyber-blue text must remain at least 4.5:1 against final
  composited pixels; larger display text must remain at least 3:1.
- Decorative atmosphere remains `aria-hidden` and pointer-inert. The header
  fix must not create a focus trap or alter accessible control names.

## Falsifiers and verification

- Reject if the computed header is not `position: sticky`, if its top edge is
  not held after a long scroll, or if content paints above the open menu.
- Reject if any checked width has `scrollWidth > clientWidth`, a missing/extra
  `main` or H1, unnamed controls, or a header/menu breakpoint regression.
- Reject if continuation fields visually flatten the page, wash out the dark
  proof/CTA panels, or reduce the composited text minimum below 4.5:1.
- Open final Home and Services renders at desktop/tablet/phone; compare them to
  the baseline and record diff-to-plan plus diff-to-belief in the round report.

## Interruption-continuation addendum

The original Builder process was interrupted after the first optimized proof
pass. PM continuation later verified the old lock as interrupted and preserved
the complete source/evidence byte set. During that interruption Council round
`CYC-R36-20260901-01` added a fresh release-trust finding: the visible About
links in both global navigation regions promise a route that returns 404, while
the honest About content remains blocked on Owner-supplied founder facts.

The coherent continuation therefore also defers those two visible links until
the route can exist truthfully. This is a reversible configuration change, not
a claim that About is no longer part of the launch sitemap. The desktop header
must remain visually balanced with four links, the compact menu must expose the
same four destinations, and the footer Studio list must not contain the dead
route. Privacy and Terms remain visible, explicitly blocked release work; this
round does not hide those legal obligations or invent policy facts.
