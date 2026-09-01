# Round 24 — authoritative every-page blue-glass visual plan

**Status:** preserved pre-implementation plan  
**Session:** `cyvexly-builder-20260901T160800Z-r24`  
**Claimed:** 2026-09-01T16:05:33.5421000Z  
**Start source:** `e8ef2b6467b07859d04b1588930ffe318985ca83` on `main`, equal to `origin/main`  
**Dirty boundary:** concurrent Auditor/Council records and evidence only; excluded from Builder ownership  
**PM prompt:** `NO ACTIVE PM PROMPT`

## Required outcome and authority

Owner direction `2026-09-01-10` and
`mockups/06-sitewide-blue-glass-owner-direction.png` are the exact visual
contract. Every public route must read as one full-height bright ice-blue
cyber-glass environment, with architectural grids/traces/coordinates/depth,
protected translucent information surfaces, controlled dark high-tech focal
stages where the route already supports them, coherent edge light/refraction/
blur/shadow, no flat white or old-theme fallback gaps, and WCAG-readable copy.
No agent-preferred substitute theme, invented claims, fake interface metrics,
or unauthorized imagery is permitted.

This is reachable through the existing Next.js/Tailwind/CSS architecture. The
normal method is to strengthen the shared root atmosphere and shared glass/
focal primitives, then explicitly close exceptional copy surfaces. A per-page
set of unrelated backgrounds would create drift and is not the selected method.
The earliest inexpensive falsifier is a full-page rendered comparison on a
dynamic detail route and a form route: both currently reveal long transparent/
white bands even though their introductory panels are blue-glass.

## Reference reading

The authoritative mockup was opened at its original 1536×1024 size beside the
captured product. Its load-bearing qualities are:

- a bright, saturated-enough ice-blue environment that remains visible between
  all panels rather than collapsing into white;
- perspective architecture across the complete canvas: luminous grid lines,
  long traces, glass planes, coordinate-like labels, edge blooms, and spatial
  depth;
- translucent white/blue protected copy and navigation shells with crisp
  illuminated borders and distinct refraction/shadow layers;
- a controlled navy/cyan focal stage that gives the composition visual weight
  without placing body copy over the busy imagery;
- an alternating rhythm of calm reading glass and stronger system moments;
- high-contrast near-black copy, restrained blue accents, and no decorative
  line competing with text.

The generated screens, numbers, and lettering inside the mockup are not product
facts and will not be copied. Existing truthful code-native diagrams, concept
previews, the Owner-supplied Home video, and existing dark CTA stages are the
authorized focal content.

## Route-family inventory

| Family | Public routes/states | Baseline visual truth | Planned shared treatment |
| --- | --- | --- | --- |
| Bespoke marketing | `/`, `/services`, `/pricing` | Home/Services have full-width fields; Pricing has bespoke stages, but intensity varies | Preserve compositions; unify their surrounding ice-blue architecture and stronger shared edges |
| Standard marketing | `/work`, `/process` | Introductions are strong; long continuation areas become nearly white | Full-height root environment plus protected continuation fields and upgraded dark CTAs |
| Dynamic services | `/services/business-websites`, `/services/website-redesigns`, `/services/landing-pages`, `/services/ecommerce-websites`, `/services/website-care` | Four of eight direct sections are transparent on the representative route | Shared full-page environment; transparent sections become calm blue-glass continuation fields; existing cards remain protected |
| Dynamic work | `/work/aurora-spaces`, `/work/nexora-systems`, `/work/vellora-care` | Three of five direct sections are transparent; representative narrative has a large flat-white center | Shared full-page environment; long narrative becomes a protected content field; concept artwork remains truthful focal media |
| Forms | `/contact`, `/start` | Each has one of two direct sections transparent; desktop and phone visibly turn white below the intro | Protected form stage over the continuous environment; Contact direct-info copy receives its own calm glass field |
| Utility | `/faq`, `/accessibility`, unmatched-route 404 | FAQ alternates old transparent fields; Accessibility body sits above a flat-white gap; 404 is already compact | Full-height environment and consistent section rhythm; retain one H1/main and utility clarity |

Total route truth is 17 valid generated public pages plus the custom unmatched
404 state, matching the 18-state established runtime inventory.

## Measured baseline

Durable baseline:
`round-24-baseline-metrics.json` and the cited `round-24-baseline-*.jpg`
captures in this evidence directory. All listed screenshots were opened.

At exact 1440×900 and 390×844 CSS viewports, every sampled route is exactly
width-contained. The gap is visual continuity, not overflow:

| Representative route | Direct sections | Transparent sections | Desktop full height | Phone full height |
| --- | ---: | ---: | ---: | ---: |
| Home | 8 | 0 | 4865px | 9793px |
| Services | 7 | 0 | 6252px | 11750px |
| Service detail | 8 | 4 | 4511px | 7140px |
| Work detail | 5 | 3 | 3685px | 4737px |
| Contact | 2 | 1 | 1571px | 2694px |
| Planner | 2 | 1 | 1842px | 3078px |
| Accessibility | 2 | 1 | 2077px | 2927px |
| 404 | 1 | 0 | 1014px | 1527px |

The opened product/reference comparison shows the baseline is structurally
close but materially quieter: long detail/form/utility continuation regions
appear white or legacy-flat, the root grid/depth does not carry through the
full capture, and generic navy CTA rectangles have less bezel/refraction than
the reference focal stage.

## Implementation slice

1. **Full-height environment at the root.** Make `main` itself carry a local,
   full-height architectural field (ice-blue depth gradient, multi-scale grid,
   restrained perspective light, and trace layer) so route continuity does not
   depend on one fixed viewport decoration. Keep the existing assistive-
   technology-hidden `SiteAtmosphere` as the sparse coordinate/wire layer.
2. **Shared section continuity.** Add one source-level fallback treatment for
   direct route sections that are presently transparent, while preserving the
   stronger bespoke Home/Pricing/Services and intro stages. Upgrade
   `glass-section` and `glass-continuation` so both remain visibly glass, not
   flat pale fills.
3. **Protected information.** Strengthen `glass-panel`, `glass-shell`, and
   `page-intro-shell` edge/refraction/depth consistently. Add a calm protected
   field to Contact's direct-information column and the long work-detail
   narrative without changing copy, semantics, or flow.
4. **Controlled focal grammar.** Add a reusable `cyber-focal-panel` bezel/grid/
   glow treatment to the existing truthful dark CTA stages on Work, Pricing,
   Process, Services, FAQ, and work detail. Preserve the Home video and existing
   code-native artwork; introduce no new factual imagery or metrics.
5. **Responsive restraint.** At tablet/phone widths, reduce decorative density,
   preserve the full information hierarchy, keep copy fields opaque enough,
   and prevent decoration from becoming a scrolling tax or overflow source.

This is an every-family shared-system pass, not a Home-only or token-only pass.
If rendered comparison shows a route-specific remaining white/fallback band,
repair that exception before closeout rather than describing the system as
complete.

## Accessibility and proof plan

- Preserve one `main` and one H1, heading order, control names, native form
  labels/errors, sticky/z50 header behavior, keyboard focus, reduced-motion
  behavior, and Home media chrome removal/`0.75×` playback.
- Measure final composited normal-text and interaction-boundary contrast in the
  brightest and busiest rendered fields; normal text must be at least 4.5:1,
  large text and meaningful boundaries at least 3:1.
- Run ESLint, optimized 23-page build, post-build TypeScript, route/assets and
  MP4 range checks.
- Render and open representative Home, standard, dynamic service, dynamic
  work, Contact, Planner, Accessibility/FAQ, and 404 states at 1440, 768, and
  390; audit all 18 route states at desktop/tablet/phone plus zoom-proxy widths
  1280, 1152, 1024, 960, 853, 768, 640, 480, 390, and 320.
- Check exact containment, header stickiness after scroll, compact-menu open/
  close/navigation, FAQ interaction, Work filtering, form validation/focus,
  Home media semantics/playback, reduced motion, and browser console errors.
- Compare final full-height renders directly with the reference and this plan,
  naming deliberate adaptations and residual gaps. Then push `main`, verify the
  public CSS/source identity and representative public renders, clean only
  Builder-owned runtime/profile/build artifacts, and release the owned lock as
  the literal final repository action.

## Risks and boundaries

- Increasing translucency without protected opacity could regress contrast;
  composited pixels, not nominal tokens, decide.
- Global selectors can repeat Round 22's stacking regression; header computed
  `position: sticky`, `top: 0`, and `z-index: 50` are explicit regressions.
- Decorative transforms/pseudo-elements can create paint-only horizontal
  overflow; document and pseudo-element containment must be measured.
- Owner-blocked founder/legal/domain/email facts and concept-art framing remain
  unchanged. Scheduler/automation state is explicitly out of scope.

