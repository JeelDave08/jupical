Add-Type -AssemblyName System.Drawing

function Get-ImageInfo($path) {
    $fullPath = Join-Path (Get-Location) $path
    $img = [System.Drawing.Image]::FromFile($fullPath)
    Write-Host "$path : $($img.Width) x $($img.Height)"
    $img.Dispose()
}

Get-ImageInfo "public\jupical_hero_right_exact.png"
Get-ImageInfo "scratch\user_uploaded.jpg"
Get-ImageInfo "public\jupical-logo.png"
