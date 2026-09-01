# Independent Forensic Auditor evidence — IFA-2026-09-01-R12

- Round: `auditor-20260901T0148Z-012`
- Heartbeat minute zero: `2026-09-01T01:45:59.921Z`
- Reviewed accepted HEAD: `8e7ad528fe186c0b7a3b5e43ae579a8ce135d9d1`
- Source fingerprint: unchanged R11 fingerprint `db2aadb38ba593ef91da40a60881f8ca6804984feb192b19829a5c1b5c457ead` (40 `src/` files)
- Runtime: exact disposable archive at `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T0148Z-012`, port `5273`, started with `next dev --webpack`

## Boundary and capability notes

The standard Auditor guard remains unable to write `.codex/role-state/auditor.active.json` under managed permissions, so this round used the exact accepted-commit archive and manually tracked the Auditor-owned runtime. Product source/tests, `.engine-lock`, Builder/Council resources, and the scheduler automation were not edited. The public Render URL (`https://cyvexly-studio.onrender.com/`) was attempted through the real in-app Browser, but Browser security policy rejected it because of a saved user permission. A clean alternate local origin (`http://127.0.0.1:5273`) was likewise rejected; no workaround, raw CDP, storage inspection, or storage clearing was attempted.

## Focus and method

R11 already covered the local Home video cleanup. R12 therefore focused on the strongest remaining Planner question (`CYV-IFA-009`): first-use restore behavior and service-entry precedence. The real in-app Browser opened `http://localhost:5273/start` and, after the browser-only preparation state settled, observed the persisted-draft branch. The service-entry URL `http://localhost:5273/start?service=landing-pages` was then opened to verify that an existing draft remains in control rather than being overwritten by the service prefill. A full-page capture was opened and visually inspected. Browser diagnostics were collected from the tab.

## Observations

- Initial Planner render exposed an accessible busy `status` named “Preparing your Planner” while storage hydration was pending.
- The settled view exposed `Step 1 of 9`, a single enabled progress button, and the explicit notice: “We restored a saved draft from this device. Continue where you left off, or start over by clearing individual fields.” The restored visible draft included `R9 Draft Test` and `555-0100`; the work-email field was blank in the rendered DOM at capture time.
- Opening the service-entry URL retained the same restored notice and draft identity. The service-specific starting-point notice did not replace the saved draft, matching the source precedence contract.
- At the active browser viewport (`1280×720`; the viewport override capability did not take effect in this binding), the document reported `scrollWidth=1265` and `clientWidth=1265`. No overflow was observed in this state.
- `tab.dev.logs()` contained only React DevTools/HMR informational entries; no warning or error entries were present.

## Disposition

No new product defect is established. `CYV-IFA-009` remains partially mitigated: restore behavior and service-entry precedence are observable, but this binding already contains a prior draft and Browser policy blocks a clean-origin/context reset. A true no-draft first-use proof therefore remains unconfirmed. Public/production adoption remains unconfirmed because the public URL was blocked by an explicit saved Browser permission.

## Cleanup

Before publication, the capture and structured metrics were retained as cited evidence. The Auditor viewport will be reset, review tabs closed, only the exact R12 process chain stopped, port `5273` rechecked clear, and only the exact R12 temporary runtime removed. The manual lifecycle deviation and Browser-policy limits are intentional and recorded above.
