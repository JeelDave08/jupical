Add-Type -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class ShadowCleaner
{
    public static void Clean(string inputPath, string outputPath)
    {
        using (Bitmap src = new Bitmap(inputPath))
        {
            int w = src.Width;
            int h = src.Height;
            using (Bitmap dest = new Bitmap(w, h, PixelFormat.Format32bppArgb))
            {
                BitmapData srcData = src.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
                BitmapData destData = dest.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

                int bytes = Math.Abs(srcData.Stride) * h;
                byte[] srcBuffer = new byte[bytes];
                byte[] destBuffer = new byte[bytes];

                Marshal.Copy(srcData.Scan0, srcBuffer, 0, bytes);
                int stride = srcData.Stride;

                for (int y = 0; y < h; y++)
                {
                    int rowOffset = y * stride;
                    for (int x = 0; x < w; x++)
                    {
                        int idx = rowOffset + (x * 4);
                        byte b = srcBuffer[idx + 0];
                        byte g = srcBuffer[idx + 1];
                        byte r = srcBuffer[idx + 2];

                        int max = Math.Max(r, Math.Max(g, b));
                        int min = Math.Min(r, Math.Min(g, b));
                        int diff = max - min;

                        bool isProtected = IsProtected(x, y);
                        bool isColor = (diff >= 12);
                        bool isDark = (max <= 165);

                        if (isColor || isDark || isProtected)
                        {
                            destBuffer[idx + 0] = b;
                            destBuffer[idx + 1] = g;
                            destBuffer[idx + 2] = r;
                            destBuffer[idx + 3] = 255;
                        }
                        else
                        {
                            // Clean pure white background
                            destBuffer[idx + 0] = 255;
                            destBuffer[idx + 1] = 255;
                            destBuffer[idx + 2] = 255;
                            destBuffer[idx + 3] = 255;
                        }
                    }
                }

                Marshal.Copy(destBuffer, 0, destData.Scan0, bytes);

                src.UnlockBits(srcData);
                dest.UnlockBits(destData);
                dest.Save(outputPath, ImageFormat.Png);
            }
        }
    }

    private static bool IsProtected(int x, int y)
    {
        // 1. Manufacturing: Chimneys (x: 445..505, y: 55..140) and Factory building (x: 420..615, y: 140..195)
        if (x >= 445 && x <= 505 && y >= 55 && y <= 140) return true;
        if (x >= 420 && x <= 615 && y >= 140 && y <= 195) return true;

        // 2. Education: Laptop & books (x: 185..335, y: 200..335)
        if (x >= 185 && x <= 335 && y >= 200 && y <= 335) return true;

        // 3. Construction: Frame & slabs (x: 650..815, y: 195..360)
        if (x >= 650 && x <= 815 && y >= 195 && y <= 360) return true;

        // 4. Integration: Puzzle pieces (x: 140..330, y: 580..735)
        if (x >= 140 && x <= 330 && y >= 580 && y <= 735) return true;

        // 5. Finance: Bank pediment, columns, base (x: 420..575, y: 575..712)
        if (x >= 420 && x <= 575 && y >= 575 && y <= 712) return true;

        // 6. Inventory: Warehouse building & stacks (x: 660..860, y: 550..715)
        if (x >= 660 && x <= 860 && y >= 550 && y <= 715) return true;

        // 7. Central Cube: (x: 425..580, y: 365..520)
        if (x >= 425 && x <= 580 && y >= 365 && y <= 520) return true;

        return false;
    }
}
"@ -ReferencedAssemblies System.Drawing

[ShadowCleaner]::Clean("c:\Jupical\scratch\user_uploaded.jpg", "c:\Jupical\scratch\clean_perfect.png")
Write-Host "Pristine cleaned image created at c:\Jupical\scratch\clean_perfect.png"
