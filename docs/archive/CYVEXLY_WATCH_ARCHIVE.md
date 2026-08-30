# Cyvexly Watch Archive

Older watch entries rotated out of `CYVEXLY_WATCH.md` to stay under its
20KB hot-path index cap (§7.14). These are historical observations and
evidence, not new rules — see `CYVEXLY_WATCH.md` for current/recent
findings and this file for full round 1-3 detail.

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
  legibility problem - see `CYVEXLY_CHUNK_DEBT.md` item 3). This is not a
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
