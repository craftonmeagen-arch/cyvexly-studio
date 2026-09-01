# Round 25 wider audit and navigation-resilience plan

**Status:** preserved pre-implementation plan  
**Session:** `cyvexly-builder-20260901T175628Z-r25`  
**Lock claimed:** 2026-09-01T17:57:10.3295788Z  
**Start source:** `2cd912158e5b7214534f71df5332eedffb8eae9f` on `main`, equal to `origin/main` and the external remote  
**Dirty boundary:** concurrent Auditor/Council records and evidence only; excluded from Builder ownership

## Wider methodology and product-pattern audit

Round 25 is the fifth-round methodology checkpoint. Rounds 21–24 converged on
one Owner-directed visual outcome: shared blue-glass atmosphere, sticky/header
continuity, validation contrast, and finally full-height every-route adoption.
The work changed method when needed—from shared tokens to structural surfaces
and then to a complete route-family matrix—and fresh Auditor R20 plus Council
R40 now find no new visual, route, contrast, focus, or interaction defect.
Reopening those surfaces without new evidence would be safe-busy churn.

All remaining launch tasks in the current chunk/app debt require Owner facts or
authority: founder identity, jurisdiction-approved legal copy, production
domain/indexability, transactional-email provider/credentials/sending domain,
and the concept-art release decision. The round will not invent substitutes.

The strongest fresh reachable product gap is the shared navigation's lifecycle
and location semantics. Existing proof repeatedly exercises open/close and link
activation, but current source has no Escape close/trigger-focus return, no
route-change or desktop-breakpoint state reconciliation, and no programmatic
current-page marker. Those are one source-level component concern rather than a
new visual direction.

## Methodology and reachability check

- **Normal method:** treat ordinary site navigation as a native-button
  disclosure plus semantic `nav`/links, not an ARIA `menu`; keep
  `aria-expanded`/`aria-controls`, close an open disclosure with Escape and
  return focus to its trigger, and mark the current link with
  `aria-current="page"`. W3C APG's disclosure-navigation example documents
  this pattern; WCAG 2.2 focus-order guidance requires an operable logical
  sequence.
- **Production platform:** the existing Next.js 16 App Router and React client
  header already own this state. `usePathname` is a standard route-aware input
  and no service, credential, package, architecture, or deployment change is
  needed.
- **Reachability:** fully reachable in the current sandbox and public Render
  web service. The earliest falsifier is a real native-key baseline at the
  compact breakpoint plus history and 1023/1024 resize transitions.
- **Named departure:** none. Keep the existing semantic disclosure rather than
  adding a complex menu/menubar role or arrow-key system that ordinary site
  navigation does not require.

Primary references consulted before implementation:

- W3C APG, Disclosure Navigation Menu example (Escape closes and restores
  trigger focus; current-page links use `aria-current`).
- W3C WCAG 2.2 Understanding 2.4.3, Focus Order.
- Next.js App Router documentation for Server/Client Components and route-aware
  client behavior.

## Round plan

1. Build and run the accepted source on the owned Builder runtime. Preserve a
   baseline at 390 CSS px and the 1023/1024 boundary: native Tab/Enter/Escape,
   open-state persistence through history, computed header containment, and
   current-link accessibility semantics.
2. Correct only the shared `SiteHeader` lifecycle source: Escape closes and
   returns focus to the toggle, route changes close stale compact navigation,
   entering the desktop breakpoint closes hidden compact state, and matching
   primary/Planner destinations expose `aria-current="page"`.
3. Keep the approved Round 24 composition, copy, routes, breakpoints, glass,
   spacing, and CTA appearance unchanged. This is a behavior/semantics pass;
   the visual target is pixel-stable closed/open header geometry at 1440,
   1024, 768, and 390.
4. Prove the original and adjacent paths in optimized product truth: pointer,
   native Enter/Space/Escape, focus return, Tab order, link navigation,
   browser history, resize reconciliation, current-page semantics on standard
   and nested service/work routes, exact containment, sticky header, and
   no warning/error diagnostics.
5. Run lint, optimized build/TypeScript, a representative all-route regression,
   opened before/after header renders, public adoption proof after push, and
   reconcile the actual diff against this plan and Builder recollection.

## Risks and controls

- **Focus stealing on ordinary route changes:** return focus only for an Escape
  close initiated while the disclosure is open; route/resize closure must not
  programmatically move focus.
- **Incorrect section matching:** `/services/*` and `/work/*` inherit their
  parent current link; unrelated prefix lookalikes must not match.
- **Hydration drift:** the header is already a Client Component; pathname-driven
  attributes must remain stable after hydration and must not alter layout.
- **Reviewer collision:** stage only Builder-owned source/evidence/canonical
  files and preserve all concurrent reviewer bytes.
- **Visual drift:** compare exact pre/post screenshots and geometry; any
  unplanned visual change is a defect, not an adaptation.

## Proof and completion boundary

The slice is complete when the shared header's compact lifecycle and location
semantics pass on accepted optimized source and public Render, with unchanged
visual geometry, exact route containment, clean build/lint/runtime diagnostics,
durable cited evidence, canonical Round 25 closeout, and no modification to
Owner-controlled scheduler/automation state. Physical assistive-technology and
Safari/Firefox checks remain named complementary limits rather than claimed
proof.

## Verification-discovered responsive addendum

The first 19-route matrix passed all 114 normal-width cases, then a separate
390px/24px-root stress profile exposed one bounded existing defect on
`/services`: the final “Find your starting point” CTA retained intrinsic width
inside a padded wrapping row and extended the document from 390px to 402px.
The exact overflow trace identifies that anchor; every other route and the
shared atmosphere remain contained by their intended clipping layer. Because
this profile directly represents the Owner's cross-computer apparent-zoom
concern, Round 25 will also remove only the CTA's no-shrink constraint and
permit its text to wrap within its existing panel. The normal 390px and desktop
appearance must remain unchanged, the 24px-root route matrix must become fully
contained, and no copy, section, theme, or breakpoint may change.
