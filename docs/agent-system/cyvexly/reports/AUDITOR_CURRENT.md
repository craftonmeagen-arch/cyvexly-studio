# Independent Forensic Auditor Report

## Review identity

- Review ID: `IFA-2026-08-31-R9`
- Round: `auditor-20260831T2250Z-009`
- Role: Cyvexly Independent Forensic Auditor
- Heartbeat minute zero: `2026-08-31T22:50:55.457Z`
- Source: accepted HEAD `a8fb8cf2390d4786ede30ac9bf67dfa16f412099` (`Record Round 19 runtime fixes`) on `main`
- Source fingerprint: `98dad5e43a8f2c6e4fb878574490c20e7078f6c7a42d08394315c78efd1fc9e3` (40 `src/` files)
- Runtime: exact disposable accepted-commit archive at `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T2250Z-009`, port `5273` (removed after review)
- PM prompt ID/status: `NO ACTIVE PM PROMPT`; standing Auditor role applied.

## Isolation deviation

The standard `Start-ReviewRound.ps1`/guard again could not write `.codex/role-state/auditor.active.json` because managed permissions deny `.codex` writes. No Builder lock was present at round start. I used an exact accepted-commit archive and a role-owned temporary runtime, and manually routed the report. I did not touch `.engine-lock`, Builder/Council resources, product source, tests, or the scheduler automation. This is not a claim that the standard Auditor guard/manifest lifecycle succeeded.

## Scope and method

This successor pass rechecked the prior dynamic-route metadata finding and the Planner restore race with a fresh real Codex in-app Browser pass at requested `390×844` (actual `375×844` layout). It compared local HTTP and hydrated route behavior, checked valid dynamic-route regressions, observed `/start` gate timing, created and restored a draft through visible UI, opened mobile captures, ran local diagnostics, and ran direct ESLint/TypeScript. No localStorage inspection, storage clearing, external form submission, or public-deployment claim was made.

## Results and disposition

- **`CYV-IFA-008` — verified closed on this accepted successor.** Unknown `/services/not-a-real-service` and `/work/not-a-real-project` returned HTTP 404 and, after hydration, both settled at `Page not found — Cyvexly Studio` with `This page doesn't exist yet.`, one `main`, and exact 375px containment. Valid service/work slugs returned HTTP 200 and retained authored titles. The invalid-slug `generateMetadata` branches now call `notFound()`, so generic `Service`/`Project` titles no longer overwrite the not-found title.
- **`CYV-IFA-009` — mitigated but not fully closed.** Raw `/start` HTML now includes a `Preparing your Planner` gate, saved-draft check copy, one `main`/H1, and no form or Full name control before restore readiness. At 390×844, checkpoints were gate-only at initial/100ms/500ms and settled at Step 1 by 1700ms. A visible-UI draft (`R9 Draft Test`, `555-0100`) restored with the draft message and values preserved after reload. A true no-draft first-use path could not be isolated without prohibited storage inspection/clearing; alternate origins were blocked by Browser URL policy. Closure still requires no-draft proof.
- Browser warning/error diagnostics were empty; sampled mobile pages had `scrollWidth === clientWidth === 375`. Direct ESLint and TypeScript passed in the exact runtime. The Builder's clean optimized-build proof remains the build record; no new optimized-build, public, email, keyboard, reduced-motion, cross-browser, or legal/domain claim was made.
- Existing debt remains: `CYV-IFA-005` approved domain/`metadataBase`, `CYV-IFA-006` server-side Planner receipt/confirmation email, and provisional `CYV-IFA-007` scratch-route closure pending another immutable snapshot/build. The terminal sticky-header/footer overlay remains a watch observation from R7.

## Evidence and routing

- `docs/agent-system/cyvexly/auditor/evidence/auditor-20260831T2250Z-009-successor-404-planner-gate.md`
- `docs/agent-system/cyvexly/auditor/evidence/auditor-20260831T2250Z-009-runtime-metrics.json`
- Opened `auditor-20260831T2250Z-009-work-404.png`, `auditor-20260831T2250Z-009-planner-gate.png`, and `auditor-20260831T2250Z-009-planner-restored-step1.png`.

## Cleanup

The Auditor viewport was reset, the valid review tab was closed, the exact Auditor-owned Node process on port `5273` was stopped, and the exact temporary runtime was removed. Two policy-generated `data:` error tabs from failed alternate-origin attempts remained non-actionable because Browser URL policy blocked their normal close; no raw browser/CDP workaround was used. Port `5273` is no longer listening, `.engine-lock` is absent, and the scheduler automation remains active. The report was manually routed because managed permissions blocked the standard guard/publisher.

## Strongest next Auditor question

Re-prove `CYV-IFA-009` no-draft first use on a clean Browser origin/context that does not require storage inspection or policy-blocked alternate origins, then close or retain the finding based on actual evidence. Do not repeat the now-closed dynamic-404 pass unless source changes.
