#requires -Version 7.0
[CmdletBinding()]
param()
Set-StrictMode -Version Latest
$ErrorActionPreference='Stop'
$workspace=[IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../../..'))
$lane=Join-Path $workspace 'docs/agent-system/cyvexly'
$rules=Join-Path $lane 'rules'
$manifest=Get-Content (Join-Path $rules 'SYNC_MANIFEST.json') -Raw | ConvertFrom-Json
if(@($manifest.files).Count -ne 8){throw 'Expected eight imported packets.'}
foreach($entry in $manifest.files){
    $file=Join-Path $rules $entry.name
    if((Get-FileHash -LiteralPath $file).Hash -ne $entry.sha256 -or (Get-Item $file).Length -ne $entry.bytes){throw "Rule integrity failed: $($entry.name)"}
}
$orientations=@{
    builder='CYVEXLY_BUILDER_ORIENTATION_DOCUMENT.md';supervisor='CYVEXLY_SUPERVISOR_ORIENTATION_DOCUMENT.md'
    auditor='CYVEXLY_AUDITOR_ORIENTATION_DOCUMENT.md';council='CYVEXLY_COUNCIL_ORIENTATION_DOCUMENT.md'
    pm='CYVEXLY_PM_ORIENTATION_DOCUMENT.md';functional='CYVEXLY_FUNCTIONAL_SMOKE_AUDITOR_ORIENTATION_DOCUMENT.md'
}
foreach($role in $orientations.Keys){
    $orientation=Join-Path $workspace $orientations[$role]
    $config=Get-Content (Join-Path $workspace ".codex/agents/cyvexly_$role.toml") -Raw
    if(-not (Test-Path $orientation) -or -not $config.Contains($orientations[$role])){throw "Role orientation missing: $role"}
    if($config -match '(?m)^(model|model_reasoning_effort)\s*='){throw "Role pins Owner model: $role"}
    foreach($field in @('name','description','developer_instructions')){if($config -notmatch "(?m)^$field\s*="){throw "Role missing field: $role $field"}}
}
$retired=@('Autonomous_Build_Reasoning_Guidelines_v23_2_DRAFT_Universal_Sandbox_Orientation.md',
'Independent_Forensic_Auditor_Guidelines_v5_0_DRAFT_Universal_Sandbox_Orientation.md',
'Product_Quality_Assurance_and_Methods_Council_Guidelines_v5_0_DRAFT_Universal_Sandbox_Orientation.md',
'EDUAILENZ_BUILDER_SUPERVISOR_PROMPT.md',
'.codex/roles/scripts/Claim-BuilderLock.ps1','.codex/roles/scripts/Release-BuilderLock.ps1')
foreach($file in $retired){if(Test-Path (Join-Path $workspace $file)){throw "Retired file still present: $file"}}
$liveFiles=@(Get-ChildItem (Join-Path $workspace '.codex/agents') -Filter '*.toml')+
    @(Get-ChildItem $workspace -Filter '*ORIENTATION_DOCUMENT.md')+
    @(Get-Item (Join-Path $workspace 'AGENTS.md'),(Join-Path $lane 'CYVEXLY_ENVIRONMENT.md'),(Join-Path $lane 'CYVEXLY_ROLE_RULES_MAPPING.md'))
foreach($file in $liveFiles){
    $text=Get-Content $file.FullName -Raw
    if($text -match 'DRAFT_Universal|EDUAILENZ_BUILDER_SUPERVISOR_PROMPT|Claim-BuilderLock\.ps1|Release-BuilderLock\.ps1'){throw "Retired live reference: $($file.Name)"}
}
$helperCount=0
foreach($file in Get-ChildItem $PSScriptRoot -Filter '*.ps1'){
    $tokens=$null;$errors=$null
    [Management.Automation.Language.Parser]::ParseFile($file.FullName,[ref]$tokens,[ref]$errors)|Out-Null
    if($errors.Count){throw "Helper syntax error: $($file.Name)"};$helperCount++
}
& (Join-Path $PSScriptRoot 'Test-HotFileCaps.ps1') | Out-Null
[pscustomobject]@{status='PASS';verifiedPackets=8;orientations=6;retiredFilesAbsent=6;parsedHelpers=$helperCount;hotFiles='PASS'}|ConvertTo-Json
