Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")

Write-Host "Analyzing Manufacturing section around x=512..."
for ($y = 0; $y -lt 300; $y += 10) {
    $c = $bmp.GetPixel(512, $y)
    Write-Host "y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
}

$bmp.Dispose()
