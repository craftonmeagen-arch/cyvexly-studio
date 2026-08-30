[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^[a-fA-F0-9]{32}$')]
    [string]$Nonce
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$workspace = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..\..'))
$lockPath = Join-Path $workspace '.engine-lock'

if (-not (Test-Path -LiteralPath $lockPath -PathType Leaf)) {
    throw 'Builder lock is missing; no release was performed.'
}

$lock = Get-Content -LiteralPath $lockPath -Raw | ConvertFrom-Json
if ($lock.role -ne 'Builder' -or $lock.nonce -ne $Nonce) {
    throw 'Builder lock identity does not match this release request. The lock was preserved.'
}

Write-Output 'Builder lock identity verified. Deleting .engine-lock as the caller''s literal final repository action.'
[System.IO.File]::Delete($lockPath)

