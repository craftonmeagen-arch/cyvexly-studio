#requires -Version 7.0
[CmdletBinding()]
param()
. "$PSScriptRoot/Role-Common.ps1"
$layout = Get-ReviewLayout auditor setup
Assert-NoReparse $layout.reviewRoot
foreach ($dir in @('reports','reports/published','memory','runs','evidence','exchange/operational-inbox','exchange/processed','cleanup')) {
    New-Item -ItemType Directory -Force -Path (Join-Path $layout.reviewRoot $dir) | Out-Null
}
$lane = Join-Path $layout.workspace 'docs/agent-system/cyvexly'
foreach ($role in @('auditor','council','functional')) {
    $roleLayout = Get-ReviewLayout $role setup
    if ($role -ne 'functional') {
        foreach ($destination in @($roleLayout.current,$roleLayout.archive)) {
            Assert-NoReparse $destination
            $original = Join-Path $lane ('reports/' + (Split-Path $destination -Leaf))
            if (-not (Test-Path -LiteralPath $destination) -and (Test-Path -LiteralPath $original)) {
                Copy-Item -LiteralPath $original -Destination $destination
            }
        }
    }
    $memory = Join-Path $layout.reviewRoot "memory/$role"; Assert-NoReparse $memory
    New-Item -ItemType Directory -Force -Path $memory | Out-Null
    if ($role -ne 'functional') {
        $prefix = $role.ToUpperInvariant()
        $names = @("CYVEXLY_$($prefix)_CURRENT_STATE.md","CYVEXLY_$($prefix)_DEBT.md","CYVEXLY_$($prefix)_WATCH.md",
            "CYVEXLY_$($prefix)_SUMMARY.md","CYVEXLY_$($prefix)_ACTIVE_ROUNDS.md","CYVEXLY_NEXT_$($prefix)_HANDOFF.md")
        $names += if ($role -eq 'auditor') { 'CYVEXLY_AUDIT_COVERAGE_MAP.md' } else { 'CYVEXLY_COUNCIL_COVERAGE_MAP.md' }
        foreach ($name in $names) {
            $target = Join-Path $memory $name
            if (-not (Test-Path -LiteralPath $target)) {
                $source = Join-Path $lane $name
                $text = "# Imported review history$([char]10)$([char]10)Imported during role migration; no new review is claimed. Historical timing, locks,$([char]10)ports and paths do not override the current orientation and rule mapping.$([char]10)$([char]10)"
                $text += [IO.File]::ReadAllText($source)
                [IO.File]::WriteAllText($target,$text,[Text.UTF8Encoding]::new($false))
            }
        }
    } else {
        foreach ($name in @('CURRENT_STATE','DEBT','COVERAGE_MAP','WATCH','SUMMARY','ACTIVE_ROUNDS','NEXT_HANDOFF')) {
            $target=Join-Path $memory "CYVEXLY_FUNCTIONAL_$name.md"
            if (-not (Test-Path -LiteralPath $target)) {
                [IO.File]::WriteAllText($target,"# Cyvexly Functional Smoke $name$([char]10)$([char]10)Initialized for role setup. No functional review has run. Follow the root orientation,$([char]10)current accepted source and Chunk 5 Owner direction; record actual findings here.$([char]10)")
            }
        }
    }
}
$readme = Join-Path $layout.reviewRoot 'README.md'
if (-not (Test-Path -LiteralPath $readme)) {
    [IO.File]::WriteAllText($readme,"# Cyvexly independent review$([char]10)$([char]10)Permanent external review workspace. Governing rules and orientations are in the website$([char]10)project. No scheduler or active review was created by provisioning this directory.$([char]10)")
}
Write-Output $layout.reviewRoot
