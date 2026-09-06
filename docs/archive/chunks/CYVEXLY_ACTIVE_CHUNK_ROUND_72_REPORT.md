# Round 72 full report (archived round 73 to keep CYVEXLY_ACTIVE_CHUNK.md under its 30,720-byte hot-file cap)

## Round 72 report — global round 72 (scheduled/unattended session)

Checked the Auditor inbox first: no new items (`exchange/operational-
inbox/` empty in the external independent-review root, most recent
processed item is `IFA-2026-09-06-R60`).

**Adversarially reviewed `planner-form.tsx`'s client-side step logic**
(round 71's recommended fresh surface — server route/shared config
already reviewed rounds 66-69) and found a real, reachable validation-
bypass defect. `handleSubmit` only called `validateStep(9)` before
submitting, but `maxReachedStep` (which gates which progress-rail
steps are clickable) never resets once reached. A visitor who uses a
review-page "Edit" link to jump back to an earlier step, changes it to
an invalid state (e.g. clears the required name field), then clicks
directly on the Step 9 circle in the progress rail instead of walking
forward via Continue, returns to Review with the invalid state never
re-validated. Submitting sends the stale/invalid data to the server,
which correctly rejects it (400), but the visitor is left on Review
with **no visible indication anything went wrong** — no alert, no
field-level error (the invalid field isn't rendered on the review
step), the Submit button just silently re-enables. A real dead end.

**Reproduced live** (both `next dev`/HMR and a real `next start`
production build) via scripted DOM interaction through the in-app
Browser pane (unattended session — `computer` screenshots/clicks are
non-functional per `CYVEXLY_TOOLS_AND_CAPABILITIES.md`; used
`javascript_tool` to dispatch real React-recognized `input`/`click`
events and intercept `window.fetch`): filled all 9 steps validly,
used Edit to return to Step 1, cleared `fullName`, jumped to Step 9 via
the progress rail (confirmed `isReachable`, no validation fired),
checked the two consent boxes, clicked Submit. Confirmed the exact
predicted failure: request sent with `fullName: ""`, server responded
`400 {"error":"validation","fields":{"fullName":"..."}}`, page stayed
on "09 Review & submit" with zero `[role="alert"]` elements and no
visible error text anywhere.

**Fixed:** added `validateAllSteps()` (loops `validateStep` across all
9 steps, merging errors and tracking the first step with a problem).
`handleSubmit` now uses it instead of `validateStep(9)`: on any error,
sets the merged errors and navigates to the first invalid step (so the
existing step-change effect's scroll/focus/live-region announcement
fires and the real inline field error becomes visible); if the only
error is on the current step (the normal Step 9 case, e.g. missing
consent), keeps the existing `focusFirstError` behavior with no
navigation.

**Verified:** `tsc --noEmit`/lint/build all clean (same pre-existing
round-42 evidence-script lint warning, untouched). Re-ran the exact
repro against both `next dev` and a real `next start` build after the
fix: `fetch was called: false`, page lands on "01 About you", and
`fullName-error` shows "Please enter your name." — confirmed on both
runtimes. Regression-checked: (1) an in-place Step 9-only error
(unchecked consent, no earlier-step tampering) still blocks
submission and stays on Step 9 without navigating away, matching prior
behavior exactly; (2) a fully valid, non-tampered submission still
reaches `/api/planner` (`fetch` called, real `503 not-configured`
response — expected, no `RESEND_API_KEY` in this environment, same as
every prior round's finding). A 20-route production sweep (every
public static/dynamic route plus `robots.txt`/`sitemap.xml`) returned
200 (`/not-found` correctly 404s, per Next.js convention).

Cleaned up: stopped both the owned `next dev` and `next start`
listeners on port 5173 (verified the real listener PID via
`Get-NetTCPConnection -LocalPort 5173 -State Listen` before each
`Stop-Process`, not by process name — this host runs many unrelated
pre-existing `node.exe` processes); removed the scratch
`next-dev-5173.log`/`next-start-5173.log` files from `$env:TEMP`
(round 71's same two files were retained this round with no lock
issue this time).
