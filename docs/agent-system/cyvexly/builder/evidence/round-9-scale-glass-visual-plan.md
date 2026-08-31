# Round 9 — Cross-computer scale and glass-fidelity visual plan

**Session:** `cyvexly-builder-20260830T201526-7f3c1e9b`
**Start source:** `4fb7c017ca6596d2ee906a5e569874119a6541fd` on `master`; Builder source clean at start. Concurrent completed-Council documentation/evidence and the Owner-direction transcription were already dirty and are not Builder-authored product work.

## Owner evidence and baseline

- `round-9-owner-reference-apparent-large.png` is the supplied 1917×889 case-study capture whose navigation, CTA, type, spacing, and content width appear roughly 1.5×–1.7× larger than the supplied normal view.
- `round-9-owner-reference-normal.png` is the supplied 1701×815 Home capture showing the expected compact desktop scale.
- Both original PNGs declare ~96 DPI; the image metadata does not explain the difference.
- Current CSS leaves `html` font size implicit while Tailwind expresses type, spacing, max-widths, and breakpoints in `rem`. A clean Chrome profile reports a 16px root. A second Builder-owned Chrome profile configured with a 24px default font reproduces the failure shape without browser page zoom: root/body become 24px, the 1440px header grows from 1152×76 to 1425×108, H1 grows from 48px to 72px, and the `lg` breakpoint moves beyond the viewport. This identifies browser default-font configuration as a concrete source-level sensitivity; device pixel ratio is a separate rendering scale and should not change CSS geometry.
- The accepted Home mockup has stronger luminous depth than the current UI: brighter glass edge highlights, layered atmospheric glows, a more radiant orbital core, and clearer separation between translucent panels and the arctic background.

## Intended composition and behavior

1. Establish a stable 16px design-system root so the same 100%-zoom CSS viewport does not silently rescale every `rem` token and responsive breakpoint when another computer has a different browser default font size. Preserve browser page zoom, responsive reflow, text minimums, and reduced-motion behavior.
2. Upgrade the shared glass primitive rather than decorating one page: use layered translucent gradients, a cool white/cyan rim, inner edge light, deeper low-opacity shadow, stronger blur, and saturation. Keep text contrast and hit targets unchanged.
3. Upgrade the shared signal-grid atmosphere with restrained radial cyan/blue illumination behind the existing grid, and add a subtle fixed page atmosphere so flat arctic fields gain depth without obscuring content.
4. Make the sticky header read as a thin glass control surface, and strengthen the shared primary CTA and hero orbit with controlled gradients/highlights. Do not invent imagery, claims, routes, or content.

## Responsive/state map

- Desktop/laptop: 1440×900, 1280×800, and 1024×768 at DPR 1 and 1.5; desktop navigation must remain intentional at/above the established `lg` boundary and never overlap.
- Compact/zoom-equivalent: 768×1024 and 390×844; mobile header, card stacks, and all content must remain within the viewport.
- Browser-default-font challenge: custom 24px default font at a 1440px viewport must still compute a 16px author root and match the normal profile's CSS geometry.
- Legitimate zoom proxy: a 720px effective CSS viewport (representing 200% page zoom on 1440px hardware) must reflow to the compact header with no horizontal overflow.
- Reduced motion: no information may depend on orbit animation; the existing media query remains authoritative.

## Proof plan

- Same-instrument pre/post CDP geometry for root font size, header, logo, CTA, H1, breakpoint state, CSS viewport, DPR, and overflow.
- Open rendered Home and case-study PNGs at desktop, laptop, tablet, and phone sizes and compare with both Owner captures and `mockups/01-home.png`.
- Run lint, production build, post-build typecheck, route/status sweep, link/fragment audit, and page-level heading/control/overflow checks.
- Confirm exact source/diff scope, retain only cited compact evidence, remove Builder-owned profiles/logs/screenshots whose verification value is exhausted, and leave reviewer-owned changes untouched.

## Risks and falsifiers

- A fixed author root that disables page zoom would fail the Owner/accessibility requirement; browser zoom/effective-viewport reflow is therefore a required check.
- Stronger glass can reduce text contrast or become visually noisy; keep text colors unchanged and compare real renders.
- Device-scale-factor-only differences must not be mislabeled as a CSS bug. If DPR changes CSS geometry in the same emulated viewport, the hypothesis is wrong and implementation must stop for deeper diagnosis.
- If the 24px browser-default profile still changes the author root after the fix, the source correction is incomplete.
