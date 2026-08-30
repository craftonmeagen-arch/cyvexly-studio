# IFA-2026-08-30-R3 Planner evidence

- Round: `auditor-20260830T2115Z-003`
- Source runtime: Auditor-owned snapshot/runtime on `http://localhost:5273` (source snapshot fingerprint `9077a9c90764e301f111b37ec0803dce745d70cb6fde21e2baccb3b19e3b468e`, 32 `src/` files)
- Method: real in-app browser DOM snapshots and Playwright controls; no valid external submit or mail-client side effect was triggered.
- Viewports: default desktop and explicit phone `390x844`.

## Observed flow

- `/start` resolves with title `Project Planner — Cyvexly Studio`, a nine-step progress navigation, labelled controls, and the “What happens next” aside.
- Empty Step 1 continuation is blocked with three specific `role="alert"` messages for name, email, and contact method. Filling fabricated local-only values advances to Step 2.
- The progress rail marks completed steps, disables unreachable steps, exposes `aria-current="step"`, and permits returning to reached steps. The review screen's `Edit Goals` control returned to Step 3 with the previously selected “Other” goal and its conditional text field intact.
- Conditional fields behaved as expected: selecting “Other” on Goals mounted `Describe your primary goal`; selecting booking on Features mounted the feature-detail field; “Not sure” options allowed advancement without a full technical selection.
- Review Step 9 rendered a summary for all reached sections and separate acknowledgement/consent/follow-up controls. Empty consent/acknowledgement was not submitted.
- Save-and-restore persisted the fabricated draft locally: after reload the app reopened at Step 3 with the selected goal and text intact.
- Phone screenshot `auditor-20260830T2115Z-planner-mobile.png` was opened and visually inspected. The compact header, readable hero, and horizontally scrollable progress rail with the current Step 3 marker were visible at 390px.

## Product behavior requiring a decision

The source's valid submit path builds a complete `mailto:hello@cyvexly.com` summary, removes the local draft, and navigates to the user's email client. The confirmation state explicitly tells the prospect that this is an interim client-side step and that Cyvexly does not yet send an automatic confirmation email. The vision requires a confirmation state with an emailed copy (`CYVEXLY_VISION_PLAN.md` §6.9 and §9). This was not triggered because opening a mail client is an external communication side effect.

## Limits

The in-app browser session is unattended/hidden, so a genuine physical Tab-key traversal and visible reduced-motion animation were not claimed. The source uses `scrollTo`/`scrollIntoView` with a reduced-motion branch; DOM end states were inspected, not the animation itself.
