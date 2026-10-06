Add-Type -AssemblyName System.Drawing

$logoPath = "C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269980131.png"
$bmp = [System.Drawing.Bitmap]::FromFile($logoPath)
Write-Host "Logo size: $($bmp.Width)x$($bmp.Height), format: $($bmp.PixelFormat)"

# Check corners
$c00 = $bmp.GetPixel(0, 0)
$cCenter = $bmp.GetPixel(512, 512)
Write-Host "Corner pixel: R=$($c00.R), G=$($c00.G), B=$($c00.B), A=$($c00.A)"
Write-Host "Center pixel: R=$($cCenter.R), G=$($cCenter.G), B=$($cCenter.B), A=$($cCenter.A)"

# Find bounding box of non-white pixels
$minX = $bmp.Width; $minY = $bmp.Height; $maxX = 0; $maxY = 0
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        # If blue / non-white
        if ($p.R -lt 230 -or $p.G -lt 230 -or $p.A -lt 200) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}
Write-Host "Logo bbox: minX=$minX, minY=$minY, maxX=$maxX, maxY=$maxY, width=$($maxX - $minX + 1), height=$($maxY - $minY + 1)"
$bmp.Dispose()
