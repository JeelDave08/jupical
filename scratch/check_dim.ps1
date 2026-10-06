Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")
Write-Host "Width: $($img.Width), Height: $($img.Height)"
$img.Dispose()
