# Cyvexly role setup validation
**Validated:** 2026-09-05. **Scope:** Owner-authorized rule and environment migration.
This is setup validation, not a Builder round, independent product review, deployment,
or final launch approval. No scheduler was created or changed by this migration.

## Active rule source
All eight supplied Markdown files matched refreshed content from the Google Drive
NEW AI BUILD RULES folder after BOM/line-ending normalization. The installed copies
are byte-identical to the supplied downloads. File IDs, timestamps, sizes and SHA-256
checksums are in rules/SYNC_MANIFEST.json. Git attributes preserve those bytes.

The four superseded root packets and two obsolete Builder claim/release helpers
were removed from the working tree. No old packet was copied into an archive.
Historical product records remain evidence; root orientations and the current mapping
explicitly retire their old launch, timing and coordination procedures.

## Six role entrances
Builder, Supervisor, Auditor, Council, PM and Functional Smoke each have a root
orientation and project-scoped agent TOML. Seven TOML files (six agents plus project
config) parsed successfully. Models/reasoning are not pinned. All six roles can be
invoked directly by the Owner's natural-language prompt in this project.

Supervisor targets recent Builder work, coordinates shared-file fixes and never leads
features. Council uses its binding cold product read before the Builder narrative.
PM has explicit bounded coordination authority; its overview supplies no separate PM
packet. Functional Smoke has a Cyvexly-specific role definition derived from the shared
review protocol and the Auditor evidence floors.

Independent review output is external at C:/app projects/website-independent-review.
Existing records and active runs were preserved. The external Auditor entry redirects
to the single project orientation rather than keeping a divergent copy.

## Verification
- Test-RoleSetup.ps1 passes: 8 packet hashes/sizes, 6 orientations/configurations,
  6 retired files absent, 8 PowerShell helpers parse, current operating-file caps pass.
- Test-ReviewLifecycle.ps1 passes 48 isolated fixture checks for all three reviewers:
  exact committed-source capture, dirty Builder/source and environment exclusion,
  immutable snapshot/writable runtime, traversal refusal, publication-before-cleanup,
  unique-work preservation, mismatched PID protection, owned-process stop,
  external junction refusal, safe internal package-junction cleanup, and stale report
  refusal with candidate/unread findings preserved.
- Synthetic test roots and their owned processes were removed. Tests never published
  fixture results as actual Cyvexly product reviews.
- Six oversized operating documents were compacted without losing evidence; their
  complete former contents are under docs/archive/role-migration-2026-09-05/.
- Product source/assets were not changed. No public visual, real email delivery, DNS,
  payment, indexing, or complete Chunk 5 validation is claimed by this setup work.

Commands:
- pwsh -NoProfile -File .codex/roles/scripts/Test-RoleSetup.ps1
- pwsh -NoProfile -File .codex/roles/tests/Test-ReviewLifecycle.ps1

## Concurrent-work boundary
A separate environment repair added scripts/start-cyvexly-auditor-round.ps1 and an
Auditor environment recovery record during this task. Those changes were preserved.
An independently started Auditor run was observed under the external runs directory;
this migration did not stop or clean it. Its actual status and any scheduler claims
belong to that invocation, not this setup validation.

Start instructions are in CYVEXLY_TEAM_START_HERE.md. Newly created tasks load the
updated agent definitions; an already-running task must reread its current orientation.

Configuration fields were checked against official OpenAI documentation:
https://learn.chatgpt.com/docs/agent-configuration/subagents and
https://learn.chatgpt.com/docs/config-file/config-reference.
