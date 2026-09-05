#requires -Version 7.0
[CmdletBinding()]
param(
    [Parameter(Mandatory)][ValidateSet('auditor','council','functional')][string]$Role,
    [Parameter(Mandatory)][string]$RoundId,
    [Parameter(Mandatory)][ValidatePattern('^[A-Za-z0-9][A-Za-z0-9/._-]*$')][string]$SourceRef
)
. "$PSScriptRoot/Role-Common.ps1"
$layout=Get-ReviewLayout $Role $RoundId; Assert-NoReparse $layout.reviewRoot
if (Test-Path -LiteralPath $layout.run) { throw 'Run ID already has resources; use a fresh ID. No role lock was checked.' }
$sha=(& git -C $layout.workspace rev-parse --verify "$SourceRef^{commit}" | Select-Object -First 1)
if ($LASTEXITCODE -ne 0 -or $sha -notmatch '^[a-f0-9]{40}$') { throw 'Accepted source ref must resolve to a commit.' }
$entries=@(& git -C $layout.workspace ls-tree -r $sha)
if ($LASTEXITCODE -ne 0) { throw 'Cannot enumerate source commit.' }
$allowed=@('src','public','package.json','pnpm-lock.yaml','next.config.ts','next.config.js','next.config.mjs',
    'tsconfig.json','postcss.config.mjs','eslint.config.mjs','eslint.config.js')
$selected=@($entries | Where-Object { ($_ -split "\t",2)[1].Split('/')[0] -in $allowed })
if (@($selected | Where-Object { $_ -match '^(120000|160000) ' }).Count) { throw 'Source symlinks/submodules require explicit isolated provisioning.' }
$paths=@($selected | ForEach-Object { ($_ -split "\t",2)[1] })
if ('package.json' -notin $paths -or 'pnpm-lock.yaml' -notin $paths) { throw 'Snapshot requires tracked package.json and pnpm-lock.yaml.' }
if (@($paths | Where-Object { $_ -match '(^|/)\.env($|\.)' }).Count) { throw 'Tracked environment file detected; do not copy credentials.' }
& "$PSScriptRoot/Initialize-ReviewEnvironment.ps1" | Out-Null
foreach ($dir in @($layout.run,$layout.snapshot,$layout.runtime,$layout.logs,$layout.browser,$layout.evidence)) {
    Assert-NoReparse $dir; New-Item -ItemType Directory -Path $dir -Force | Out-Null
}
$identity=[ordered]@{
    schema=2;role=$Role;roundId=$RoundId;runRoot=$layout.run;sourceWorkspace=$layout.workspace
    sourceHead=$sha;createdAtUtc=[DateTime]::UtcNow.ToString('o');createdAtUtcTicks=[DateTime]::UtcNow.Ticks;port=$layout.port
    snapshotRoot=$layout.snapshot;runtimeRoot=$layout.runtime;logRoot=$layout.logs;browserRoot=$layout.browser
    evidenceRoot=$layout.evidence;expectedCurrentHash=(Get-RoleHash $layout.current)
    sourcePaths=$paths;resourceRecordOnly=$true
}
Write-RoleJson $layout.identity $identity; Write-RoleJson $layout.processes @()
$tar=Join-Path $layout.run 'source.tar'
$rootPaths=@($allowed | Where-Object { $_ -in @($paths | ForEach-Object { $_.Split('/')[0] }) })
& git -C $layout.workspace archive --format=tar "--output=$tar" $sha -- @rootPaths
if ($LASTEXITCODE -ne 0) { throw 'Source archive failed; preserve this run for diagnosis.' }
& tar -xf $tar -C $layout.snapshot
if ($LASTEXITCODE -ne 0) { throw 'Snapshot extraction failed.' }
& tar -xf $tar -C $layout.runtime
if ($LASTEXITCODE -ne 0) { throw 'Runtime extraction failed.' }
Remove-Item -LiteralPath $tar -Force; Assert-NoReparse $layout.snapshot -Recurse
foreach ($file in Get-ChildItem -LiteralPath $layout.snapshot -Recurse -File -Force) { $file.IsReadOnly=$true }
$identity | ConvertTo-Json -Depth 8
