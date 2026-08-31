# IFA-2026-08-31-R8 — Planner restore race probe

## Identity and isolation

- Review: `IFA-2026-08-31-R8`; heartbeat minute zero `2026-08-31T21:52:54.538Z`.
- Accepted source: `409ef8026ae6c93b49f3090a950bea7f1d2a2b7b` (40 `src/` files; fingerprint `590e92c75077e172da3d0409accba8512217cd0f5ff1036b1f2ea422541a6b98`). The Builder had an active lock with uncommitted dynamic-route changes, so only the accepted archive was used.
- Standard Auditor guard remained unavailable because managed permissions deny `.codex` writes. Exact temp runtime: `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T2152Z-008`, port `5273`; Builder lock and mutable source were not touched.

## Scope and method

No new accepted source was reachable since R7, so this round selected a different Planner state/risk: fresh `/start` navigation with an existing saved draft, 390px visible use, timing checkpoints through hydration, immediate field typing before restore, step recovery, and opened before/after captures. No external form submission or email side effect was attempted.

## Reproduction

On a fresh in-app Browser navigation to `/start` at requested 390×844 (375px layout), the server-rendered view initially showed **Step 1 / 01 About you**. Without waiting for the restore effect, I entered synthetic test values into Full name, Work email, and Phone/preferred contact. Within roughly 0.3–2.0 seconds, hydration replaced the view with **Step 3 / 03 Goals**. The typed Step 1 fields disappeared. Clicking the reachable Step 1 progress control showed the prior saved-draft values instead of the just-entered values, confirming the in-progress input was discarded.

The cumulative timing checkpoints were Step 1 at 0/50/200ms and Step 3 by roughly 500ms, settled by about 2.3 seconds, in one run. A second run captured the immediate Step 1 render and a settled Step 3 render; both were opened and visually inspected. A separate 1440×900 run reproduced the same atomic transition from Step 1 to Step 3 by about 600ms, confirming it is not a phone-only artifact. Layout remained contained (`scrollWidth=clientWidth=375` on phone; `1425` on desktop) and browser warning/error logs were empty, so this is a state/hydration race rather than a layout or console failure.

## Finding

### `CYV-IFA-009` — P2 / launch quality — Planner restore can overwrite immediate user input

The intended local-draft restore is performed in `src/components/planner/planner-form.tsx` inside a mount `useEffect`: it reads `STORAGE_KEY`, then calls `setData`, `setCurrentStep`, and `setMaxReachedStep`. Because the initial render is deliberately Step 1 and interactive before that effect completes, a returning user can begin typing and then be moved to the saved step while their current fields are replaced. This causes visible step/layout shift and can lose work without an error message.

Closure: gate the interactive form behind an explicit restore-ready state (with an honest loading/restore affordance), or otherwise merge/preserve user edits and prevent step changes after interaction. Prove a fresh `/start` load with a saved Step 3 draft has no Step 1→Step 3 visible jump and that text entered before restore is preserved; also prove ordinary no-draft users still start at Step 1 and the existing save/restore behavior remains intact.

## Limits and routing

No external submission was made; no secret or real personal data was entered. The accepted source was reviewed while the Builder lock was live; mutable dynamic-route edits were excluded. `CYV-IFA-005`, `CYV-IFA-006`, and `CYV-IFA-008` remain open; `CYV-IFA-007` remains provisional. Evidence: `auditor-20260831T2152Z-008-runtime-metrics.json`, `auditor-20260831T2152Z-008-planner-restored-step3.png`, and `auditor-20260831T2152Z-008-planner-restored-step3-settled.png`.
