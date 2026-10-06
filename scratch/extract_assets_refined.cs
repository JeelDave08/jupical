using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

public class AssetRefiner
{
    public static void Main()
    {
        string refPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg";
        string outDir = @"d:\jupical\public\hero";
        Directory.CreateDirectory(outDir);

        using (Bitmap src = new Bitmap(refPath))
        {
            Console.WriteLine(string.Format("Source image size: {0}x{1}", src.Width, src.Height));

            // 1. Education
            // School building: Top center
            ExtractCleanIsland(src, "island-education", new Rectangle(365, 100, 285, 200), outDir,
                (gx, gy) => {
                    // Exclude pill if above gy 110, or cube top corner if below gy 290 and inside cube
                    if (gy > 280 && gx > 475 && gx < 525 && gy > 280 + (gx - 475)) return true;
                    if (gy > 285) return true; // prevent touching cube
                    return false;
                });

            // 2. Manufacturing
            // Factory: Top left
            ExtractCleanIsland(src, "island-manufacturing", new Rectangle(55, 195, 290, 270), outDir,
                (gx, gy) => {
                    // Exclude pill in top area (gx 100..290, gy < 225)
                    if (gy < 225 && gx >= 100 && gx <= 290 && (gx < 150 || gy < 210)) return true;
                    // Exclude dotted line going to center at bottom right of island
                    if (gx > 270 && gy > 335) return true;
                    return false;
                });

            // 3. Construction
            // Crane + frame: Top right
            ExtractCleanIsland(src, "island-construction", new Rectangle(640, 205, 305, 280), outDir,
                (gx, gy) => {
                    // Exclude pill in top area (gx 750..950, gy < 235)
                    if (gy < 235 && gx >= 750) return true;
                    // Exclude dotted line going to center at bottom left of island
                    if (gx < 735 && gy > 345) return true;
                    return false;
                });

            // 4. Integration
            // Server racks, cloud, laptop: Bottom left
            ExtractCleanIsland(src, "island-integration", new Rectangle(60, 580, 295, 240), outDir,
                (gx, gy) => {
                    // Exclude pill in top area (gx 85..280, gy < 600)
                    if (gy < 600 && gx >= 85 && gx <= 280 && gy < 595) return true;
                    // Exclude dotted line going to center at top right of island
                    if (gx > 285 && gy < 660) return true;
                    return false;
                });

            // 5. Inventory
            // Warehouse racks, screen, forklifts: Bottom right
            ExtractCleanIsland(src, "island-inventory", new Rectangle(670, 530, 310, 255), outDir,
                (gx, gy) => {
                    // Exclude pill in top area (gx 800..980, gy < 560)
                    if (gy < 560 && gx >= 800 && (gx > 880 || gy < 545)) return true;
                    // Exclude dotted line going to center at top left of island
                    if (gx < 735 && gy < 660) return true;
                    return false;
                });

            // 6. Finance
            // Bank, gold coins, green arrow: Bottom center
            ExtractCleanIsland(src, "island-finance", new Rectangle(360, 685, 275, 230), outDir,
                (gx, gy) => {
                    // Exclude pill in bottom area (gx 450..610, gy > 860)
                    if (gy > 860 && gx >= 450) return true;
                    // Exclude dotted line going to center at top center of island
                    if (gy < 725 && gx >= 480 && gx <= 520) return true;
                    return false;
                });

            // 7. Base
            ExtractCleanBase(src, Path.Combine(outDir, "base.png"));
        }
    }

    private static void ExtractCleanIsland(Bitmap src, string name, Rectangle crop, string outDir, Func<int, int, bool> isExcludedGlobal)
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

                    if (isExcludedGlobal(gx, gy))
                    {
                        cropped.SetPixel(x, y, Color.Transparent);
                        continue;
                    }

                    Color p = cropped.GetPixel(x, y);
                    int r = p.R, g = p.G, b = p.B;
                    int max = Math.Max(r, Math.Max(g, b));
                    int min = Math.Min(r, Math.Min(g, b));
                    int satDiff = max - min;

                    // Clear white background and faint gray shadows
                    if (min >= 248 && satDiff < 8)
                    {
                        cropped.SetPixel(x, y, Color.Transparent);
                    }
                    else if (min >= 230 && satDiff < 14)
                    {
                        double alpha = (255.0 - min) / 25.0;
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

    private static void ExtractCleanBase(Bitmap src, string outPath)
    {
        // Concentric glowing circular base
        // Region: X: 340..660, Y: 330..570
        Rectangle crop = new Rectangle(345, 335, 310, 235);
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
            double ry = h * 0.45;

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

                    if (distSq > 1.05 || (min >= 248 && satDiff < 8))
                    {
                        bmp.SetPixel(x, y, Color.Transparent);
                    }
                    else if (distSq > 0.92)
                    {
                        double alpha = (1.05 - distSq) / 0.13;
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
