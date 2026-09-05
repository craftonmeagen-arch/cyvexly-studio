## Round 40 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-05, 50-minute hard
time limit (unattended)
**Start source:** `a8c5769` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item (`IFA-2026-09-05-R31`)
and ran a screen-reader-semantics QA pass on the Planner's step-advance flow —
one of round 39's named uncovered candidates.
**Completion:** SOURCE FIX LANDED (`71d233f`) — see below.

### What was checked

- `IFA-2026-09-05-R31` (reviewed commit `f1a264f`, round 38's HEAD, one commit
  behind this round's start) is a **seventh consecutive independent
  confirmation, not a new finding**. Moved to `exchange/processed/`.
- Ran `pnpm exec tsc --noEmit`, `pnpm run lint`, `pnpm run build` — all clean
  before making any change.
- **New QA angle — screen-reader semantics on Contact/Planner**, one of round
  39's named candidates. Source review found per-field validation
  (`aria-invalid`/`aria-describedby`/`role="alert"`) already solid on both
  forms — no defect there. Live-tested the *successful* step-advance path
  instead (not validation failure, already known-good).
- **Tooling note, investigate-before-trust:** the in-app Browser pane's
  `computer`/screenshot path was intermittent this round (screenshot timeouts
  matching the documented "pane hidden" pattern partway through), and a
  plain-JS `.click()` test gave a false-positive "focus lost to `<body>`"
  reading — `document.hasFocus()` is `false` in that pane, so script-driven
  focus doesn't behave like a real interaction there. Switched to the
  round-8/39-established method instead: local headless Chrome
  (`--headless=new`, unique `--user-data-dir` under the OS temp root,
  `--remote-debugging-port`) driven via raw CDP (`Input.dispatchMouseEvent`,
  `Runtime.evaluate`) against a **production** `next start` server — a real
  tab with genuine `document.hasFocus() === true`, the trustworthy instrument
  for this claim.
- **Found and fixed a real defect:** `goToStep()` (shared by Continue, Back,
  edit links, and the progress rail) called `window.scrollTo({top:0})`
  synchronously before React committed the new step's DOM. Chrome's
  scroll-anchoring silently kept the old scroll position once the new content
  mounted, and focus never left the Continue/Back button. Confirmed before
  fix: after a real click advancing step 1→2, `scrollY` settled at `721`
  (not `0`), focus stayed on the button, and no `aria-live` region announced
  the change — sighted users weren't returned to the top of the new step,
  and keyboard/screen-reader users got zero signal anything had changed.
- **Fixed** in `src/components/planner/planner-form.tsx`: moved the
  scroll+focus into a `useEffect` keyed on `currentStep`, deferred one
  `requestAnimationFrame` past commit, guarded by a `previousStepRef`
  comparison (not a one-shot flag — verified this matters, since a one-shot
  boolean flag gave a false positive under React Strict Mode's dev-only
  double-invoke of mount effects); focuses the step `<h2>` with
  `preventScroll: true` (focusing without it re-fights the scrollTo); adds a
  `role="status" aria-live="polite"` sr-only announcer ("Step 2 of 9: The
  business"). Verified after fix against the same production server:
  `scrollY` reaches `0` and holds, focus lands on the new heading, live
  region fires with correct text. `tsc`/`lint`/`build` all pass clean.
  Full before/after evidence and the reusable CDP script are at
  `docs/agent-system/cyvexly/builder/evidence/round-40-planner-step-focus-*`.
- Committed (`71d233f`) and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server and the owned headless
  Chrome process tree (verified by exact `--user-data-dir` command-line
  match), removed the temporary Chrome profile directory under the OS temp
  scratchpad root.
- Archived stale-cap detail: `CYVEXLY_APP_DEBT.md` rounds 32-34 to
  `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_32_34_ARCHIVE.md`; this file's
  round 37 to `docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_37_REPORT.md`
  (latest-three rule: 38, 39, 40 stay live).

### Recommended next workstream

**Rounds 39 and 40 both found real, reachable defects from QA angles rounds
31-38 hadn't tried** — the "reduce/pause scheduled cadence, queue is empty"
recommendation those earlier rounds escalated has now been contradicted
twice in a row. Keep looking for uncovered vision §17 item-10 QA angles with
real-interaction evidence before concluding the queue is empty again.
Candidates not yet swept: 200% browser zoom / text-resize (WCAG 1.4.4/1.4.10)
across the Planner's 9 steps and the denser marketing pages; reduced-motion
coverage beyond the hero video (e.g. the Planner's own `scrollIntoView`/
smooth-scroll calls, now three call sites after this round's fix, all
already reduced-motion-aware — but not independently re-verified this
round); a Back-button and progress-rail-click pass through the same
scroll/focus/live-region fix (same shared `goToStep`, so very likely already
correct, but not explicitly re-tested this round — Continue was). Genuinely
Owner-gated items are unchanged: DNS/domain connection, real email delivery,
analytics ownership, exact LLC name (see `CYVEXLY_OWNER_DIRECTION.md`).
