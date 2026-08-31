# Round 13 Home final CTA visual plan

**Session:** `4492410c-d32b-41c5-b78a-b4db0829c967`  
**Lock claim:** `2026-08-31T08:56:05.8814291Z`  
**Start source:** `061fb00` on `master`  
**PM prompt:** no active prompt

## Intended outcome

Close the largest remaining Builder-reachable Home/reference gap without
fabricating portfolio proof: replace the flat, centered final conversion block
with a compact, art-directed signal horizon that feels like the same luminous
cyber-arctic system as the accepted Home mockup. Preserve the existing honest
headline, response promise, no-payment note, `/start` route, and semantic
heading/link structure.

## Baseline and reference

The accepted `mockups/01-home.png` and the current `061fb00` full Home render
were opened together before implementation. Council `CYC-R14-20260830-01`
independently identified the reference's richer final-CTA art as a remaining
parity gap after adopting Round 12's diagram/process work.

Fresh exact-CDP baseline captures were then opened at 1440x900 and 390x844:

- desktop panel: `1104x316`, centered copy, solid midnight surface with the
  shared grid/left white radial wash;
- phone panel: `327x411.5`, the same centered stack;
- both states have one H1 and zero horizontal overflow;
- the 12px no-payment note becomes visually weak against the bright wash.

Baseline evidence:

- `round-13-home-final-cta-baseline-desktop.{png,json}`
- `round-13-home-final-cta-baseline-phone.{png,json}`

## Spatial and responsive target

- Desktop: one dark rounded signal shell, copy/action anchored to the left
  half, and an original planetary horizon/network composition occupying the
  right half. Keep the content-first reading order and a compact panel rhythm.
- Tablet: retain the split relationship while allowing the visual to sit
  behind the right/lower field rather than squeezing the copy.
- Phone: keep the copy/action centered in one readable column; move the
  planetary horizon behind the lower half with a dark text-protection gradient.
- The art must stay clipped inside the shell at every width and must never
  create document overflow.

## Visual and implementation method

Use one reusable code-native decorative component with original SVG geometry:
planetary arc, latitude/longitude network lines, orbital traces, and signal
nodes. Pair it with a scoped CTA shell background and protective overlay in
shared CSS. This is the normal lightweight method for an original responsive
decorative system object in this established component language: no external
asset, dependency, fabricated interface, or portfolio claim.

## Accessibility and interaction boundary

- The complete graphic is `aria-hidden` and cannot receive pointer/focus.
- The H2, supporting copy, CTA link, and response note remain real text in the
  same DOM order.
- Preserve the existing `/start` link and button focus treatment.
- Maintain normal-text contrast without relying on glow.

## Risks and falsifiers

- A large SVG may dominate the message or resemble crypto/game art; reject if
  it competes with the headline or loses the bright-studio restraint.
- A right-side composition may crowd the copy between tablet breakpoints;
  reject if copy overlaps art or the shell overflows.
- A luminous horizon may lower text/note contrast; reject if computed contrast
  is below 4.5:1 for normal text in its actual background range.
- Reject any implementation that changes the CTA route, hides information,
  adds an accessible duplicate graphic, or regresses the full-page flow.

## Proof plan

1. Lint, clean production build, and immediate post-build TypeScript.
2. Open exact 1440x900, 768x1024, and 390x844 final-CTA captures plus a
   1440px full Home render.
3. Remeasure panel geometry, document widths, H1/H2/link counts, graphic
   count/semantics, and SVG ink/viewBox bounds.
4. Audit the CTA at 390, 639, 640, 767, 768, 1023, 1024, and 1440 CSS pixels
   for containment and expected responsive alignment.
5. Exercise the real `/start` CTA through native browser input, confirm the
   route, and inspect console/runtime errors.
6. Compare the rendered result against this plan and `mockups/01-home.png`,
   then state deliberate adaptations and remaining gaps.
