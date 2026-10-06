Add-Type -AssemblyName System.Drawing

$bmp = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")

$samples = @(
    @{name="Behind Chimneys (left)"; x=240; y=100},
    @{name="Near Chimneys"; x=260; y=180},
    @{name="Behind laptop"; x=330; y=260},
    @{name="Under Education platform"; x=200; y=350},
    @{name="Behind Construction crane"; x=640; y=240},
    @{name="Under Central disc"; x=400; y=570},
    @{name="Under Integration platform"; x=200; y=730},
    @{name="Around Finance bank"; x=420; y=730},
    @{name="Under Inventory warehouse"; x=800; y=720}
)

foreach ($s in $samples) {
    $c = $bmp.GetPixel($s.x, $s.y)
    Write-Host "$($s.name) ($($s.x),$($s.y)): R=$($c.R), G=$($c.G), B=$($c.B)"
}

$bmp.Dispose()
