# Cyvexly Independent Forensic Auditor Lifecycle Runner
# Usage:
#   powershell -File .\scripts\start-cyvexly-auditor-round.ps1 -Action Check
#   powershell -File .\scripts\start-cyvexly-auditor-round.ps1 -Action Start -RoundId <unique-id> [-SourceRef <commit>]
#   powershell -File .\scripts\start-cyvexly-auditor-round.ps1 -Action Stop -RoundId <unique-id>
#   powershell -File .\scripts\start-cyvexly-auditor-round.ps1 -Action Publish -RoundId <unique-id> -ReviewId <rev-id> -ReportPath <path>

[CmdletBinding()]
param(
    [ValidateSet('Check', 'Start', 'Stop', 'Publish')][string]$Action = 'Check',
    [string]$RoundId,
    [string]$SourceRef = 'HEAD',
    [string]$ReviewId,
    [string]$ReportPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$scriptsRoot = Join-Path $projectRoot '.codex\roles\scripts'
$reviewRoot = 'C:\app projects\website-independent-review'

switch ($Action) {
    'Check' {
        Write-Host "=== Cyvexly Auditor Environment Preflight Check ==="
        $nodeVer = & node -v 2>$null
        $pnpmVer = & pnpm -v 2>$null
        $pwshVer = & pwsh -v 2>$null
        $gitVer = & git --version 2>$null

        $portInUse = $false
        try {
            $conns = Get-NetTCPConnection -LocalPort 5273 -ErrorAction SilentlyContinue
            if ($null -ne $conns) { $portInUse = $true }
        } catch { }

        [pscustomobject]@{
            role = "cyvexly/auditor"
            ready = ($null -ne $nodeVer -and $null -ne $pnpmVer)
            workspace = $projectRoot
            reviewRoot = $reviewRoot
            orientation = "CYVEXLY_AUDITOR_ORIENTATION_DOCUMENT.md"
            port = 5273
            portAvailable = (-not $portInUse)
            nodeVersion = $nodeVer
            pnpmVersion = $pnpmVer
            pwshVersion = $pwshVer
            gitVersion = $gitVer
        } | ConvertTo-Json -Depth 4
    }
    'Start' {
        if (-not $RoundId) { throw "RoundId parameter is required for Start." }
        Write-Host "[Cyvexly Auditor] Starting review round: $RoundId (SourceRef: $SourceRef)"
        & pwsh -File (Join-Path $scriptsRoot 'Start-ReviewRound.ps1') -Role auditor -RoundId $RoundId -SourceRef $SourceRef
    }
    'Stop' {
        if (-not $RoundId) { throw "RoundId parameter is required for Stop." }
        Write-Host "[Cyvexly Auditor] Completing review round: $RoundId"
        & pwsh -File (Join-Path $scriptsRoot 'Complete-ReviewRound.ps1') -Role auditor -RoundId $RoundId
    }
    'Publish' {
        if (-not $RoundId) { throw "RoundId parameter is required for Publish." }
        if (-not $ReviewId) { throw "ReviewId parameter is required for Publish." }
        if (-not $ReportPath) { throw "ReportPath parameter is required for Publish." }
        Write-Host "[Cyvexly Auditor] Publishing report: $ReviewId"
        & pwsh -File (Join-Path $scriptsRoot 'Publish-RoleReport.ps1') -Role auditor -RoundId $RoundId -ReviewId $ReviewId -ReportPath $ReportPath
    }
}
