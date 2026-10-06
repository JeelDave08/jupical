Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("c:\Jupical\public\journey_visual_blue.png")

# The road has bright cyan center (high Green & high Blue: R: 50-180, G: 200-255, B: 240-255)
# Let's find the nearest track center near each card and along the 8 loop

function Find-TrackCenterNear($approxX, $approxY, $radius, $label) {
    $brightest = $null
    $maxBrightness = 0
    for ($y = [math]::Max(0, $approxY - $radius); $y -lt [math]::Min($bmp.Height, $approxY + $radius); $y += 2) {
        for ($x = [math]::Max(0, $approxX - $radius); $x -lt [math]::Min($bmp.Width, $approxX + $radius); $x += 2) {
            $c = $bmp.GetPixel($x, $y)
            # Center of track has very bright cyan/white highlight
            if ($c.B -gt 210 -and $c.G -gt 180) {
                $score = $c.R + $c.G + $c.B
                if ($score -gt $maxBrightness) {
                    $maxBrightness = $score
                    $brightest = [PSCustomObject]@{ X = $x; Y = $y; Score = $score; R = $c.R; G = $c.G; B = $c.B }
                }
            }
        }
    }
    if ($brightest) {
        Write-Host "$label Track Center: $($brightest.X), $($brightest.Y) (Score: $($brightest.Score))"
    } else {
        Write-Host "$label Track Center: not found"
    }
}

Write-Host "--- Milestone Track Points ---"
Find-TrackCenterNear 400 700 80 "2016 Track (near launch ramp entry)"
Find-TrackCenterNear 480 620 60 "Crossing track (near 2016)"
Find-TrackCenterNear 350 420 80 "2018 Track (near 2018 card)"
Find-TrackCenterNear 440 370 80 "Top of left loop"
Find-TrackCenterNear 580 480 80 "Planet right side descent"
Find-TrackCenterNear 630 650 80 "2020 Track (near 2020 card)"
Find-TrackCenterNear 810 550 80 "Right loop curve"
Find-TrackCenterNear 720 360 80 "2024 Track (near 2024 card)"
Find-TrackCenterNear 810 280 80 "Heading toward 2026"
Find-TrackCenterNear 920 180 80 "2026 Track (near 2026 card)"
Find-TrackCenterNear 1000 130 80 "Exit toward 2030"

$bmp.Dispose()
