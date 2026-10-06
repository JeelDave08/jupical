Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\crop_5_fin.png")
$out = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        $r = [int]$c.R; $g = [int]$c.G; $b = [int]$c.B
        $max = [Math]::Max($r, [Math]::Max($g, $b))
        $min = [Math]::Min($r, [Math]::Min($g, $b))
        $diff = $max - $min

        if ($diff -le 12 -and $min -ge 220) {
            $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
        } else {
            $out.SetPixel($x, $y, $c)
        }
    }
}

$out.Save("c:\Jupical\scratch\test_clean_fin.png", [System.Drawing.Imaging.ImageFormat]::Png)
$out.Dispose()
$bmp.Dispose()
Write-Host "Saved test_clean_fin.png"
