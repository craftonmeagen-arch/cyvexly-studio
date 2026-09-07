# Cyvexly App Debt — Round 78 archived detail

Moved out of the hot `CYVEXLY_APP_DEBT.md` file round 81 to restore
headroom under its 30,720-byte cap. One-line outcome preserved inline;
full detail below.

## Round 78 — no new defect; environment finding + proof-gap closure

- **Checked the Auditor inbox first:** one new item, `IFA-2026-09-07-R69`
  (44th consecutive clean confirmation, reviewed commit `3409faf` — round
  76's head), 0 active code defects, "PASS WITH COMMENDATION" on the round-76
  video feature via the Auditor's own live CDP verification. Its "External
  Business Operations Gates" list still names "Production Domain Connection"
  as pending — same stale template wording round 77 already noted (domain
  verified live since round 53). No Builder action required; moved to
  `exchange/processed/`.
- **Environment capability finding (see `CYVEXLY_TOOLS_AND_CAPABILITIES.md`
  round-78 note for full detail):** round 77 concluded live/CDP verification
  was categorically unreachable this session type. That conclusion was too
  broad — only `preview_start({name})`'s own dev-server launch is refused for
  unattended sessions. Starting `next dev` manually via the Bash tool, then
  attaching the Browser pane with `preview_start({url: "http://localhost:5173"})`
  (round 1's documented workaround), produced genuine compositing screenshots
  and at least one genuine real `Tab`-key focus move in this exact scheduled/
  unattended session — both degraded to intermittent partway through the
  round (blank screenshot, focus stopped moving), matching the pattern
  rounds 35/40 already recorded for attended sessions. Reachable, not
  reliable; worth retrying each round rather than assuming either extreme.
- **Closed round 76's named proof-instrument limitation with genuine
  positive evidence.** Round 76 could not confirm the ambient Home video
  autoplays because `document.hidden` read `true` even for the sole/fronted
  tab that session. This round, in a live attached tab, `document.hidden`
  correctly read `false`/`visibilityState: "visible"`, and the video's
  `currentTime` was read twice 3 real seconds apart (`3.24s` → `11.14s`),
  proving genuine unattended real-time playback progression — not merely
  `readyState`/`paused` flags. Independently re-verified the click-to-open
  lightbox (portaled to `document.body`, `aria-modal="true"`, body scroll
  locked, focus moved to the close control) and Escape-to-close (dialog
  removed, scroll restored, focus returned to the trigger) live, matching
  the Auditor's and round 76's own findings. **No defect found** — this
  closes a proof gap, not a code change.
- **Verified:** no source file changed this round, so `tsc`/lint/build were
  not re-run (round 77's clean results stand unchanged). Cleaned up: stopped
  the manually-started `next dev` listener on port 5173 by its verified real
  listener PID (`Get-NetTCPConnection -LocalPort 5173 -State Listen`), not by
  process name; removed the scratch dev-server log from `$env:TEMP`.
