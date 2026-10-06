using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

public class AssetExtractorPerfect
{
    public static void Main()
    {
        string refPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg";
        string outDir = @"d:\jupical\public\hero";
        Directory.CreateDirectory(outDir);

        using (Bitmap src = new Bitmap(refPath))
        {
            // 1. Education (School building)
            // Pill is at X: 440..595, Y: 30..75.
            // Clock tower is at X: 485..505, Y: 60..105 (behind/below pill).
            // School building is X: 375..630, Y: 65..245.
            ExtractIsland(src, "island-education", new Rectangle(370, 60, 270, 185), outDir,
                (gx, gy) => {
                    // Pill chip region: X 440..595, Y < 72 (unless it's the spire tip at 495, 60..72)
                    if (gy <= 72 && gx >= 440 && gx <= 595 && !(gx >= 488 && gx <= 502 && gy >= 60)) return true;
                    // Dotted line at bottom center
                    if (gy >= 235 && gx >= 492 && gx <= 525) return true;
                    return false;
                });

            // 2. Manufacturing (Factory)
            // Pill is at X: 110..275, Y: 110..165.
            // Chimneys are at X: 245..300, Y: 115..205.
            // Factory is at X: 65..315, Y: 115..360.
            ExtractIsland(src, "island-manufacturing", new Rectangle(65, 115, 255, 245), outDir,
                (gx, gy) => {
                    // Pill chip: X: 110..240, Y: 110..165
                    if (gy <= 165 && gx >= 110 && gx <= 242) return true;
                    // Dotted line towards center at bottom right
                    if (gx >= 278 && gy >= 305) return true;
                    return false;
                });

            // 3. Construction (Crane & Frame)
            // Pill is at X: 760..945, Y: 120..175.
            // Crane is at X: 660..760, Y: 120..280.
            // Skyscraper is at X: 730..880, Y: 165..365.
            ExtractIsland(src, "island-construction", new Rectangle(650, 120, 295, 250), outDir,
                (gx, gy) => {
                    // Pill chip: X: 765..950, Y: 120..172
                    if (gy <= 172 && gx >= 765) return true;
                    // Dotted line towards center at bottom left
                    if (gx <= 725 && gy >= 315) return true;
                    return false;
                });

            // 4. Integration (Server racks & Laptop)
            // Pill is at X: 90..265, Y: 395..455.
            // Cloud screen is at X: 215..280, Y: 440..510.
            // Server racks are at X: 115..220, Y: 460..590.
            ExtractIsland(src, "island-integration", new Rectangle(65, 435, 260, 210), outDir,
                (gx, gy) => {
                    // Pill chip: X: 90..265, Y <= 455
                    if (gy <= 455 && gx >= 90 && gx <= 265) return true;
                    // Dotted line towards center at top right
                    if (gx >= 275 && gy <= 525) return true;
                    return false;
                });

            // 5. Inventory (Warehouse)
            // Pill is at X: 810..975, Y: 365..425.
            // Inventory chart screen is at X: 880..935, Y: 430..530.
            // Racks are at X: 730..890, Y: 430..590.
            ExtractIsland(src, "island-inventory", new Rectangle(675, 425, 300, 195), outDir,
                (gx, gy) => {
                    // Pill chip: X: 805..980, Y <= 425
                    if (gy <= 425 && gx >= 805) return true;
                    // Dotted line towards center at top left
                    if (gx <= 730 && gy <= 525) return true;
                    return false;
                });

            // 6. Finance (Bank & Coins)
            // Pill is at X: 460..605, Y: 670..730.
            // Bank is at X: 370..525, Y: 560..710.
            // Gold coins & arrow are at X: 480..590, Y: 560..680.
            ExtractIsland(src, "island-finance", new Rectangle(365, 560, 265, 155), outDir,
                (gx, gy) => {
                    // Pill chip: X: 450..610, Y >= 670
                    if (gy >= 670 && gx >= 450) return true;
                    // Dotted line towards center at top center
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

                    // Clean white background and shadows
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
