Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")
$width = $src.Width
$height = $src.Height

# Check histogram of brightness and saturation in the image
$satHistogram = New-Object int[] 256
$valHistogram = New-Object int[] 256

for ($y = 0; $y -lt $height; $y += 2) {
    for ($x = 0; $x -lt $width; $x += 2) {
        $c = $src.GetPixel($x, $y)
        $r = [int]$c.R; $g = [int]$c.G; $b = [int]$c.B
        $max = [Math]::Max($r, [Math]::Max($g, $b))
        $min = [Math]::Min($r, [Math]::Min($g, $b))
        $diff = $max - $min
        $satHistogram[$diff]++
        $valHistogram[$min]++
    }
}

Write-Host "Sampled $(($width/2)*($height/2)) pixels"
# Count pixels with diff <= 12 and min between 200 and 254 (light gray / shadow)
$shadowCount = 0
for ($y = 0; $y -lt $height; $y += 2) {
    for ($x = 0; $x -lt $width; $x += 2) {
        $c = $src.GetPixel($x, $y)
        $r = [int]$c.R; $g = [int]$c.G; $b = [int]$c.B
        $max = [Math]::Max($r, [Math]::Max($g, $b))
        $min = [Math]::Min($r, [Math]::Min($g, $b))
        if (($max - $min) -le 12 -and $min -ge 200 -and $max -lt 255) {
            $shadowCount++
        }
    }
}
Write-Host "Light gray shadow/background pixels: $shadowCount"

$src.Dispose()
