Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg")

function Find-NonWhite([System.Drawing.Rectangle]$rect, $name) {
    $minX = 9999; $minY = 9999; $maxX = 0; $maxY = 0
    for ($y = $rect.Y; $y -lt ($rect.Y + $rect.Height); $y++) {
        for ($x = $rect.X; $x -lt ($rect.X + $rect.Width); $x++) {
            $c = $src.GetPixel($x, $y)
            $diff = [Math]::Max($c.R, [Math]::Max($c.G, $c.B)) - [Math]::Min($c.R, [Math]::Min($c.G, $c.B))
            if ($diff -gt 15 -or ($c.R -lt 240 -and $c.G -lt 240 -and $c.B -lt 240)) {
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
    Write-Host "$name : X=$minX..$maxX (W=$($maxX-$minX+1)), Y=$minY..$maxY (H=$($maxY-$minY+1))"
}

Find-NonWhite (New-Object System.Drawing.Rectangle(350, 70, 320, 180)) "Education"
Find-NonWhite (New-Object System.Drawing.Rectangle(50, 150, 310, 210)) "Manufacturing"
Find-NonWhite (New-Object System.Drawing.Rectangle(640, 150, 320, 220)) "Construction"
Find-NonWhite (New-Object System.Drawing.Rectangle(50, 440, 310, 220)) "Integration"
Find-NonWhite (New-Object System.Drawing.Rectangle(660, 410, 320, 230)) "Inventory"
Find-NonWhite (New-Object System.Drawing.Rectangle(350, 560, 320, 180)) "Finance"
Find-NonWhite (New-Object System.Drawing.Rectangle(320, 320, 380, 240)) "Base"

$src.Dispose()
