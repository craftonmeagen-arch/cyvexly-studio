#requires -Version 7.0
[CmdletBinding()]
param(
    [Parameter(Mandatory)][ValidateSet('auditor','council','functional')][string]$Role,
    [Parameter(Mandatory)][string]$RoundId,
    [Parameter(Mandatory)][int]$ProcessId,
    [string]$Purpose='Process started by this role invocation'
)
. "$PSScriptRoot/Role-Common.ps1"
$layout=Get-ReviewLayout $Role $RoundId; $identity=Read-RoleIdentity $layout $Role $RoundId
Assert-NoReparse $layout.processes
$process=Get-Process -Id $ProcessId -ErrorAction Stop
$createdTicks = if ($identity.createdAtUtc -is [DateTime]) {
    $identity.createdAtUtc.ToUniversalTime().Ticks
} else {
    ([DateTimeOffset]::Parse([string]$identity.createdAtUtc)).UtcDateTime.Ticks
}
if ($process.StartTime.ToUniversalTime().Ticks -lt $createdTicks) {
    throw 'Process predates this run; it cannot be adopted as run-created.'
}
$entry=[ordered]@{pid=$process.Id;startTimeUtcTicks=$process.StartTime.ToUniversalTime().Ticks;name=$process.ProcessName;purpose=$Purpose}
$items=@(Get-Content -LiteralPath $layout.processes -Raw | ConvertFrom-Json)
if (@($items | Where-Object { $_.pid -eq $ProcessId }).Count) { throw 'PID already registered.' }
Write-RoleJson $layout.processes @($items + [pscustomobject]$entry)
$entry | ConvertTo-Json
