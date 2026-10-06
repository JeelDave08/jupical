using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

public class AssetExtractorSupreme
{
    public static void Main()
    {
        string refPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg";
        string outDir = @"d:\jupical\public\hero";
        Directory.CreateDirectory(outDir);

        using (Bitmap src = new Bitmap(refPath))
        {
            // 1. Education
            // School building: X=370..635, Y=80..235.
            // Pill is at X: 440..595, Y: 36..76.
            ExtractIsland(src, "island-education", new Rectangle(370, 80, 265, 155), outDir,
                (gx, gy) => {
                    // Remove pill if above y 76
                    if (gy <= 76) return true;
                    // Remove dotted line at bottom
                    if (gy >= 232 && gx >= 492 && gx <= 525) return true;
                    return false;
                });

            // 2. Manufacturing
            // Factory + chimneys: X=65..325, Y=115..360.
            // Pill is at X: 110..275, Y: 154..202.
            ExtractIsland(src, "island-manufacturing", new Rectangle(65, 115, 260, 245), outDir,
                (gx, gy) => {
                    // Remove pill
                    if (gx >= 110 && gx <= 280 && gy >= 150 && gy <= 204) return true;
                    // Remove dotted line at bottom right
                    if (gx >= 278 && gy >= 305) return true;
                    return false;
                });

            // 3. Construction
            // Crane + frame + truck: X=650..950, Y=120..370.
            // Pill is at X: 755..946, Y: 158..206.
            ExtractIsland(src, "island-construction", new Rectangle(650, 120, 300, 250), outDir,
                (gx, gy) => {
                    // Remove pill
                    if (gx >= 752 && gx <= 950 && gy >= 155 && gy <= 208) return true;
                    // Remove dotted line at bottom left
                    if (gx <= 725 && gy >= 315) return true;
                    return false;
                });

            // 4. Integration
            // Server racks + laptop + cloud: X=65..325, Y=435..650.
            // Pill is at X: 90..275, Y: 528..578.
            ExtractIsland(src, "island-integration", new Rectangle(65, 435, 260, 215), outDir,
                (gx, gy) => {
                    // Remove pill
                    if (gx >= 90 && gx <= 275 && gy >= 528 && gy <= 580) return true;
                    // Remove dotted line at top right
                    if (gx >= 275 && gy <= 525) return true;
                    return false;
                });

            // 5. Inventory
            // Warehouse + forklifts + screen: X=675..975, Y=425..625.
            // Pill is at X: 815..975, Y: 485..535.
            ExtractIsland(src, "island-inventory", new Rectangle(675, 425, 300, 200), outDir,
                (gx, gy) => {
                    // Remove pill
                    if (gx >= 810 && gx <= 975 && gy >= 485 && gy <= 538) return true;
                    // Remove dotted line at top left
                    if (gx <= 730 && gy <= 525) return true;
                    return false;
                });

            // 6. Finance
            // Bank + coins + green arrow: X=365..630, Y=560..720.
            // Pill is at X: 470..605, Y: 668..715.
            ExtractIsland(src, "island-finance", new Rectangle(365, 560, 265, 160), outDir,
                (gx, gy) => {
                    // Remove pill
                    if (gx >= 470 && gx <= 608 && gy >= 668 && gy <= 718) return true;
                    // Remove dotted line at top
                    if (gy <= 585 && gx >= 490 && gx <= 525) return true;
                    return false;
                });

            // 7. Base
            ExtractCleanBase(src, Path.Combine(outDir, "base.png"));
        }
    }

    private static void ExtractIsland(Bitmap src, string name, Rectangle crop, string outDir, Func<int, int, bool> isExcludedGlobal)
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

    private static void ExtractCleanBase(Bitmap src, string outPath)
    {
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
