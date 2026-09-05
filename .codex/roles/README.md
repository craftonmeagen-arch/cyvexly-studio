# Cyvexly role environment
Start with docs/agent-system/cyvexly/CYVEXLY_TEAM_START_HERE.md.
Six project agent definitions and root orientations use one current imported rule set.
Role prompts inherit the Owner-selected model. This environment does not create schedules.

PowerShell 7 helpers:
- Initialize-ReviewEnvironment.ps1: create missing external directories/seed memory; preserve existing records.
- Start-ReviewRound.ps1: archive committed product source into an external snapshot/runtime.
- Register-RoleProcess.ps1: record run-created PID and start-time identity.
- Publish-RoleReport.ps1: verify source/review identity, preserve prior reports and unread inbox items.
- Complete-ReviewRound.ps1: validate publication, paths, unique work, junctions and processes before cleanup.
- Test-HotFileCaps.ps1: check the bounded Cyvexly operating files.
- Test-RoleSetup.ps1: check rules, orientations, agent definitions, helpers and retired-file removal.
- tests/Test-ReviewLifecycle.ps1 (relative to this directory): isolated fixture tests; never starts a product role.

Run manifests are resource inventories, never role locks. Named report transaction mutexes
only protect atomic publication; they do not schedule, start, or stop a role.
