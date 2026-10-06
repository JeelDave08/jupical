using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

public class AssetExtractorFinal
{
    public static void Main()
    {
        string refPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg";
        string outDir = @"d:\jupical\public\hero";
        Directory.CreateDirectory(outDir);

        using (Bitmap src = new Bitmap(refPath))
        {
            Console.WriteLine(string.Format("Source image size: {0}x{1}", src.Width, src.Height));

            // 1. Education (Top center)
            // Island platform and school building: X=370..635, Y=75..240
            ExtractIslandClean(src, "island-education", new Rectangle(370, 75, 265, 165), outDir,
                (gx, gy) => {
                    // Remove pill if above y 85 in center
                    if (gy < 85 && gx > 440 && gx < 590) return true;
                    // Remove dotted line below y 232
                    if (gy > 232 && gx > 490 && gx < 525) return true;
                    return false;
                });

            // 2. Manufacturing (Top left)
            // Factory + chimneys: X=65..325, Y=160..365
            ExtractIslandClean(src, "island-manufacturing", new Rectangle(65, 160, 260, 205), outDir,
                (gx, gy) => {
                    // Remove pill in top area (gx 100..280, gy < 185)
                    if (gy < 185 && gx >= 100 && gx <= 280) return true;
                    // Remove dotted line going to center (gx > 275, gy > 300)
                    if (gx > 275 && gy > 300) return true;
                    return false;
                });

            // 3. Construction (Top right)
            // Crane + frame + truck: X=650..950, Y=165..375
            ExtractIslandClean(src, "island-construction", new Rectangle(650, 165, 300, 210), outDir,
                (gx, gy) => {
                    // Remove pill in top area (gx 750..950, gy < 190)
                    if (gy < 190 && gx >= 750) return true;
                    // Remove dotted line going to center (gx < 725, gy > 310)
                    if (gx < 725 && gy > 310) return true;
                    return false;
                });

            // 4. Integration (Bottom left)
            // Server racks + cloud + laptop: X=65..325, Y=455..650
            ExtractIslandClean(src, "island-integration", new Rectangle(65, 455, 260, 195), outDir,
                (gx, gy) => {
                    // Remove pill in top area (gx 85..270, gy < 475)
                    if (gy < 475 && gx >= 85 && gx <= 270) return true;
                    // Remove dotted line going to center (gx > 270, gy < 530)
                    if (gx > 270 && gy < 530) return true;
                    return false;
                });

            // 5. Inventory (Bottom right)
            // Warehouse racks + forklifts: X=675..975, Y=430..625
            ExtractIslandClean(src, "island-inventory", new Rectangle(675, 430, 300, 195), outDir,
                (gx, gy) => {
                    // Remove pill in top area (gx 800..975, gy < 450)
                    if (gy < 450 && gx >= 800) return true;
                    // Remove dotted line going to center (gx < 730, gy < 530)
                    if (gx < 730 && gy < 530) return true;
                    return false;
                });

            // 6. Finance (Bottom center)
            // Bank + gold coins + green arrow: X=365..630, Y=560..735
            ExtractIslandClean(src, "island-finance", new Rectangle(365, 560, 265, 175), outDir,
                (gx, gy) => {
                    // Remove pill in bottom area (gx 450..610, gy > 720)
                    if (gy > 720 && gx >= 450) return true;
                    // Remove dotted line going to center (gx >= 490 && gx <= 525, gy < 585)
                    if (gy < 585 && gx >= 490 && gx <= 525) return true;
                    return false;
                });

            // 7. Base (Center platform)
            ExtractBaseClean(src, Path.Combine(outDir, "base.png"));
        }
    }

    private static void ExtractIslandClean(Bitmap src, string name, Rectangle crop, string outDir, Func<int, int, bool> isExcludedGlobal)
    {
        using (Bitmap cropped = new Bitmap(crop.Width, crop.Height, PixelFormat.Format32bppArgb))
        {
            using (Graphics g = Graphics.FromImage(cropped))
            {
                g.DrawImage(src, new Rectangle(0, 0, crop.Width, crop.Height), crop, GraphicsUnit.Pixel);
            }

            int w = cropped.Width;
            int h = cropped.Height;

            for (int y = 0; y < h; y++)
            {
                int gy = crop.Y + y;
                for (int x = 0; x < w; x++)
                {
                    int gx = crop.X + x;

                    if (isExcludedGlobal != null && isExcludedGlobal(gx, gy))
                    {
                        cropped.SetPixel(x, y, Color.Transparent);
                        continue;
                    }

                    Color p = cropped.GetPixel(x, y);
                    int r = p.R, g = p.G, b = p.B;
                    int max = Math.Max(r, Math.Max(g, b));
                    int min = Math.Min(r, Math.Min(g, b));
                    int satDiff = max - min;

                    // Perfect background cleanup
                    if (min >= 249 && satDiff < 7)
                    {
                        cropped.SetPixel(x, y, Color.Transparent);
                    }
                    else if (min >= 235 && satDiff < 14)
                    {
                        double alpha = (255.0 - min) / 20.0;
                        if (alpha <= 0.05)
                        {
                            cropped.SetPixel(x, y, Color.Transparent);
                        }
                        else
                        {
                            if (alpha > 1.0) alpha = 1.0;
                            int a = (int)(alpha * 255);
                            double aD = a / 255.0;
                            int unR = (int)Math.Max(0, Math.Min(255, (r - (1.0 - aD) * 255) / aD));
                            int unG = (int)Math.Max(0, Math.Min(255, (g - (1.0 - aD) * 255) / aD));
                            int unB = (int)Math.Max(0, Math.Min(255, (b - (1.0 - aD) * 255) / aD));
                            cropped.SetPixel(x, y, Color.FromArgb(a, unR, unG, unB));
                        }
                    }
                }
            }

            Bitmap trimmed = Trim(cropped);
            string outPath = Path.Combine(outDir, name + ".png");
            trimmed.Save(outPath, ImageFormat.Png);
            trimmed.Dispose();
            Console.WriteLine("Saved: " + outPath);
        }
    }

    private static void ExtractBaseClean(Bitmap src, string outPath)
    {
        // Concentric glowing circular base
        // Region: X: 345..665, Y: 335..555
        Rectangle crop = new Rectangle(345, 335, 320, 220);
        using (Bitmap bmp = new Bitmap(crop.Width, crop.Height, PixelFormat.Format32bppArgb))
        {
            using (Graphics g = Graphics.FromImage(bmp))
            {
                g.DrawImage(src, new Rectangle(0, 0, crop.Width, crop.Height), crop, GraphicsUnit.Pixel);
            }

            int w = bmp.Width;
            int h = bmp.Height;
            double cx = w / 2.0;
            double cy = h / 2.0 - 5;
            double rx = w * 0.49;
            double ry = h * 0.46;

            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    Color p = bmp.GetPixel(x, y);
                    int r = p.R, g = p.G, b = p.B;

                    double dx = (x - cx) / rx;
                    double dy = (y - cy) / ry;
                    double distSq = dx * dx + dy * dy;

                    int max = Math.Max(r, Math.Max(g, b));
                    int min = Math.Min(r, Math.Min(g, b));
                    int satDiff = max - min;

                    if (distSq > 1.02 || (min >= 248 && satDiff < 8))
                    {
                        bmp.SetPixel(x, y, Color.Transparent);
                    }
                    else if (distSq > 0.90)
                    {
                        double alpha = (1.02 - distSq) / 0.12;
                        if (alpha < 0) alpha = 0;
                        if (alpha > 1) alpha = 1;
                        int a = (int)(alpha * 255);
                        bmp.SetPixel(x, y, Color.FromArgb(a, r, g, b));
                    }
                }
            }

            Bitmap trimmed = Trim(bmp);
            trimmed.Save(outPath, ImageFormat.Png);
            trimmed.Dispose();
            Console.WriteLine("Saved: " + outPath);
        }
    }

    private static Bitmap Trim(Bitmap bmp)
    {
        int minX = bmp.Width, minY = bmp.Height, maxX = 0, maxY = 0;
        for (int y = 0; y < bmp.Height; y++)
        {
            for (int x = 0; x < bmp.Width; x++)
            {
                if (bmp.GetPixel(x, y).A > 10)
                {
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            }
        }

        if (maxX < minX || maxY < minY)
        {
            return (Bitmap)bmp.Clone();
        }

        int w = maxX - minX + 1;
        int h = maxY - minY + 1;
        Bitmap dest = new Bitmap(w, h, PixelFormat.Format32bppArgb);
        using (Graphics g = Graphics.FromImage(dest))
        {
            g.DrawImage(bmp, new Rectangle(0, 0, w, h), new Rectangle(minX, minY, w, h), GraphicsUnit.Pixel);
        }
        return dest;
    }
}
