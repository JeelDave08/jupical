Add-Type -AssemblyName System.Drawing

$bmp1 = [System.Drawing.Bitmap]::FromFile("c:\Jupical\public\jupical_3d_ecosystem.png")
Write-Host "jupical_3d_ecosystem.png: Width=$($bmp1.Width), Height=$($bmp1.Height)"
$bmp1.Dispose()
