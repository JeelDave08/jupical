Add-Type -AssemblyName System.Drawing

function Get-ImageInfo($path) {
    $fullPath = Join-Path (Get-Location) $path
    $img = [System.Drawing.Image]::FromFile($fullPath)
    Write-Host "$path : $($img.Width) x $($img.Height), Format: $($img.PixelFormat)"
    $img.Dispose()
}

Get-ImageInfo "public\header-logo.png"
Get-ImageInfo "public\footer-logo.png"
Get-ImageInfo "public\jupical-logo.png"
Get-ImageInfo "public\favicon.png"
Get-ImageInfo "public\favicon.svg"
