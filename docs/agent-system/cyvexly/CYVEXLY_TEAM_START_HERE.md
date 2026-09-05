# Cyvexly team
Updated 2026-09-04 by Owner request to align the environment with NEW AI BUILD RULES and remove older rules.

Open a task in C:/app projects/website and use:
> You are the Cyvexly Builder. Look for the Cyvexly Builder Orientation Document and then perform that role.

Replace Builder with Supervisor, Auditor, Council, PM, or Functional Smoke Auditor.
Each role has one root orientation and a matching .codex/agents/cyvexly_*.toml definition.
A plain-language role prompt works directly; it does not require spawning a subagent.
The Owner chooses the model. No role pins a vendor, model, or reasoning effort.

| Role | Orientation | Purpose |
|---|---|---|
| Builder | CYVEXLY_BUILDER_ORIENTATION_DOCUMENT.md | Implement the accepted vision and Chunk 5 |
| Supervisor | CYVEXLY_SUPERVISOR_ORIENTATION_DOCUMENT.md | Scrutinize and fix recent Builder work; never lead features |
| Auditor | CYVEXLY_AUDITOR_ORIENTATION_DOCUMENT.md | Independently verify Builder claims |
| Council | CYVEXLY_COUNCIL_ORIENTATION_DOCUMENT.md | Independently judge visible quality and methods |
| PM | CYVEXLY_PM_ORIENTATION_DOCUMENT.md | Reconcile scope, dependencies, findings, and role prompts |
| Functional Smoke Auditor | CYVEXLY_FUNCTIONAL_SMOKE_AUDITOR_ORIENTATION_DOCUMENT.md | Roam real prospect workflows and trace failures |

The Supervisor needs an identifiable Builder round or recent Builder handoff as its target.
Coordinate shared-file ownership with an active Builder before fixes; it has no independent
forward-feature mandate. An Owner invocation is sufficient dispatch; a lock is not required.

Read CYVEXLY_ROLE_RULES_MAPPING.md for exact paths and rule applicability.
Independent reviewers use C:/app projects/website-independent-review.
Historical review evidence in this repository stays readable as history. New review output
belongs in the external review root. PM prompts remain in the project for discoverability.

This setup does not schedule or launch agents. Existing scheduler settings were not changed.
For manual starts, inspect current task activity and avoid another running copy of the same
role. Scheduler-managed runs use their scheduler's non-overlap control. Resource manifests
identify artifacts and processes; they are not locks or scheduling controls.

