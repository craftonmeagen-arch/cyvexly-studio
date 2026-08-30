# Cyvexly Watch Index

Observations and evidence, not new rules. Each entry is a place to look, not a
boundary on future reasoning.

## Round 1

- **`Claim-BuilderLock.ps1` failed to parse on this machine before any fix.**
  The file (authored during environment setup) contained a real em-dash inside
  a string literal with no UTF-8 BOM. Both `powershell.exe` and the `pwsh`
  7.6.5 host in this sandbox parsed it as a different encoding, producing a
  `MissingEndParenthesisInMethodCall` error on every invocation — this was a
  guaranteed 100%-reproducible tooling failure, not lock contention. Adding a
  UTF-8 BOM to the file fixed it without changing its literal output text.
  Worth checking whether the other setup-authored `.ps1` files or any
  future-authored project file with non-ASCII characters (em-dashes, curly
  quotes) hits the same class of problem — `grep -rlP '[\x80-\xFF]'
  .codex/roles/scripts/*.ps1` is a fast way to check.
- **Next.js 16's `next dev` writes an agent-rules block into the project's
  `AGENTS.md` by default**, which collided with this sandbox's Owner-authored
  `AGENTS.md`. Confirmed and fixed with `agentRules: false` in
  `next.config.ts` (see `node_modules/next/dist/server/lib/
  generate-agent-files.js` for the mechanism if it needs re-verifying after a
  Next.js upgrade).
- **A live Auditor round was running concurrently** during this Builder round
  (`.codex/runtime/auditor/auditor-20260830T1324Z-001/`, guard file
  `.codex/role-state/auditor.active.json` created ~13:24 UTC, a few minutes
  after this Builder's lock claim at ~13:19 UTC). This Builder did not
  inspect, stop, or otherwise touch that Auditor's resources — only excluded
  its disposable runtime path from this project's own ESLint scope
  (`.codex/**` in `eslint.config.mjs`), which is a Builder-owned config file,
  not Auditor infrastructure. Concurrent Builder/Auditor rounds are expected
  and allowed by the governing packet (§7.10); noting it here only because it
  was unexpected to observe mid-round with no coordinating Owner message
  found in this round's reading.
- **This scheduled/unattended Builder session cannot produce browser
  screenshots.** `preview_start` with a `name` config refuses to launch a dev
  server ("Dev servers can't be started from unattended sessions"), and even
  after starting the dev server manually via a shell command and attaching
  the Browser pane with `preview_start({url})`, `computer` screenshot/click
  actions fail because "the Browser pane is not displayed, so the page is not
  compositing frames." DOM/content/console/network inspection and JS-driven
  interaction checks all worked fine in this same unattended session. See
  `CYVEXLY_CHUNK_DEBT.md` item 1.

## Round 2

- **Independently reproduced and precisely isolated the round-1 finding
  that `computer` `left_click`/`type` actions are silently ineffective in
  this unattended session** — round 1's own note already said "computer
  screenshot/click actions fail," but other round-1 summary files
  (`CYVEXLY_CURRENT_STATE.md`, `CYVEXLY_PROJECT_CHUNK_MAP.md`) understated
  it as only a screenshot limitation, which risked the click-failure part
  being missed on a skim. Tested directly this round: clicking a text input
  via `computer{action:"left_click", ref:...}` then
  `computer{action:"type"}` left the input's `.value` empty and
  `document.activeElement` unchanged (stayed `BODY`) — the input never
  received the simulated events, even though the tool call itself reported
  success with plausible-looking coordinates. A `computer` click on a
  `<button type="button">` (the FAQ accordion) once appeared to work in an
  early test, but a controlled retest (fresh page load, single click, no
  other clicks in between) showed the same non-effect; the earlier apparent
  success was very likely a stale read racing an unrelated pending state
  update from an earlier `javascript_tool`-dispatched click, not the
  `computer` click itself. **Reliable interaction method for this session
  remains `javascript_tool` dispatching real DOM events** (`new
  MouseEvent('click', {bubbles:true, cancelable:true})` via
  `element.dispatchEvent(...)`, or a native-setter `input` event for text
  fields — see round-2 evidence testing the FAQ accordion, mobile nav,
  filter chips, and the Contact form's full validation + submit paths),
  with an `await new Promise(r => setTimeout(r, 300))` after dispatch since
  React's state commit is not synchronous with the dispatch call. Do not
  trust a `computer` click's "success" report as proof of an actual page
  interaction in this session type; verify the DOM/state change
  independently every time.
- **Next.js 16 App Router: dynamic route `params` (and `searchParams`) are a
  `Promise`, not a plain object — a hand-written prop type that skips the
  framework's generated `PageProps` helper will typecheck fine but fail at
  runtime.** Built `/work/[slug]/page.tsx` with `params: { slug: string }`
  (matching pre-Next.js-15 convention); `tsc --noEmit`, lint, and
  `next build` all passed clean, but every real request 404'd with a logged
  `Route "/work/[slug]" used \`params.slug\`. \`params\` is a Promise...`
  error, only visible by tailing the dev-server log / requesting the route
  for real. Fixed by typing `params: Promise<{ slug: string }>` and
  `await`-ing it in both `generateMetadata` and the page component. Worth
  checking any future dynamic-route work in this app for the same pattern,
  and a reminder that `pnpm run build`'s "Generating static pages" success
  for a `generateStaticParams` route does not by itself prove the route
  works — that build step doesn't execute the same runtime-request code
  path that surfaced this bug.
- **Builder's reserved port 5173 was found occupied by a completely
  unrelated foreign process mid-round, and this Builder's own dev server had
  independently died.** Late in round 2, `curl http://localhost:5173/...`
  started returning a different app entirely — page title "EduAILenz V2", a
  Vite dev server (`node node_modules\vite\bin\vite.js --config
  vite.config.ts --host 0.0.0.0`, PID confirmed via
  `Get-CimInstance Win32_Process`), not this project's Next.js/Turbopack
  server. This project has no EduAILenz code and `AGENTS.md` only references
  "EduAILenz" as the *unrelated example product* the frozen Supervisor
  packet's prose examples originally came from — so this is very likely a
  different, unrelated live session on the same physical machine that
  happens to also default to port 5173, not orphaned Cyvexly infrastructure.
  Checked for any surviving/orphaned process of this project's own on that
  port first (none found — this Builder's own `next dev --port 5173`,
  PID recorded earlier in the session, was confirmed gone via
  `Get-Process`); found the Council's own isolated runtime alive and well on
  its own reserved port 5373 (`next dev --port 5373` plus a turbopack-node
  worker under `.codex\runtime\council\...`) — correctly left untouched.
  **Did not stop or otherwise touch the foreign EduAILenz process** — its
  ownership is not proven to be mine or orphaned, so killing a live
  unrelated process to reclaim a port is exactly the kind of action §1.6
  and the Ownership section warn against. Worked around it by starting a
  throwaway verification dev server on an unused scratch port (5179, killed
  again immediately after use) rather than contesting port 5173. Unresolved:
  why this Builder's own port-5173 server died is unknown (no crash log
  captured before it happened — the last live check on it was mid-round; by
  the time of the icon.svg check it was gone). The next Builder should
  re-check port 5173 availability before assuming it's free, and if the
  same foreign process is still there, apply the same non-interference
  judgment rather than killing it.

## Round 3

- **Found a real, usable proxy for pixel-level visual proof in this
  unattended session, despite `computer` screenshot still being
  non-functional.** The Browser pane's `computer{action:"screenshot"}`
  still fails here exactly as rounds 1-2 found ("the Browser pane is not
  displayed, so the page is not compositing frames") - re-confirmed this
  round, not just assumed from old notes. But a *served, downloaded PNG
  file* fetched via `curl` and then opened with the `Read` tool **does**
  render as a real viewable image in this session. This means any
  server-rendered image asset (Next's `ImageResponse`/`next/og`
  file-convention routes, or any route that returns a real image) can get
  genuine pixel-level visual verification here, even though a live
  browser tab cannot be screenshotted. Used this to visually verify the
  new `opengraph-image.tsx` output and, via a temporary throwaway route
  using the same `ImageResponse` pipeline, to check the existing
  `icon.svg` favicon mark's legibility at 16/32/64px (found a real 16px
  legibility problem - see `CYVEXLY_CHUNK_DEBT.md` item 4). This is not a
  substitute for real live-page screenshot comparison against the
  mockups (still not reachable - DOM/layout/CSS rendering in an actual
  page context is different from a standalone `ImageResponse` render),
  but it closes a real gap for any standalone generated-image asset.
- **Next.js resolves `metadataBase`-dependent absolute URLs differently
  in `next dev` vs `next build`, and only the build behavior is what
  ships.** Testing `opengraph-image.tsx` against the live dev server
  showed `og:image`/`twitter:image` correctly resolving to the real dev
  origin (`http://localhost:5173/...`) even with `metadataBase` unset -
  this looked like proof that the image route doesn't need the domain
  decision at all. That would have been the wrong conclusion: `pnpm run
  build`'s actual output prints `metadataBase property in metadata
  export is not set ... using "http://localhost:3000"`, and the real
  static HTML in `.next/server/app/*.html` bakes in that wrong
  `localhost:3000` URL as the absolute image URL. Dev mode resolves
  metadata per-request; the production static build resolves once at
  build time using a hardcoded fallback. **Always check the actual `pnpm
  run build` output (and ideally the generated `.next/server/app/*.html`)
  for any `metadataBase`-sensitive claim** - the dev server alone is not
  sufficient evidence and can actively mislead here.
- **A route folder whose name starts with `_` (e.g. `src/app/_foo/`) is
  a Next.js App Router "private folder" convention and is silently
  excluded from routing** - a first attempt at a temporary verification
  route at `src/app/_favicon-check/route.tsx` 404'd even after the dev
  server picked up the file change; renaming the folder to
  `scratch-favicon-check` (no leading underscore) fixed it immediately.
  Worth remembering for any future scratch/private route work in this
  App Router project.
- **The same unrelated foreign Vite/EduAILenz process from round 2's port
  5173 conflict recurred during closeout verification (round 3)** (node.exe running
  `node_modules\vite\bin\vite.js`, a different PID than round 2's, so a
  fresh process from that other session, not a survivor). This time it
  ran concurrently with this Builder's own `next dev --port 5173` rather
  than after it died - `netstat` briefly showed two listeners on the same
  port (one per process, likely one bound IPv4-only and one dual-stack).
  Confirmed via `Get-CimInstance Win32_Process` before touching anything,
  stopped only this round's own confirmed `start-server.js` PID, and left
  the foreign Vite process running untouched - same non-interference
  judgment round 2 already established, now validated on a second
  occurrence. Worth treating this as a standing fact about this machine
  (something outside this project regularly runs a Vite dev server on
  5173) rather than a one-off round-2 fluke.

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
