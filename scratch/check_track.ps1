Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("c:\Jupical\public\journey_visual_blue.png")
Write-Host "Dimensions: $($bmp.Width) x $($bmp.Height)"

function Get-BlueHeader($minX, $maxX, $minY, $maxY, $name) {
    # Blue headers on the cards have R: ~30-70, G: ~100-150, B: ~210-255
    $matches = @()
    for ($y = $minY; $y -lt $maxY; $y += 4) {
        for ($x = $minX; $x -lt $maxX; $x += 4) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.B -gt 180 -and $c.R -lt 100 -and $c.G -gt 80 -and $c.G -lt 180) {
                $matches += [PSCustomObject]@{ X = $x; Y = $y }
            }
        }
    }
    if ($matches.Count -gt 0) {
        $avgX = ($matches | Measure-Object -Property X -Average).Average
        $avgY = ($matches | Measure-Object -Property Y -Average).Average
        Write-Host "$name Card Header Center: $([math]::Round($avgX)), $([math]::Round($avgY)) (found $($matches.Count) pixels)"
    } else {
        Write-Host "$name Card: no match in box ($minX,$minY)-($maxX,$maxY)"
    }
}

Get-BlueHeader 400 600 580 720 "2016 Founded"
Get-BlueHeader 230 400 260 400 "2018 Pvt. Ltd."
Get-BlueHeader 580 760 480 640 "2020 Global Expansion"
Get-BlueHeader 540 700 160 300 "2024 Scaling Worldwide"
Get-BlueHeader 760 940 70 200 "2026 Future Growth"

$bmp.Dispose()
