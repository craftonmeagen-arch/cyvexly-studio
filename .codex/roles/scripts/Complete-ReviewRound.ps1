[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('auditor', 'council')]
    [string]$Role,

    [Parameter(Mandatory = $true)]
    [ValidatePattern('^[A-Za-z0-9][A-Za-z0-9._-]{0,80}$')]
    [string]$RoundId
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$roleName = $Role.ToLowerInvariant()
$workspace = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..\..'))
$guardPath = Join-Path $workspace ('.codex\role-state\' + $roleName + '.active.json')
if (-not (Test-Path -LiteralPath $guardPath -PathType Leaf)) {
    throw 'No active role guard exists; cleanup was not attempted.'
}

$guard = Get-Content -LiteralPath $guardPath -Raw | ConvertFrom-Json
if ($guard.roundId -ne $RoundId -or $guard.role -ne $roleName) {
    throw 'Active role identity does not match this cleanup request.'
}

$manifest = @()
if (Test-Path -LiteralPath $guard.manifestPath -PathType Leaf) {
    $loaded = Get-Content -LiteralPath $guard.manifestPath -Raw | ConvertFrom-Json
    if ($null -ne $loaded) {
        $manifest = @($loaded)
    }
}

foreach ($entry in $manifest) {
    $process = Get-Process -Id ([int]$entry.pid) -ErrorAction SilentlyContinue
    if ($null -eq $process) {
        continue
    }
    $actualTicks = $process.StartTime.ToUniversalTime().Ticks
    if ($null -ne $entry.PSObject.Properties['startTimeUtcTicks']) {
        $recordedTicks = [long]$entry.startTimeUtcTicks
    }
    else {
        $recordedTicks = ([DateTime]$entry.startTimeUtc).ToUniversalTime().Ticks
    }
    if ($actualTicks -ne $recordedTicks) {
        throw "PID $($entry.pid) exists but its start identity does not match the manifest. Preserve the environment and investigate."
    }
    Stop-Process -Id $process.Id -Force -ErrorAction Stop
}

$roleRuntimeRoot = [System.IO.Path]::GetFullPath((Join-Path $workspace ('.codex\runtime\' + $roleName))).TrimEnd('\')
$roundRoot = [System.IO.Path]::GetFullPath([string]$guard.roundRoot)
$requiredPrefix = $roleRuntimeRoot + '\'
if (-not $roundRoot.StartsWith($requiredPrefix, [System.StringComparison]::OrdinalIgnoreCase) -or $roundRoot -eq $roleRuntimeRoot) {
    throw 'Resolved cleanup target is outside the exact role-owned runtime root.'
}

if (Test-Path -LiteralPath $roundRoot) {
    Get-ChildItem -LiteralPath $roundRoot -Recurse -Force -File -ErrorAction SilentlyContinue | ForEach-Object { $_.IsReadOnly = $false }
    Remove-Item -LiteralPath $roundRoot -Recurse -Force -ErrorAction Stop
}
if (Test-Path -LiteralPath $roundRoot) {
    throw "Disposable role root still exists after deletion: $roundRoot"
}

$currentGuard = Get-Content -LiteralPath $guardPath -Raw | ConvertFrom-Json
if ($currentGuard.nonce -ne $guard.nonce -or $currentGuard.roundId -ne $RoundId) {
    throw 'Role guard changed during cleanup; it was preserved.'
}
Remove-Item -LiteralPath $guardPath -Force -ErrorAction Stop
if (Test-Path -LiteralPath $guardPath) {
    throw "Role guard still exists after deletion: $guardPath"
}

Write-Output "$roleName round $RoundId cleaned. Durable reports and cited evidence were preserved."
