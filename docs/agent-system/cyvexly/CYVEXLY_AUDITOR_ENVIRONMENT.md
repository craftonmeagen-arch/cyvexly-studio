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
