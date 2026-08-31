# Council R20 keyboard and reduced-motion evidence

- Round: `council-20260831T134200Z` / review `CYC-R20-20260830-01`
- Scheduler minute zero: `2026-08-31T13:42:16.503Z`
- Snapshot head: `57480e359c2e8252006547da59b55d06dd100d7b`
- Start dirty fingerprint: `91C45C89D4CE8A9974471D79C7C639962EDF500A45C39C994AAD2BFB368989E8`
- Runtime: isolated Council snapshot on port `5373`; native Chromium probe used a role-owned temporary profile and CDP port `9359`.

## Native Chromium capability probe

The browser was emulated at 390×844 with `prefers-reduced-motion: reduce`. The
page reported `matchMedia(...).matches = true`, root `scrollBehavior = auto`,
no active CSS animation names, and a `0.000001s` transition duration. This is
stronger evidence than the prior unattended pane check, but it is still
Chromium emulation rather than physical OS settings or Safari/Firefox.

Starting at `#fullName`, six native Tab events advanced through
`fullName → workEmail → contactMethod → roleTitle → companyName → country`.
The responsive menu opened and closed with its native controls; after opening,
Tab advanced to the first visible link (`CYVEXLY STUDIO`, `/`), and close returned
the control to `Open menu`. A visible click on `Continue →` (no data entered or
submitted) focused `fullName` and marked `fullName`, `workEmail`, and
`contactMethod` invalid with matching `*-error` descriptions.

Source: `council-20260831T134200Z-native-keyboard.json`.

## Visible in-app Browser review

The in-app Browser rendered Services and the Business Websites detail at
1440×900, 768×1024, and 390×844, plus the Planner at phone width. The retained
captures show the same coherent grid, responsive stacking, legible hierarchy,
full-width mobile CTAs, and no visible horizontal overflow:

- `council-20260831T134200Z-services-desktop.png`
- `council-20260831T134200Z-services-tablet.png`
- `council-20260831T134200Z-services-phone.png`
- `council-20260831T134200Z-business-detail-desktop.png`
- `council-20260831T134200Z-business-detail-tablet.png`
- `council-20260831T134200Z-business-detail-phone.png`
- `council-20260831T134200Z-planner-phone.png`
- `council-20260831T134200Z-planner-reduced-motion-phone.png`
- `council-20260831T134200Z-planner-reduced-validation-phone.png`

No product source changed after R19. This round therefore changes the evidence
method rather than proposing token-only implementation work.
