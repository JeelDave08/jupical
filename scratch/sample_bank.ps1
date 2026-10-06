Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\crop_5_fin.png")

Write-Host "Sampling bank roof and columns..."
# Bank roof is around x=100-160, y=10-50
for ($y = 10; $y -le 50; $y += 10) {
    for ($x = 100; $x -le 160; $x += 20) {
        $c = $bmp.GetPixel($x, $y)
        $diff = [Math]::Max($c.R, [Math]::Max($c.G, $c.B)) - [Math]::Min($c.R, [Math]::Min($c.G, $c.B))
        Write-Host "Roof ($x, $y): R=$($c.R) G=$($c.G) B=$($c.B) diff=$diff"
    }
}

# Bank columns are around x=80-140, y=60-100
for ($y = 60; $y -le 100; $y += 20) {
    $c = $bmp.GetPixel(110, $y)
    $diff = [Math]::Max($c.R, [Math]::Max($c.G, $c.B)) - [Math]::Min($c.R, [Math]::Min($c.G, $c.B))
    Write-Host "Column (110, $y): R=$($c.R) G=$($c.G) B=$($c.B) diff=$diff"
}

# Shadow under platform is around x=60-100, y=90-120
for ($y = 90; $y -le 120; $y += 10) {
    $c = $bmp.GetPixel(80, $y)
    $diff = [Math]::Max($c.R, [Math]::Max($c.G, $c.B)) - [Math]::Min($c.R, [Math]::Min($c.G, $c.B))
    Write-Host "Under platform (80, $y): R=$($c.R) G=$($c.G) B=$($c.B) diff=$diff"
}

$bmp.Dispose()
