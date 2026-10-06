Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")
$width = $src.Width
$height = $src.Height
$out = New-Object System.Drawing.Bitmap($width, $height)

# Define protected boxes where light gray belongs to the 3D model:
# Bank pediment/columns: x:[420, 580], y:[595, 712]
# Factory building: x:[420, 610], y:[60, 195]
# Construction frame: x:[650, 815], y:[190, 360]
# Warehouse: x:[655, 860], y:[550, 715]
# Laptop/books: x:[180, 335], y:[195, 335]
# Center cube: x:[420, 580], y:[360, 520]

function IsProtectedObject($x, $y) {
    if ($x -ge 425 -and $x -le 575 -and $y -ge 595 -and $y -le 712) { return $true } # Bank
    if ($x -ge 420 -and $x -le 610 -and $y -ge 65 -and $y -le 195) { return $true }  # Factory
    if ($x -ge 650 -and $x -le 815 -and $y -ge 195 -and $y -le 360) { return $true } # Construction
    if ($x -ge 660 -and $x -le 860 -and $y -ge 550 -and $y -le 715) { return $true } # Warehouse
    if ($x -ge 185 -and $x -le 335 -and $y -ge 200 -and $y -le 335) { return $true } # Education
    if ($x -ge 425 -and $x -le 580 -and $y -ge 365 -and $y -le 520) { return $true } # Cube
    return $false
}

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $c = $src.GetPixel($x, $y)
        $r = [int]$c.R; $g = [int]$c.G; $b = [int]$c.B
        $max = [Math]::Max($r, [Math]::Max($g, $b))
        $min = [Math]::Min($r, [Math]::Min($g, $b))
        $diff = $max - $min

        # If it has significant color (saturation), keep it (neon lines, badges, icons, colored parts)
        $isColor = ($diff -ge 14)
        
        # If it is dark enough to be an illustration detail (dark gray/black)
        $isDark = ($max -le 175)

        # If it's inside a protected 3D model
        $isProt = IsProtectedObject $x $y

        if ($isColor -or $isDark -or $isProt) {
            # Keep original pixel
            $out.SetPixel($x, $y, $c)
        } else {
            # Background or unwanted shadow/blurry patch -> Pure White!
            $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
        }
    }
}

$out.Save("c:\Jupical\scratch\test_clean_full.png", [System.Drawing.Imaging.ImageFormat]::Png)
$out.Dispose()
$src.Dispose()
Write-Host "Saved test_clean_full.png"
