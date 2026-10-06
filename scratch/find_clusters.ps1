Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg")

# Find connected components of blue circle icon in media_1791269975050.jpg
$w = $src.Width; $h = $src.Height
$grid = New-Object 'int[,]' $w, $h

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $c = $src.GetPixel($x, $y)
        # Blue circle: Blue is dominant
        if ($c.B -gt 210 -and $c.R -lt 50 -and $c.G -gt 80 -and $c.G -lt 160) {
            $grid[$x, $y] = 1
        }
    }
}

# Group into clusters
for ($y = 0; $y -lt $h; $y += 5) {
    for ($x = 0; $x -lt $w; $x += 5) {
        if ($grid[$x, $y] -eq 1) {
            # Find bbox around (x, y)
            $minX = $x; $maxX = $x; $minY = $y; $maxY = $y
            for ($dy = -30; $dy -le 30; $dy++) {
                for ($dx = -30; $dx -le 30; $dx++) {
                    $nx = $x + $dx; $ny = $y + $dy
                    if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h) {
                        if ($grid[$nx, $ny] -eq 1) {
                            if ($nx -lt $minX) { $minX = $nx }
                            if ($nx -gt $maxX) { $maxX = $nx }
                            if ($ny -lt $minY) { $minY = $ny }
                            if ($ny -gt $maxY) { $maxY = $ny }
                        }
                    }
                }
            }
            if (($maxX - $minX) -gt 10 -and ($maxY - $minY) -gt 10) {
                Write-Host "Blue icon cluster: X=$minX..$maxX (Center: $([int](($minX+$maxX)/2))), Y=$minY..$maxY (Center: $([int](($minY+$maxY)/2)))"
            }
        }
    }
}

$src.Dispose()
