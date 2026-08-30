# Cyvexly Watch Index

Observations and evidence, not new rules. Each entry is a place to look, not a
boundary on future reasoning. Rounds 1-3 (tooling BOM/AGENTS.md fixes, the
`computer` click/screenshot non-functionality, the `ImageResponse`-proxy
pixel-proof technique, the private-folder routing convention, the recurring
foreign port-5173 process) are rotated to `docs/archive/CYVEXLY_WATCH_ARCHIVE.md`
to stay under this file's 20KB hot-path cap (§7.14) — read that file for full
round 1-3 detail; the findings below still apply going forward.

## Round 4

- **A CSS Grid item with no `min-w-0` will not shrink below a deeply
  nested descendant's min-content size, even through an intervening
  `overflow-x-auto` container — a real mobile page-width blowout, not a
  theoretical concern.** `/start`'s `grid gap-8 lg:grid-cols-[1fr_320px]`
  layout put the Planner's root `glass-panel` div in the `1fr` track. That
  div contains a progress rail: `<nav className="overflow-x-auto">` around
  `<ol className="flex min-w-max ...">` (nine step circles + connectors,
  548px). Grid items default to `min-width: auto`, meaning the browser
  won't shrink them below their content's min-content size unless told to
  — and that automatic-minimum-size calculation propagated through the
  `overflow-x-auto` nav (which had no explicit width of its own) up to the
  grid item, forcing the *whole page* to 622px wide on a 375px mobile
  viewport (measured directly via `document.documentElement.scrollWidth`
  — real page-level overflow, confirmed by finding the actual widest
  offending elements in the live DOM rather than guessing). Fixed by
  adding `min-w-0` to the grid-item root div, which let it shrink to its
  track's actual width; the inner `overflow-x-auto` nav then correctly
  scrolled *within itself* instead (verified `nav.scrollWidth` 548px vs.
  `nav.clientWidth` 277px post-fix). Worth checking any future `lg:`-only
  (or any breakpoint-gated) multi-column grid layout that contains a
  horizontally-scrollable descendant for the same pattern — this is a
  well-known CSS Grid gotcha (search "grid blowout min-width auto") that
  the site's existing single-column mobile-first pages never triggered
  because none of them combined a breakpoint-gated multi-column grid with
  an inner scroll container until this page.
- **The `computer` screenshot limitation from rounds 1-3 persisted,
  re-confirmed directly rather than assumed from old notes**:
  `computer{action:"screenshot"}` still times out with "the Browser pane
  is not displayed, so the page is not compositing frames" in this
  session. `javascript_tool`-dispatched real DOM events (native-setter
  `input`/`change` events, `dispatchEvent(new MouseEvent('click', ...))`)
  remained fully reliable for driving the entire nine-step Planner
  wizard, matching round 2's established interaction method.
- **Re-checked `docs/agent-system/cyvexly/inbox/OPERATIONS.md` near
  closeout (not just at orientation) and found a new entry timestamped
  after this round's lock claim**: a Council "successor reconciliation"
  publication at 18:42:09Z. Read it (read-only, no Council file touched):
  it republishes the exact same stale round-1-era Home-page findings
  round 3's own handoff already flagged as "nothing new," just under a
  formal reconciliation status. No new actionable finding; confirms
  round 3's assessment rather than adding to it. Worth re-checking this
  inbox file near closeout, not just once at the start, since concurrent
  reviewer rounds can publish mid-Builder-round (as they did in rounds 1
  and 3 too).
- **This round's own "unlabeled input" accessibility check (established
  rounds 1-2, reused round 3) only queries
  `input, select, textarea` — it never checked `button` elements**, and a
  final code re-read (not the automated check) found three real gaps
  it missed: icon-only progress-rail buttons with no text fallback, and
  two groups of visually-repeated buttons (asset-status toggles,
  review-step "Edit" links) sharing identical accessible names across
  many instances. All three fixed with explicit `aria-label`s. Worth
  widening that check's selector to include `button` (and checking for
  duplicate accessible names among same-role siblings) in any future
  round that builds a form with icon-only or visually-repeated buttons —
  this project's forms before the Planner only had buttons with unique
  visible text, so the gap never surfaced until now.
- **The foreign Vite/EduAILenz process on port 5173 recurred a third
  time** (rounds 2 and 3 already found it once each), this time as two
  simultaneous listeners again (confirmed via `Get-CimInstance
  Win32_Process`: one was this round's own `next dev`, PID stopped at
  closeout; the other a `vite.js --config vite.config.ts` process, left
  untouched). Now a well-established standing fact about this machine —
  not worth re-investigating each round, just re-verify ownership by PID
  before stopping anything on 5173, same as every prior round.
- **`window.scrollTo({behavior: "smooth"})` bypasses this project's
  global CSS `prefers-reduced-motion` rule** (`globals.css`'s
  `*, *::before, *::after { transition-duration: 0.001ms !important; }`
  block only overrides `scroll-behavior` set via CSS, not an explicit
  `behavior: "smooth"` argument passed directly to the JS `scrollTo`
  call, which browsers honor regardless of the CSS property). Found this
  while adding the Planner's step-change scroll-to-top — no other page
  in the app calls `scrollTo` at all (checked via
  `grep -rn "scrollTo" src`), so this wasn't a pre-existing gap, but is
  worth checking for any future JS-driven smooth scroll anywhere in this
  app: guard it with `window.matchMedia("(prefers-reduced-motion:
  reduce)").matches` and fall back to `"auto"`, the same fix applied
  here.
- **A grep-based field-usage audit of `planner-form.tsx` (counting every
  `PlannerData` key's occurrences in the file) found two real gaps in
  work already claimed "DONE WITH PROOF" earlier in this same round**: a
  `pagesOther` field and an `essentialPages` field were typed and
  initialized but never actually rendered as inputs or included in the
  submission summary — both explicit vision §9 step-4 requirements
  ("other" as a page option; "which pages are essential for launch").
  Live interactive testing alone (clicking through the happy path) did
  not surface this, because nothing was broken — the fields simply never
  existed in the rendered UI, so there was nothing to click. A field/prop
  count against the full data shape is a cheap, fast way to catch this
  exact "planned in the type, forgotten in the render" class of gap on
  any future large, config-driven form in this app — worth running before
  calling a multi-field form step complete, not just after a bug report.
- **`claude-in-chrome`'s `list_connected_browsers` returned an empty
  array in this scheduled session** — confirmed directly (not assumed)
  that there is no attended real-Chrome fallback available for
  pixel-level screenshot proof in a scheduled Cyvexly Builder run, which
  makes sense (no user is present to have a Chrome extension connected).
  Re-verify this each round rather than treating it as permanent — an
  attended session or a different invocation context could differ.
- **A new ESLint rule shipped with this project's `eslint-config-next`
  install, `react-hooks/set-state-in-effect`, flags any direct `setState`
  call inside a `useEffect` body** — including the legitimate,
  textbook-correct pattern of restoring state from a browser-only store
  (`localStorage`) in a post-mount effect rather than a lazy `useState`
  initializer (which would read `localStorage` during the server render
  too, where it doesn't exist, and diverge from the client's first
  render, producing a real hydration mismatch). Resolved with a scoped
  `/* eslint-disable react-hooks/set-state-in-effect */` /
  `/* eslint-enable */` pair around just the four `setState` calls inside
  the `try` block (not a rule-wide disable, and not a `disable-next-line`
  on the wrong line, which does not cover statements inside a nested `if`
  block). Worth knowing before any future `useEffect` that reads
  `localStorage`/`sessionStorage`/another browser-only store on mount.

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
