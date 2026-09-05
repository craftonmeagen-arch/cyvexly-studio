#requires -Version 7.0
[CmdletBinding()]
param(
    [Parameter(Mandatory)][ValidateSet('auditor','council','functional')][string]$Role,
    [Parameter(Mandatory)][string]$RoundId
)
. "$PSScriptRoot/Role-Common.ps1"
$layout=Get-ReviewLayout $Role $RoundId; $identity=Read-RoleIdentity $layout $Role $RoundId
$expected=[IO.Path]::GetFullPath((Join-Path $layout.reviewRoot "runs/$Role/$RoundId"))
if ($layout.run -ne $expected -or $layout.run -eq $layout.reviewRoot) { throw 'Invalid cleanup boundary.' }
$disposable=Get-DisposableInventory $layout.run
$receiptPath=Join-Path $layout.run 'published.json'
if (-not (Test-Path -LiteralPath $receiptPath)) { throw 'Publish findings (including an incomplete pass) before cleanup.' }
$receipt=Get-Content -LiteralPath $receiptPath -Raw | ConvertFrom-Json
$expectedPublished=Join-Path $layout.reviewRoot "reports/published/$Role/$($receipt.reviewId).md"
if ($receipt.report -ne $expectedPublished -or (Get-RoleHash $receipt.report) -ne $receipt.sha256) { throw 'Durable report missing or changed.' }
foreach ($file in Get-ProductFiles $layout.runtime) {
    $relative=[IO.Path]::GetRelativePath($layout.runtime,$file.FullName); $original=Join-Path $layout.snapshot $relative
    if ($file.Name -like '.env*' -and $file.Name -ne '.env.example') { throw 'Runtime credentials require protected-store reconciliation before cleanup.' }
    if (-not (Test-Path -LiteralPath $original) -or (Get-RoleHash $file.FullName) -ne (Get-RoleHash $original)) {
        throw "Unique runtime work must be preserved and reconciled before cleanup: $relative"
    }
}
foreach ($file in Get-ChildItem -LiteralPath $layout.snapshot -File -Recurse) {
    if (-not (Test-Path -LiteralPath (Join-Path $layout.runtime ([IO.Path]::GetRelativePath($layout.snapshot,$file.FullName))))) {
        throw 'Runtime source deletion needs preservation/reconciliation before cleanup.'
    }
}
$manifest=@(Get-Content -LiteralPath $layout.processes -Raw | ConvertFrom-Json)
$live=@(); $registered=@($manifest | ForEach-Object { $_.pid })
foreach ($entry in $manifest) {
    $process=Get-Process -Id ([int]$entry.pid) -ErrorAction SilentlyContinue
    if ($null -ne $process) {
        if ($process.StartTime.ToUniversalTime().Ticks -ne [long]$entry.startTimeUtcTicks) { throw 'PID reused; no processes stopped.' }
        $live+=$process
    }
}
foreach ($process in Get-CimInstance Win32_Process) {
    if ($process.ProcessId -ne $PID -and $process.CommandLine -and
        $process.CommandLine.Contains($layout.run) -and $process.ProcessId -notin $registered) {
        throw "Unregistered process references this run: $($process.ProcessId). Reconcile ownership first."
    }
}
$inventory=@($disposable.files)
$bytes=[long](($inventory | Measure-Object Length -Sum).Sum); $stopped=@()
foreach ($process in $live) {
    $again=Get-Process -Id $process.Id -ErrorAction SilentlyContinue
    if ($again -and $again.StartTime.ToUniversalTime().Ticks -eq $process.StartTime.ToUniversalTime().Ticks) {
        Stop-Process -Id $again.Id -Force -ErrorAction Stop
        Wait-Process -Id $again.Id -Timeout 15 -ErrorAction SilentlyContinue
        if (Get-Process -Id $again.Id -ErrorAction SilentlyContinue) { throw 'Owned process did not stop; run retained.' }
        $stopped+=$again.Id
    }
}
$cleanupRoot=Join-Path $layout.reviewRoot "cleanup/$Role"; Assert-NoReparse $cleanupRoot
New-Item -ItemType Directory -Force -Path $cleanupRoot | Out-Null
$record=[ordered]@{role=$Role;roundId=$RoundId;removedPath=$layout.run;fileCount=$inventory.Count;logicalBytesRemoved=$bytes;
    stoppedPids=$stopped;ramReclaimed='not measured';retainedEvidence=$layout.evidence;report=$receipt.report;status='CLEANUP STARTED'}
$recordPath=Join-Path $cleanupRoot "$RoundId.json"; Write-RoleJson $recordPath $record
foreach ($file in $inventory) { $file.IsReadOnly=$false }
# Remove verified internal links as links, without following their targets.
foreach ($link in $disposable.links) { Remove-Item -LiteralPath $link -Force -ErrorAction Stop }
Remove-Item -LiteralPath $layout.run -Recurse -Force -ErrorAction Stop
if (Test-Path -LiteralPath $layout.run) { throw 'Disposable run directory remains.' }
$record.status='COMPLETE'; Write-RoleJson $recordPath $record
Assert-NoReparse $layout.evidence
if ((Test-Path -LiteralPath $layout.evidence) -and @(Get-ChildItem -LiteralPath $layout.evidence -Force).Count -eq 0) {
    Remove-Item -LiteralPath $layout.evidence
}
$record | ConvertTo-Json -Depth 5
