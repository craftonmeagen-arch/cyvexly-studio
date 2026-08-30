# Cyvexly Studio Agent Guidance

## Project identity

This sandbox is the Cyvexly Studio website project. The Owner approved the four governing role packets in the repository root on 2026-08-30 for project-scoped activation. Recurring schedulers are not configured or authorized by this setup.

## Governing packets

- `Autonomous_Build_Reasoning_Guidelines_v23_2_DRAFT_Universal_Sandbox_Orientation.md` governs the Builder.
- `EDUAILENZ_BUILDER_SUPERVISOR_PROMPT.md` governs the Supervisor role; its product-specific EduAILenz examples map to this lane's Cyvexly files and routes without changing the frozen source packet.
- `Independent_Forensic_Auditor_Guidelines_v5_0_DRAFT_Universal_Sandbox_Orientation.md` governs the Auditor.
- `Product_Quality_Assurance_and_Methods_Council_Guidelines_v5_0_DRAFT_Universal_Sandbox_Orientation.md` governs the Council.

These Owner-authored packets are frozen. Do not rewrite, rename, weaken, expand, or replace them unless the Owner explicitly authorizes packet maintenance.

## Custom roles

Project-scoped custom agents live in `.codex/agents/`:

- `cyvexly_builder` — owns forward implementation under `.engine-lock`.
- `cyvexly_supervisor` — helper that follows behind an active Builder and may fix verified defects under that same Builder ownership window.
- `cyvexly_auditor` — independent source/runtime reviewer; never edits product source or tests.
- `cyvexly_council` — independent product-quality and methods reviewer; never edits product source or tests.

Use these roles when the Owner explicitly requests the autonomous role workflow or names a role. Do not invent a recurring schedule or cadence. At most three spawned role threads may be open in addition to the primary thread.

## Orientation and ownership

Each role begins from exactly one matching root orientation document. Builder lock and reviewer lifecycle helpers live in `.codex/roles/scripts/`.

- The Builder must atomically claim `.engine-lock` before reading project state or changing the repository and must release it as its literal final repository action.
- The Supervisor operates only when an active Builder has explicitly dispatched it and a matching live Builder lock is verified. It shares the Builder working tree but owns only its own temporary artifacts and process identities.
- Auditor and Council never touch `.engine-lock`, Builder processes, Builder ports, Builder browser state, or product source. They use role-owned snapshots, runtimes, evidence, reports, and process manifests.
- Stop or delete only resources whose exact ownership is proven. Preserve user files, permanent deliverables, cited evidence, reports, archives, and another role's resources.

## Project state

Canonical lane files are under `docs/agent-system/cyvexly/`. `CYVEXLY_VISION.md` routes to the existing project vision plan. No product round or review has been started by environment setup. The first invoked Builder creates the provisional chunk map, opens the first chunk, and establishes round 1 from current source and Owner direction.

## Verification and cleanup

Observable changes require real product use and proof proportionate to the claim. User-facing visual work requires a visual plan before implementation and rendered comparison afterward. Auditor and Council must use their isolated runtime through the in-app browser when a runnable product exists.

Inspect temporary screenshots, renders, traces, recordings, runtime copies, build output, and caches promptly. Delete uncited or exhausted role-owned artifacts before round close. Never retain duplicate source/runtime copies after their verification purpose ends.

## Current environment facts

- Workspace: `C:/app projects/website`
- Git: not initialized at setup time; agents must recheck current truth.
- Builder development port reservation: `5173`
- Auditor isolated port reservation: `5273`
- Council isolated port reservation: `5373`
- Available local tools at setup: Git 2.55, Node.js 24.19, npm 11.17, pnpm 10.34, Python 3.13, ripgrep 15.2.
- Browser, connector, and credential capabilities are session-specific and must be verified before use. Never store secret values in project files.
