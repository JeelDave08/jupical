Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")

# Finance is centered horizontally around x=512, y from 580 to 787
$finRect = New-Object System.Drawing.Rectangle(360, 580, 300, 207)
$finCrop = $src.Clone($finRect, $src.PixelFormat)
$finCrop.Save("c:\Jupical\scratch\fin_full.png", [System.Drawing.Imaging.ImageFormat]::Png)
$finCrop.Dispose()
$src.Dispose()
Write-Host "Saved fin_full.png"
