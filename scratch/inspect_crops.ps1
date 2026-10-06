Add-Type -AssemblyName System.Drawing

function Inspect-File($path) {
    if (Test-Path $path) {
        $img = [System.Drawing.Image]::FromFile((Resolve-Path $path))
        Write-Host "$path : $($img.Width)x$($img.Height), PixelFormat: $($img.PixelFormat)"
        $img.Dispose()
    }
}

Inspect-File "scratch\crop_1_mfg.png"
Inspect-File "scratch\crop_2_edu.png"
Inspect-File "scratch\crop_3_const.png"
Inspect-File "scratch\crop_4_integ.png"
Inspect-File "scratch\crop_5_fin.png"
Inspect-File "scratch\crop_6_inv.png"
Inspect-File "scratch\crop_7_center.png"
Inspect-File "public\section_base.png"
Inspect-File "public\section_clean.png"
