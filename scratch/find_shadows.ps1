Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")

# Find pixels that are grayish shadows: R,G,B between 100 and 240, neutral (low saturation)
$shadowMap = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        $r = [int]$c.R; $g = [int]$c.G; $b = [int]$c.B
        $max = [Math]::Max($r, [Math]::Max($g, $b))
        $min = [Math]::Min($r, [Math]::Min($g, $b))
        $diff = $max - $min
        
        # Shadows: neutral (diff <= 15), but darker than background (max < 245 and min > 60)
        if ($diff -le 18 -and $max -lt 248 -and $min -gt 50) {
            $shadowMap.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 0, 0)) # Red marks shadow
        } else {
            $shadowMap.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
        }
    }
}

$shadowMap.Save("c:\Jupical\scratch\visible_shadows.png", [System.Drawing.Imaging.ImageFormat]::Png)
$shadowMap.Dispose()
$bmp.Dispose()
Write-Host "Saved visible_shadows.png"
