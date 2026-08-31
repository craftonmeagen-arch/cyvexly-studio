# Round 19 Planner restore-gate visual plan

**Session:** `builder-20260831T213918Z-r19`
**Added as a preserved round audible after the 404 product fix was deployed**
**Triggered finding:** `CYV-IFA-009` in Auditor round `IFA-2026-08-31-R8`

## Baseline observation

The Auditor's opened 390px captures show the initial server-rendered Planner as
an ordinary interactive Step 1 card, then the same card changes to restored
Step 3 after hydration. The independent timing trace saw Step 1 at 0–200ms and
Step 3 by roughly 500ms; immediate synthetic Step 1 input was discarded when
the saved state replaced it. The same state jump reproduced at desktop width.

The source cause is direct: `PlannerForm` renders its ordinary form from the
initial empty Step 1 state, then a mount effect reads the browser-only draft and
replaces `data`, `currentStep`, and `maxReachedStep`. The existing `restored`
flag records that a draft existed, but it does not record that the storage read
has completed and therefore cannot protect the initial interaction window.

## Intended visual and interaction target

Before the one-time browser draft check completes, the Planner column will show
one contained glass status panel in the same footprint and visual language as
the form:

- a small static signal indicator;
- heading `Preparing your Planner`;
- concise copy: `Checking this device for a saved draft before you begin.`;
- polite status semantics and `aria-busy=true`;
- no form fields, step controls, or actionable buttons until the check finishes.

The state is deliberately calm and non-animated. It avoids motion preference
complexity, prevents a false Step 1 affordance, and preserves the Planner hero,
adjacent `What happens next` panel, responsive composition, and page height.
After the check, the existing form appears directly at the restored step or at
Step 1 for a new visitor. Existing saved-draft and service-prefill messages stay
unchanged.

## Geometry and responsive plan

- Reuse the form's `glass-panel`, `rounded-2xl`, and `p-6 sm:p-8` shell so the
  temporary state occupies the exact same grid column without horizontal shift.
- Reserve a minimum height of approximately 22rem, vertically centering the
  message. This is shorter than most form steps but large enough to prevent a
  severe card-collapse flash at desktop or phone width.
- Keep the message centered with a readable measure around 28rem.
- Use the existing `signal-icon`, cyber-blue, midnight-slate, and cool-graphite
  tokens; add no new global CSS or asset.

## Source method

Add an explicit `isStorageReady` state initialized to `false`. The existing
one-time effect sets it to `true` in a `finally` block whether storage is empty,
contains a valid draft, is corrupt, or is unavailable. Render the status panel
until ready. This fixes the source of the race without attempting to merge
unknown user edits after they have already been overwritten.

## Proof plan

1. Existing saved Step 3 draft: fresh navigation exposes either the prepared
   status or restored Step 3, never interactive Step 1; restored values remain.
2. No-draft state reached through the visible `start over` control if present,
   or a clean Browser context: fresh navigation settles on Step 1.
3. Existing Save & continue later still announces success and survives reload.
4. Service-prefilled Planner still resolves to Step 1 with editable prefill when
   no saved draft is present.
5. Rendered desktop and phone states remain contained; one main/H1, meaningful
   loading status, keyboard reachability after restore, and clean diagnostics.
6. Lint, optimized build, post-build TypeScript, local/public route checks, and
   deployment proof.

## Boundaries and falsifiers

No local-storage payload will be read directly through browser tooling; proof
uses the visible Save/restore UI and synthetic non-personal test values. No
external submit or email side effect will be triggered. If the gate introduces
a hydration error, persistent loading state, or inaccessible no-JS regression
beyond the Planner's existing client-side requirement, revise the method before
adoption.
