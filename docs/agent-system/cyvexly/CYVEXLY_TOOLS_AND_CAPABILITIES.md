# Cyvexly Tools and Capabilities

**Verified at setup:** 2026-08-30  
**Secrets:** Never store secret values in this file.

## Local tools

| Capability | Setup-time evidence | Normal use |
| --- | --- | --- |
| Git | 2.55.0.windows.3 | Source identity and diffs after a repository exists |
| Node.js | 24.19.0 | JavaScript tooling and local web runtime |
| npm | 11.17.0 | Package scripts when the project defines them |
| pnpm | 10.34.4 | Preferred package runner when the project defines it |
| Python | 3.13.15 | Project scripts and analysis when appropriate |
| ripgrep | 15.2.0 | Fast source and filename search |
| PowerShell | Current host shell | Role lifecycle helpers and Windows-safe operations |

## Product and browser capabilities

- In-app Browser control may be available in a role session. Verify tool availability and current signed-in context before relying on it.
- **Unattended/scheduled sessions:** `preview_start({name})` refuses to launch
  a dev server ("nobody is present to approve the command"). Workaround
  proven in round 1: start the dev server manually (e.g. `pnpm exec next dev
  --port 5173` in the background via the shell tool), then attach with
  `preview_start({url: "http://localhost:5173"})`. Even then, `computer`
  screenshot/click actions fail ("the Browser pane is not displayed, so the
  page is not compositing frames") — this appears to be a hard limitation of
  unattended sessions, not a fixable local misconfiguration. `get_page_text`,
  `read_page`, `read_console_messages`, `read_network_requests`, and
  `javascript_tool` (including dispatching real `.click()` calls) all work
  normally in the same unattended session and are the strongest currently
  reachable proof layer for interaction/content/error verification through
  that Browser pane. Full pixel screenshot comparison through the in-app
  Browser pane needs an attended session. **Round 8 found a stronger
  unattended alternate already installed on this host:** local Chrome 151 at
  `C:\Program Files\Google\Chrome\Application\chrome.exe` runs with
  `--headless=new` and produces real PNG screenshots of the Builder runtime.
  For exact phone/tablet viewports on Windows, do not rely on
  `--window-size=390,...` alone — headless Chrome may preserve a larger minimum
  layout width and merely crop the output. Launch it with a unique Builder-owned
  `--user-data-dir` plus `--remote-debugging-port`, then use Chrome DevTools
  Protocol `Emulation.setDeviceMetricsOverride`; Node 24's built-in `WebSocket`
  client can drive CDP with no added package. Round 8 proved exact 390px and
  768px layouts, captured section PNGs, and measured `scrollWidth`/card geometry
  through that route. CDP `Input.dispatchKeyEvent` also drives Chromium's native
  Tab/Enter behavior even though the in-app Browser pane cannot: round 8 used it
  to traverse Planner focus order and submit empty-step validation at exact
  desktop/phone widths. This is native Chromium input, not physical-hardware or
  cross-browser proof. Clean the unique profile and stop only Chrome processes
  whose command line contains that exact Builder-owned profile path. **Round 11
  hardening:** place the live profile under the OS temp root, not inside the
  project tree; Turbopack/Tailwind may scan project `.codex/tmp` and panic on
  Chrome's locked Cookies database. Retained screenshots/JSON can still be
  written to the Builder evidence root after capture.
  **Root cause, found round 6:** `requestAnimationFrame` never fires at
  all in this session (a self-rescheduling rAF counter stayed `0` after a
  real 3-second wait), while `document.visibilityState` stays `"hidden"`
  throughout — the browser's rendering/animation-frame pipeline is fully
  suspended, though regular JS execution, event listeners, `setTimeout`,
  and DOM mutation all work normally. This explains the screenshot
  failure and why CSS/JS smooth-scroll animations never visibly progress
  (`scrollIntoView`/`window.scrollTo` with `behavior: "smooth"` — force
  `behavior: "auto"` on the same call to verify a fix's intended end
  state instead). **Tried and ruled out, round 6:** explicitly fronting
  the tab via `tabs_select` does not fix it. A fix would need to make the
  Browser pane's tab actually visible to its own renderer at the harness
  level, not something reachable from inside a session.
  **`computer` key presses confirmed non-functional too, round 6:**
  tested `computer{action:"key"}` directly with a real `document`-level
  `keydown` listener — the tool reports success but zero events are
  recorded and focus never moves. `javascript_tool`-dispatched synthetic
  events fire listeners but do not trigger a real browser's native
  focus-order/tab-navigation behavior, so they cannot substitute for
  genuine keyboard-traversal testing either.
  **Exception found round 3:** a served image fetched with `curl` to a
  local file and then opened with the `Read` tool DOES render as a real
  viewable image in this session, even though a live Browser-pane
  screenshot does not. This gives real pixel-level proof for any
  standalone server-rendered image route (e.g. Next's `ImageResponse`/
  `next/og` file-convention routes) — used to verify `opengraph-image.tsx`
  and, via a temporary throwaway route, the favicon's small-size
  rendering (round 3's original finding; round 7 reused the same
  technique to redesign and re-verify the favicon after finding it
  legitimately blurry at 16px). It does not extend to full page layout/
  CSS screenshots.
  **Re-confirmed round 7:** a direct `computer{action:"screenshot"}` test
  at round start still times out with the same "Browser pane is not
  displayed" error — third independent confirmation of the same root
  cause (rounds 1-6, then round 7). Treat this as settled for this
  session type; a future round should re-test only if there's a specific
  reason to suspect the environment changed, not as routine ritual.
  **`read_page` (accessibility-tree extraction) and `get_page_text`
  confirmed fully functional, round 7** — independent of the compositing
  limitation, same family as `javascript_tool`/`read_console_messages`/
  `read_network_requests`. `read_page` gives real computed accessible
  names/roles/states (e.g. surfaced that Planner progress-rail buttons
  are named `"Step 1: About you (complete)"`, not just visually
  color-coded) — genuinely stronger evidence for accessibility claims
  than manually reading raw ARIA attributes alone.
  **New, round 7:** `computer{action:"scroll_to"}` using a `read_page`
  ref DOES move `window.scrollY` in this session, while plain JS
  `window.scrollTo()` and coordinate-based `computer{action:"scroll"}`
  (which also requires a prior screenshot — errors immediately without
  one) do not — useful for revealing more of a long page's
  accessibility tree via `read_page` without a live screenshot.
  **Tested and ruled out within the same round:** scrolling this way
  does not unlock `computer{action:"screenshot"}` — still fails
  identically afterward. A genuinely separate, narrower capability, not
  a path toward real screenshots in this session type.
- Git repository, package manifest, and a runnable Next.js/TypeScript/
  Tailwind application now exist as of round 1 (see `CYVEXLY_ENVIRONMENT.md`).
- Builder development port reservation: `5173`.
- Auditor isolated port reservation: `5273`.
- Council isolated port reservation: `5373`.

## Credentials and integrations

No credential capability is recorded. A role must verify authorization without exposing values. Missing credentials, external services, deployment, payment accounts, domain changes, and purchases remain explicit authority boundaries.

## Recovery

Role helpers are in `.codex/roles/scripts/`. Repair only the current role's owned runtime, manifest, cache, evidence, and browser resources. Never attach to or stop another role's runtime or process solely because a port or process name looks familiar.
