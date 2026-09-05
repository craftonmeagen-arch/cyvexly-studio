#requires -Version 7.0
[CmdletBinding()]
param(
    [Parameter(Mandatory)][ValidateSet('auditor','council','functional')][string]$Role,
    [Parameter(Mandatory)][string]$RoundId,
    [Parameter(Mandatory)][ValidatePattern('^[A-Za-z0-9][A-Za-z0-9._-]{0,100}$')][string]$ReviewId,
    [Parameter(Mandatory)][string]$ReportPath,
    [switch]$ValidateOnly
)
. "$PSScriptRoot/Role-Common.ps1"
$layout=Get-ReviewLayout $Role $RoundId; $identity=Read-RoleIdentity $layout $Role $RoundId
$report=[IO.Path]::GetFullPath($ReportPath)
if (-not $report.StartsWith($layout.logs+[IO.Path]::DirectorySeparatorChar,[StringComparison]::OrdinalIgnoreCase)) {
    throw 'Candidate must be inside this exact run logs directory.'
}
Assert-NoReparse $report; $content=[IO.File]::ReadAllText($report)
if ($content -notmatch "(?m)^REVIEW ID:\s*$([regex]::Escape($ReviewId))\s*$" -or -not $content.Contains($identity.sourceHead)) {
    throw 'Report must contain exact REVIEW ID and reviewed commit SHA.'
}
$publishedDir=Join-Path $layout.reviewRoot "reports/published/$Role"
$published=Join-Path $publishedDir "$ReviewId.md"
$inbox=Join-Path $layout.reviewRoot "exchange/operational-inbox/$Role-$ReviewId.json"
foreach($path in @($layout.current,$layout.archive,$published,$inbox)) { Assert-NoReparse $path }
# Short OS publication transaction, not a repository marker or role-dispatch lock.
$name='CyvexlyPublish'+[Convert]::ToHexString([Security.Cryptography.SHA256]::HashData([Text.Encoding]::UTF8.GetBytes($layout.current)))
$mutex=[Threading.Mutex]::new($false,$name); $held=$false
try {
    try { $held=$mutex.WaitOne(0) } catch [Threading.AbandonedMutexException] { $held=$true }
    if (-not $held) { throw 'Report transaction busy. Candidate preserved; retry publication.' }
    if ((Get-RoleHash $layout.current) -ne $identity.expectedCurrentHash) { throw 'Current report changed since this pass began. Preserve candidate and reconcile unread findings.' }
    if (Test-Path -LiteralPath $published) { throw 'Review ID already used; publication refused.' }
    if ($ValidateOnly) { return [pscustomobject]@{status='VALIDATED WITHOUT PUBLICATION';current=$layout.current;inbox=$inbox} }
    New-Item -ItemType Directory -Force -Path $publishedDir | Out-Null
    if (Test-Path -LiteralPath $layout.current) {
        [IO.File]::AppendAllText($layout.archive,("$([char]10)$([char]10)---$([char]10)$([char]10)"+[IO.File]::ReadAllText($layout.current)),[Text.UTF8Encoding]::new($false))
    }
    [IO.File]::WriteAllText($published,$content,[Text.UTF8Encoding]::new($false))
    $temp=$layout.current+'.'+[guid]::NewGuid().ToString('N')+'.tmp'
    [IO.File]::WriteAllText($temp,$content,[Text.UTF8Encoding]::new($false)); [IO.File]::Move($temp,$layout.current,$true)
    Write-RoleJson $inbox ([ordered]@{role=$Role;reviewId=$ReviewId;sourceHead=$identity.sourceHead;report=$published;publishedAtUtc=[DateTime]::UtcNow.ToString('o')})
    Write-RoleJson (Join-Path $layout.run 'published.json') ([ordered]@{reviewId=$ReviewId;report=$published;sha256=(Get-RoleHash $published)})
    [pscustomobject]@{status='PUBLISHED';current=$layout.current;retainedReport=$published;inbox=$inbox} | ConvertTo-Json
} finally { if ($held) { $mutex.ReleaseMutex() }; $mutex.Dispose() }
