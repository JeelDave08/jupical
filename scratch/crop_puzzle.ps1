Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")
$crop1 = $src.Clone((New-Object System.Drawing.Rectangle(140, 580, 190, 160)), $src.PixelFormat)
$crop1.Save("c:\Jupical\scratch\puzzle_orig.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop1.Dispose()
$src.Dispose()

$cln = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\clean_perfect.png")
$crop2 = $cln.Clone((New-Object System.Drawing.Rectangle(140, 580, 190, 160)), $cln.PixelFormat)
$crop2.Save("c:\Jupical\scratch\puzzle_clean.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop2.Dispose()
$cln.Dispose()

Write-Host "Saved puzzle crops"
