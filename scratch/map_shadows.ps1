Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")

# Let's inspect where gray shadows exist (R, G, B neutral, value between 180 and 254)
$shadowMap = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        $r = [int]$c.R; $g = [int]$c.G; $b = [int]$c.B
        $diff = [Math]::Max([Math]::Abs($r - $g), [Math]::Max([Math]::Abs($g - $b), [Math]::Abs($r - $b)))
        
        # If it's neutral gray (diff is small) and bright/medium (not black outlines)
        if ($diff -le 14 -and $r -ge 200 -and $r -le 254) {
            $shadowMap.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 0, 0)) # Red marks shadow
        } else {
            $shadowMap.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
        }
    }
}

$shadowMap.Save("c:\Jupical\scratch\shadow_map.png", [System.Drawing.Imaging.ImageFormat]::Png)
$shadowMap.Dispose()
$bmp.Dispose()
Write-Host "Saved shadow_map.png"
