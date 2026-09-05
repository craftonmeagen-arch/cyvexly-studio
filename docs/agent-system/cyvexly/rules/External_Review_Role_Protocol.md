# External Review Role Protocol — EduAILenz

## Purpose and source authority

This protocol prepares three independent Owner-authorized review roles for
EduAILenz:

- **Product Quality, Assurance & Methods Council** — is this the right product,
  at the right quality, built by a coherent professional method?
- **Independent Forensic Auditor** — is what the Builder claimed about the round
  it just did actually true?
- **Roaming Functional Smoke Auditor** — does the app actually work when a real
  teacher uses it, anywhere in the product, regardless of what changed?

Their governing reasoning packets sit beside this file:

| Role | Packet |
| --- | --- |
| Council | `Product_Quality_Assurance_and_Methods_Council_Reasoning_Guidelines_v4_2.md` |
| Auditor | `Independent_Forensic_Auditor_Reasoning_Guidelines_v4_3.md` |
| Functional Smoke | `EDUAILENZ_FUNCTIONAL_SMOKE_AUDITOR_PROMPT.md` (role definition) plus the Auditor packet's evidence floors |

Those packets expand professional judgment. This protocol only establishes the
local roots, the non-interference boundary, the report handoff, and the Builder
intake.

Current Owner direction, current source truth, current runtime evidence, and the
current role packets outrank stale reports. Reviewers advise; the Owner keeps
product authority and the Builder keeps implementation judgment.

## Fixed roots and hard fence

- **Review target (Builder root):** `C:\app projects\Eduailenze`
- **Shared review root — reports, snapshots, runtimes, evidence, exchange:**
  `C:\app projects\Eduailenze-independent-review`
- **Protected/parked trees — never read, run, or write:**
  `C:\projects\Eduailenz original`, `C:\projects\Eduailenz-bloomed`,
  `C:\projects\Eduailenz-bloomed-integration`, and every `catalogue-*` file at
  the Builder root (a separate, Owner-parked standards-catalogue project).

Under the shared review root:

| Path | Owner | Contents |
| --- | --- | --- |
| `reports\` | shared | `*_CURRENT.md` and append-only `*_ARCHIVE.md` per role |
| `snapshots\<snapshotId>\` | per run | immutable source snapshot — never built in, never written to |
| `runtime\<snapshotId>\` | per run | disposable runtime copy; builds, caches, instrumentation |
| `evidence\<snapshotId>\` | per run | minimum evidence retained only while its recorded purpose remains |
| `browser\<snapshotId>\` | per run | reviewer browser profile |
| `logs\<snapshotId>\` | per run | runtime logs |
| `metadata\` | shared | `CURRENT_REVIEW_TARGET.<role>.json` and per-snapshot metadata |
| `exchange\operational-inbox\` | shared | collision-safe Builder handoff (see `REVIEWER_OPERATIONAL_INTAKE.md`) |

Review evidence, reports, screenshots, recordings, secrets, and transient output
never go in the Builder tree.

## Role runtime matrix — three reviewers, zero collisions

Every reviewer role owns its **own** ports, database, Clerk identity, report
pair, and current-target pointer. This matrix is enforced by
`scripts/provision-independent-auditor-review.ps1 -Role <role>`.

| Role | `-Role` | Web | API | DB host port | DB container | Clerk identity | Finding prefix | Reports |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Builder | *(n/a)* | 5173 | 8787 | 5433 | `eduailenze-db-1` | `TEST_AUTH_EMAIL` in Builder `.env.local` | — | — |
| Independent Forensic Auditor | `auditor` | 15173 | 18787 | 15433 | `eduailenz-reviewer-db-1` | `auditor1` | `IFA` | `AUDITOR_CURRENT.md` / `AUDITOR_ARCHIVE.md` |
| Quality & Methods Council | `council` | 15273 | 18887 | 15533 | `eduailenz-council-db-1` | `council1` | `QM` | `QUALITY_METHODS_CURRENT.md` / `QUALITY_METHODS_ARCHIVE.md` |
| Roaming Functional Smoke Auditor | `functional` | 15373 | 18987 | 15633 | `eduailenz-functional-db-1` | `auditor2` | `FS` | `FUNCTIONAL_AUDIT_CURRENT.md` / `FUNCTIONAL_AUDIT_ARCHIVE.md` |

### A finding number is claimed once, ever — never reused

**A finding id is allocated from the highest number the prefix has *ever*
carried, across the archive and the current report together — not from the
newest report, and never restarted.** Before writing a report, read the archive
for the highest existing id under your prefix and start above it.

**This has now failed twice, and the second failure cost a `Priority Now`.**
`AUD-123` recorded an `AUD-111` collision. Then `AUD-2026-08-19-R53` opened its
findings at **`AUD-126`** while `AUD-126`, `-127`, `-129` and `-130` were already
in use by `R51`/`R52` for entirely different defects — four ids carrying two
meanings each. Team 2 BLM-X Round 76 had recorded *"`AUD-127` closed, `AUD-130`
closed"* about `R52`'s findings; both sentences read as false-but-plausible
closures of `R53`'s, and `R53`'s `AUD-126` — a silent write of a child's rows
onto a different child's record — was one careless read away from being skipped
as already-dispositioned.

The cost is asymmetric and that is why this is a rule rather than a preference.
A gap in the numbering costs nothing: nobody has ever needed the ids to be
contiguous. A **reused** number makes every prior disposition of that id
ambiguous forever, and the ambiguity is silent — a Builder reading its own
handoff has no way to notice that the id it closed last round is not the id in
front of it now. Renumber a collision in the report that created it; do not
resolve it by adding qualifiers in prose.

The Council's authorized Owner-facing channel is
`C:\app projects\Eduailenze-independent-review\reports\QUALITY_METHODS_OWNER_CHANNEL.md`.
It is Council-owned and append-only: every Council spawn appends its complete,
itemized v4.2 §2.14/§2.15 reasoning there, separately from the current
Builder-facing brief. The Builder does not read it for intake, and content there
creates no Builder task or source-truth claim unless the Council also routes an
actionable finding through its current brief and the ordinary intake protocol.

**Why this matrix exists.** Before 2026-08-12 the provisioner hardcoded a single
`15173/18787` pair and a single `CURRENT_REVIEW_TARGET.json`. Two near-simultaneous
firings self-provisioned independently and then fought over the same ports and
the same pointer, and a role that looked orphaned was sometimes a live concurrent
session. Council and Functional Smoke could not run at all. **Name an identity in
a report; never a credential.**

**Use `http://localhost:<port>`, not `127.0.0.1:<port>`, for every authenticated
browser or test URL.** Clerk authorized-party matching treats those two origins
as distinct, so the `127.0.0.1` spelling can produce a false authentication
failure that has nothing to do with the credential.

## Independence and non-interference

Reviewers are read-only with respect to the Builder tree. They must not edit
product source, tests, the governing packets, `AGENTS.md`, durable memory, the
Owner build log, watch documents, Git state, Builder environment/configuration,
or the Builder toolchain. They must not create or alter scheduled tasks, push,
deploy, publish, or modify external infrastructure.

Scheduler-managed non-overlap determines when each scheduled role runs. Role
boundaries—not a repository marker—protect the Builder's mutable working tree.
Reviewers never attach to, control, or read the Builder runtime, browser profile,
auth state, test output, or database. Limited read-only process and port
inspection is allowed solely to prove isolation.

### Independent source acquisition — the Auditor retrieves her own target

At the beginning of every audit the Auditor independently resolves the accepted
Git source and personally runs:

```powershell
powershell -File .\scripts\provision-independent-auditor-review.ps1 `
  -ReviewRoot 'C:\app projects\Eduailenze-independent-review' `
  -Role auditor -RunId <unique-run-id>
```

A Builder-created snapshot, or a pre-existing `CURRENT_REVIEW_TARGET.*.json`
from an earlier run, is **not** independent acquisition. Council and Functional
Smoke provision the same way with `-Role council` / `-Role functional`.

Then prepare the runtime and apply the current journaled migration set:

```powershell
powershell -File .\scripts\prepare-independent-auditor-runtime.ps1 `
  -ReviewRoot 'C:\app projects\Eduailenze-independent-review' -Role auditor `
  -ApplyDatabaseMigrations -ResetBloomedDemo
```

Substitute `-Role council` / `-Role functional` for the Council and Functional Smoke roles — `-Role` must match
the same value passed to the provisioner above, or the prepare step now fails loudly instead of silently
resolving a different role's target (`IFA-2026-08-12-R113`).

**Invoke these from the native PowerShell tool, not from a PowerShell launched
out of Git Bash** — MSYS `tar` shadows `System32\tar.exe` there and the snapshot
extraction fails in a way that reads like a corrupt archive.

Preparation now creates an idempotent empty marker Git commit automatically when
the disposable runtime has no `HEAD`. Do not stage or commit runtime source by
hand. After the review, stop only through the selected role's owned manifest:

```powershell
powershell -File .\scripts\stop-independent-auditor-runtime.ps1 `
  -ReviewRoot 'C:\app projects\Eduailenze-independent-review' -Role auditor
```

Substitute the same role used for provision/prepare. Never stop by PID, process
name, or port. The stop command refuses an occupied assigned port when no owned
manifest authorizes control.

**Write and publish the report before you stop the runtime.** The deliverable is
the report, not the evidence, and the two are not interchangeable: raw JSON in an
evidence folder is not something the Builder reads or dispositions. `FS3-5`
records this costing the project a whole pass — Functional Smoke `R2` provisioned,
prepared, ran six instrumented phases against BloomED import, wrote 44 evidence
artifacts, stopped its runtime cleanly, and then wrote **no report at all**. Its
findings existed only as raw JSON, and the next provisioning overwrote the stable
current report with a fresh placeholder, so from the published record the role
still looked as though it had never fired.

The ordering that survives an early ending is therefore: **observe → write the
candidate under `logRoot` → publish → then stop the runtime → then clean up.** If
a pass has to end early, end it *after* publishing whatever it has, with its gaps
named under "Not checked" — a short honest report beats a complete one that was
never written. Nothing in the stop or cleanup step is needed to produce the
report, so nothing about it belongs before publication.

### Reviewer environment and credentials

Each role's runtime carries its **own** `.env.local` and `.env.test-auth`. Never
copy the Builder's. `prepare-independent-auditor-runtime.ps1` materializes the
non-secret half from the tracked `.env.example` plus the role port matrix, then
calls `scripts\Initialize-ReviewerRuntimeAuth.ps1` (Builder repo) /
`Merge-ReviewerRuntimeOwnerAuth` to merge Owner-placed Clerk and test-auth keys
from `%USERPROFILE%\.grok\eduailenz-reviewer-secrets\<role>.env` (override with
`EDUAILENZ_REVIEWER_AUTH_SEED_DIR`). That seed is workstation-local and ignored;
it is never the Builder `.env.local`. Extra seed keys, including `DATABASE_URL`,
are ignored. The merge prints no values. If the seed file is absent, Clerk keys
stay empty and `dev.ps1` still fail-closes until the Owner places test-mode keys
(`IFA-2026-08-16-R1-01`). Do not invent credentials and do not copy a prior
runtime's env as a substitute for that Owner seed.

**Never seed reviewer data with `FROM teacher LIMIT 1`.** A stale teacher row
survives every scoped reset and silently attributes fresh evidence to a dead
identity.

## Concurrency, retention, and report integrity

- **A role must not run concurrently with another copy of itself.** The
  scheduler enforces this boundary and does not dispatch a new copy while that
  scheduled role is active. Do not manually launch a duplicate. If scheduler
  state and process identity disagree, diagnose the role-owned invocation,
  preserve its completed or dirty work, repair the scheduler state or owned
  environment, and resume through the normal schedule. Do not wait on or infer
  ownership from a repository file.
- **An unread report is never overwritten.** Record the stable current review
  ID before the pass, write the complete candidate under the current target's
  `logRoot`, and publish only through
  `scripts\publish-independent-review-report.ps1` from that accepted snapshot.
  The publisher owns the expected-ID comparison, strict-UTF-8 archive-first
  append and forced flush, complete-content verification, retry deduplication,
  and same-directory atomic replacement.
  Never write a stable `*_CURRENT.md` or `*_ARCHIVE.md` directly.
- **A publisher refusal is protective evidence, not permission to improvise.**
  Preserve the candidate under `logRoot` and report the exact refusal. A stale
  expected ID means a same-role peer landed first.
- **A role's first publication has no prior ID to record.** When the stable
  current report is still the provisioner's "No review has been performed yet."
  placeholder — or absent — publish with
  `-ExpectedCurrentReviewId FIRST-PUBLICATION`. That sentinel *is* the explicit
  initialization decision: the publisher archives nothing, because there is no
  prior report, and still performs the verified atomic replacement. It refuses
  the sentinel once a real report exists, so the same-role peer guard holds in
  both directions. Never write a stable report directly instead.
- **Mandatory cleanup after every review:** follow "Mandatory cleanup of RAM
  and disk usage — all roles" in `00_AI_Autonomous_Building_Rules_Overview.md`.
  Publish first, stop owned processes through the role lifecycle commands, then
  remove completed disposable `runtime\<snapshotId>\` and `snapshots\<snapshotId>\`
  copies and unneeded per-run browser profiles, logs, screenshots, recordings,
  and traces. Verify exact ownership, configuration preservation, unique-work
  recovery, and deletion boundaries before removal. Never delete a directory
  used by a live process, another role, or an active reproduction. Keep only
  the minimum evidence or temporary reproduction copy with a named continuing
  need and deletion condition in the report; recheck it next round and delete
  it when that need ends. Preserve current/archived reports, permanent role
  sandboxes, protected secret stores, installed tools, and persistent databases.
  Record removed paths, measured disk space reclaimed, processes stopped, and
  retained exceptions. The old newest-five environment retention is replaced
  by removal when finished; it is not a reason to accumulate completed copies.
- **A quiet role is not necessarily a stopped role.** A runtime start that never
  reaches health can tear down its own manifest, leaving a prepared snapshot with
  no manifest, no log, and no report — indistinguishable from "never fired."
  When a role goes quiet, check `snapshots\` and `runtime\` before assuming its
  schedule is off.

## Browser and observation capability

All three roles have live browser control against **their own** runtime's
loopback URL, and can perceive images. Do not inherit a prior report's capability
limitation without re-testing it in the current firing.

- **Interaction and pixel-capture are different capabilities.** A screenshot
  action can fail to composite a frame in the same firing where navigation, DOM
  and accessibility-tree reads, and real dispatched clicks all succeed. The
  absence of a pixel screenshot is **never** grounds to skip live interactive
  play.
- **A measured value is not a visual judgment.** `getBoundingClientRect` cannot
  tell you a control does nothing when clicked, and computed heights and colors
  do not establish that a surface reads well.
- **Do not trust one screenshot renderer.** In-app browser captures have
  previously come back malformed or cropped at forced viewport sizes while DOM
  geometry was normal, and independent headless Playwright captures of the same
  runtime rendered correctly. If a capture looks wrong, re-capture by another
  route before calling it a product defect.
- **Retain what you relied on.** A report that physically observed nothing cannot
  support a visual or functional finding. Save stills and snapshots under the
  run's `evidence\` root and cite them.
- **A capture tool must be able to target `metadata.evidenceRoot`.** If an MCP or
  browser screenshot action can only write to its default working directory, do
  not use it. Invoke Playwright from the reviewer runtime with an explicit path
  under that run's evidence root. A capture appearing in the Builder root is a
  role-boundary failure, not evidence to leave for the Builder to clean up.

### Anything about a scannable QR or a second device must go through the tunnel

Whoodle and Whoo Knows Live build their join link and QR from
`window.location.origin`. Opened at `localhost`, the QR literally encodes
`http://localhost:5173/play/<CODE>`, which a phone resolves to itself. **Any QR
or second-device claim made from a `localhost` session is invalid.** Use the
Owner's stable named tunnel (`https://eduailenz.swiftshop.app`, started with
`scripts\start-remote-tunnel.ps1`) or do not make the claim. Only one process may
hold that named tunnel at a time; a reviewer holding it pointed at an old
snapshot is the known cause of the URL serving stale UI.

## Standing Owner questions — every role, every firing

These apply **in addition to** every existing rule and replace nothing. Every
role answers them about its own firing: the Builder about its round, reviewers
about the build they review. Read the purpose, not the list — answering these as
boxes to tick is the failure mode this direction is most likely to produce.

- What is the team missing or overlooking right now? (The question about
  **absence** — every instrument here is structurally worst at that.)
- Is each role following the rules of its role? Are we building efficiently?
- Are we using **standard methods** others would use for this same build? Answer
  from primary sources, not inference.
- Have bugs or digressing findings increased? If so, **the cause is presumed to
  be our methods.** Examine and clear method before blaming circumstance.
- Is there anything worth researching against outside practice?
- **Has something gone multiple rounds without being done? Flag it AND make sure
  it gets done**, in addition to the round's intended work. Recording it again
  does not discharge this.
- Are there consistent small baby steps? That means **direction is unclear**, and
  the remedy is to physically visualize the build **in motion** — flows,
  transitions, timing, interaction — not stills.

Anything these surface is investigated and flagged under the ordinary rules of
the role's own packet. This creates **no new report format**.

## Findings and Builder handoff

Classify findings as `Priority Now`, `Next`, `Later/Opportunity`, `Owner
Decision`, `Observation/Question`, or `No Finding`. Classification describes risk
and evidence, not a forced Builder task order. Every important finding states the
observed evidence, confidence, affected scope, consequence of continuing,
unknowns, and the strongest useful next investigation or product question.

**The Functional Smoke Auditor additionally classifies every finding by kind:**
*product defect* (with `file:line`), *environment condition* (a dependency not
running or seeded — no code change warranted), or *intended behavior*. Getting
this wrong is expensive in both directions: an environment condition reported as
a product defect sends the Builder to rewrite working code, and a real defect
dismissed as an environment condition never gets fixed.

If a tool, credential, permission, runtime, environment, dependency, browser
profile, capture path, test instrument, publication mechanism, or other
capability issue prevents any reviewer from performing required role work, the
reviewer creates an explicit **builder-facing capability finding**. Recording
`UNCONFIRMED`, blocked runtime proof, review debt, an instrument limit, or "not
inspected" is not a sufficient handoff. The finding must give the Builder the
exact failure evidence, the blocked work and claim, methods attempted, the
required repair or provisioning outcome, an observable closure test, and any
authority dependency the Builder must escalate to the Owner. It is `Priority Now`
when it blocks required integrated, physical-observation, safety, accessibility,
or readiness proof, or risks adopting unconfirmed behavior as product truth. The
finding stays open until the originating reviewer can retry and complete the
blocked work. Reviewer read-only and isolation boundaries are unchanged.

The Builder reads current reports through
`docs/automation/EDUAILENZ_EXTERNAL_REVIEW_INTAKE.md`, checks whether the report's
target is still current, and records an honest disposition. A `Priority Now`
finding that applies to the area about to be changed or adopted must be
dispositioned before building on that area. This prevents silent deferral; it
does not convert advisory review into a checklist, a micro-slice mandate, or an
automated veto.

Narrow operational routing — proposed edits to `NEXT_BUILDER_ROUND.md`,
`CHUNK_PROJECT_DEBT.md`, or `APP_PROJECT_DEBT.md` — is published through the
collision-safe external inbox described in `REVIEWER_OPERATIONAL_INTAKE.md`. Only
the active scheduled Builder invocation verifies and merges those proposals.

## Reasoning standard

A review is worth its cost when it changes what the team does next. Prefer a
small number of fully-traced findings over a long list of symptoms. A named dead
end is useful; a plausible-sounding wrong cause is worse than none. A clean
result from a genuine probe is a real, reportable finding — not grounds to skip
the probe next time it is due.

Stop after one pass.
