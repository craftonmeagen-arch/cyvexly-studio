# Cyvexly Watch Index

Observations and evidence, not new rules. Each entry is a place to look, not a
boundary on future reasoning. Rounds 1-4 are rotated to
`docs/archive/CYVEXLY_WATCH_ARCHIVE.md` to stay under this file's 20KB cap
(§7.14) — read that file for full detail; the findings below still apply.

## Round 5

- **The Browser pane stopped compositing/reading real viewport geometry
  partway through the round, with a different symptom than rounds 1-4's
  screenshot-only failure.** `document.documentElement.clientWidth` and
  `window.innerWidth` began reading `0`, and `document.visibilityState`
  read `"hidden"`, on every page — including `/process`, which had
  measured correctly (1265px desktop, 375px mobile, 753px tablet, all via
  `getBoundingClientRect()`/`scrollWidth` checks) earlier in the same
  round before the state changed. Opening a brand-new foreground tab
  (`tabs_create({foreground: true})`) did not recover it. Re-checked on
  the unchanged `/process` page after making unrelated changes elsewhere
  (same `"hidden"` result), confirming this is a session-level state
  change, not something caused by this round's own code. Treat this as
  the same family of limitation as rounds 1-4's "Browser pane is not
  displayed" screenshot failure, now also affecting `clientWidth`/
  `innerWidth` reads, not just `computer{action:"screenshot"}` — worth
  re-verifying each round whether it's present from the start or appears
  mid-round, since this round it clearly appeared partway through.
- **Successfully reused the round-3 `ImageResponse`-proxy pixel-proof
  technique for a second, different kind of asset.** Round 3 used it only
  for a standalone generated-image route (the favicon/OG image). This
  round proved the same mechanism also works for arbitrary hand-authored
  decorative SVG artwork meant to be embedded inside a normal page (not
  itself a special Next.js image-convention file): built a temporary
  scratch route (`src/app/scratch-concept-check/route.tsx`, no leading
  underscore — see round 3's private-folder finding) that renders the
  exact same SVG JSX used in the real page component through
  `next/og`'s `ImageResponse`, fetched the generated PNGs, and visually
  confirmed them with the `Read` tool. Confirms `opengraph-image.tsx`'s
  proof (this codebase's `ImageResponse` pipeline handles a raw nested
  `<svg>` with `<path>`/`<rect>`/`<circle>` children, per Satori) extends
  to any SVG-based component, not just the specific favicon/OG-image use
  case rounds 1-3 tested it on. Deleted the scratch route and all
  generated PNGs immediately after inspection, per the ephemeral-evidence
  rule; confirmed via `git status` and a clean re-run of `tsc`/lint/build
  that nothing was left behind.
- **Caught a real design-system violation with a grep-based color audit,
  not by eye.** A first draft of a new hand-authored SVG component used
  an invented `#0c1a30` for one shape's fill — a color not present in
  that project's own four-hex palette array in `site-config.ts`, and not
  used anywhere else in the app's design tokens. This is easy to miss by
  visual inspection alone (a slightly-darker navy blends in against a
  dark background) but breaks the "no new colors without a stated reason"
  discipline every prior round followed for the shared cyber-arctic
  system. Caught with `grep -oE '#[0-9A-Fa-f]{6}' <file> | sort -u`
  compared against the union of the relevant palette arrays. Worth
  running this exact check on any future hand-authored SVG/color work in
  this app rather than relying on "it looks about right."
- **That concurrent Council round published evidence naming real Planner
  and Services defects before its formal report landed** (found via a
  read-only check of `council/evidence/` near closeout, not acted on this
  round — see `CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s heads-up section for
  the specifics: a progress-rail auto-scroll gap in the Planner at
  narrow viewports, a Services table overflow at 390px, and a
  `scroll-behavior`/`data-scroll-behavior` console warning). Worth
  checking `council/evidence/` for fresh files near closeout, not just at
  orientation, since a concurrent round can publish mid-Builder-round.
- **A live Council round started concurrently during this round**
  (`.codex/runtime/council/council-20260830T194545Z/runtime`, visible via
  `Get-CimInstance Win32_Process` near closeout while stopping this
  round's own dev-server processes). This Builder did not inspect, stop,
  or otherwise touch that runtime or its processes — same non-interference
  discipline established in rounds 1 and 3 for concurrent reviewer
  activity. Re-checked `docs/agent-system/cyvexly/inbox/OPERATIONS.md`
  near closeout (round 4's own established practice, not just once at
  orientation): unchanged since the start of this round, so the
  concurrent Council round had not published a new report by the time
  this round closed.
- **Deleting `.next` for ephemeral-storage cleanup between verification
  passes made a subsequent standalone `pnpm exec tsc --noEmit` falsely
  report `error TS2304: Cannot find name 'LayoutProps'`** in
  `src/app/layout.tsx` — a file this round never touched (confirmed via
  `git diff dfc0485..HEAD -- src/app/layout.tsx`, empty). Root cause:
  Next.js generates ambient global types (`LayoutProps`, `PageProps`,
  etc.) into `.next/types/` during `next build`/`next dev`, and a bare
  `tsc --noEmit` run depends on that generated declaration file existing
  — it is not a self-contained typecheck the way it would be in a
  non-Next.js TypeScript project. Deleting `.next` (done this round after
  a production-build verification pass, per the ephemeral-storage rule)
  removed that cache; running `pnpm run build` again (which regenerates
  `.next/types` as a side effect before its own internal typecheck)
  immediately fixed the standalone `tsc` call with zero code changes.
  **Practical rule for future rounds:** if a standalone `tsc --noEmit`
  ever reports an error in a file the round didn't touch, right after a
  `.next` deletion, run `pnpm run build` (or `next dev` briefly) first to
  regenerate the types cache before treating the error as real — don't
  spend time debugging phantom code errors. This round caught it
  immediately via `git diff` (confirming the file was unchanged) rather
  than assuming a real regression, and no incorrect "tsc clean" claim was
  made before this was discovered (checked: no standalone `tsc` call ran
  in the gap between deleting `.next` and this discovery).
- **This round's own dev-server-process cleanup had to distinguish this
  project's `next dev` from several other unrelated Node processes for
  entirely different projects also running on this machine** (not just
  the previously-logged foreign Vite/EduAILenz process on port 5173 —
  this time also several `tsx --watch`, `pnpm`, and other `vite.js`
  processes for unrelated `eduailenz-teams`/`Eduailenze` sandboxes).
  Confirmed exact ownership via `Get-CimInstance Win32_Process`'s
  `CommandLine` (looking for this project's own working directory/port)
  before stopping anything, then confirmed via a failed `curl` afterward
  that port 5173 no longer responds — same non-interference discipline
  rounds 2-4 established, now validated against a much busier process
  list than any prior round encountered.

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
  This round's own PID-based stops earlier in the round (verified by full
  exact command line, e.g. the `next dev --port 5173`/`next start --port
  5173` processes) were correctly scoped; only this final broad filter
  was not. See the urgent item in `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.
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
- **Explicitly fronting the tab (`tabs_select`) does not fix the
  compositing limitation — tested for the first time, ruled out.** Every
  prior round's screenshot/click/geometry/keyboard findings left open
  whether the tab simply wasn't focused. Called `tabs_select` on the
  single open tab (result: "Fronted tab seed"), then re-checked on a
  neutral external page (`https://example.com`, no project server
  needed): `document.visibilityState` stayed `"hidden"`,
  `document.hasFocus()` stayed `false`, and `computer{action:
  "screenshot"}` still failed with the same "Browser pane is not
  displayed" error. This is a session-level property of this exact
  unattended invocation, not a fixable tab-focus issue — worth knowing so
  a future round doesn't re-try `tabs_select` expecting a different
  result without new evidence the underlying session type has changed.
