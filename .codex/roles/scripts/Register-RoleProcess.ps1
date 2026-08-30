[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('auditor', 'council')]
    [string]$Role,

    [Parameter(Mandatory = $true)]
    [ValidatePattern('^[A-Za-z0-9][A-Za-z0-9._-]{0,80}$')]
    [string]$RoundId,

    [Parameter(Mandatory = $true)]
    [int]$ProcessId,

    [string]$Purpose = 'role-owned runtime process'
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$workspace = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..\..'))
$guardPath = Join-Path $workspace ('.codex\role-state\' + $Role.ToLowerInvariant() + '.active.json')
$guard = Get-Content -LiteralPath $guardPath -Raw | ConvertFrom-Json
if ($guard.roundId -ne $RoundId -or $guard.role -ne $Role.ToLowerInvariant()) {
    throw 'Active role identity does not match this process registration.'
}

$process = Get-Process -Id $ProcessId -ErrorAction Stop
$entry = [ordered]@{
    pid = $process.Id
    startTimeUtc = $process.StartTime.ToUniversalTime().ToString('o')
    startTimeUtcTicks = $process.StartTime.ToUniversalTime().Ticks
    name = $process.ProcessName
    purpose = $Purpose
    registeredAtUtc = [DateTime]::UtcNow.ToString('o')
}

$items = @()
if (Test-Path -LiteralPath $guard.manifestPath -PathType Leaf) {
    $loaded = Get-Content -LiteralPath $guard.manifestPath -Raw | ConvertFrom-Json
    if ($null -ne $loaded) {
        $items = @($loaded)
    }
}
$items += [pscustomobject]$entry

$tempPath = $guard.manifestPath + '.' + [guid]::NewGuid().ToString('N') + '.tmp'
[System.IO.File]::WriteAllText($tempPath, ($items | ConvertTo-Json -Depth 6), [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::Move($tempPath, $guard.manifestPath, $true)
$entry | ConvertTo-Json -Depth 5
