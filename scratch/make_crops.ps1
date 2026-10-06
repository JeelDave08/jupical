Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile("c:\Jupical\scratch\user_uploaded.jpg")

$crops = @(
    @{name="1_mfg"; rect=New-Object System.Drawing.Rectangle(380, 0, 280, 240)},
    @{name="2_edu"; rect=New-Object System.Drawing.Rectangle(100, 160, 260, 240)},
    @{name="3_const"; rect=New-Object System.Drawing.Rectangle(620, 160, 280, 260)},
    @{name="4_integ"; rect=New-Object System.Drawing.Rectangle(80, 520, 280, 240)},
    @{name="5_fin"; rect=New-Object System.Drawing.Rectangle(360, 600, 300, 187)},
    @{name="6_inv"; rect=New-Object System.Drawing.Rectangle(620, 520, 300, 250)},
    @{name="7_center"; rect=New-Object System.Drawing.Rectangle(340, 340, 344, 300)}
)

foreach ($c in $crops) {
    $bmp = $src.Clone($c.rect, $src.PixelFormat)
    $bmp.Save("c:\Jupical\scratch\crop_$($c.name).png", [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

$src.Dispose()
Write-Host "Crops saved successfully."
