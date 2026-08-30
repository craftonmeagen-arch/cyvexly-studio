[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('auditor', 'council')]
    [string]$Role,

    [Parameter(Mandatory = $true)]
    [ValidatePattern('^[A-Za-z0-9][A-Za-z0-9._-]{0,80}$')]
    [string]$RoundId,

    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$ReviewId,

    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$ReportPath,

    [switch]$ValidateOnly
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$roleName = $Role.ToLowerInvariant()
$workspace = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..\..'))
$guardPath = Join-Path $workspace ('.codex\role-state\' + $roleName + '.active.json')
$publisherLock = Join-Path $workspace ('.codex\role-state\' + $roleName + '.publisher.lock')
$guard = Get-Content -LiteralPath $guardPath -Raw | ConvertFrom-Json
if ($guard.roundId -ne $RoundId -or $guard.role -ne $roleName) {
    throw 'Active role identity does not match this publication request.'
}

$reportResolved = [System.IO.Path]::GetFullPath((Join-Path $workspace $ReportPath))
$roundResolved = [System.IO.Path]::GetFullPath($guard.roundRoot).TrimEnd('\') + '\'
if (-not $reportResolved.StartsWith($roundResolved, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw 'Candidate report must be inside the active role-owned round root.'
}
if (-not (Test-Path -LiteralPath $reportResolved -PathType Leaf)) {
    throw 'Candidate report does not exist.'
}

$reportsRoot = Join-Path $workspace 'docs\agent-system\cyvexly\reports'
$inboxPath = Join-Path $workspace 'docs\agent-system\cyvexly\inbox\OPERATIONS.md'
if ($roleName -eq 'auditor') {
    $currentPath = Join-Path $reportsRoot 'AUDITOR_CURRENT.md'
    $archivePath = Join-Path $reportsRoot 'AUDITOR_ARCHIVE.md'
}
else {
    $currentPath = Join-Path $reportsRoot 'QUALITY_METHODS_CURRENT.md'
    $archivePath = Join-Path $reportsRoot 'QUALITY_METHODS_ARCHIVE.md'
}

if ($ValidateOnly) {
    [pscustomobject]@{
        role = $roleName
        roundId = $RoundId
        candidateReport = [System.IO.Path]::GetRelativePath($workspace, $reportResolved).Replace('\', '/')
        currentReport = [System.IO.Path]::GetRelativePath($workspace, $currentPath).Replace('\', '/')
        archive = [System.IO.Path]::GetRelativePath($workspace, $archivePath).Replace('\', '/')
        inbox = [System.IO.Path]::GetRelativePath($workspace, $inboxPath).Replace('\', '/')
        status = 'VALIDATED WITHOUT PUBLICATION'
    } | ConvertTo-Json -Depth 4
    return
}

$lockStream = $null
try {
    $lockStream = [System.IO.File]::Open($publisherLock, [System.IO.FileMode]::CreateNew, [System.IO.FileAccess]::Write, [System.IO.FileShare]::None)
}
catch [System.IO.IOException] {
    throw "The $roleName publisher is busy; no report was changed."
}

try {
    $content = Get-Content -LiteralPath $reportResolved -Raw
    if ([string]::IsNullOrWhiteSpace($content)) {
        throw 'Candidate report is blank.'
    }

    $stamp = [DateTime]::UtcNow.ToString('o')
    $archiveBlock = "`r`n`r`n---`r`n`r`n<!-- $roleName review $ReviewId published $stamp -->`r`n`r`n$content"
    $archiveBytes = [System.Text.UTF8Encoding]::new($false).GetBytes($archiveBlock)
    $archiveStream = [System.IO.File]::Open($archivePath, [System.IO.FileMode]::Append, [System.IO.FileAccess]::Write, [System.IO.FileShare]::None)
    try {
        $archiveStream.Write($archiveBytes, 0, $archiveBytes.Length)
        $archiveStream.Flush($true)
    }
    finally {
        $archiveStream.Dispose()
    }

    $tempCurrent = $currentPath + '.' + [guid]::NewGuid().ToString('N') + '.tmp'
    [System.IO.File]::WriteAllText($tempCurrent, $content, [System.Text.UTF8Encoding]::new($false))
    [System.IO.File]::Move($tempCurrent, $currentPath, $true)

    $relativeCurrent = [System.IO.Path]::GetRelativePath($workspace, $currentPath).Replace('\', '/')
    $inboxLine = "`r`n- $stamp | $roleName | $ReviewId | $relativeCurrent"
    [System.IO.File]::AppendAllText($inboxPath, $inboxLine, [System.Text.UTF8Encoding]::new($false))

    [pscustomobject]@{
        role = $roleName
        reviewId = $ReviewId
        currentReport = $relativeCurrent
        archive = [System.IO.Path]::GetRelativePath($workspace, $archivePath).Replace('\', '/')
        publishedAtUtc = $stamp
    } | ConvertTo-Json -Depth 4
}
finally {
    if ($null -ne $lockStream) {
        $lockStream.Dispose()
    }
    if (Test-Path -LiteralPath $publisherLock -PathType Leaf) {
        Remove-Item -LiteralPath $publisherLock -Force
    }
}
