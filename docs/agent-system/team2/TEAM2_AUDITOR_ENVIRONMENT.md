# Team 2 Independent Forensic Auditor Environment

**Current setup (updated 2026-09-10):** Owner directions `2026-09-08-23` and
`2026-09-08-28` authorize the scheduled Team 2 HoneyHearted Auditor; direction
`2026-09-08-29` assigns EduAILenz/Mudoinkle and other outside-site portfolio
review to Team 2 as well. The automation ID is
`team-two-website-independent-forensic-auditor`; its configured cadence remains
hourly at minute `00` on `gpt-5.6-luna` with extra-high (`xhigh`) reasoning, but
the automation is PAUSED and must not be reactivated without later explicit
Owner direction.

- Accepted HoneyHearted workspace: `C:/app projects/Honeyhearted`
- Portfolio-integration accepted source: exact recorded commit in
  `C:/app projects/website`, limited to the assigned Team 2 entry
- Independent review root: `C:/app projects/honeyhearted-independent-review`
- Run role key: `team2-auditor`
- Reserved port: `5573`
- Orientation: root `TEAM2_AUDITOR_ORIENTATION_DOCUMENT.md`
- PM prompt: `docs/agent-system/team2/TEAM2_AUDITOR_PM_PROMPT.md`

The paused recurring automation remains HoneyHearted-targeted unless the Owner
separately changes its scheduler prompt; other Team 2 audit assignments may use
this role manually without borrowing primary-team resources only when the Owner
explicitly directs that manual work.

This environment is separate from the primary Cyvexly Auditor's
`C:/app projects/website-independent-review`, `auditor` role key, port `5273`,
memory, reports, evidence, browsers, and runtime. Do not attach to or clean the
other team's resources. The Team 2 Auditor may establish or repair lifecycle
helpers only within its reviewer-owned environment when needed, while
preserving immutable-source, manifest, publication-before-cleanup, and exact-
ownership behavior required by its orientation and governing rules.
