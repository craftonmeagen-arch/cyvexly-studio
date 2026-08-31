# Council R19 Accessibility, Interaction & Responsive Review

## Review identity

- Review: `CYC-R19-20260830-01`; round: `council-20260831T124200Z`.
- Scheduler minute zero: `2026-08-31T12:42:45.538Z`.
- Immutable snapshot head: `57480e359c2e8252006547da59b55d06dd100d7b`;
  source dirty fingerprint: `E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855`.
- Council runtime: port `5373`; in-app Browser tab `17`; no Auditor guard.

## Fresh question and method

No product-source commit landed after R18, so this round deliberately changed
the method instead of repeating the service contract review. The Council used
the real in-app Browser against a fresh production runtime and literally viewed
Services and Business Websites at `1440x900`, `768x1024`, and `390x844`.
The new focus was focus-visible treatment, mobile-menu focus return, Planner
validation/progression/state continuity, reduced-motion implementation signals,
and the limits of unattended keyboard emulation.

## Direct observations

- The native Services → Explore business websites → Include this in my project
  path reached `/start?service=business-websites` and retained the visible
  starting-point/saved-draft notice.
- The desktop Planner entry keeps the nine-step progress rail, local draft
  notice, two-column form/helper composition, and large type within the same
  glass/grid system without clipping.
- Services remained a coherent, light glass/grid system: two-column desktop,
  one-column tablet, and a readable phone stack. No horizontal overflow was
  observed at any required viewport. The full desktop composition also keeps a
  clear sequence of service cards, popular types, combinations, work, FAQ,
  final CTA, and footer without a broken seam.
- Business Websites preserved the outcome-led hero, orbital concept signal,
  CTA pair, and problem/outcome cards across all three widths. The tablet stack
  is intentional and contained; the phone headline and CTAs wrap without crop.
- At phone width, opening the native menu exposes Services, Work, Pricing,
  Process, About, and Describe your project in a readable glass panel. The
  focused Close menu control visibly receives the blue focus outline; closing
  the menu returns focus to the Open menu button.
- The Business Websites FAQ disclosure opens from its native button, exposes
  `aria-expanded="true"` and `aria-controls="faq-panel-0"`, keeps the button
  visibly focused, and reveals the answer without layout overflow.
- The Planner's empty Step 1 Continue action visibly renders three field-level
  errors, focuses `fullName`, and shows the blue focus outline. Each invalid
  input exposes `aria-invalid="true"` and an `aria-describedby` error ID.
  Entering non-sensitive review values and continuing reaches Step 2; the
  business description survives a forward/back transition. The phone form
  remains contained.
- The live default media query reports `prefers-reduced-motion: false`, root
  `scroll-behavior: smooth`, no running CSS animation names, and short
  transition durations. Source review confirms the global reduced-motion rule
  in `src/app/globals.css:63-76` and Planner's `matchMedia`-guarded scroll
  behavior in `src/components/planner/planner-form.tsx:276`.
- In-app CUA/locator keyboard presses did not advance focus or activate a link
  in this unattended Browser session after a target was focused. Because the
  click path worked and the automation surface may not model native Tab/Enter
  dispatch faithfully, this is not promoted to a product defect; attended or a
  different browser capability is required for closure.
- After an automated Continue click, the Planner reported `scrollY` around
  `617px` with the form top around `107px`; Playwright click auto-scrolls the
  target before the React step transition, so this is an observation requiring
  attended confirmation rather than a confirmed scroll defect.

## Boundaries and limits

- No form was submitted and no external service was contacted. Review data was
  synthetic and local-only.
- Safari/Firefox, OS-level reduced-motion emulation, physical keyboard input,
  second-device scale, and field Web Vitals remain unconfirmed.
- Approved mockup `02-services-pricing.png` still has brighter globe/workspace
  artwork and denser proof language than the honest orbital concept preview;
  this remains an Owner fidelity decision, not permission to invent media.

## Evidence

- R19 PNGs: Services and Business Websites desktop/tablet/phone, mobile menu,
  Planner validation, and Planner Step 2 captures listed in `council/evidence/INDEX.md`.
- R19 build evidence: `council-20260831T124200Z-build-media.md`.
- Runtime route smoke: all five service routes and `/start?service=business-websites`
  returned `200`; unknown service returned `404`.
- Live console warning/error query returned `[]`.
