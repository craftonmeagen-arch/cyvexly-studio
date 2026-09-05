#requires -Version 7.0
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$global:LASTEXITCODE = 0
function Get-ReviewLayout {
    param([ValidateSet('auditor','council','functional')][string]$Role, [string]$RoundId)
    if ($RoundId -notmatch '^[A-Za-z0-9][A-Za-z0-9._-]{0,80}$') { throw 'Invalid round ID.' }
    $workspace = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../../..'))
    $reviewRoot = Join-Path (Split-Path $workspace -Parent) ((Split-Path $workspace -Leaf) + '-independent-review')
    $run = Join-Path $reviewRoot "runs/$Role/$RoundId"
    $stem = @{auditor='AUDITOR';council='QUALITY_METHODS';functional='FUNCTIONAL_AUDIT'}[$Role]
    [pscustomobject]@{
        workspace=$workspace; reviewRoot=$reviewRoot; run=$run
        identity=(Join-Path $run 'identity.json'); processes=(Join-Path $run 'processes.json')
        snapshot=(Join-Path $run 'snapshot'); runtime=(Join-Path $run 'runtime')
        logs=(Join-Path $run 'logs'); browser=(Join-Path $run 'browser')
        evidence=(Join-Path $reviewRoot "evidence/$Role/$RoundId")
        current=(Join-Path $reviewRoot "reports/$($stem)_CURRENT.md")
        archive=(Join-Path $reviewRoot "reports/$($stem)_ARCHIVE.md")
        port=@{auditor=5273;council=5373;functional=5473}[$Role]
    }
}
function Assert-NoReparse {
    param([string]$Path, [switch]$Recurse)
    $full = [IO.Path]::GetFullPath($Path); $cursor = $full
    while ($cursor) {
        if (Test-Path -LiteralPath $cursor) {
            if ((Get-Item -LiteralPath $cursor -Force).Attributes -band [IO.FileAttributes]::ReparsePoint) {
                throw "Reparse point requires ownership reconciliation: $cursor"
            }
        }
        $parent = Split-Path $cursor -Parent
        if ($parent -eq $cursor) { break }; $cursor = $parent
    }
    if ($Recurse -and (Test-Path -LiteralPath $full -PathType Container)) {
        $queue = [Collections.Generic.Queue[string]]::new(); $queue.Enqueue($full)
        while ($queue.Count) {
            foreach ($item in Get-ChildItem -LiteralPath $queue.Dequeue() -Force) {
                if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) { throw "Reparse point requires target reconciliation: $($item.FullName)" }
                if ($item.PSIsContainer) { $queue.Enqueue($item.FullName) }
            }
        }
    }
}
function Write-RoleJson {
    param([string]$Path, $Value)
    Assert-NoReparse $Path
    $temp = $Path + '.' + [guid]::NewGuid().ToString('N') + '.tmp'
    [IO.File]::WriteAllText($temp, (ConvertTo-Json -InputObject $Value -Depth 12), [Text.UTF8Encoding]::new($false))
    [IO.File]::Move($temp, $Path, $true)
}
function Get-RoleHash {
    param([string]$Path)
    if (Test-Path -LiteralPath $Path -PathType Leaf) { (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash }
    else { 'FIRST-PUBLICATION' }
}
function Read-RoleIdentity {
    param($Layout, [string]$Role, [string]$RoundId)
    Assert-NoReparse $Layout.run
    $identity = Get-Content -LiteralPath $Layout.identity -Raw | ConvertFrom-Json
    if ($identity.schema -ne 2 -or $identity.role -ne $Role -or $identity.roundId -ne $RoundId -or
        $identity.runRoot -ne $Layout.run -or $identity.sourceWorkspace -ne $Layout.workspace) {
        throw 'Resource manifest does not match this exact role, run, and workspace.'
    }
    return $identity
}
function Get-ProductFiles {
    param([string]$Root)
    $skip = @('node_modules','.next','dist','build','coverage','test-results','playwright-report','.git')
    $queue = [Collections.Generic.Queue[string]]::new(); $queue.Enqueue($Root)
    while ($queue.Count) {
        foreach ($item in Get-ChildItem -LiteralPath $queue.Dequeue() -Force) {
            if ($item.PSIsContainer) { if ($item.Name -notin $skip) { $queue.Enqueue($item.FullName) } }
            elseif ($item.Name -notin @('next-env.d.ts','tsconfig.tsbuildinfo')) { $item }
        }
    }
}
function Get-DisposableInventory {
    param([string]$Root)
    Assert-NoReparse $Root
    $prefix=[IO.Path]::GetFullPath($Root).TrimEnd('\')+'\'
    $files=[Collections.Generic.List[object]]::new()
    $links=[Collections.Generic.List[string]]::new()
    $queue=[Collections.Generic.Queue[string]]::new(); $queue.Enqueue($Root)
    while($queue.Count){
        foreach($item in Get-ChildItem -LiteralPath $queue.Dequeue() -Force){
            if($item.Attributes -band [IO.FileAttributes]::ReparsePoint){
                $target=$item.ResolveLinkTarget($true)
                if($null -eq $target -or -not $target.FullName.StartsWith($prefix,[StringComparison]::OrdinalIgnoreCase)){
                    throw "Reparse point leaves the exact disposable run: $($item.FullName)"
                }
                Assert-NoReparse $target.FullName
                $links.Add($item.FullName)
            } elseif($item.PSIsContainer){$queue.Enqueue($item.FullName)}
            else{$files.Add($item)}
        }
    }
    [pscustomobject]@{files=@($files);links=@($links)}
}
