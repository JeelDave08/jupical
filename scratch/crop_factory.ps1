Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")
$rect = New-Object System.Drawing.Rectangle(400, 0, 250, 260)
$crop = $src.Clone($rect, $src.PixelFormat)
$crop.Save("c:\Jupical\scratch\factory_crop.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop.Dispose()
$src.Dispose()
Write-Host "Saved factory_crop.png"
