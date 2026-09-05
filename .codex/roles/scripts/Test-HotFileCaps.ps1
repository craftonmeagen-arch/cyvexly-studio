[CmdletBinding()]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$workspace = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..\..'))
$laneRoot = Join-Path $workspace 'docs\agent-system\cyvexly'

$caps = [ordered]@{
    'CYVEXLY_BUILDER_ORIENTATION_DOCUMENT.md' = 8192
    'CYVEXLY_AUDITOR_ORIENTATION_DOCUMENT.md' = 8192
    'CYVEXLY_COUNCIL_ORIENTATION_DOCUMENT.md' = 8192
    'CYVEXLY_SUPERVISOR_ORIENTATION_DOCUMENT.md' = 8192
    'CYVEXLY_PM_ORIENTATION_DOCUMENT.md' = 8192
    'CYVEXLY_FUNCTIONAL_SMOKE_AUDITOR_ORIENTATION_DOCUMENT.md' = 8192
    'docs/agent-system/cyvexly/CYVEXLY_TEAM_START_HERE.md' = 8192
    'docs/agent-system/cyvexly/CYVEXLY_ROLE_RULES_MAPPING.md' = 12288
    'docs/agent-system/cyvexly/CYVEXLY_PM_CURRENT_STATE.md' = 8192
    'docs/agent-system/cyvexly/CYVEXLY_NEXT_PM_HANDOFF.md' = 12288
    'docs/agent-system/cyvexly/CYVEXLY_FUNCTIONAL_PM_PROMPT.md' = 8192
    'AGENTS.md' = 24576
    'docs/agent-system/cyvexly/CYVEXLY_ASSIGNMENT.md' = 12288
    'docs/agent-system/cyvexly/CYVEXLY_OWNER_DIRECTION.md' = 24576
    'docs/agent-system/cyvexly/CYVEXLY_VISION.md' = 24576
    'docs/agent-system/cyvexly/CYVEXLY_BUILDER_PM_PROMPT.md' = 8192
    'docs/agent-system/cyvexly/CYVEXLY_AUDITOR_PM_PROMPT.md' = 8192
    'docs/agent-system/cyvexly/CYVEXLY_COUNCIL_PM_PROMPT.md' = 8192
    'docs/agent-system/cyvexly/CYVEXLY_TOOLS_AND_CAPABILITIES.md' = 24576
    'docs/agent-system/cyvexly/CYVEXLY_CURRENT_STATE.md' = 8192
    'docs/agent-system/cyvexly/CYVEXLY_PROJECT_CHUNK_MAP.md' = 20480
    'docs/agent-system/cyvexly/CYVEXLY_BUILD_SUMMARY.md' = 24576
    'docs/agent-system/cyvexly/CYVEXLY_ACTIVE_CHUNK.md' = 30720
    'docs/agent-system/cyvexly/CYVEXLY_NEXT_BUILDER_HANDOFF.md' = 12288
    'docs/agent-system/cyvexly/CYVEXLY_CHUNK_DEBT.md' = 30720
    'docs/agent-system/cyvexly/CYVEXLY_APP_DEBT.md' = 30720
    'docs/agent-system/cyvexly/CYVEXLY_WATCH.md' = 20480
    'docs/agent-system/cyvexly/CYVEXLY_ENVIRONMENT.md' = 16384
    'docs/agent-system/cyvexly/CYVEXLY_REVIEW_INDEX.md' = 8192
    'docs/agent-system/cyvexly/CYVEXLY_AUDITOR_CURRENT_STATE.md' = 8192
    'docs/agent-system/cyvexly/CYVEXLY_AUDIT_COVERAGE_MAP.md' = 20480
    'docs/agent-system/cyvexly/CYVEXLY_AUDITOR_SUMMARY.md' = 20480
    'docs/agent-system/cyvexly/CYVEXLY_AUDITOR_ACTIVE_ROUNDS.md' = 30720
    'docs/agent-system/cyvexly/CYVEXLY_NEXT_AUDITOR_HANDOFF.md' = 12288
    'docs/agent-system/cyvexly/CYVEXLY_AUDITOR_DEBT.md' = 24576
    'docs/agent-system/cyvexly/CYVEXLY_AUDITOR_WATCH.md' = 20480
    'docs/agent-system/cyvexly/CYVEXLY_AUDITOR_ENVIRONMENT.md' = 16384
    'docs/agent-system/cyvexly/CYVEXLY_COUNCIL_CURRENT_STATE.md' = 8192
    'docs/agent-system/cyvexly/CYVEXLY_COUNCIL_COVERAGE_MAP.md' = 20480
    'docs/agent-system/cyvexly/CYVEXLY_COUNCIL_SUMMARY.md' = 20480
    'docs/agent-system/cyvexly/CYVEXLY_COUNCIL_ACTIVE_ROUNDS.md' = 30720
    'docs/agent-system/cyvexly/CYVEXLY_NEXT_COUNCIL_HANDOFF.md' = 12288
    'docs/agent-system/cyvexly/CYVEXLY_COUNCIL_DEBT.md' = 24576
    'docs/agent-system/cyvexly/CYVEXLY_COUNCIL_WATCH.md' = 20480
    'docs/agent-system/cyvexly/CYVEXLY_COUNCIL_ENVIRONMENT.md' = 16384
    'docs/agent-system/cyvexly/reports/AUDITOR_CURRENT.md' = 20480
    'docs/agent-system/cyvexly/reports/QUALITY_METHODS_CURRENT.md' = 20480
}

$violations = @()
$results = foreach ($entry in $caps.GetEnumerator()) {
    $path = Join-Path $workspace $entry.Key
    if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
        $violations += "MISSING: $($entry.Key)"
        [pscustomobject]@{ Path = $entry.Key; Bytes = $null; Cap = $entry.Value; Status = 'MISSING' }
        continue
    }
    $bytes = (Get-Item -LiteralPath $path).Length
    $status = if ($bytes -le $entry.Value) { 'OK' } else { 'OVER CAP' }
    if ($status -ne 'OK') {
        $violations += "OVER CAP: $($entry.Key) ($bytes > $($entry.Value))"
    }
    [pscustomobject]@{ Path = $entry.Key; Bytes = $bytes; Cap = $entry.Value; Status = $status }
}

$results | Format-Table -AutoSize
if ($violations.Count -gt 0) {
    $violations | ForEach-Object { Write-Error $_ }
    exit 1
}
