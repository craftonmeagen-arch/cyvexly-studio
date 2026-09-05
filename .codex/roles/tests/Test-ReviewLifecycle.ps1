#requires -Version 7.0
[CmdletBinding()]
param()
$ErrorActionPreference='Stop'
$sourceRoot=[IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../../..'))
$testRoot=Join-Path ([IO.Path]::GetTempPath()) ('cyvexly-role-tests-'+[guid]::NewGuid().ToString('N'))
$fixture=Join-Path $testRoot 'fixture'
$review=Join-Path $testRoot 'fixture-independent-review'
$helper=Join-Path $fixture '.codex/roles/scripts'
$results=[Collections.Generic.List[string]]::new()
function Check([bool]$Condition,[string]$Label) { if(-not $Condition){throw $Label}; $results.Add($Label) }
function Refused([scriptblock]$Call,[string]$Pattern,[string]$Label) {
    $caught=$false
    try { & $Call | Out-Null } catch { if($_.Exception.Message -notmatch $Pattern){throw}; $caught=$true }
    Check $caught $Label
}
New-Item -ItemType Directory -Force -Path $helper,(Join-Path $fixture 'src'),(Join-Path $fixture 'public'),(Join-Path $fixture 'docs/agent-system/cyvexly') | Out-Null
Copy-Item -Path (Join-Path $sourceRoot '.codex/roles/scripts/*.ps1') -Destination $helper
# Bootstrap documents only; no production reports will receive fixture output.
foreach($role in @('AUDITOR','COUNCIL')){
    foreach($name in @("CYVEXLY_$($role)_CURRENT_STATE","CYVEXLY_$($role)_DEBT","CYVEXLY_$($role)_WATCH","CYVEXLY_$($role)_SUMMARY",
        "CYVEXLY_$($role)_ACTIVE_ROUNDS","CYVEXLY_NEXT_$($role)_HANDOFF","CYVEXLY_AUDIT_COVERAGE_MAP","CYVEXLY_COUNCIL_COVERAGE_MAP")){
        [IO.File]::WriteAllText((Join-Path $fixture "docs/agent-system/cyvexly/$name.md"),'Fixture memory')
    }
}
[IO.File]::WriteAllText((Join-Path $fixture 'package.json'),'{"name":"lifecycle-fixture"}')
[IO.File]::WriteAllText((Join-Path $fixture 'pnpm-lock.yaml'),'lockfileVersion: 9.0')
[IO.File]::WriteAllText((Join-Path $fixture 'src/probe.txt'),'accepted source')
& git -C $fixture init -q
& git -C $fixture add .
& git -C $fixture -c user.name=Fixture -c user.email=fixture@example.invalid commit -qm fixture
if($LASTEXITCODE -ne 0){throw 'Fixture commit failed.'}
$sha=(& git -C $fixture rev-parse HEAD)
[IO.File]::WriteAllText((Join-Path $fixture 'src/probe.txt'),'uncommitted Builder work')
[IO.File]::WriteAllText((Join-Path $fixture '.env.local'),'FAKE_TEST_ONLY=do-not-copy')
[IO.File]::WriteAllText((Join-Path $fixture '.engine-lock'),'legacy test artifact')
$ownedProcess=$null
try {
    foreach($role in @('auditor','council','functional')){
        $run='fixture-'+$role
        $identity=(& (Join-Path $helper 'Start-ReviewRound.ps1') -Role $role -RoundId $run -SourceRef HEAD | ConvertFrom-Json)
        Check ($identity.sourceHead -eq $sha) "$role exact source identity"
        Check ([IO.File]::ReadAllText((Join-Path $identity.runtimeRoot 'src/probe.txt')) -eq 'accepted source') "$role excludes dirty Builder edits"
        Check (-not (Test-Path -LiteralPath (Join-Path $identity.runtimeRoot '.env.local'))) "$role excludes Builder credentials"
        Check ((Get-Item (Join-Path $identity.snapshotRoot 'src/probe.txt')).IsReadOnly) "$role frozen snapshot"
        Check (-not (Get-Item (Join-Path $identity.runtimeRoot 'src/probe.txt')).IsReadOnly) "$role writable runtime"
        Refused { & (Join-Path $helper 'Start-ReviewRound.ps1') -Role $role -RoundId '../escape' -SourceRef HEAD } 'Invalid round' "$role rejects path traversal"
        Refused { & (Join-Path $helper 'Complete-ReviewRound.ps1') -Role $role -RoundId $run } 'Publish findings' "$role requires publication before cleanup"
        $candidate=Join-Path $identity.logRoot 'candidate.md'
        $reviewId='FIXTURE-'+$role
        [IO.File]::WriteAllText($candidate,("REVIEW ID: $reviewId"+[Environment]::NewLine+"Source: $sha"+[Environment]::NewLine+'Fixture test only; no product review.'))
        if($role -eq 'auditor'){
            $ownedProcess=Start-Process -FilePath (Get-Command pwsh).Source -ArgumentList '-NoProfile','-Command','Start-Sleep -Seconds 120' -WindowStyle Hidden -PassThru
            & (Join-Path $helper 'Register-RoleProcess.ps1') -Role $role -RoundId $run -ProcessId $ownedProcess.Id | Out-Null
            $manifestPath=Join-Path $identity.runRoot 'processes.json'
            $before=[IO.File]::ReadAllText($manifestPath)
            $items=@($before | ConvertFrom-Json); $items[0].startTimeUtcTicks++
            [IO.File]::WriteAllText($manifestPath,(ConvertTo-Json -InputObject $items))
        }
        & (Join-Path $helper 'Publish-RoleReport.ps1') -Role $role -RoundId $run -ReviewId $reviewId -ReportPath $candidate | Out-Null
        Check (Test-Path -LiteralPath (Join-Path $review "exchange/operational-inbox/$role-$reviewId.json")) "$role durable unread inbox"
        if($role -eq 'auditor'){
            Refused { & (Join-Path $helper 'Complete-ReviewRound.ps1') -Role $role -RoundId $run } 'PID reused' 'PID identity mismatch preserves processes'
            Check ($null -ne (Get-Process -Id $ownedProcess.Id -ErrorAction SilentlyContinue)) 'Mismatch did not kill owned process'
            [IO.File]::WriteAllText($manifestPath,$before)
        }
        $unique=Join-Path $identity.runtimeRoot 'src/unique.txt'
        [IO.File]::WriteAllText($unique,'unique fixture work')
        Refused { & (Join-Path $helper 'Complete-ReviewRound.ps1') -Role $role -RoundId $run } 'Unique runtime work' "$role preserves unique work"
        Remove-Item -LiteralPath $unique
        $outside=Join-Path $testRoot 'protected'; New-Item -ItemType Directory -Force -Path $outside | Out-Null
        [IO.File]::WriteAllText((Join-Path $outside 'keep.txt'),'protected')
        $junction=Join-Path $identity.runtimeRoot 'junction'
        New-Item -ItemType Junction -Path $junction -Target $outside | Out-Null
        Refused { & (Join-Path $helper 'Complete-ReviewRound.ps1') -Role $role -RoundId $run } 'Reparse point' "$role rejects junction cleanup"
        Remove-Item -LiteralPath $junction
        Check (Test-Path -LiteralPath (Join-Path $outside 'keep.txt')) "$role preserves junction target"
        $internalTarget=Join-Path $identity.runtimeRoot 'node_modules/.pnpm/fixture'
        New-Item -ItemType Directory -Force -Path $internalTarget | Out-Null
        [IO.File]::WriteAllText((Join-Path $internalTarget 'package.json'),'{"name":"fixture"}')
        New-Item -ItemType Junction -Path (Join-Path $identity.runtimeRoot 'node_modules/fixture') -Target $internalTarget | Out-Null
        & (Join-Path $helper 'Complete-ReviewRound.ps1') -Role $role -RoundId $run | Out-Null
        Check (-not (Test-Path -LiteralPath $identity.runRoot)) "$role removes only completed run"
        Check (-not (Test-Path -LiteralPath $internalTarget)) "$role safely cleans internal package junctions"
        if($role -eq 'auditor'){ Check ($null -eq (Get-Process -Id $ownedProcess.Id -ErrorAction SilentlyContinue)) 'Verified owned process stopped'; $ownedProcess=$null }
        Check (Test-Path -LiteralPath (Join-Path $review "reports/published/$role/$reviewId.md")) "$role preserves published report"
    }
    $a=(& (Join-Path $helper 'Start-ReviewRound.ps1') -Role auditor -RoundId stale-a -SourceRef HEAD | ConvertFrom-Json)
    $b=(& (Join-Path $helper 'Start-ReviewRound.ps1') -Role auditor -RoundId stale-b -SourceRef HEAD | ConvertFrom-Json)
    $candidateA=Join-Path $a.logRoot 'candidate.md'; $candidateB=Join-Path $b.logRoot 'candidate.md'
    [IO.File]::WriteAllText($candidateA,"REVIEW ID: FIXTURE-A$([char]10)Source: $sha")
    [IO.File]::WriteAllText($candidateB,"REVIEW ID: FIXTURE-B$([char]10)Source: $sha")
    & (Join-Path $helper 'Publish-RoleReport.ps1') -Role auditor -RoundId stale-a -ReviewId FIXTURE-A -ReportPath $candidateA | Out-Null
    Refused { & (Join-Path $helper 'Publish-RoleReport.ps1') -Role auditor -RoundId stale-b -ReviewId FIXTURE-B -ReportPath $candidateB } 'Current report changed' 'Stale publication cannot overwrite current'
    Check (Test-Path -LiteralPath $candidateB) 'Stale candidate preserved'
    Check ([IO.File]::ReadAllText((Join-Path $fixture 'src/probe.txt')) -eq 'uncommitted Builder work') 'Builder dirty source preserved across lifecycle'
    [pscustomobject]@{passed=$results.Count;checks=@($results);testRoot=$testRoot} | ConvertTo-Json -Depth 4
} finally {
    if($ownedProcess){
        $p=Get-Process -Id $ownedProcess.Id -ErrorAction SilentlyContinue
        if($p -and $p.StartTime.ToUniversalTime().Ticks -eq $ownedProcess.StartTime.ToUniversalTime().Ticks){Stop-Process -Id $p.Id -Force}
    }
    # All contents are this script's synthetic fixtures, never product work or external review resources.
    $resolved=[IO.Path]::GetFullPath($testRoot)
    $tempBase=[IO.Path]::GetFullPath([IO.Path]::GetTempPath()).TrimEnd('\')+'\'
    if(-not $resolved.StartsWith($tempBase,[StringComparison]::OrdinalIgnoreCase) -or (Split-Path $resolved -Leaf) -notlike 'cyvexly-role-tests-*'){throw 'Invalid fixture cleanup root'}
    . (Join-Path $helper 'Role-Common.ps1')
    Assert-NoReparse $resolved -Recurse
    Get-ChildItem -LiteralPath $resolved -File -Force -Recurse | ForEach-Object { $_.IsReadOnly=$false }
    Remove-Item -LiteralPath $resolved -Recurse -Force
}
