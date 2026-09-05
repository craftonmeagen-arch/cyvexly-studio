# Cyvexly Active Chunk — Rounds 40-41 Archived Report

Archived round 44 to restore `CYVEXLY_ACTIVE_CHUNK.md`'s latest-three rotation
(§7.14). Verbatim from the live file at time of archiving.

## Round 41 report — global round 41 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R32` (reviewed commit
`a8c5769`, round 39's HEAD, one commit behind round 40's fix). Eighth
consecutive independent confirmation, not a new finding. Moved to
`exchange/processed/`. Re-ran `tsc`/`lint`/`build` clean before making any
change.

Closed both QA candidates round 40 named as untried, with no source change
needed (no defect found):

1. **WCAG 1.4.10 Reflow / 200%-zoom-equivalent.** Emulated 320 CSS px (the
   exact 1.4.10 threshold) and 640 CSS px (a width-halving proxy for a
   1280px viewport at 200% zoom) across 8 marketing routes and all 9 real
   Planner steps, advancing the Planner with genuine CDP mouse clicks on
   Continue against a production server. 34/34 checks: zero horizontal
   overflow, and the Planner's real step-advancement kept working at both
   narrow widths.
2. **Back-button re-check of round 40's shared `goToStep()` fix.** Source
   read confirmed one function serves `handleNext`, `handleBack`, `onEdit`,
   and the progress rail, with the fix keyed only on `currentStep`. Live
   CDP click on "← Back" confirmed: scroll reset to 0, focus moved to the
   step heading, live region announced correctly.

Full detail, method honesty notes, and scripts in `CYVEXLY_APP_DEBT.md`'s
"Resolved round 41" section and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`. Ninth
consecutive round (35-41) with only rounds 39/40 finding real defects — the
next round should look for genuinely new QA angles (candidates in the
handoff) rather than assume the surface stays empty.

## Round 40 report — global round 40 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R31` (reviewed commit
`f1a264f`, round 38's HEAD). Seventh consecutive independent confirmation,
not a new finding. Moved to `exchange/processed/`. Re-ran `tsc`/`lint`/
`build` clean before making any change.

Ran a screen-reader-semantics QA pass on the Planner's step-advance flow, one
of round 39's named uncovered candidates. Per-field validation ARIA wiring
was already solid on Contact and the Planner. Live-testing the successful
step-advance path via real CDP mouse events against a production server
(the in-app Browser pane proved intermittent this round — screenshot
timeouts and a `document.hasFocus()===false` false-positive) **found and
fixed a real defect**: `goToStep()` called `window.scrollTo({top:0})`
synchronously before React committed the new step's DOM, so Chrome's
scroll-anchoring silently kept the old scroll position, and focus never left
the Continue/Back button — no top-scroll for sighted users, no focus move or
`aria-live` announcement for keyboard/screen-reader users. Fixed by moving
scroll+focus into a `useEffect` keyed on `currentStep` (guarded by a
`previousStepRef` comparison, verified safe under React Strict Mode's
dev-only double-invoke), deferred one `requestAnimationFrame` past commit,
plus a polite live-region announcer. Verified before/after against a real
production server: `tsc`/`lint`/`build` clean, commit `71d233f` pushed.
Full detail in `CYVEXLY_APP_DEBT.md`'s "Resolved round 40" section and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

Rounds 39 and 40 both found real defects from previously-uncovered QA
angles, contradicting rounds 35-38's "pause scheduled cadence, queue is
empty" recommendation. See the handoff for untried candidates (200% zoom/
text-resize, a Back/progress-rail re-check of this round's fix).
