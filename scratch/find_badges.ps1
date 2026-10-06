Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg")

Write-Host "Image dimensions: $($src.Width) x $($src.Height)"

# Scan for blue circular badges: RGB ~ (8, 120, 249) / (0, 117, 255)
for ($y = 0; $y -lt $src.Height; $y += 2) {
    for ($x = 0; $x -lt $src.Width; $x += 2) {
        $c = $src.GetPixel($x, $y)
        if ($c.B -gt 225 -and $c.R -lt 30 -and $c.G -gt 100 -and $c.G -lt 150) {
            Write-Host "Badge pixel at X=$x, Y=$y (R=$($c.R), G=$($c.G), B=$($c.B))"
        }
    }
}
$src.Dispose()
