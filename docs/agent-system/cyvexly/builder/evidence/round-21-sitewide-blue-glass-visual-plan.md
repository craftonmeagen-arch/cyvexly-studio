# Round 21 site-wide blue-glass visual plan

**Session:** `cyvexly-builder-bd3c7973ece948fd8bb8884acd3fc359`
**Lock claimed:** `2026-09-01T03:06:50.3015216Z`
**Start source:** `445c876` on `main`, tracking `origin/main`
**PM prompt:** no active prompt
**Owner authority:** `CYVEXLY_OWNER_DIRECTION.md` direction
`2026-08-31-09`; approved target
`mockups/06-sitewide-blue-glass-owner-direction.png`

## Intended outcome

Establish the first coherent implementation slice of the Owner-approved
site-wide atmosphere: every current route family receives the same visibly
blue, dimensional glass environment, and non-Home page introductions receive a
calm protected glass field so the stronger background never competes with
headlines, body copy, navigation, controls, or forms.

This round is a shared-system pass, not a one-page imitation. Home and Pricing
retain their stronger bespoke compositions; the shared foundation makes the
remaining routes belong to the same visual world without copying the mockup's
generated screens, claims, or numbers.

## Baseline and measured discrepancy

- The accepted target treats the full viewport as pale architectural glass:
  layered translucent planes, bright edge light, signal wiring, and sparse
  technical numerals continue around the protected copy and media surfaces.
- Current accepted source uses `#EEF4FA` plus two faint radial gradients on
  `body`. Home and Pricing have local dimensional stages, but Work, Services,
  Process, Contact, FAQ, Accessibility, Planner, 404, and dynamic detail
  introductions are predominantly a transparent `signal-grid-bg` over the
  flat body. Council `CYC-R34-F003` independently confirms the Work
  introduction is legible but does not yet fulfill the new site-wide glass
  direction.
- Current fixed-token contrast is strong: midnight-on-mist `14.50:1`,
  graphite-on-mist `5.69:1`, white-on-cyber `5.25:1`. A proposed protected
  blue-white field around `#F2F9FE` keeps midnight `15.12:1`, graphite
  `5.93:1`, cyber blue `4.94:1`, and signal emerald `6.17:1` before final
  composited-pixel checks.
- The shared atmospheric floor must not be darker than approximately
  `#E2F2FC` beneath unprotected cyber-blue text; measured cyber-blue contrast
  there is `4.59:1`. Darker blue is reserved for decoration behind protected
  fields or for the established dark media/final-CTA surfaces.

## Figma-style spatial plan

### Global layer

1. Add one assistive-technology-hidden, pointer-transparent fixed atmosphere
   behind the application shell.
2. Use large pale-blue refractive planes and thin low-opacity circuit/signal
   routes around the outer thirds of the viewport. Sparse coordinate numerals
   remain decorative and away from primary reading columns.
3. Keep header, main, and footer above that layer. Do not change document order,
   landmarks, focus order, or route copy.

### Standard page introduction

1. Full-width stage: brighter ice-blue gradient, grid, edge refractions, and
   restrained technical traces.
2. Inner protected field: rounded translucent blue-white glass with a bright
   one-pixel rim, blur, soft spectral shadow, and a faint highlight sweep.
3. Copy remains centered for standard marketing/utility routes. Dynamic
   service details preserve their copy/visual split; case studies preserve the
   project preview immediately below the protected metadata/copy field.
4. Desktop uses a generous but bounded field; tablet/phone reduce radius,
   padding, and decorative density without changing information or actions.

### Content continuation

- Existing cards, forms, timelines, and CTAs retain their established
  components and semantics. The stronger global atmosphere should show through
  transparent space and translucent sections, while solid or dark proof
  surfaces remain intentionally protected.
- `glass-panel`, buttons, form fields, video behavior, Work filters, and
  canonical content are not redesigned in this slice.

## Planned source slice

- `src/app/layout.tsx`: mount the decorative global atmosphere.
- `src/components/site-atmosphere.tsx`: one reusable, decorative site-wide
  wiring/plane/numeral layer.
- `src/app/globals.css`: shared atmosphere, intro stage, and protected intro
  field primitives plus responsive/reduced-motion behavior.
- Current public page entry files: apply the shared intro primitives without
  rewriting copy or route behavior.

## Risks and controls

- **Text contrast:** background wiring must fade beneath the protected field;
  check final pixel colors at bright/dark/busy samples and retain WCAG AA
  thresholds (`4.5:1` normal text, `3:1` large text and meaningful UI).
- **Visual noise:** technical marks stay sparse, decorative, and low opacity;
  no pseudo-metrics or content-like dashboards.
- **Fixed-layer performance:** use CSS/SVG only, no new dependency, script,
  pointer tracking, or continuous animation. Reduced motion receives the same
  static information.
- **Responsive overflow:** atmospheric planes are fixed/contained and
  `overflow: hidden`; verify exact 1440/1024/768/390/320 widths.
- **Regression:** preserve Home video chrome cleanup, Work filters, Planner
  readiness gate, dynamic 404 metadata, and all current route semantics.

## Proof plan

- Run ESLint, optimized build, and immediate post-build TypeScript.
- Use Builder-owned Chrome 151 + CDP device metrics against Builder port 5173.
- Capture and open the actual Home, Work, Services, Process, Planner,
  Accessibility, service-detail, case-study, and 404 surfaces at representative
  desktop/tablet/phone widths; retain only evidence cited by closeout.
- Measure client/scroll widths, landmarks, H1 count, atmosphere semantics,
  intro geometry, and computed backgrounds.
- Sample final composited pixels beneath headline/body/link text and calculate
  contrast; source-token math alone is not acceptance proof.
- Exercise native Work filter and Planner navigation paths and check console,
  route status, Home media delivery, and absence of restored playback chrome.

## Completion boundary

This round succeeds when the shared environment and protected intro system are
present on all currently implemented public route families, rendered evidence
shows the intended site-wide blue-glass shift, text remains AA-readable, and no
route, interaction, media, or containment regression is found. Final Owner
visual acceptance remains separate.
