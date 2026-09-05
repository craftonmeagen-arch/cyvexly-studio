# Cyvexly Next Builder Handoff

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

## Round 39 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-05, 50-minute hard
time limit (unattended)
**Start source:** `f1a264f` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item (`IFA-2026-09-05-R30`)
and ran a new keyboard/ARIA accessibility QA angle (not previously done
comprehensively). **Found and fixed one real, reachable defect.**
**Completion:** SOURCE FIX LANDED — see below.

### What was checked

- `IFA-2026-09-05-R30` (reviewed commit `af9fa82`, round 37's HEAD) is a
  **sixth consecutive independent confirmation, not a new finding**. Moved to
  `exchange/processed/`.
- Ran `pnpm exec tsc --noEmit`, `pnpm run lint`, `pnpm run build` — all
  clean before making any change.
- **New QA angle — keyboard/ARIA accessibility sweep across all 20 routes**,
  the one vision §17 item-10 category not yet covered by rounds 31-38. Used
  the round-8/38 local headless-Chrome/CDP technique. First attempt
  (`el.focus()` + computed style) flagged near-universal "no focus
  indicator" — **a false positive of the test method**: Chrome's
  `:focus-visible` only activates on real keyboard input, not scripted
  `.focus()`, and the site has a global `::focus-visible` rule
  (`src/app/globals.css:605`). Rewrote to dispatch real
  `Input.dispatchKeyEvent` Tab presses; re-ran on 14 routes × 12 tabs:
  **zero missing focus indicators** — confirms correct styling, not a defect
  (mirrors round 32's "verify real behavior" lesson).
- Heading-order/`<main>`-landmark checks (unaffected by that pitfall) were
  clean on all 20 routes — but **found a real gap: no skip-to-main-content
  link on any route.** Every page's first focusable element was the header
  logo, so keyboard users had to tab through the full nav every page load —
  a WCAG 2.4.1 Bypass Blocks (Level A) failure, part of the Owner
  direction's release-QA "keyboard/accessibility" line item, never
  explicitly checked before.
- **Fixed:** added `id="main-content"` to `<main className="flex-1">` in all
  15 page files (scripted replace, verified unique-per-file first, grepped
  after). Added a visually-hidden-until-focused "Skip to main content" link
  (Tailwind's standard `sr-only focus:not-sr-only focus:fixed` idiom,
  matching existing `sr-only` usage) as the first element `SiteHeader`
  renders (mounts on all 16 pages), so it is first in tab order everywhere.
- **Verified with real keyboard events:** rebuilt (`tsc`/`lint`/`build`
  clean), restarted the server, and ran a dedicated script dispatching real
  Tab then Enter via CDP on `/`, `/about`, `/services/business-websites`:
  first Tab reveals a visible link at (12,12), 170×40px (not
  `sr-only`-hidden), Enter moves `location.hash` to `#main-content`,
  matching the real `<main id="main-content">`. All three routes passed.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173`, not just the shell-wrapper
  PIDs) and the owned headless Chrome process (verified via CDP-port
  command-line match before touching anything), then removed the temporary
  Chrome profile directory under the OS temp root. Evidence scripts and raw
  output preserved at `docs/agent-system/cyvexly/builder/evidence/
  round-39-*` for reproducibility.

### Recommended next workstream

The reachable-work queue is **not** exhausted — five "nothing new" rounds
(31, 35-38) had covered every QA category *except* keyboard/ARIA
accessibility, and that category held a real defect. **Do not assume the
queue is empty just because recent rounds found nothing** — look for QA
angles vision §17 item 10 names with no real-interaction evidence yet.
Candidates not yet swept post-theme-overhaul (rounds 21-28 changed a lot of
markup): screen-reader semantics (aria-live/form-error announcements on
Contact/Planner), 200% zoom/text-resize, reduced-motion beyond the hero
video. `CYVEXLY_APP_DEBT.md`'s "Open" section remains genuinely Owner-gated
(DNS/domain, real email delivery, analytics ownership, exact LLC name).

Round 38 closeout detail is archived at `docs/archive/chunks/
CYVEXLY_BUILDER_HANDOFF_ROUND_38_REPORT.md`, and round 37 at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_37_REPORT.md` (both moved
in round 40 to keep this file under its 12288-byte hot-file cap; 39 and 40
stay live). Both rounds' "recommend pausing scheduled cadence" conclusion was
superseded by rounds 39 and 40 each finding a real, reachable defect from a
QA angle rounds 31-38 hadn't tried — see the current round-40 entry.

Round 36 closeout detail is archived at `docs/archive/chunks/
CYVEXLY_BUILDER_HANDOFF_ROUND_36_REPORT.md` (moved there in round 39 to keep
this file under its 12288-byte hot-file cap — latest-three rule: 37, 38, 39
stay live). Round 35 is archived at `docs/archive/chunks/
CYVEXLY_BUILDER_HANDOFF_ROUND_35_REPORT.md`; rounds 33-34 at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUNDS_33_34_REPORT.md`; rounds
31-32 at `docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUNDS_31_32_REPORT.md`;
rounds 28-30 at `docs/archive/chunks/
CYVEXLY_BUILDER_HANDOFF_ROUNDS_28_30_REPORT.md`. The current Chunk 5 scope and
Owner gates are summarized in `CYVEXLY_ACTIVE_CHUNK.md` and
`CYVEXLY_OWNER_DIRECTION.md`.
