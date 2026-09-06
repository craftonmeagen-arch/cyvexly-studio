# Cyvexly App Debt — Round 66 full detail (archived)

Moved from `CYVEXLY_APP_DEBT.md` round 72 to keep that file under its
30,720-byte hot-file cap.

## Resolved round 66

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R55`** — a
  thirty-first consecutive independent confirmation (reviewed commit
  `846975d`, round 64's HEAD, predating round 65's body-size-cap fix), 0
  active code defects at the reviewed commit. Moved to
  `exchange/processed/`.
- **Found and fixed a real data-loss defect on a third surface**
  (mailer/rate-limiter/origin-gate and the Planner sanitize/validate
  pipeline had each gone a round clean): diffed every `PlannerData`
  field (`src/lib/planner-config.ts`) against every `raw.<field>` read
  in `src/app/api/planner/route.ts`. The Planner's "Visual direction"
  step's four style sliders (`data.spectrum`) had no corresponding
  server read at all — every other ~47 fields did — so that whole
  step's answers were silently dropped before reaching
  `design@cyvexly.com`, contrary to Owner direction `2026-09-04-14`'s
  "All project-planner answers" requirement.
- **Fixed:** `src/app/api/planner/route.ts` now reads `raw.spectrum`,
  keeping only known `visualSpectrums` ids paired with an in-range
  integer (0-4, matching the client's step slider) and adds a new
  "Style spectrum" email row (e.g. `Minimal ↔ Expressive: 3/4`).
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173 with a temporary debug log (removed before commit): a mixed
  payload (3 valid ids, 1 unknown id, 1 non-numeric value) produced
  exactly the 3 valid labels with no crash; an absent `spectrum`
  produced `[]`, no crash — both still reached the existing 503
  not-configured response. Regression: valid payload still 503;
  missing fields still 400 with the same field-error set; malformed
  JSON still 400; 150KB body still 413s; Contact route unaffected; a
  12-route sitewide sweep all 200. Committed (`4a7b26f`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID first); removed all scratch payload/log files.
