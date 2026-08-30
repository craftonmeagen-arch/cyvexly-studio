# Cyvexly Council Environment

- Disposable snapshot/runtime root: `.codex/runtime/council/<round-id>/`
- Active identity guard: `.codex/role-state/council.active.json`
- Reserved port: `5373`
- Durable evidence: `docs/agent-system/cyvexly/council/evidence/`
- Research: `docs/agent-system/cyvexly/council/research/`
- Report route: `docs/agent-system/cyvexly/reports/QUALITY_METHODS_CURRENT.md` and `QUALITY_METHODS_ARCHIVE.md`
- Inbox: `docs/agent-system/cyvexly/inbox/OPERATIONS.md`
- Lifecycle scripts: `.codex/roles/scripts/`

The snapshot is immutable and never built in. The paired runtime is disposable. Register role-owned processes, close the role-owned browser, publish, then clean the exact round root. Never use Builder credentials, ports, browser state, or processes.

