# Round 145 — mobile Pricing shortcuts

- **Observed gap:** the visible public 390×844 Pricing page exposed a native
  horizontal scrollbar beneath its section shortcuts. The rail measured
  `824px` scroll width inside a `375px` client width: `449px` of hidden
  decision navigation, with only Packages, Compare, and part of Example
  scopes visible before a sideways gesture.
- **Change:** the seven existing section shortcuts now wrap into readable
  rows below the large-screen breakpoint. All labels, destinations, 44px
  interaction heights, package anchors, and the desktop single-line layout
  are preserved.
- **Measured result:** local Chromium reports `390px / 390px` scroll/client
  width in three rows at 390×844 and `320px / 320px` at 320×568, both with
  computed horizontal overflow `visible` rather than `auto`. The full
  hierarchy suite reports zero page overflow and zero runtime errors.
- **Visible comparison:** the public baseline and local result were inspected
  in the visible in-app browser at 390×844; local was also inspected at
  320×568 and 1280×720. The retained captures were opened beside
  `mockups/02-services-pricing.png`. The desktop chip rail remains calm and
  continuous with the approved glass composition; phone shortcuts now form a
  compact vertical decision band instead of introducing unrelated native
  scrollbar chrome.
- **Regression:** `scripts/internal-hierarchy-smoke.mjs` now rejects an inner
  scrolling rail or clipped shortcuts at both phone widths and still verifies
  exact package-anchor placement below the sticky header.
- **Validation:** 52-route optimized production build; post-build TypeScript;
  full lint with the one unchanged Round 42 evidence warning; local and public
  33-route/15-context buyer smokes; local and public responsive hierarchy
  smokes; visible local desktop/390px/320px and deployed 390px review. No
  inquiry, email, call, payment, or transaction was submitted.
- **Review intake:** Auditor `IFA-2026-09-09-R109` passed the prior exact
  product source `904e8ef` with zero findings and was processed. This product
  change supersedes that source, so two independent reviews of the new exact
  accepted source are required.
- **Source:** local product/test commit `85f22b9`; stable-patch-equivalent
  deployment commit `68a3ec0` on `origin/main`. The final evidence/continuity
  source identity is recorded in current state and handoff.
- **Cleanup:** reset/closed the Builder-visible browser, stopped the verified
  port-5173 server, removed the clean deployment worktree, and recycled the
  generated `.next` cache (`349,013,482` measured bytes). Ten redundant suite
  captures totaling `6,401,942` bytes were also moved to the Recycle Bin.
  Retain the three focused comparison captures below until the exact accepted
  source receives independent review.

Retained captures:

- `pricing-desktop.png`
- `pricing-phone.png`
- `pricing-minimum-phone.png`
