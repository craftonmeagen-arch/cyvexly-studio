# Autonomous AI Engineering Rules — Ecosystem Overview

This folder contains the complete, authoritative rule packets governing the autonomous multi-agent software engineering lifecycle.

---

## Folder Structure & Index

| File | Role / Document | Description |
| :--- | :--- | :--- |
| [`02_Builder_Supervisor_Rules.md`](./02_Builder_Supervisor_Rules.md) | **Builder Supervisor** | Pacing (5 min behind), wake boundary, full authority to fix regressions, DOM stress-testing, and documentation. |
| [`03_Independent_Forensic_Auditor_Rules.md`](./03_Independent_Forensic_Auditor_Rules.md) | **Independent Forensic Auditor** | Adversarial verification, physical browser observation, 3 core mission questions, and `AUD-XXX` defect registry. |
| [`04_Quality_and_Methods_Council_Rules.md`](./04_Quality_and_Methods_Council_Rules.md) | **Quality & Methods Council** | IDEA / Section 504 statutory compliance, WCAG 2.2 AA accessibility, and deep architectural methods. |
| [`Autonomous_Build_Reasoning_Guidelines_v23_2_Scheduler_Non_Overlap_Revision.md`](./Autonomous_Build_Reasoning_Guidelines_v23_2_Scheduler_Non_Overlap_Revision.md) | **Autonomous Build Guidelines (v23.2)** | The active autonomous build packet, using scheduler-enforced same-role non-overlap. |
| [`Independent_Forensic_Auditor_Reasoning_Guidelines_v4_3.md`](./Independent_Forensic_Auditor_Reasoning_Guidelines_v4_3.md) | **Auditor Guidelines (v4.3)** | The complete, verbatim forensic auditor guidelines. |
| [`Product_Quality_Assurance_and_Methods_Council_Reasoning_Guidelines_v4_2.md`](./Product_Quality_Assurance_and_Methods_Council_Reasoning_Guidelines_v4_2.md) | **Council Guidelines (v4.2)** | The complete, verbatim Quality & Methods Council guidelines. |
| [`External_Review_Role_Protocol.md`](./External_Review_Role_Protocol.md) | **Review Protocol** | Operational protocols for review roles and evidence capture. |

---

## Agent and model selection

Owner direction, 2026-09-04: Primary and Teams 1–5 must be operable by whichever agent/model the Owner selects for the task, usage limits, and complexity. Role identity, scope, independence, current memory, and tool/credential boundaries come from the role's orientation and files, not a vendor name or previous chat. Earlier named-model examples do not require a particular agent. Builder, Supervisor, Auditor, Council, and PM are available per lane; Primary also has Functional Smoke. Team 5 still needs an exact product assignment. Switching agents does not authorize simultaneous copies of the same role, broaden product scope, or weaken any governing rule.

## Mandatory cleanup of RAM and disk usage — all roles

Owner direction, 2026-09-04: every Builder, Supervisor, Independent Auditor, Functional Smoke Auditor, and Quality & Methods Council must clean up after itself. Cleanup is a required part of every round, including an interrupted or unsuccessful round when execution remains available. Deleting files frees disk storage; stopping owned processes releases RAM. Both are required.

1. **Track ownership before creating temporary output.** Put temporary screenshots, recordings, traces, logs, browser profiles, scratch files, and disposable environment copies inside an explicitly identified role-owned temporary or per-run root. Record the run ID, exact paths, and owned process/container identities. A similar name, old timestamp, large size, or duplicate-looking folder is not proof that something is disposable.
2. **Delete temporary captures once their purpose is complete.** After inspection and publication of the findings, delete redundant, failed, superseded, and otherwise unneeded screenshots, recordings, traces, and scratch output before ending the round. Keep only the minimum unique evidence needed for an unread report, unresolved finding, pending acceptance, or explicit Owner retention instruction. In the existing report/handoff, name each retained evidence path, its reason, and the event that permits deletion. Recheck those exceptions next round and delete the evidence as soon as the reason ends; report archives alone do not justify retaining every capture forever. Preserve source assets, approved mockups, reference documents, and deliverables.
3. **Remove disposable environment copies when finished.** After publishing results, stop the copy's owned processes and remove completed temporary clones, worktrees, extracted snapshots, duplicate runtime directories, and their private build/dependency caches. Preserve any unique or uncommitted work first and verify it is recoverable. A permanent lane sandbox, another role's isolated environment, or a reusable installed tool environment is not a disposable duplicate. Retain a temporary copy only for a named unfinished reproduction or active dependency; record why and when it can be removed, then recheck next round. Do not keep completed environments merely because they are among the newest five.
4. **Release owned RAM before exit.** Close run-created browser tabs/contexts and temporary browser instances, and stop run-created dev servers, watchers, test workers, helper processes, tunnels, and disposable containers that are no longer needed. Verify process ownership from the run manifest and current process identity, and use the role's normal lifecycle commands. Coordinate shared Builder/Supervisor resources so one role never stops another's active work. Do not kill processes by broad executable name or stop unrelated applications, shared services, persistent databases, or Docker Desktop.
5. **Protect the computer and durable data.** This cleanup authority never authorizes removing installed programs, AI toolchains, shared package/browser caches, permanent virtual environments, user profiles, personal files, backups, active source trees, unique credentials, login/session stores, secret seeds, or persistent database containers/volumes. Before deleting a disposable environment containing local configuration, verify that all needed configuration and credentials already exist in the correct protected role store and that the environment contains no unique data. Never print secrets in a cleanup record. Do not run computer-wide duplicate removal, broad recursive deletion, global Docker prune, or volume deletion as routine cleanup.
6. **Verify every deletion boundary and report the result.** Before recursive removal, resolve and inspect each exact absolute target, verify it is inside the recorded role-owned disposable root, check junction/symlink targets, inventory affected content, and confirm no live process or other role depends on it. Never delete a root drive, user profile, project parent, or shared tools directory. On Windows, use native PowerShell literal paths within one shell; never pass enumerated paths into another shell to delete them. Record removed paths, measured disk space reclaimed, processes stopped, and retained exceptions in the existing closeout report/handoff. Do not claim RAM was reclaimed without measurement. If interrupted before cleanup, the next invocation must reconcile its own recorded leftovers before creating more copies, without touching another active run.

This section governs artifact retention and resource cleanup throughout these eight packets. Evidence-capture requirements still apply, followed by the bounded retention above. It supersedes the previous instruction to retain the newest five completed review environments. It does not authorize a general computer cleanup.

## Role Interaction & Cadence Matrix

```
  :00 / :30                      :05 / :35                      Periodic Independent
┌─────────────────────────┐    ┌─────────────────────────┐    ┌─────────────────────────┐
│     FORWARD BUILDER     │───>│   BUILDER SUPERVISOR    │───>│   INDEPENDENT AUDITOR   │
│  (25m Build + 5m Proof) │    │ (Review, Scrutiny, Fix) │    │ & QUALITY METHODS COUNC.│
└─────────────────────────┘    └─────────────────────────┘    └─────────────────────────┘
         ▲                                  │                              │
         └──────── Scheduler-managed flow ────────┴───── Defect Feedback ────────┘
```

---
*Created and synced to Google Drive on 2026-08-21. Updated 2026-09-04 for mandatory role-owned RAM and disk cleanup.*
