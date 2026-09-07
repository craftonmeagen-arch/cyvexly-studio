# Cyvexly App Debt — Round 82 archived detail

Moved out of the hot `CYVEXLY_APP_DEBT.md` file round 83 to restore
headroom under its 30,720-byte cap. One-line outcome preserved inline;
full detail below.

## Round 82 — real Privacy Policy truth-accuracy defect found and fixed

- **Checked the Auditor inbox first:** one new item, `IFA-2026-09-07-R73`
  (48th consecutive clean confirmation, reviewed commit `18fc2bb` — round
  80's head, predating round 81's docs-only round), 0 active code
  defects, "PASS WITH COMMENDATION". Its §6.3 external gates list repeats
  the same stale "Production Domain Connection" wording rounds 77-81
  already noted (domain verified live since round 53). No Builder action
  required; moved to `exchange/processed/`.
- **Ran the standard local verification suite first** (`tsc --noEmit`,
  `pnpm run lint`, `pnpm run build`) against the unchanged round-81 source
  — all clean (same pre-existing round-42 evidence-script lint warning) —
  confirming no regression before looking for new work.
- **Fresh surface: adversarially diffed the Privacy Policy copy
  (`src/app/privacy/page.tsx`) against actual API-route behavior**
  (`src/lib/mailer.ts`, `src/app/api/{contact,planner}/route.ts`), a
  surface no recent round had explicitly re-verified against current
  code. **Found and fixed a real truth-claim defect:** the "Hosting and
  technical logs" section stated "We do not separately combine these logs
  with information you submit through our forms," but `getClientIp()`'s
  result is embedded directly inside the same internal notification email
  as the name/email/message (`` `IP: ${ip}` `` in both routes'
  `internalTextLines`) and used as the rate-limiter key — the code and
  the policy text contradicted each other. Added an accurate disclosure
  paragraph to "Information you submit through our forms" (IP is captured
  for anti-spam rate-limiting and included in the internal notification,
  not the visitor confirmation) and corrected the "Hosting and technical
  logs" section to stop claiming no combination occurs, naming the one
  real exception. Commit `19ae224`.
- **Verified:** `tsc`/lint/build clean after the edit; started a real
  `next start` production server on port 5173 and confirmed via `curl`
  that the new copy renders in the actual page HTML and a 12-route sweep
  (`/`, `/about`, `/privacy`, `/terms`, `/contact`, `/faq`,
  `/accessibility`, `/services`, `/pricing`, `/work`, `/process`,
  `/start`) all returned 200.
- Cleaned up: stopped the manually-started `next start` listener on port
  5173 by its verified real listener PID (`netstat`-confirmed, not a
  guess); removed the scratch server log from the OS temp root.
- Pushed to `origin/main` for Render auto-deploy.
