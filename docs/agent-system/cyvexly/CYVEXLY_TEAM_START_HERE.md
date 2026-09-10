# Cyvexly Build Team — Cyvexly Studio

**Read first — 2026-09-10-01:** The newest Cyvexly Owner Direction reopens
EduAILenz/Mudoinkle's Cyvexly showcase quality as primary Builder work, a bounded
exception to older Team 2 exclusions below. Resume authority applies only to
the primary Builder; all other pauses remain. Underlying outside products
remain Team 2 scope. The required outcome is Velora-level showcasing, not a
redesign of the outside applications.
Updated 2026-09-08 by Owner direction to make the team assignment explicit.

**Canonical team identity:** **Cyvexly Build Team**. This Cyvexly project
environment carries all Owner-directed work for `cyvexly.com` except bounded
outside-site portfolio integrations. Direction `2026-09-08-29` assigns those
integrations—including EduAILenz/Mudoinkle—and standalone outside websites to
**Team 2**. Team 2 also owns the standalone HoneyHearted implementation in
`https://github.com/craftonmeagen-arch/Honeyhearted` — see
`TEAM2_BUILDER_ORIENTATION_DOCUMENT.md` (repo root) and
`docs/agent-system/team2/TEAM2_OWNER_DIRECTION.md`. No Team 2 assignment is
this team's scope. Direction `2026-09-08-26` clarifies that only the Codex `:00/:30`
GPT-5.6-Sol automation was ever paused, not every Builder scheduler. The
Velora buyer-facing portfolio implementation is complete with independent
reviews remaining. `CYVEXLY_*` filenames, `cyvexly_*` configuration
filenames, and the low-level script role keys are retained as stable product
interfaces; they do not rename this team or create another team.

Open a task in C:/app projects/website and use:
> You are the Cyvexly Build Team Builder for Cyvexly Studio. Read CYVEXLY_BUILDER_ORIENTATION_DOCUMENT.md and perform that role.

Use the corresponding full Cyvexly Build Team role label and orientation for
the other roles. Do not shorten the identity to a generic “second Builder” or
treat the Supervisor as another Builder.
Each role has one root orientation and a matching .codex/agents/cyvexly_*.toml definition.
A plain-language role prompt works directly; it does not require spawning a subagent.
The Owner chooses the model. No role pins a vendor, model, or reasoning effort.

| Canonical role label | Orientation | Purpose |
|---|---|---|
| Cyvexly Build Team Builder | CYVEXLY_BUILDER_ORIENTATION_DOCUMENT.md | Implement the accepted vision and active chunk |
| Cyvexly Build Team Supervisor | CYVEXLY_SUPERVISOR_ORIENTATION_DOCUMENT.md | Scrutinize and fix recent Builder work; never lead features |
| Cyvexly Build Team Independent Forensic Auditor | CYVEXLY_AUDITOR_ORIENTATION_DOCUMENT.md | Independently verify Builder claims |
| Cyvexly Build Team Quality & Methods Council | CYVEXLY_COUNCIL_ORIENTATION_DOCUMENT.md | Independently judge visible quality and methods |
| Cyvexly Build Team Project Manager | CYVEXLY_PM_ORIENTATION_DOCUMENT.md | Reconcile scope, dependencies, findings, and role prompts |
| Cyvexly Build Team Functional Smoke Auditor | CYVEXLY_FUNCTIONAL_SMOKE_AUDITOR_ORIENTATION_DOCUMENT.md | Roam real prospect workflows and trace failures |

Team 2 currently has separate Builder and Independent Forensic Auditor
orientations (`TEAM2_BUILDER_ORIENTATION_DOCUMENT.md` and
`TEAM2_AUDITOR_ORIENTATION_DOCUMENT.md`). Its other four roles remain
unprovisioned pending Owner priority.

The Supervisor needs an identifiable Builder round or recent Builder handoff as its target.
Coordinate shared-file ownership with an active Builder before fixes; it has no independent
forward-feature mandate. An Owner invocation is sufficient dispatch; a lock is not required.

Read CYVEXLY_ROLE_RULES_MAPPING.md for exact paths and rule applicability.
Independent reviewers use C:/app projects/website-independent-review.
Historical review evidence in this repository stays readable as history. New review output
belongs in the external review root. PM prompts remain in the project for discoverability.

Current scheduler state is recorded in the role environment files. Owner
direction `2026-09-08-28` makes the primary Cyvexly Builder automation ACTIVE
at `:00/:30` on GPT-5.6 Sol/high and authorizes a distinct primary Cyvexly
Independent Forensic Auditor automation hourly at `:20` on GPT-5.6 Luna/xhigh.
As observed 2026-09-10, that Auditor automation is stored `PAUSED` and needs
Owner-authorized correction/resume or explicit manual invocation. The separate
Team 2 Auditor reviews accepted Team 2 work under that team's orientation and
Owner Direction; it is not the primary Cyvexly Auditor. No role may change any
scheduler without fresh Owner direction.
For manual starts, inspect current task activity and avoid another running copy of the same
role. Scheduler-managed runs use their scheduler's non-overlap control. Resource manifests
identify artifacts and processes; they are not locks or scheduling controls.
