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
$stateRoot = Join-Path $workspace '.codex\role-state'
$roleRuntimeRoot = Join-Path $workspace ('.codex\runtime\' + $roleName)
$guardPath = Join-Path $stateRoot ($roleName + '.active.json')
$roundRoot = Join-Path $roleRuntimeRoot $RoundId
$snapshotRoot = Join-Path $roundRoot 'snapshot'
$runtimeRoot = Join-Path $roundRoot 'runtime'
$manifestPath = Join-Path $roundRoot 'processes.json'
$identityPath = Join-Path $roundRoot 'identity.json'
$nonce = [guid]::NewGuid().ToString('N')
$port = if ($roleName -eq 'auditor') { 5273 } else { 5373 }

New-Item -ItemType Directory -Force -Path $stateRoot | Out-Null
New-Item -ItemType Directory -Force -Path $roleRuntimeRoot | Out-Null

$guardPayload = [ordered]@{
    schema = 1
    role = $roleName
    roundId = $RoundId
    nonce = $nonce
    startedAtUtc = [DateTime]::UtcNow.ToString('o')
    dispatcherPid = $PID
    roundRoot = $roundRoot
    snapshotRoot = $snapshotRoot
    runtimeRoot = $runtimeRoot
    manifestPath = $manifestPath
    port = $port
}

$guardBytes = [System.Text.UTF8Encoding]::new($false).GetBytes(($guardPayload | ConvertTo-Json -Depth 6))
$guardStream = $null

try {
    $guardStream = [System.IO.File]::Open(
        $guardPath,
        [System.IO.FileMode]::CreateNew,
        [System.IO.FileAccess]::Write,
        [System.IO.FileShare]::None
    )
    $guardStream.Write($guardBytes, 0, $guardBytes.Length)
    $guardStream.Flush($true)
}
catch [System.IO.IOException] {
    [Console]::Error.WriteLine("A matching $roleName round is already active. Exit unchanged.")
    exit 18
}
finally {
    if ($null -ne $guardStream) {
        $guardStream.Dispose()
    }
}

try {
    $verifiedGuard = Get-Content -LiteralPath $guardPath -Raw | ConvertFrom-Json
    if ($verifiedGuard.nonce -ne $nonce -or $verifiedGuard.roundId -ne $RoundId) {
        throw 'Role guard read-back verification failed.'
    }

    New-Item -ItemType Directory -Path $snapshotRoot -ErrorAction Stop | Out-Null
    New-Item -ItemType Directory -Path $runtimeRoot -ErrorAction Stop | Out-Null

    $excludedRootNames = @('.git', '.codex', '.engine-lock', 'node_modules', 'dist', 'build', 'coverage', 'test-results', 'playwright-report')
    foreach ($item in Get-ChildItem -LiteralPath $workspace -Force) {
        if ($excludedRootNames -contains $item.Name) {
            continue
        }
        Copy-Item -LiteralPath $item.FullName -Destination $snapshotRoot -Recurse -Force
        Copy-Item -LiteralPath $item.FullName -Destination $runtimeRoot -Recurse -Force
    }

    foreach ($file in Get-ChildItem -LiteralPath $snapshotRoot -Recurse -Force -File) {
        $file.IsReadOnly = $true
    }

    [System.IO.File]::WriteAllText($manifestPath, '[]', [System.Text.UTF8Encoding]::new($false))

    $gitState = 'NO_GIT_WORKTREE'
    $head = $null
    $dirtyFingerprint = $null
    $gitCommand = Get-Command git -ErrorAction SilentlyContinue
    if ($null -ne $gitCommand) {
        $inside = (& $gitCommand.Source -C $workspace rev-parse --is-inside-work-tree 2>$null | Select-Object -First 1)
        if ($inside -eq 'true') {
            $gitState = 'GIT_WORKTREE'
            $head = (& $gitCommand.Source -C $workspace rev-parse HEAD 2>$null | Select-Object -First 1)
            $status = (& $gitCommand.Source -C $workspace status --porcelain=v1 2>$null) -join "`n"
            $sha = [System.Security.Cryptography.SHA256]::Create()
            try {
                $dirtyFingerprint = [Convert]::ToHexString($sha.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($status)))
            }
            finally {
                $sha.Dispose()
            }
        }
    }

    $identity = [ordered]@{
        schema = 1
        role = $roleName
        roundId = $RoundId
        nonce = $nonce
        createdAtUtc = [DateTime]::UtcNow.ToString('o')
        sourceWorkspace = $workspace
        sourceGitState = $gitState
        sourceHead = $head
        sourceDirtyFingerprint = $dirtyFingerprint
        snapshotRoot = $snapshotRoot
        runtimeRoot = $runtimeRoot
        port = $port
    }
    [System.IO.File]::WriteAllText($identityPath, ($identity | ConvertTo-Json -Depth 6), [System.Text.UTF8Encoding]::new($false))
    $identity | ConvertTo-Json -Depth 6
}
catch {
    $roleBaseResolved = [System.IO.Path]::GetFullPath($roleRuntimeRoot).TrimEnd('\') + '\'
    $roundResolved = [System.IO.Path]::GetFullPath($roundRoot)
    if ($roundResolved.StartsWith($roleBaseResolved, [System.StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $roundResolved)) {
        Get-ChildItem -LiteralPath $roundResolved -Recurse -Force -File -ErrorAction SilentlyContinue | ForEach-Object { $_.IsReadOnly = $false }
        Remove-Item -LiteralPath $roundResolved -Recurse -Force -ErrorAction SilentlyContinue
    }
    if (Test-Path -LiteralPath $guardPath -PathType Leaf) {
        $currentGuard = Get-Content -LiteralPath $guardPath -Raw | ConvertFrom-Json
        if ($currentGuard.nonce -eq $nonce) {
            Remove-Item -LiteralPath $guardPath -Force
        }
    }
    throw
}
