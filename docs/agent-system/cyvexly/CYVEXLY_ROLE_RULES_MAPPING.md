# Cyvexly rule and path mapping
**Authority:** Owner request, 2026-09-04: "ok fix it. and we need to remove the older rules so there are no confusion".
This file is a Cyvexly environment adapter, not a replacement general rule packet.
The eight files in rules/ are the sole active imported rule set, preserved unchanged from
the verified NEW AI BUILD RULES folder. SYNC_MANIFEST.json records source IDs and hashes.
Older draft packets and their claim/release helpers are removed from the working tree.
Do not restore their procedures from Git history, old reports, caches, or remembered prompts.

## Precedence and applicability
Current Owner direction and accepted Cyvexly vision govern product scope. Apply the shared
packets' evidence, independence, cleanup, source-truth, and professional-method requirements.
Read 00_AI_Autonomous_Building_Rules_Overview.md for every role. Then read the assigned
packet(s) named in that role's orientation; do not substitute a summary for the full packet.

EduAILenz, BloomED, teacher/student, IEP, Clerk, database, tunnel, and other-team examples
in the unchanged packets are product-specific examples. Here the user is a business
prospect; the product is Cyvexly's marketing site and qualified project brief workflow.
They do not authorize an education product, student data, fictional authentication,
a database, special-education compliance features, or another team's credentials.
Evaluate accessibility and applicable legal requirements against actual Cyvexly behavior.
The packet's 44px target is a design floor, not a claim that every WCAG criterion uses 44px.
Do not copy another project's source, accounts, scripts, secret stores, or ports.
Use the exact local commands below instead of example commands that do not exist here.

## Invocation and time
Begin ordinary orientation immediately. The current packet retires repository lock claims,
releases, stale takeovers, and lock-triggered exits. No legacy marker determines ownership.
For scheduled runs, the scheduler provides same-role non-overlap; do not create or change a
scheduler without explicit Owner authorization. For an Owner-started manual task, use live
task status to avoid duplicating a running instance of that role. A resource manifest is
only a process/path inventory and must never gate a role based on another manifest's age.
Resolve uncertain live task ownership through the task host, not a leftover file.
Follow applicable current packet duration requirements and any explicit invocation time
limit. Do not import the removed drafts' 25/50/80-minute lock-release windows.
Supervisor's current packet retains a 25-minute substantive work floor and Builder pacing.
A plain prompt does not grant permission to send messages to other people or change schedules.

## Exact roots and role ownership
- Product root: C:/app projects/website; branch main; Builder port 5173.
- Independent review root: C:/app projects/website-independent-review.
- Reviewers: auditor port 5273; council port 5373; functional port 5473.
- External per-run root: runs/<role>/<round-id>/ with snapshot/, runtime/, logs/, browser/,
  identity.json, and processes.json. Snapshot contains archived committed product files,
  never the mutable Builder working copy or Builder .env files. Build only in runtime/.
- External evidence: evidence/<role>/<round-id>/; retain only evidence with a named ongoing
  purpose and deletion condition. External memory: memory/<role>/.
- External reports: reports/AUDITOR_CURRENT.md and AUDITOR_ARCHIVE.md;
  QUALITY_METHODS_CURRENT.md and QUALITY_METHODS_ARCHIVE.md;
  FUNCTIONAL_AUDIT_CURRENT.md and FUNCTIONAL_AUDIT_ARCHIVE.md.
- External immutable published reports: reports/published/<role>/<review-id>.md.
- External Builder intake: exchange/operational-inbox/<role>-<review-id>.json.
  Builder reads every new finding, records its disposition in its handoff/debt, then moves
  only the consumed item to exchange/processed/. Never overwrite unread findings.
- Builder evidence: docs/agent-system/cyvexly/builder/evidence/.
- Supervisor findings and fixes: CYVEXLY_NEXT_BUILDER_HANDOFF.md in this directory.
- PM: CYVEXLY_PM_CURRENT_STATE.md, CYVEXLY_NEXT_PM_HANDOFF.md, and role PM prompts here.
  PM does not impersonate Owner decisions or edit product source.

Reviewers never write product source/tests, Builder memory, scheduler config, or another
role's resources. Old in-repository reviewer records are historical context; current
external records take precedence. Never mark old pending publication or cleanup completed
without verifying it. Only retain previous evidence for a documented continuing purpose.

## Shared packet names mapped to Cyvexly
Paths below are relative to docs/agent-system/cyvexly unless absolute.
| Shared name | Cyvexly target |
|---|---|
| VISION.md / accepted vision | CYVEXLY_VISION.md and root CYVEXLY_VISION_PLAN.md |
| Owner direction | CYVEXLY_OWNER_DIRECTION.md |
| AUTONOMOUS_STATE_NOW.md | CYVEXLY_CURRENT_STATE.md |
| PROJECT_CHUNK_MAP.md | CYVEXLY_PROJECT_CHUNK_MAP.md |
| BUILD_SUMMARY_LOG.md | CYVEXLY_BUILD_SUMMARY.md |
| ACTIVE_CHUNK.md | CYVEXLY_ACTIVE_CHUNK.md |
| NEXT_BUILDER_ROUND.md / BloomED handoff | CYVEXLY_NEXT_BUILDER_HANDOFF.md |
| CHUNK_PROJECT_DEBT.md | CYVEXLY_CHUNK_DEBT.md |
| APP_PROJECT_DEBT.md | CYVEXLY_APP_DEBT.md |
| external review intake / REVIEWER_OPERATIONAL_INTAKE.md | CYVEXLY_REVIEW_INDEX.md and external exchange/operational-inbox/ |
| reviewer state, coverage, debt, watch, summary, handoff | external memory/<role>/ with the corresponding CYVEXLY filenames |
| EDUAILENZ_FUNCTIONAL_SMOKE_AUDITOR_PROMPT.md | root CYVEXLY_FUNCTIONAL_SMOKE_AUDITOR_ORIENTATION_DOCUMENT.md |
| runtime provisioning / publication / stopping | .codex/roles/scripts/ helpers below |
| old-version cross-reference inside a shared packet | current role packet in rules/; never restore an old version |

## Runtime and report commands
Run PowerShell 7 (pwsh), not legacy Windows PowerShell. Helpers are under
C:/app projects/website/.codex/roles/scripts/.
- Start-ReviewRound.ps1 -Role auditor|council|functional -RoundId <unique-id> -SourceRef <accepted-commit>
- Register-RoleProcess.ps1 -Role <role> -RoundId <id> -ProcessId <owned-pid>
- Publish-RoleReport.ps1 -Role <role> -RoundId <id> -ReviewId <unique-review-id> -ReportPath <candidate-in-run-logs>
- Complete-ReviewRound.ps1 -Role <role> -RoundId <id>

Read the returned source identity, paths, and port. Install frozen dependencies in runtime/
with pnpm install --frozen-lockfile. Start Next with pnpm exec next dev --port <role-port>
(or an optimized build when the review requires it), recording all started child processes.
Do not reuse Builder node_modules, build caches, browser contexts, environment, or login.
Cyvexly checks: pnpm exec tsc --noEmit, pnpm run lint, pnpm run build, plus actual rendered
workflow proof appropriate to the change. Never claim a non-existent typecheck script ran.

Publish the report with source SHA and REVIEW ID before stopping. Update external memory
and close your browser; then complete exact process/disk cleanup. Unique/uncommitted runtime
changes must first be preserved as minimal evidence when still needed. Cleanup never deletes
credentials, junction targets, installed tools, personal files, or another run.

