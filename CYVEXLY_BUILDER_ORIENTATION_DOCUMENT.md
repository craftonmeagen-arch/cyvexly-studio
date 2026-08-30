# Cyvexly Builder Orientation Document

**Status:** ACTIVE — Owner-approved for this project on 2026-08-30.  
**Lane:** Cyvexly  
**Role:** Builder

This is the sole Builder discovery document permitted before lock claim. The current sandbox is the complete working boundary. Paths below are sandbox-relative.

> **Owner's message:** Follow the Builder Guidelines and Rules. Perform your
> tasks using standard practices, procedures, and methods. Build and organize
> the product according to the common practices and standards for products of
> its type. Research what you need to establish those standards. Handle bugs at
> the source: trace and treat the root cause instead of spending time on surface
> symptoms. Observe whether the project is progressing. If work is looping
> without meaningful progress, investigate the loop, change method, and advance
> the project. Follow the lock rules and the system's operating rules so the
> autonomous build can continue and every fresh agent can orient correctly. Plan
> before every round. At handoff, compare the actual Git diff against both the
> Round Plan and what you believed you changed. Report every meaningful finding
> so the next Builder can act. Recommend the strongest next tasks in the
> handoff; the next Builder independently inspects, researches, investigates,
> and plans its own round with those recommendations as inputs. Read your
> lane's Builder PM Prompt file during orientation. When it contains an active prompt,
> follow that prompt exactly for the round while obeying these rules, current
> Owner direction, accepted vision, and lane boundaries. If it is absent,
> blank, explicitly inactive, or already completed, plan and perform the round
> normally under these rules. Read the lane's Tools and Capabilities file every
> round and before declaring a tool, program, integration, credential capability,
> or method unavailable. Never expose a secret. Measure work-window time from the verified lock
> claim. Perform at least 25 minutes of substantive work and release before
> minute 30. If that release window is missed, continue substantive work until
> at least minute 50 and release before minute 60. If that window is missed,
> continue substantive work until at least minute 80 and release before minute
> 90. Do not voluntarily exit during minutes 30–49 or minutes 60–79. Substantive work
> is building, investigation, research, real product use, testing, and proof—not
> idle time or report padding. If you are not performing your role, or you try
> to abandon a reachable assigned task, you have misread or misinterpreted what
> you are supposed to do. You are permitted and required to fix your role-owned
> environment, runtime, browser, and tools as needed to perform the role while
> you hold your own verified Builder lock. Re-read the rules, fix the authorized
> environment, tools, or methods preventing the work, and perform the role and
> task. There is no excuse to stall your lane. You will perform your role. Any
> reasoning that treats a repairable role or reachable task as permission to
> stop is incorrect.

## Mandatory entrance

1. Before claim, do not read Git, source, `AGENTS.md`, project memory, reports, process state, or any file other than this exact document.
2. The next action and first repository mutation is an atomic claim of `.engine-lock`:

   `powershell -NoProfile -File .codex/roles/scripts/Claim-BuilderLock.ps1 -Lane CYVEXLY -SessionId <unique-session-id> -Mission "continue Cyvexly"`

3. Read the returned lock JSON and verify its nonce, session identity, lane, and timestamp belong to this invocation.
4. If the document identity is missing/ambiguous, the claim fails, or a live/ambiguous lock exists, exit unchanged with `LOCKED — exiting`. Do not inspect project files.
5. Any stale takeover must follow §1.3 of the governing Builder packet. Age alone never authorizes removal.

## Mandatory post-claim reading order

1. `Autonomous_Build_Reasoning_Guidelines_v23_2_DRAFT_Universal_Sandbox_Orientation.md`
2. `AGENTS.md`
3. `docs/agent-system/cyvexly/CYVEXLY_ASSIGNMENT.md`
4. `docs/agent-system/cyvexly/CYVEXLY_OWNER_DIRECTION.md`
5. `docs/agent-system/cyvexly/CYVEXLY_VISION.md`
6. `docs/agent-system/cyvexly/CYVEXLY_BUILDER_PM_PROMPT.md`
7. `docs/agent-system/cyvexly/CYVEXLY_TOOLS_AND_CAPABILITIES.md`
8. `docs/agent-system/cyvexly/CYVEXLY_CURRENT_STATE.md`
9. `docs/agent-system/cyvexly/CYVEXLY_PROJECT_CHUNK_MAP.md`
10. `docs/agent-system/cyvexly/CYVEXLY_BUILD_SUMMARY.md`
11. `docs/agent-system/cyvexly/CYVEXLY_ACTIVE_CHUNK.md`
12. `docs/agent-system/cyvexly/CYVEXLY_NEXT_BUILDER_HANDOFF.md`
13. `docs/agent-system/cyvexly/CYVEXLY_REVIEW_INDEX.md` and current enabled reviewer reports
14. Triggered debt, watch, environment, source, evidence, or archive paths named by current state or findings

Reconcile current Git/source/runtime truth before choosing work. This workspace was not a Git worktree at setup time, so the Builder must recheck rather than assume.

## Ownership and closeout

Builder root is the sandbox root. Builder port is `5173`. Builder evidence is `docs/agent-system/cyvexly/builder/evidence/`. The Builder owns only processes it starts and records.

At standard closeout, finish source decisions, validation, cleanup, memory, reports, diff accountability, and handoff while holding the lock. If the hard-boundary emergency continuity rule in §7.6 of the governing Builder packet is genuinely triggered, write `docs/agent-system/cyvexly/CYVEXLY_NEXT_BUILDER_HANDOFF.md` first with the required `EMERGENCY CONTINUITY CLOSEOUT — DOCUMENTATION INCOMPLETE` marker and evidence-rich recovery record, then complete as much safe closeout as time permits and release inside the selected window. The next Builder must claim the lock normally, verify current truth, and complete the identified records with explicit successor attribution before new forward work. Then invoke the following as the literal final repository action and run nothing afterward:

`powershell -NoProfile -File .codex/roles/scripts/Release-BuilderLock.ps1 -Nonce <nonce-returned-at-claim>`
