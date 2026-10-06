Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg")

# Find blue icon circles of chips:
# The blue circle has strong blue: R < 30, G in 100..160, B > 230
for ($y = 0; $y -lt $src.Height; $y++) {
    for ($x = 0; $x -lt $src.Width; $x++) {
        $c = $src.GetPixel($x, $y)
        if ($c.B -gt 220 -and $c.R -lt 40 -and $c.G -gt 90 -and $c.G -lt 160) {
            # Found icon pixel
            # Write-Host "Blue icon at $x, $y (R=$($c.R), G=$($c.G), B=$($c.B))"
        }
    }
}

# Let's find each pill's bounding box around its blue icon
function Find-Pill($startX, $startY, $name) {
    # Scan bounding box
    $minX = $startX - 30; $maxX = $startX + 180
    $minY = $startY - 25; $maxY = $startY + 25
    Write-Host "Pill $name estimated: X=$minX..$maxX, Y=$minY..$maxY"
}

$src.Dispose()
