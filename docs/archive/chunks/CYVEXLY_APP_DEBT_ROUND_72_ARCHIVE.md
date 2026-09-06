# Round 72 detail (archived round 73 to keep CYVEXLY_APP_DEBT.md under its 30,720-byte hot-file cap)

## Resolved round 72

- **No new Auditor inbox item** (`exchange/operational-inbox/` empty in
  the external independent-review root; most recent processed item is
  `IFA-2026-09-06-R60`).
- **Adversarially reviewed `planner-form.tsx`'s client-side step
  logic, per round 71's recommendation** (the last genuinely fresh
  Planner surface — server route/shared config already reviewed
  rounds 66-69). **Found and fixed a real, reachable validation-bypass
  defect.** `handleSubmit` called only `validateStep(9)` before
  submitting. `maxReachedStep` (which gates which progress-rail step
  buttons are clickable) only ever grows, never resets — so once a
  visitor reaches Review normally, every step, including 9, stays
  reachable via the progress rail for the rest of the session. The
  review page's own "Edit" links intentionally let a visitor jump back
  to any earlier step to change an answer — but if they then invalidate
  that step (e.g. clear a required field) and, instead of clicking
  Continue again, click the Step 9 circle directly in the progress
  rail, `goToStep` fires with no validation at all. Submitting from
  Review then sends the stale/invalid payload to the server, which
  correctly rejects it (400 with field errors) — but the visitor is
  left on Review, where the invalid field isn't even rendered, so
  nothing on screen explains the failure: no `[role="alert"]`, no
  inline field error, the Submit button simply re-enables. A genuine
  silent dead end reachable through the form's own intended Edit flow,
  not a contrived edge case.
- **Reproduced live before fixing, on both runtimes** (`next dev`/
  Turbopack HMR and a real `next start` production build), via the
  in-app Browser pane. `computer` screenshot/click actions are
  non-functional in this unattended session type (per
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md`); used `javascript_tool` to
  dispatch real React-recognized events (`Object.getOwnPropertyDescriptor`
  native-setter trick for controlled `<input>`/`<textarea>` values, so
  React's own `onChange` fires — not just setting `.value` directly)
  and real `MouseEvent('click')` dispatches on radio/checkbox/button
  elements, plus a temporary `window.fetch` wrapper to capture the
  actual outgoing request/response. Filled all 9 steps with valid data
  end to end (confirmed each step's heading advanced correctly),
  clicked "Edit" on the "About you" group, cleared `fullName` (verified
  the DOM value actually changed), then clicked the Step 9 progress-rail
  button directly (confirmed `disabled: false`, i.e. reachable) instead
  of Continue. On the real (pre-fix) code: `fetch` fired with
  `fullName: ""`, server responded `400
  {"error":"validation","fields":{"fullName":"Please enter your
  name."}}`, and the page's `<h2>` still read "09 Review & submit" —
  zero `[role="alert"]` elements anywhere and the Name row still showed
  only "—" with no error text.
- **Fixed:** `src/components/planner/planner-form.tsx` — added
  `validateAllSteps()`, which runs the existing `validateStep()` across
  all 9 steps and merges every error found, tracking the first step
  number that has one. `handleSubmit` now calls this instead of
  `validateStep(9)`: if any step has an error, it sets the full merged
  error set and, when the first error isn't on the step currently
  shown, calls `goToStep()` to navigate there (letting the existing
  step-change effect's scroll/heading-focus/live-region announcement
  do its normal job, so the visitor lands on the actual problem with
  the real inline field error visible below it); if the only error is
  already on the current step (the ordinary Step 9 case — e.g. a
  missing consent checkbox with no earlier-step tampering), it keeps
  the prior `focusFirstError` behavior unchanged, with no navigation.
- **Verified the fix, same live method, both runtimes, after the
  edit:** re-ran the identical repro — `fetch was called: false`, the
  page landed on "01 About you", and `fullName-error` showed "Please
  enter your name." on both `next dev` and a real `next start` build.
  **Regression A (in-place Step 9-only error, no earlier-step
  tampering):** filled all 9 steps validly, checked only
  `acknowledgeNotQuote` (left `consent` unchecked), submitted — `fetch`
  was NOT called, stayed on "09 Review & submit", `consent-error`
  showed the correct message. Matches pre-fix single-step-error
  behavior exactly (no new navigation for an error already on the
  visible step). **Regression B (fully valid, non-tampered
  submission):** checked `consent` too, submitted again — `fetch` WAS
  called, real response `503` (`not-configured` — expected, no
  `RESEND_API_KEY` in this environment, the same documented gap every
  prior round has verified, not a new defect).
- **Verified:** `tsc --noEmit`/`lint`/`pnpm run build` all clean (same
  single pre-existing, unrelated round-42 evidence-script lint
  warning, untouched). A real `next start` production-build 20-route
  sweep (every public static/dynamic route, `/not-found`,
  `robots.txt`, `sitemap.xml`) returned 200 except `/not-found` itself
  (404, correct Next.js convention for that special route).
- Cleaned up: stopped both the owned `next dev` and `next start`
  listeners on port 5173 across the round (verified the real listener
  PID via `Get-NetTCPConnection -LocalPort 5173 -State Listen` before
  each `Stop-Process -Force`, not by process name or count — this host
  runs many unrelated pre-existing `node.exe` processes); removed the
  scratch `next-dev-5173.log`/`next-start-5173.log` files from
  `$env:TEMP` (no lock issue this round, unlike round 71's).
