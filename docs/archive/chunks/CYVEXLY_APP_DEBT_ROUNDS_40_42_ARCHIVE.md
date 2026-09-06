# Cyvexly App Debt — Rounds 40-42 Archive

Moved from `CYVEXLY_APP_DEBT.md` in round 58 to keep that file under its
30720-byte hot-file cap (round 58 added its own entry and had no more
headroom).

## Resolved round 42

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R33`** — a ninth
  consecutive independent confirmation (reviewed commit `46eae51`, round
  40's HEAD), not a new finding. Moved to `exchange/processed/`. `tsc
  --noEmit`/`lint`/`build` re-run clean before making any change.
- **Found and fixed a real defect: the Contact form had no spam/rate
  protection at all**, while the Planner already has a hidden honeypot
  field. Vision §17 item 6 groups "Contact and Planner" together under
  "proportionate accessible spam/rate controls." Reachable now — a
  client-side honeypot needs no backend/credentials/Owner authorization,
  and the Planner's already-accepted pattern is the precedent. Fixed in
  `src/components/contact-form.tsx`: added an identical hidden honeypot
  field (`contact-company-website`) and validation check. Live-verified
  with real CDP mouse clicks against a production server: honeypot filled
  → submission blocked (mailto bridge never fires); honeypot cleared →
  submission works normally (no regression). Same method live-tested the
  **Planner's existing honeypot for the first time** (previously untested
  per round 41): filled → blocked; cleared → works. `tsc`/`lint`/`build`
  all pass clean. Script and results at
  `docs/agent-system/cyvexly/builder/evidence/round-42-honeypot-overflow-*`.
- **New QA angle — RTL/very-long-name overflow in the Planner review
  step.** A ~130-character unbroken string (no spaces) in "Full name" and
  an Arabic RTL name concatenated directly (no separator) with the same
  string in "Company name" — worst case, zero break opportunities at the
  RTL/Latin boundary. Measured at a real 375px width: `document.
  documentElement.scrollWidth` (375) equals `window.innerWidth` (375) —
  **zero horizontal overflow, no defect found.**
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned
  headless Chrome process (verified by exact `chrome-profile-round42`
  `--user-data-dir` command-line match), removed the temporary Chrome
  profile directory under the OS temp scratchpad root.

## Resolved round 41

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R32`** — an eighth
  consecutive independent confirmation (reviewed commit `a8c5769`, round 39's
  HEAD, one commit behind round 40's step-focus fix already on `main`), not a
  new finding. Moved to `exchange/processed/`. `tsc --noEmit`/`lint`/`build`
  re-run clean before making any change (no source touched).
- **New QA angle — WCAG 1.4.10 Reflow / 200%-zoom-equivalent, one of round
  40's two named uncovered candidates.** Emulated 320 CSS px (the exact
  1.4.10 threshold) and 640 CSS px (a proxy for a 1280px viewport at 200%
  zoom, using the same width-halving equivalence WCAG 1.4.10's own guidance
  relies on) across 8 marketing routes and all 9 real Planner steps,
  advancing the Planner with genuine CDP mouse clicks on Continue (not just
  static snapshots) at a production server. **Result: 34/34 checks, zero
  horizontal overflow, and the Planner's real step-advancement kept working
  at both narrow widths.** No defect found. Script and result summary at
  `docs/agent-system/cyvexly/builder/evidence/round-41-zoom-reflow-*`.
- **Bonus QA — re-checked round 40's other named candidate: does Back (and
  by extension the progress-rail/edit-link callers) get round 40's
  scroll/focus/live-region fix, since all four call the same shared
  `goToStep()`?** Source read confirmed `goToStep()` is a single function
  used identically by `handleNext`, `handleBack`, `onEdit`, and the progress
  rail, and the fix is a `useEffect` keyed only on `currentStep` — not on
  which caller changed it. Live-verified with a real CDP click on the "←
  Back" button after advancing to step 2 and manually scrolling away from
  the top: scroll reset to 0, focus moved to the step 1 heading, and the
  live region announced "Step 1 of 9: About you". **No defect found** —
  confirms the fix is caller-agnostic as the source structure implies.
  Script at `docs/agent-system/cyvexly/builder/evidence/round-41-back-button-test.mjs`.
- **Ninth consecutive round (35-41, with 39/40 as the only two that found
  real defects) confirms zero reachable-without-an-Owner-gate defects**,
  now also covering WCAG 1.4.10 reflow/zoom. Both candidates round 40 named
  as untested are now closed. See `CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s
  round-41 entry for remaining untried QA angles.
- Cleaned up: stopped the owned `next start` production server (verified
  real listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the
  owned headless Chrome process tree (verified by exact
  `chrome-profile-round41` command-line match before touching anything),
  removed the temporary Chrome profile directory under the OS temp
  scratchpad root.

## Resolved round 40

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R31`** — a seventh
  consecutive independent confirmation (reviewed commit `f1a264f`, round 38's
  HEAD — one commit behind round 39's skip-link fix already on `main`), not a
  new finding. Moved to `exchange/processed/`.
- **New QA angle — screen-reader semantics on the Planner's step-advance
  flow**, one of the candidates round 39 named as uncovered. Source review
  found Contact's and the Planner's per-field validation (`aria-invalid`,
  `aria-describedby`, `role="alert"`) already solidly correct — no defect
  there. Live-tested the *successful* step-advance path (not validation
  failure) with real synthetic mouse clicks via CDP against a **production**
  build/server (the in-app Browser pane's `computer`/screenshot path proved
  intermittent mid-round — screenshot timeouts matching the documented
  "pane hidden" pattern — and an initial plain-JS `.click()` test gave a
  false-positive "focus lost" reading because `document.hasFocus()` is false
  in that pane; real headless Chrome has genuine document focus, so it is the
  trustworthy instrument for this claim). **Found and fixed a real defect:**
  `goToStep()` called `window.scrollTo({top:0})` synchronously before React
  committed the new step's DOM, so Chrome's scroll-anchoring silently
  overrode the intended top-scroll; focus also never left the Continue/Back
  button. Confirmed before fix: `scrollY` settled at 721 (not 0), focus
  stayed on the button, and no `aria-live` region announced the change.
  Fixed in `src/components/planner/planner-form.tsx`: moved the scroll+focus
  into a `useEffect` keyed on `currentStep` (guarded by a `previousStepRef`
  comparison, not a one-shot flag, so it stays correct under React Strict
  Mode's dev-only double-invoke of mount effects), deferred one
  `requestAnimationFrame` past commit, focusing the step `<h2>` with
  `preventScroll: true` so the focus call doesn't re-fight the scroll, and
  added a `role="status" aria-live="polite"` sr-only announcer ("Step 2 of 9:
  The business"). Verified after fix: `scrollY` reaches `0`, focus lands on
  the new heading, live region fires. `tsc`/`lint`/`build` all pass clean.
  Full before/after evidence and the reusable CDP test script are at
  `docs/agent-system/cyvexly/builder/evidence/round-40-planner-step-focus-*`.
- Cleaned up: stopped the owned `next start` production server and the owned
  headless Chrome process tree (verified by exact `--user-data-dir` command-
  line match before touching anything), removed the temporary Chrome profile
  directory under the OS temp scratchpad root.
