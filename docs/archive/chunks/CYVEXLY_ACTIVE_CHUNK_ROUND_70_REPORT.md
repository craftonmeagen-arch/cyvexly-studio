# Cyvexly Active Chunk — Round 70 Report

Moved from `CYVEXLY_ACTIVE_CHUNK.md` in round 71 to keep that file under
its 30720-byte hot-file cap.

## Round 70 report — global round 70 (scheduled/unattended session)

## Round 70 report — global round 70 (scheduled/unattended session)

Dispositioned fresh Owner direction `2026-09-06-16` (text-cursor/
editable-looking body copy: "on cyvexly i can click on any of the
wording and a toggle shows as if i can type"). No new Auditor inbox
item existed (`exchange/operational-inbox/` empty).

**Reproduced live.** `getComputedStyle` on `h1`/`p` returned
`cursor: "auto"`, `isContentEditable: false`,
`document.designMode: "off"`; `grep` across `src/` found zero existing
`cursor`/`contentEditable`/`user-select` rules. This is the browser's
own universal default I-beam cursor over selectable text (present on
every website), not a Cyvexly-specific `contentEditable`/input-like
styling bug.

**Fixed as a real, reachable polish defect without an accessibility
regression.** Added `cursor: default` on non-interactive prose (`p`,
`h1`-`h6`, `blockquote`, `figcaption`, `dt`, `dd`) inside `@layer base`
in `src/app/globals.css`, plus explicit `cursor: pointer` restoration
on `a`/`button`/`[role="button"]`/`summary` so every real interactive
control — including inline links nested inside a paragraph
(`/privacy`, `/terms`, `/accessibility`, `/services/[slug]`'s "Return
to all services") — keeps its pointer affordance. `user-select` left
untouched: text stays fully selectable/copyable, since disabling
selection is a known usability/accessibility anti-pattern the Owner's
report did not ask for.

**Self-caught regression before committing.** The first version of the
rule sat outside any `@layer`, so it unconditionally beat Tailwind
utility classes like `disabled:cursor-not-allowed` on the Planner's
not-yet-reached progress-rail buttons regardless of specificity — an
unlayered rule always outranks a layered one in the CSS cascade.
Live-tested `/start` before committing, found disabled buttons
reporting `cursor: "pointer"` instead of `"not-allowed"`, moved the
rule inside `@layer base`, and re-verified correct behavior across
every case.

**Verified:** `tsc`/`lint`/`build` clean (one pre-existing unrelated
lint warning, untouched). Real `next start` on port 5173: computed-
style checks on Home (`h1`/`p` → `default`), `/start` (all Planner
button states, including `not-allowed`, correct), `/privacy` (18
inline links all `pointer`), `/services/business-websites` ("Return to
all services" `pointer`), `/contact` (submit button `pointer`), `/faq`
(accordion buttons `pointer`). 12-route sitewide sweep all 200.

**Environment fix, documented for the next round:** this session's
PowerShell had no `node`/`npm`/`pnpm` on `PATH` despite them being
installed — added the real install directories
(`...\Programs\nodejs\node-v24.19.0-win-x64`, `...\Roaming\npm`) to
`$env:Path` for the session; no system/user environment change made.

Cleaned up: stopped the owned `next dev`/`next start` listener
(verified the real listener PID via `Get-NetTCPConnection -LocalPort
5173 -State Listen`, not process name — this host runs many unrelated
pre-existing `node.exe` processes); removed scratch log files from
`$env:TEMP`. Also committed pre-existing uncommitted hot-file-cap
archival edits to `CYVEXLY_OWNER_DIRECTION.md`/`ARCHIVE.md` found
already made but uncommitted at round start (content verified correct
and complete, not discarded).
