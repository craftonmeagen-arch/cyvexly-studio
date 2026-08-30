# Cyvexly role environment

This directory contains project-scoped lifecycle helpers for the Owner-approved Builder, Supervisor, Auditor, and Council roles.

The role definitions are active and runnable by name. No recurring scheduler or automation was created.

## Helpers

- `scripts/Claim-BuilderLock.ps1` atomically creates the Builder lock.
- `scripts/Release-BuilderLock.ps1` validates and deletes that lock as the caller's final repository action.
- `scripts/Start-ReviewRound.ps1` atomically guards an Auditor or Council round and creates its isolated snapshot/runtime.
- `scripts/Register-RoleProcess.ps1` records a role-owned process with identity evidence.
- `scripts/Publish-RoleReport.ps1` collision-safely publishes an Auditor or Council report.
- `scripts/Complete-ReviewRound.ps1` stops only manifest-proven role processes and removes disposable reviewer resources.
- `scripts/Test-HotFileCaps.ps1` validates current operating-file size ceilings.

Read the matching root orientation document before using any helper. The orientation document and governing packet determine the required order.

