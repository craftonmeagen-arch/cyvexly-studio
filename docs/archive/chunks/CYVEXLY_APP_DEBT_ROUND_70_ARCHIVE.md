# Round 70 detail (archived round 73 to keep CYVEXLY_APP_DEBT.md under its 30,720-byte hot-file cap, restoring latest-three rotation)

## Resolved round 70

- **Dispositioned fresh Owner direction `2026-09-06-16`** (text-cursor/
  editable-looking body copy defect, "on cyvexly i can click on any of
  the wording and a toggle shows as if i can type"). No new Auditor
  inbox item existed this round (`exchange/operational-inbox/` empty).
- **Reproduced live** on the real `next dev`/`next start` runtime:
  `getComputedStyle` on `h1`/`p` returned `cursor: "auto"`,
  `isContentEditable: false`, `document.designMode: "off"` — confirmed
  this is the browser's own default I-beam cursor over selectable text
  (universal on every website), not a Cyvexly-specific `contentEditable`/
  input-like styling bug. `grep` across `src/` found zero existing
  `cursor`/`contentEditable`/`user-select` rules.
- **Fixed as a real, reachable polish defect per the Owner's request**,
  without an accessibility regression: added a `cursor: default` rule
  (in `@layer base`) on non-interactive prose elements (`p`, `h1`-`h6`,
  `blockquote`, `figcaption`, `dt`, `dd`) plus an explicit
  `cursor: pointer` restoration on `a`/`button`/`[role="button"]`/
  `summary` so every real interactive control — including inline links
  nested inside a paragraph (`/privacy`, `/terms`, `/accessibility`,
  `/services/[slug]`'s "Return to all services") — keeps its pointer
  affordance. Left `user-select` untouched: text stays fully selectable/
  copyable, since disabling selection is a known usability/accessibility
  anti-pattern the Owner did not ask for ("doesn't hurt anything...
  should be fixed" targeted the visual affordance, not selectability).
- **Caught and fixed a real regression during verification, before
  committing:** the first version of this rule sat outside any
  `@layer`, so it unconditionally beat Tailwind utility classes like
  `disabled:cursor-not-allowed` regardless of specificity (Tailwind v4's
  own utilities live inside `@layer utilities`, and any unlayered rule
  outranks a layered one per the CSS cascade-layers spec) — live-tested
  on `/start`'s Planner progress rail, every not-yet-reached step button
  (`disabled`, class `cursor-not-allowed`) showed computed `cursor:
  "pointer"` instead of `"not-allowed"`. Moved the new rule inside
  `@layer base` (below Tailwind's own `utilities` layer in cascade
  order) and re-verified: disabled Planner buttons now correctly report
  `cursor: "not-allowed"` again, enabled buttons/links stay `"pointer"`,
  and prose stays `"default"`.
- **Verified:** `tsc`/`lint`/`build` clean (one pre-existing unrelated
  lint warning in a round-42 evidence script, not touched). Real
  `next start` on port 5173: computed-style checks on Home (`h1`/`p`
  → `default`), `/start` (all button states correct including
  `not-allowed`), `/privacy` (18 inline links all `pointer`),
  `/services/business-websites` ("Return to all services" `pointer`),
  `/contact` (submit button `pointer`), `/faq` (accordion buttons
  `pointer`). 12-route sitewide sweep all 200.
- **Environment fix, documented for the next round:** this scheduled
  session's PowerShell had no `node`/`npm`/`pnpm` on `PATH` at all
  (`Get-Command` failed for all three) even though `CYVEXLY_TOOLS_AND_
  CAPABILITIES.md` records them as installed — a stale/incomplete
  session PATH, not a missing install. Found real binaries at
  `C:\Users\Tcraf\AppData\Local\Programs\nodejs\node-v24.19.0-win-x64\
  node.exe` and `C:\Users\Tcraf\AppData\Roaming\npm\pnpm.cmd`/`.exe`
  and added both directories to `$env:Path` for this session only (no
  system/user environment-variable change made). If a future round hits
  "'pnpm'/'node' is not recognized" again, apply the same two-directory
  `$env:Path` addition before concluding the tool is unavailable.
- Cleaned up: stopped the owned `next start`/`next dev` listeners
  (verified the real listener PID via `Get-NetTCPConnection -LocalPort
  5173 -State Listen`, not by process name — this host runs many
  unrelated pre-existing `node.exe` processes); removed the scratch
  `next-dev-5173.log`/`next-start-5173*.log`/`rebuild.log` files from
  `$env:TEMP`; closed the owned Browser pane tab implicitly by not
  reusing it further. Left the pre-existing uncommitted
  `CYVEXLY_OWNER_DIRECTION.md`/`ARCHIVE.md` hot-file-cap archival edits
  (found already staged-but-uncommitted at round start, content
  verified correct/complete) to be committed together with this round's
  work rather than discarded.
