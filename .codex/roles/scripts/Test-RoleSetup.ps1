#requires -Version 7.0
[CmdletBinding()]
param()
Set-StrictMode -Version Latest
$ErrorActionPreference='Stop'
$workspace=[IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../../..'))
$lane=Join-Path $workspace 'docs/agent-system/cyvexly'
$rules=Join-Path $lane 'rules'
$teamManifest=Get-Content (Join-Path $lane 'CYVEXLY_TEAM_SETUP_MANIFEST.json') -Raw | ConvertFrom-Json
if($teamManifest.schema -ne 2 -or $teamManifest.team.id -ne 'cyvexly-build-team' -or
    $teamManifest.team.displayName -ne 'Cyvexly Build Team' -or
    $teamManifest.team.activeWebsite -ne 'Cyvexly Studio' -or
    $teamManifest.team.activeSource -ne 'src/app/page.tsx'){
    throw 'Cyvexly Build Team manifest identity is missing or invalid.'
}
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
$agentNames=@{
    builder='cyvexly_build_team_builder';supervisor='cyvexly_build_team_supervisor'
    auditor='cyvexly_build_team_auditor';council='cyvexly_build_team_council'
    pm='cyvexly_build_team_pm';functional='cyvexly_build_team_functional'
}
foreach($role in $orientations.Keys){
    $orientation=Join-Path $workspace $orientations[$role]
    $config=Get-Content (Join-Path $workspace ".codex/agents/cyvexly_$role.toml") -Raw
    if(-not (Test-Path $orientation) -or -not $config.Contains($orientations[$role])){throw "Role orientation missing: $role"}
    if((Get-Content $orientation -Raw) -notmatch 'Cyvexly Build Team'){throw "Role orientation lacks Cyvexly Build Team identity: $role"}
    if($config -notmatch "(?m)^name\s*=\s*`"$([regex]::Escape($agentNames[$role]))`"\r?$"){
        throw "Role agent name is not Cyvexly Build Team scoped: $role"
    }
    if($config -notmatch 'Cyvexly Build Team'){throw "Role config lacks Cyvexly Build Team identity: $role"}
    if($config -match '(?m)^(model|model_reasoning_effort)\s*='){throw "Role pins Owner model: $role"}
    foreach($field in @('name','description','developer_instructions')){if($config -notmatch "(?m)^$field\s*="){throw "Role missing field: $role $field"}}
}
$currentSourceMarkers=@{
    'CYVEXLY_ASSIGNMENT.md'=@('Cyvexly Build Team','Buyer Journey, Proof & Conversion')
    'CYVEXLY_AUDITOR_PM_PROMPT.md'=@('Cyvexly Build Team','Accepted repository source')
    'CYVEXLY_COUNCIL_PM_PROMPT.md'=@('Cyvexly Build Team','BUYER-JOURNEY')
    'CYVEXLY_FUNCTIONAL_PM_PROMPT.md'=@('Cyvexly Build Team','CURRENT ACCEPTED CYVEXLY SOURCE')
    'CYVEXLY_PM_CURRENT_STATE.md'=@('Cyvexly Build Team','Buyer Journey, Proof & Conversion')
    'CYVEXLY_NEXT_PM_HANDOFF.md'=@('Cyvexly Build Team','Chunk 8')
    'CYVEXLY_REVIEW_INDEX.md'=@('Cyvexly Build Team','Independent Forensic Auditor')
    'CYVEXLY_VISION.md'=@('Chunk 8','Buyer Journey, Proof & Conversion')
}
foreach($entry in $currentSourceMarkers.GetEnumerator()){
    $text=Get-Content (Join-Path $lane $entry.Key) -Raw
    foreach($marker in $entry.Value){
        if(-not $text.Contains($marker)){throw "Current Cyvexly source missing marker: $($entry.Key) -> $marker"}
    }
    if($text -match '(?m)^# Team Two Website|Current priority: Chunk 7|STANDING ROLE — HONEYHEARTED|makes the fully functional HoneyHearted storefront the next'){
        throw "Current Cyvexly source retains superseded Team 2 mission: $($entry.Key)"
    }
}
$currentState=Get-Content (Join-Path $lane 'CYVEXLY_CURRENT_STATE.md') -Raw
$acceptedSourceMatches=[regex]::Matches($currentState,'(?m)^\*\*Accepted repository source:\*\* `([0-9a-f]{7,40})`')
if($acceptedSourceMatches.Count -ne 1){
    throw 'Current state must declare exactly one Accepted repository source.'
}
$acceptedSource=$acceptedSourceMatches[0].Groups[1].Value
$resolvedAcceptedSource=(& git -C $workspace rev-parse --verify "$acceptedSource^{commit}" 2>$null).Trim()
if($LASTEXITCODE -ne 0 -or $resolvedAcceptedSource -notmatch '^[0-9a-f]{40}$'){
    throw "Accepted repository source is not independently resolvable: $acceptedSource"
}
$auditorPrompt=Get-Content (Join-Path $lane 'CYVEXLY_AUDITOR_PM_PROMPT.md') -Raw
foreach($marker in @('Start-ReviewRound.ps1','full SHA','Local `HEAD` is not a substitute')){
    if(-not $auditorPrompt.Contains($marker)){
        throw "Auditor PM prompt does not enforce exact-source acquisition: $marker"
    }
}
$startHelper=Get-Content (Join-Path $PSScriptRoot 'Start-ReviewRound.ps1') -Raw
foreach($marker in @('CYVEXLY_CURRENT_STATE.md','Accepted repository source','Local HEAD is not a substitute')){
    if(-not $startHelper.Contains($marker)){
        throw "Review start helper does not enforce accepted-source identity: $marker"
    }
}
$auditorRunner=Get-Content (Join-Path $workspace 'scripts/start-cyvexly-auditor-round.ps1') -Raw
if($auditorRunner -match "\[string\]\`$SourceRef\s*=\s*'HEAD'" -or -not $auditorRunner.Contains('SourceRef parameter is required for Start')){
    throw 'Auditor lifecycle runner must not default SourceRef to local HEAD.'
}
$localHead=(& git -C $workspace rev-parse --verify 'HEAD^{commit}').Trim()
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
[pscustomobject]@{
    status='PASS';team='Cyvexly Build Team';acceptedSource=$resolvedAcceptedSource
    localHead=$localHead;localHeadMatchesAccepted=($localHead -eq $resolvedAcceptedSource)
    verifiedPackets=8;orientations=6;retiredFilesAbsent=6;parsedHelpers=$helperCount;hotFiles='PASS'
}|ConvertTo-Json
