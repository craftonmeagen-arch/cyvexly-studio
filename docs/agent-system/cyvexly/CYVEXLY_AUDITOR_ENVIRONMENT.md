# Cyvexly Auditor Environment

**Current setup (2026-09-05):** use the root Auditor orientation and
CYVEXLY_ROLE_RULES_MAPPING.md. New snapshots/runtimes, process inventories,
reports, evidence and memory belong under C:/app projects/website-independent-review.
The guard-based setup and round records below are historical evidence only.
The separately added recovery/launcher record is preserved; this rule migration
does not itself create, modify, or verify a scheduler.

- Disposable snapshot/runtime root: `.codex/runtime/auditor/<round-id>/`
- Active identity guard: `.codex/role-state/auditor.active.json`
- Reserved port: `5273`
- Durable evidence: `docs/agent-system/cyvexly/auditor/evidence/`
- Report route: `docs/agent-system/cyvexly/reports/AUDITOR_CURRENT.md` and `AUDITOR_ARCHIVE.md`
- Inbox: `docs/agent-system/cyvexly/inbox/OPERATIONS.md`
- Lifecycle scripts: `.codex/roles/scripts/`

The snapshot is immutable and never built in. The paired runtime is disposable. Register role-owned processes, close the role-owned browser, publish, then clean the exact round root. Never use Builder credentials, ports, browser state, or processes.

## Managed-permission deviation (R4)

The standard Auditor guard/runtime helper could not write `.codex/role-state/auditor.active.json` in this managed session. R4 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T1841Z-004b`; R5 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T1936Z-005`; R6 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T2013Z-006`; R7 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T2054Z-007`; R8 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T2152Z-008`, all on port `5273` with Auditor-owned processes. These deviations are disclosed in reports and are not normal guard/manifest claims. Preserve other-role resources and clean only each exact temp root/process.

R9 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T2250Z-009` on port `5273` against accepted HEAD `a8fb8cf2390d4786ede30ac9bf67dfa16f412099`. The standard guard remained write-denied; the exact runtime and Auditor-owned process were removed after review. Two Browser-policy-generated `data:` error tabs from failed alternate-origin attempts could not be closed through the normal API; no raw CDP/browser workaround was used.

R10 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T2346Z-010` on port `5273` against accepted HEAD `05a2403184c53f3d80f522e7ae958052dda324c5`, with the live Builder lock `builder-20260831T234220Z-owner-video-cleanup` observed and not touched. The standard guard remained write-denied; the exact runtime was archived from HEAD and its dependency junction was used only for execution. Repository HEAD advanced through `d6cd17c` to `8e7ad52` during the window; those successors were not audited. The Builder lock cleared naturally before close. Manual report routing and exact cleanup are disclosed in the R10 report/evidence.

R11 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T0047Z-011` on port `5273` against accepted HEAD `8e7ad528fe186c0b7a3b5e43ae579a8ce135d9d1`; no Builder lock was active at entrance. The standard guard remained write-denied; an exact archive and dependency junction were used. The dev server was stopped after Browser proof; exact Browser tabs, process chain, viewport, and temp runtime are removed after publication.

R12 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T0148Z-012` on port `5273` against the same accepted HEAD; no Builder lock was active at entrance. The standard guard remained write-denied; the exact archive and dependency junction were used with `next dev --webpack`. Public and alternate-origin navigation were rejected by Browser policy. Exact Browser tabs, viewport, process chain, and temp runtime are removed after publication.

R13 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T0242Z-013` on port `5273` against accepted HEAD `445c8763457bdbafb74171d232d6e302e25472c5`; no Builder lock was active at entrance. The standard guard remained write-denied; the exact archive and dependency junction were used with `next dev --webpack`. Exact Browser tab, viewport, process chain, and temp runtime are removed after publication.

R14 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T0339Z-014` on port `5273` against current docs-only HEAD `a7e07ca30a40757fa00ee3d7d6452918edba5137` (accepted product source `1437f5b`); the Builder lock was clear at entrance. The standard guard remained write-denied; the exact archive and dependency junction were used with `next dev --webpack`. The real in-app Browser covered desktop and phone top/scroll behavior, then the exact tab, viewport, process chain, and temp runtime were removed after publication. `CYV-IFA-010` was reproduced; `.engine-lock` remained untouched.

R17 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T1231Z-017` on port `5273` against the same accepted source/current docs-only HEAD; an active Builder lock with uncommitted mutable files was preserved. The standard guard remained write-denied; the exact archive and dependency junction were used with `next dev --webpack`. The real in-app Browser covered Contact validation, FAQ toggle, Contact → Planner → Back, and phone containment. `CYV-IFA-011` was reproduced; after publication, the exact tab, viewport, process chain, and temp runtime were removed, port `5273` verified clear, and `.engine-lock` remained untouched.

R18 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T1530Z-018` on port `5273` against accepted product `4265fa4` / current docs-only HEAD `3b7a57e`; no Builder lock was present at entry. The standard guard remained write-denied, so the exact archive/runtime and report route were manually managed. Real IAB covered Round 22 sticky-header repair, continuation-glass fields, About-link deferral, responsive widths, menu/FAQ/CTA recovery, and diagnostics; opened Chrome captures covered Home/Services desktop and Services tablet. `CYV-IFA-010` was verified closed. During closeout, Builder session `cyvexly-builder-20260901T153920Z-r23` claimed the lock and advanced HEAD to `2227961`; that later source was not audited. Exact IAB/Chrome resources, runtime, and port were cleaned after publication; the new Builder lock was preserved.

R19 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T1633Z-019` on port `5273` against immutable accepted product `06fbadd` (`src/` tree `d9f3e4a...`) while Builder lock `cyvexly-builder-20260901T160800Z-r24` was active. The standard guard again failed with managed-permission `UnauthorizedAccessException`; the exact archive/dependency junction and real IAB were used. R19 covered Contact error contrast/first-invalid focus, full-height blue-glass route-family stress, 390/320 containment, FAQ/Work interactions, and build boundaries. Builder advanced mutable HEAD to `2cd9121` during the window; that successor was excluded. Exact R19 Browser/runtime/process/Chrome resources are removed after publication; the lock, Council resources, and scheduler remain untouched.

R20 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T1731Z-020` on port `5273` against docs-only HEAD `2cd9121` (unchanged product `src/` tree `d9f3e4a...`); no Builder lock was present at entry. The standard guard again failed with managed-permission `UnauthorizedAccessException`; the exact archive/dependency junction and real IAB were used. R20 covered Accessibility Statement/legal and invalid-route truth, custom-404 recovery, metadata/indexing/robots/OG/sitemap, responsive containment, and the policy-blocked clean Planner-origin boundary. Builder r25 claimed a new lock near closeout and was preserved; mutable HEAD later advanced to `26a768a`, which was not inspected. Exact R20 Browser/runtime/process resources are removed after publication; Council resources and scheduler remain untouched.

R21 used `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T1837Z-021` on port `5273` against accepted product `06fbadd` (`src/` tree `d9f3e4a...`); Builder lock `cyvexly-builder-20260901T175628Z-r25` was active and mutable HEAD `26a768a`/working-tree source changes were excluded. The standard guard remained write-denied; exact archive/dependency junction and real IAB tab `5` were used. R21 covered Work filters at desktop/phone, mobile primary navigation, Work → Planner → browser Back recovery, phone containment, diagnostics, and ESLint/TypeScript. After the floor, exact R21 Browser/runtime/process resources were removed, port `5273` verified clear, and the Builder lock cleared naturally; HEAD advanced to `4b08744`/source tree `3ea8774a` and was not inspected. Builder/Council resources and scheduler remain untouched.

## 2026-09-04 Universal environment recovery & scheduler configuration

1. Toolchain & PATH: Provisioned workstation shims (`node.bat`, `npm.bat`, `npx.bat`, `pnpm.bat`, `pwsh.bat`) under `C:\Users\Tcraf\.gemini\antigravity\bin` mapping to user toolchain (`NodeJS\recovered-20260904`, `pnpm@10.34.4`, `pwsh@7.6.5`). All subagent/terminal executions now execute node, pnpm, and pwsh natively without manual PATH surgery.
2. Independent Review Root: Initialized `C:\app projects\website-independent-review` directory tree (`runs`, `memory/auditor`, `reports`, `evidence`, `exchange`). Seeded initial memory and report state.
3. Review Scripts: Updated `.codex/roles/scripts/Start-ReviewRound.ps1`, `Complete-ReviewRound.ps1`, `Publish-RoleReport.ps1`, and `Register-RoleProcess.ps1` to accept `-SourceRef`, support the `functional` role, route round execution to `website-independent-review\runs`, and mirror published reports and intake JSON.
4. Preflight & Runner: Added `scripts/start-cyvexly-auditor-round.ps1` supporting `-Action Check`, `-Action Start`, `-Action Stop`, and `-Action Publish`. Preflight verified clean with exit code 0.
5. Scheduler: Registered standing daemon task on hourly cadence (`0 * * * *`) per Owner prompt.
