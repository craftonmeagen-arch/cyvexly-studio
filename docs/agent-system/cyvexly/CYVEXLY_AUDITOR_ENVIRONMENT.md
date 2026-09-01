# Cyvexly Auditor Environment

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
