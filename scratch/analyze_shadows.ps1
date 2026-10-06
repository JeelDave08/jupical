Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")
Write-Host "Image size: $($bmp.Width) x $($bmp.Height)"

# Let's count pixel color distribution in background regions
# E.g. top corners, outer edges, between modules
$grayPixels = 0
$whitePixels = 0
$coloredPixels = 0

for ($y = 0; $y -lt $bmp.Height; $y += 4) {
    for ($x = 0; $x -lt $bmp.Width; $x += 4) {
        $c = $bmp.GetPixel($x, $y)
        $r = $c.R; $g = $c.G; $b = $c.B
        if ($r -eq 255 -and $g -eq 255 -and $b -eq 255) {
            $whitePixels++
        } elseif ($r -gt 235 -and $g -gt 235 -and $b -gt 235 -and [Math]::Abs($r - $g) -le 5 -and [Math]::Abs($g - $b) -le 5) {
            # Near white / light gray shadow / smudge
            $grayPixels++
        }
    }
}

Write-Host "Sampled: White=$whitePixels, Light Gray=$grayPixels"
$bmp.Dispose()
