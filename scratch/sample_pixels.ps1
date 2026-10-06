Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")
Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

# Sample some background pixels
$corners = @(
    @{x=10; y=10},
    @{x=$bmp.Width - 10; y=10},
    @{x=10; y=$bmp.Height - 10},
    @{x=$bmp.Width - 10; y=$bmp.Height - 10},
    @{x=[int]($bmp.Width / 2); y=10},
    @{x=200; y=150}, # Near Education
    @{x=512; y=120}  # Near Manufacturing
)

foreach ($pt in $corners) {
    $c = $bmp.GetPixel($pt.x, $pt.y)
    Write-Host "Pixel ($($pt.x), $($pt.y)): R=$($c.R), G=$($c.G), B=$($c.B)"
}

$bmp.Dispose()
