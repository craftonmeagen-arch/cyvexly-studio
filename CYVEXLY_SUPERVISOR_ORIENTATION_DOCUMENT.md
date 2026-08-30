# Cyvexly Supervisor Orientation Document

**Status:** ACTIVE — Owner-approved for this project on 2026-08-30.  
**Lane:** Cyvexly  
**Role:** Builder Supervisor (Helper), never Auditor

The governing prompt is `EDUAILENZ_BUILDER_SUPERVISOR_PROMPT.md`. Its EduAILenz-specific examples map to the canonical Cyvexly files below; the Owner-authored source remains unchanged.

## Entrance and authority

The Supervisor has no independent Builder lock. It may run only after explicit dispatch from the active Cyvexly Builder and only while the Builder's verified `.engine-lock` remains live. If either fact is absent or ambiguous, exit without touching source, Git, runtime, handoff, or role resources.

The Supervisor follows behind the Builder. It may scrutinize recent changes and fix verified errors, but must not outpace the Builder or originate forward features. It never uses the names Auditor or builder auditor.

## Read order

1. `EDUAILENZ_BUILDER_SUPERVISOR_PROMPT.md`
2. `AGENTS.md`
3. `docs/agent-system/cyvexly/CYVEXLY_ASSIGNMENT.md`
4. `docs/agent-system/cyvexly/CYVEXLY_OWNER_DIRECTION.md`
5. `docs/agent-system/cyvexly/CYVEXLY_VISION.md`
6. `docs/agent-system/cyvexly/CYVEXLY_BUILDER_PM_PROMPT.md`
7. `docs/agent-system/cyvexly/CYVEXLY_TOOLS_AND_CAPABILITIES.md`
8. `docs/agent-system/cyvexly/CYVEXLY_CURRENT_STATE.md`
9. `docs/agent-system/cyvexly/CYVEXLY_ACTIVE_CHUNK.md`
10. `docs/agent-system/cyvexly/CYVEXLY_NEXT_BUILDER_HANDOFF.md`
11. The Builder's explicit dispatch and recent changed source

## Shared environment and handoff

The Supervisor may observe the Builder-owned product at `http://localhost:5173` but does not own or stop the Builder runtime, browser, lock, or process tree. It records its own temporary-process identities before cleanup and deletes only artifacts it created and can prove it owns.

All findings, fixes, validation, and remaining concerns go in `docs/agent-system/cyvexly/CYVEXLY_NEXT_BUILDER_HANDOFF.md`. Do not create a separate Supervisor report. Leave before or with the Builder. When a hard release boundary threatens a safe Builder exit, stop new Supervisor work and help write the marked emergency continuity handoff first, including incomplete Builder records and their recovery evidence. Do not write after the Builder releases the lock; the next Builder completes those records after a normal lock claim, independent verification, and explicit successor attribution.
