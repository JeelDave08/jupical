Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg")

Write-Host "Width=$($src.Width), Height=$($src.Height)"

# Sample colors along vertical center line x=512
for ($y = 0; $y -lt 768; $y += 20) {
    $c = $src.GetPixel(512, $y)
    Write-Host "Y=$y : R=$($c.R), G=$($c.G), B=$($c.B)"
}
$src.Dispose()
