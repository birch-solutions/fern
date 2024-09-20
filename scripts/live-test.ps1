param(
    [Parameter(Mandatory=$true)]
    [string]$cli_path,
    
    [Parameter(Mandatory=$true)]
    [string]$token
)

$ErrorActionPreference = "Stop"

$test_dir = New-TemporaryDirectory
Set-Location $test_dir

$env:FERN_TOKEN = $token

Write-Host "Running Fern Commands!"
$DebugPreference = "Continue"
& node $cli_path init --organization fern
& node $cli_path add fern-java-sdk
& node $cli_path add fern-python-sdk
& node $cli_path add fern-postman
& node $cli_path generate --log-level debug
$DebugPreference = "SilentlyContinue"
& node $cli_path register --log-level debug

Remove-Item -Recurse -Force $test_dir

function New-TemporaryDirectory {
    $parent = [System.IO.Path]::GetTempPath()
    [string] $name = [System.Guid]::NewGuid()
    New-Item -ItemType Directory -Path (Join-Path $parent $name)
}