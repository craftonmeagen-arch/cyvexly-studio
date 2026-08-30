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

- **Refinement to the round-1 unattended-session note above: `computer`
  `left_click`/`type` actions (by ref or coordinate) are silently ineffective
  in this unattended session, not just screenshots.** Tested directly:
  clicking a text input via `computer{action:"left_click", ref:...}` then
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
