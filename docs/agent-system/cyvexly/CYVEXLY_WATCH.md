# Cyvexly Watch Index

Observations and evidence, not new rules. Each entry is a place to look, not a
boundary on future reasoning. Rounds 1-5 are rotated to
`docs/archive/CYVEXLY_WATCH_ARCHIVE.md` to stay under this file's 20KB cap
(§7.14) — read that file for full detail; the findings below still apply.

## Round 6

- **`Element.prototype.scrollIntoView` with `behavior: "smooth"` does not
  actually move `scrollLeft` in this session, even though the effect that
  calls it fires correctly — the same underlying "page not compositing
  frames" limitation rounds 1-5 already found for `computer` screenshots
  and (round 5) `clientWidth`/`innerWidth`/`visibilityState` reads, now
  shown to affect *any* frame-animated browser API, not just those three.**
  Built a `scrollIntoView`-based fix for the Planner progress rail (Council
  finding `CYC-R2-F001`: the active step could scroll out of view at narrow
  widths) and drove the full nine-step flow via the established
  `javascript_tool`-dispatched-DOM-events method. The effect fired exactly
  once per step change with the correct target and options (confirmed by
  monkey-patching `Element.prototype.scrollIntoView` to log calls before
  restoring it), but with `behavior: "smooth"` the rail's `scrollLeft`
  stayed `0` — manually calling `scrollIntoView({behavior: "auto", ...})`
  on the same element in the same session moved it correctly and
  immediately. This isolates the failure to the smooth-scroll *animation*
  (which needs compositor frames this hidden/non-compositing tab isn't
  producing), not to the component logic or the call itself. **Verification
  method for future frame-dependent fixes in this session:** temporarily
  wrap the API (`Element.prototype.scrollIntoView`, or similar) to force
  `behavior: "auto"` and confirm the *intended end state* is reached, plus
  separately confirm the unwrapped call fires with the correct target/args
  — this proves the code is correct even when the session's compositing
  limitation prevents observing the animated result directly. A real
  attended browser session does not have this limitation and would show
  the smooth animation working normally.
- **The same silent `overflow-x-auto` + fixed-`min-w` table pattern the
  Council flagged on Services (`CYC-R2-F004`) existed identically on two
  Pricing tables the Council didn't audit this round.** A grep for
  `overflow-x-auto` across `src/` after fixing Services found two more
  hits in `src/app/pricing/page.tsx` (the package-comparison table, 640px
  content, and the add-ons table, 560px content, both in a 342px container
  at 390px — measured directly via `getBoundingClientRect`/`scrollWidth`
  before changing anything, not assumed from the Services pattern alone).
  Worth grepping for a defect's exact structural pattern across the whole
  `src/` tree whenever a reviewer finding turns out to be a page-specific
  instance of a general shape, not just fixing the one flagged page.
- **`data-scroll-behavior="smooth"` on `<html>` is the Next.js-documented
  fix for its own router-vs-CSS-smooth-scroll conflict warning**
  (`CYC-R2-F005`) — adding the attribute in `src/app/layout.tsx` alongside
  the pre-existing CSS `scroll-behavior: smooth` in `globals.css` cleared
  the warning on a real route navigation (Home → `/process`, checked via
  `read_console_messages`) with no other code change needed.
- **A full sitewide structural sweep (fetch + `DOMParser` across all twelve
  built routes, checking H1 count, heading-level skips, and unlabeled
  interactive controls) found zero new defects after this round's three
  fixes** — confirms no regression from the Services/Pricing reflow or the
  Planner rail change, and that the project's established heading/label
  discipline held across pages this round didn't touch. Cheap to re-run
  (`fetch(route).then(r=>r.text())` + `DOMParser`, no live navigation
  needed) and worth doing as a final sanity pass whenever multiple pages
  change in one round.
- **`computer{action:"key"}` produces zero real keyboard events in this
  session, proven directly, not just assumed from the click/screenshot
  limitation.** No prior round had tried a `computer` key press. Focused
  an input, attached a real `document` `keydown` listener (capture phase),
  pressed Tab via `computer` (reported success), then checked the
  listener log and `document.activeElement`: zero events recorded, focus
  unchanged. Same "page not compositing frames" family as clicks/
  screenshots — real keyboard/Tab-traversal testing (the Council's own
  suggested next question) is not reachable via `computer` here.
  `javascript_tool`-dispatched synthetic key events fire listeners but
  don't trigger native focus-order behavior, so they can't substitute
  either — a genuine test needs an attended session or a different
  automation surface.
- **INCIDENT — this Builder round stopped a concurrent Council round's own
  processes by mistake, a real §1.6 non-interference violation, not a
  near-miss.** At ~20:52Z, while stopping this round's own leftover dev-
  server process tree, used a `Get-CimInstance Win32_Process` filter of
  `CommandLine -like '*app projects\website*' -and CommandLine -like
  '*next*dev*'` — too broad, since a concurrently-running Council round
  (`council-20260830T204540Z`, started ~20:45:41Z per its own
  `.codex/role-state/council.active.json`) was running its own isolated
  `next dev --port 5373` under `.codex/runtime/council/
  council-20260830T204540Z/runtime/`, whose command line also contains
  both substrings. The filter matched and this round stopped 4 of the
  Council's own processes (PIDs 12292, 37672, 21136, 13128 — 3 of these
  match exactly the Council's own `processes.json` manifest entries for
  its launcher/workers; the 4th, 13128, was an unregistered-yet worker
  visible by path). `curl` to `http://127.0.0.1:5373/` immediately after
  confirmed the Council's dev server no longer responds. The Council's
  registered dev-server PID (31940) and its dispatcher PID (36604) were
  also found gone afterward — not directly targeted by this Builder's
  stop command, most likely a cascading effect of killing the parent
  launcher/workers, though this Builder cannot prove that causation with
  certainty from process evidence alone. **Did not attempt to restart,
  repair, or touch anything under `.codex/runtime/council/` or
  `.codex/role-state/council.active.json`** — that is Council-owned
  infrastructure this Builder has no authority over, and guessing at its
  exact launch parameters risks compounding the interference rather than
  fixing it. **Root cause and fix for future rounds:** a process-stop
  filter for "my own dev server" must check the exact port (5173) and/or
  the exact working-directory root the process was launched from — not a
  path substring that every role's runtime shares (`app projects\website`
  appears in every role's `.codex/runtime/<role>/.../runtime` path, since
  all roles share the same sandbox root) — before calling `Stop-Process`.
  `CYVEXLY_ENVIRONMENT.md`'s Ports section (Builder `5173`, Auditor
  `5273`, Council `5373`) and its `.codex/runtime/<role>/<round>/
  processes.json` per-round manifest (each reviewer round registers its
  own owned PIDs there via `Register-RoleProcess.ps1`) are the
  authoritative, protocol-aware way to check ownership before stopping
  anything — check the target's exact bound port (e.g. `netstat` or a
  failed/succeeded `curl`) or its manifest membership, not a `CommandLine`
  substring. This round's own PID-based stops earlier in the round
  (verified by full exact command line, e.g. the `next dev --port 5173`/
  `next start --port 5173` processes) were correctly scoped; only this
  final broad filter was not. See the urgent item in
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.
  **Update, ~20:56Z, same round: confirmed the Council round self-healed.**
  Re-checked `.codex/runtime/council/council-20260830T204540Z/
  processes.json` (read-only) and found four *new* registered PIDs with
  fresh `startTimeUtc` values around `20:54:52Z`–`20:55:01Z` — a new
  launcher, dev server, and two workers, all under the Council's own
  runtime path — and `curl` to `http://127.0.0.1:5373/` now returns `200`
  again. The Council round detected its own dead runtime and relaunched
  it without any action from this Builder, consistent with each role
  owning repair authority over its own resources. Its guard file's
  `dispatcherPid` (`36604`) is stale (unchanged, still the pre-incident
  value) — the Council's own bookkeeping, not this Builder's to correct.
  The incident and its root cause above remain fully valid and worth
  fixing in this Builder's own tooling regardless of the successful
  recovery; this update only closes the "is Council still broken"
  question with real evidence rather than leaving it open.
- **The unattended in-app browser's compositor is suspended, not merely
  unfocused.** Fronting the tab left it hidden/unfocused and screenshots
  unavailable; a three-second self-rescheduling `requestAnimationFrame` test
  delivered zero frames while timers and DOM mutation worked. Harness work must
  make the pane genuinely visible, not just select its tab. The interrupted
  Council round later self-recovered and formally closed (`CYC-R3-20260830-01`),
  so the incident left no lasting Council damage.

## Round 7

- **A real DOM/accessibility-tree audit is a legitimate, reusable
  substitute proof layer for keyboard accessibility when live Tab-key
  input isn't reachable.** With `computer{action:"key"}` already proven
  non-functional (round 6), this round proved the Planner's actual
  keyboard-accessibility properties through the DOM/ARIA layer instead:
  `getBoundingClientRect` for focus-order-vs-visual-order comparison,
  raw attribute inspection (`aria-invalid`, `aria-describedby`,
  `role="alert"`, `aria-pressed`, `aria-label`) plus `read_page`'s
  computed accessibility tree for accessible names/roles/states, and
  real WCAG contrast math for the focus indicator. Found the Planner's
  progress-rail buttons carry accessible names like `"Step 1: About you
  (complete)"` (completion state is part of the name, not just color)
  and its eight identical-text "Edit" buttons each carry a distinguishing
  `aria-label` — real evidence no prior round had captured, not
  assumptions. Honestly bounded: this is real proof of the underlying
  properties, not equivalent to observing an actual Tab-key traversal.
- **`computer{action:"scroll_to"}` (using a `read_page` ref) actually
  moves `window.scrollY` in this session, while plain JS
  `window.scrollTo()` and coordinate-based `computer{action:"scroll"}`
  do not** (the latter also requires a prior screenshot, unavailable
  here — confirmed by the error message itself: "requires a prior
  computer{action:"screenshot"}"). Discovered while trying to reveal
  more of a long page's accessibility tree via `read_page` without a
  live screenshot. **Tested the obvious follow-up hypothesis within the
  same round and ruled it out:** scrolling via `scroll_to` and then
  immediately calling `computer{action:"screenshot"}` still fails with
  the identical "Browser pane is not displayed" error — `scroll_to`
  does *not* unlock or otherwise interact with the frame-compositing
  limitation. It's a genuinely separate, narrower capability (DOM/CSSOM
  scroll-position mutation, not a real input/render-pipeline event) —
  useful on its own for revealing more of a long page's accessibility
  tree via `read_page`, but not a path toward real screenshots in this
  session type. No further investigation needed on this specific
  question.
- **A checked element's own `getComputedStyle()` does not reveal an
  ancestor's `display: none`.** Investigating a suspected honeypot-field
  accessibility bug (`getComputedStyle` on the `<input>` itself showed
  `display: inline-block; visibility: visible`), checking the actual
  hiding ancestor (`planner-form.tsx`'s wrapping `<div aria-hidden="true"
  class="hidden">`) showed the real `display: none` and confirmed via
  `checkVisibility() === false` on the input — the field was correctly
  hidden all along; the first check was misleading, not the code. Caught
  before it was written down as a finding — worth checking the actual
  hiding ancestor (or `checkVisibility()`) rather than a descendant's own
  `display` property whenever a "why does this look visible" question
  comes up for an element inside a `display: none` ancestor.
- **`ImageResponse` proxy routes must not store candidate JSX (especially
  a bare `<>...</>` Fragment) in a module-level `const` looked up by
  string key through a `Record<string, ReactNode>`.** Caused every
  request (including the unmodified "current" design) to fail with a
  500 `"Cannot convert a Symbol value to a string"` error from Satori.
  Fixed by moving each candidate into a plain function returning a
  fresh `<g>`-wrapped element per request instead of a cached reference.
  Worth remembering for any future `ImageResponse` proxy route
  parameterizing multiple JSX variants by lookup table — this project's
  established proxy technique (rounds 3, 5, 6) hadn't hit this shape of
  route before.
- **The session-level frame-compositing limitation persists in this
  session type, re-confirmed a third time (rounds 1-6, then again this
  round) via a direct `computer{action:"screenshot"}` test at round
  start** — not assumed from prior rounds' findings. Given three
  independent confirmations of the same root cause across different
  rounds/sessions, this is now firm enough evidence to stop re-testing
  it every round by default; a future round should still re-test if
  there's a specific reason to suspect the harness environment changed
  (e.g. a new session type, an explicit fix claim), not as routine
  ritual.
- **A design "approved" from a small visual thumbnail is not proof it
  actually fits its intended viewBox/canvas — measure the true
  geometric bbox.** This round's own favicon redesign shipped with a
  real bug: the mark overflowed its 32x32 viewBox by 14 units on the
  right edge, invisible enough at 16-88px thumbnails (the sizes checked
  before shipping) to get approved and committed. Found only when
  rendering the same mark larger (128/256px, while building a real
  `favicon.ico`) made the missing chunk of ring obvious. The reliable
  fix/verification method: render the design against a deliberately
  oversized viewBox (e.g. `-20 -20 72 72` for a nominal `0 0 32 32`
  design) so nothing can be clipped, compute the real ink bounding box
  from the raw pixel bbox, and convert back to viewBox units — this
  gives an exact answer instead of a visual guess. Worth doing for any
  future hand-authored SVG/mark work in this app before considering a
  design final, not just at the size it happens to look fine at.
- **PIL's ICO writer can silently produce a file with fewer embedded
  sizes than requested, with no error, depending on which image is
  passed as the `save()` target vs. `append_images`.** Passing the
  smallest image (16x16) as the base with larger images in
  `append_images` produced a "1 icon, 16x16" file despite requesting
  four sizes; passing the largest image (256x256) as the base with
  smaller images in `append_images` correctly embedded all four. Always
  verify the packed result by reopening it and checking `.info['sizes']`
  (or extracting each frame via `im.ico.getimage(size)` and viewing it)
  — never trust that a `save()` call without an exception embedded what
  was intended.

## Round 8

- **The unattended in-app Browser pane's suspended compositor does not mean
  real page screenshots are unavailable on this host.** Local Chrome 151 can
  run independently with `--headless=new`; its DevTools Protocol works from
  Node 24's built-in `WebSocket`, enabling real page captures and exact viewport
  geometry without adding dependencies. A raw Windows headless call using
  `--window-size=390,...` produced a misleading 390px *crop* of a wider minimum
  layout, which looked like product overflow. `Emulation.setDeviceMetricsOverride`
  then proved the actual page at an exact 390px CSS viewport had
  `scrollWidth === clientWidth === 390` and captured the complete selected-work
  section. Treat raw CLI window sizing as an unvalidated instrument for narrow
  viewport claims; use CDP device metrics and record `innerWidth`/`clientWidth`/
  `scrollWidth` as controls. This is a newly reachable proof method, not a
  change to the known in-app Browser-pane limitation.
- **CDP `Input.dispatchKeyEvent` reaches native Chromium focus navigation even
  when the in-app Browser pane's `computer` key action does not.** Round 8 sent
  real Tab events from a body focus origin through `/start`, then activated
  `Continue` with Enter at exact 1440x900 and 390x844. For Enter activation,
  the CDP key-down needs `text` and `unmodifiedText` set to carriage return;
  omitting those fields moved focus correctly with Tab but did not activate the
  button. Keep the claim bounded: this proves Chromium's native sequential-
  focus/input path, not a physical keyboard or another browser.

## Round 9

- **A 100%-zoom mismatch can still come from browser font preferences.** A 24px
  default-font profile reproduced the Owner's apparent zoom: rem geometry grew
  1.5× and the rem breakpoint hid desktop navigation. A 16px root corrected
  declarations, but media-query rems still followed the browser's initial basis;
  explicit pixel breakpoints completed the fix. A separate 24px minimum-font
  stress test then found two phone rows that resisted wrapping, demonstrating
  why default-font and minimum-font profiles must be tested independently.
