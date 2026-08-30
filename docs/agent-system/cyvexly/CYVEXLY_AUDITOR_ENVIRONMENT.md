# Cyvexly Auditor Environment

- Disposable snapshot/runtime root: `.codex/runtime/auditor/<round-id>/`
- Active identity guard: `.codex/role-state/auditor.active.json`
- Reserved port: `5273`
- Durable evidence: `docs/agent-system/cyvexly/auditor/evidence/`
- Report route: `docs/agent-system/cyvexly/reports/AUDITOR_CURRENT.md` and `AUDITOR_ARCHIVE.md`
- Inbox: `docs/agent-system/cyvexly/inbox/OPERATIONS.md`
- Lifecycle scripts: `.codex/roles/scripts/`

The snapshot is immutable and never built in. The paired runtime is disposable. Register role-owned processes, close the role-owned browser, publish, then clean the exact round root. Never use Builder credentials, ports, browser state, or processes.

