$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$portfolio = Join-Path $root "portfolio"
$outFile = Join-Path $root "portfolio.js"

if (!(Test-Path $portfolio)) {
  New-Item -ItemType Directory -Path $portfolio | Out-Null
}

$items = Get-ChildItem -Path $portfolio -File | Where-Object {
  $_.Extension.ToLower() -in @('.png', '.jpg', '.jpeg', '.webp', '.gif')
} | Sort-Object Name | ForEach-Object {
  "portfolio/" + $_.Name
}

$json = ConvertTo-Json -InputObject @($items) -Compress
$content = "window.PORTFOLIO_IMAGES = $json;"
Set-Content -Path $outFile -Value $content -Encoding UTF8

Write-Host "Portfolio atualizado com $(@($items).Count) imagem(ns)." -ForegroundColor Magenta
