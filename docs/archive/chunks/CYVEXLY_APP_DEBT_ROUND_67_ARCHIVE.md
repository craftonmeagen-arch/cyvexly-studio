# Cyvexly App Debt — Round 67 full detail (archived)

Archived round 69 to keep `CYVEXLY_APP_DEBT.md` under its 30,720-byte
hot-file cap. Round 67 fixed the Planner secondary-goals-label mapping
defect.

## Resolved round 67

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R56`** — a
  thirty-second consecutive independent confirmation (reviewed commit
  `fda8b48`, round 65's HEAD, predating round 66's spectrum-field fix),
  0 active code defects at the reviewed commit. Moved to
  `exchange/processed/`.
- **Continued round 66's field-level adversarial diff of the Planner
  pipeline, checking value fidelity instead of field presence this
  time.** Found and fixed a second real, previously-unflagged defect on
  the same route: the "Desired secondary goals" checkbox group stores
  selected `primaryGoals` option ids joined by `"|"` (e.g.
  `sell|credibility`), but the email row joined the raw ids directly
  instead of mapping each through `labelFor()` — every other
  option-based field (primary goal, website type, features) already did
  this. The internal notification showed cryptic fragments like "sell,
  credibility" instead of "Sell products, Explain services and build
  credibility," contrary to Owner direction `2026-09-04-14`'s "clearly
  see... All project-planner answers" requirement.
- **Fixed:** `src/app/api/planner/route.ts` now computes
  `secondaryGoalsLabel`, mapping each pipe-delimited id through the
  existing `labelFor(primaryGoals, id)` helper (unmatched ids fall back
  to the raw id, matching `labelFor`'s existing behavior elsewhere in
  the file) before joining with `", "`.
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173 with a temporary debug log (removed before commit): a mixed
  payload (`sell|credibility|unknown-id-xyz|book`) produced exactly
  `Sell products`, `Explain services and build credibility`, the
  unknown id passed through unchanged, and `Book appointments or
  reservations` — no crash; an absent `secondaryGoals` field produced
  `[]`, no crash. Full regression: missing-fields payload still 400
  with the same 12-field error set; malformed JSON still 400; 150KB
  body still 413s; Contact route unaffected; a 12-route sitewide sweep
  all 200. Committed and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`taskkill` first); removed all scratch
  payload/log files.
