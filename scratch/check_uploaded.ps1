Add-Type -AssemblyName System.Drawing

function Get-ImageInfo($path) {
    $img = [System.Drawing.Image]::FromFile($path)
    Write-Host "$path : $($img.Width) x $($img.Height), Format: $($img.PixelFormat)"
    $img.Dispose()
}

Get-ImageInfo "C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg"
Get-ImageInfo "C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269980131.png"
