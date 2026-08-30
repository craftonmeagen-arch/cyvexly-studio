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
  reachable proof layer for interaction/content/error verification. Full
  pixel screenshot comparison against a mockup needs an attended session.
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
  rendering. It does not extend to full page layout/CSS screenshots.
- Git repository, package manifest, and a runnable Next.js/TypeScript/
  Tailwind application now exist as of round 1 (see `CYVEXLY_ENVIRONMENT.md`).
- Builder development port reservation: `5173`.
- Auditor isolated port reservation: `5273`.
- Council isolated port reservation: `5373`.

## Credentials and integrations

No credential capability is recorded. A role must verify authorization without exposing values. Missing credentials, external services, deployment, payment accounts, domain changes, and purchases remain explicit authority boundaries.

## Recovery

Role helpers are in `.codex/roles/scripts/`. Repair only the current role's owned runtime, manifest, cache, evidence, and browser resources. Never attach to or stop another role's runtime or process solely because a port or process name looks familiar.

