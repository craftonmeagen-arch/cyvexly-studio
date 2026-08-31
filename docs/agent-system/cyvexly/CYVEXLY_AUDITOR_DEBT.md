# Cyvexly Auditor Debt

- `CYV-IFA-005` — **Owner Decision / Priority Before Deployment:** confirm public domain, set `metadataBase`, rebuild, and verify static OG/Twitter URLs no longer point to localhost; retain preview no-index until launch.
- `CYV-IFA-006` — **Owner Decision / Priority Before Deployment:** choose an approved server-side email/storage path and implement automatic Planner receipt/confirmation with consent, error, retry, and retention behavior.
- `/about`, `/privacy`, `/terms` — project debt requiring Owner founder/jurisdiction facts; current 404s are intentional and not new findings.
- `CYV-IFA-007` — provisional closure: scratch route absent in current `src`; recheck after the next immutable snapshot/build.
- `CYV-IFA-008` — **Verified closed in IFA-2026-08-31-R9:** invalid dynamic `/services/<slug>` and `/work/<slug>` routes return HTTP 404 and hydrate with the custom `Page not found — Cyvexly Studio` title/body; valid dynamic routes remain 200. Reopen only if a later accepted source regresses this behavior.
- `CYV-IFA-009` — **P2 / Launch Quality, mitigated:** the Planner form is gated behind restore readiness and saved-draft values restore without the R8 jump/input-loss path. Closure still requires a true no-draft first-use proof on a clean Browser origin/context; this round could not isolate it without prohibited storage clearing or policy-blocked alternate origins.
- Unconfirmed: public deployment re-check from this sandbox, physical keyboard, reduced-motion preference, valid external mail, real integrations, and cross-browser behavior.
