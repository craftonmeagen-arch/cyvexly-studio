[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$Lane,

    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$SessionId,

    [string]$Mission = "continue the project"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$workspace = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\..\..'))
$lockPath = Join-Path $workspace '.engine-lock'
$nonce = [guid]::NewGuid().ToString('N')
$claimedAt = [DateTime]::UtcNow.ToString('o')

$payload = [ordered]@{
    schema = 1
    lane = $Lane
    role = 'Builder'
    sessionId = $SessionId
    nonce = $nonce
    claimedAtUtc = $claimedAt
    intendedRound = 'unresolved-at-claim'
    branch = 'unresolved-at-claim'
    mission = $Mission
}

$json = $payload | ConvertTo-Json -Depth 5
$bytes = [System.Text.UTF8Encoding]::new($false).GetBytes($json)
$stream = $null

try {
    $stream = [System.IO.File]::Open(
        $lockPath,
        [System.IO.FileMode]::CreateNew,
        [System.IO.FileAccess]::Write,
        [System.IO.FileShare]::None
    )
    $stream.Write($bytes, 0, $bytes.Length)
    $stream.Flush($true)
}
catch [System.IO.IOException] {
    [Console]::Error.WriteLine("LOCKED — exiting. Atomic create failed for $lockPath")
    exit 17
}
finally {
    if ($null -ne $stream) {
        $stream.Dispose()
    }
}

$verified = Get-Content -LiteralPath $lockPath -Raw | ConvertFrom-Json
if ($verified.nonce -ne $nonce -or $verified.sessionId -ne $SessionId -or $verified.lane -ne $Lane) {
    throw 'Builder lock read-back identity verification failed. Preserve the lock and report the launch defect.'
}

$verified | ConvertTo-Json -Depth 5
