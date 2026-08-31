# Independent Forensic Auditor evidence — IFA-2026-08-31-R9

## Identity and isolation

- Heartbeat minute zero: `2026-08-31T22:50:55.457Z`.
- Accepted source: HEAD `a8fb8cf2390d4786ede30ac9bf67dfa16f412099` (`Record Round 19 runtime fixes`), 40 `src/` files, fingerprint `98dad5e43a8f2c6e4fb878574490c20e7078f6c7a42d08394315c78efd1fc9e3`.
- Exact disposable runtime: `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T2250Z-009`, primary port `5273`.
- `Start-ReviewRound.ps1` again failed to write `.codex/role-state/auditor.active.json` under managed permissions. No Builder lock was present at round start; product source, tests, other-role resources, Builder/Council ports, and scheduler automation were not edited.

## Scope and method

This successor pass rechecked both R8/R6 findings with a fresh real Codex in-app Browser method: mobile requested viewport `390×844` (actual layout `375×844`), server and hydrated 404 metadata, valid dynamic-route regressions, Planner restore-gate timing, a draft created through visible UI, reload restoration, opened visual captures, local HTTP checks, ESLint/TypeScript, and browser diagnostics. No localStorage inspection or external form submission was used.

## Dynamic-route metadata result

- Local HTTP returned `404` for `/services/not-a-real-service` and `/work/not-a-real-project`; valid `/services/business-websites`, `/work/aurora-spaces`, `/work/nexora-systems`, and `/work/vellora-care` returned `200`.
- In the in-app Browser, both unknown routes settled at title `Page not found — Cyvexly Studio`, H1 `This page doesn't exist yet.`, one `main`, and exact `375px` mobile containment. Valid service/work pages retained their authored titles and one H1/main.
- **`CYV-IFA-008` is verified closed on this accepted successor.** The `generateMetadata` invalid-slug branches now call `notFound()`, so the hydrated generic `Service`/`Project` titles no longer overwrite the not-found title.

## Planner restore-gate result

- Raw `/start` HTML was HTTP `200`, with one `main`/H1, `Preparing your Planner`, the saved-draft check copy, and no `<form>` or `fullName` field.
- At requested `390×844` (`innerWidth=390`, layout width `375`), reload checkpoints at the existing saved-draft origin were gate-only at initial/`100ms`/`500ms` and settled at Step 1 by `1700ms`. No Full name control existed during the gate, so the R8 pre-hydration typing race had no interactive target.
- Using only visible Planner UI, a synthetic draft was saved at Step 1 with `R9 Draft Test` and `555-0100`. Reload showed the gate first, then Step 1 with both values preserved and the restored-draft message. Work-email fill was not used as evidence because the browser did not retain that synthetic value.
- Opened captures: `auditor-20260831T2250Z-009-planner-gate.png` and `auditor-20260831T2250Z-009-planner-restored-step1.png`; the gate is a calm, contained glass panel and the settled mobile shell remains contained.
- `CYV-IFA-009` is **mitigated but not fully closed**: saved-draft gating and preservation passed, but a true no-draft first-use path could not be isolated without inspecting/clearing browser storage, and alternate origins were blocked by Browser URL policy. Re-prove no-draft first use before final closure.

## Verification and limits

- Browser warning/error query was empty; sampled mobile pages had `scrollWidth === clientWidth === 375`.
- Direct ESLint and TypeScript (`tsc --noEmit`) passed in the exact runtime. The Builder's clean optimized-build proof remains the build record; no new public-deployment claim is made here.
- No physical keyboard, reduced-motion, cross-browser, public deployment, external email, or legal/domain claim was made. Synthetic values were not sent externally.

## Cleanup

Cleanup is recorded in the current report after the exact browser tab, server process, port, and temporary runtime are stopped/removed.
