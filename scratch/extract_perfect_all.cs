using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

public class AssetExtractorFinalAll
{
    public static void Main()
    {
        string refPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg";
        string logoPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269980131.png";
        string outDir = @"d:\jupical\public\hero";
        Directory.CreateDirectory(outDir);

        ProcessLogo(logoPath, Path.Combine(outDir, "logo.png"));

        using (Bitmap src = new Bitmap(refPath))
        {
            // 1. Education
            ExtractIsland(src, "island-education", new Rectangle(370, 85, 270, 155), outDir,
                (gx, gy) => {
                    if (gy <= 85) return true;
                    if (gy >= 232 && gx >= 490 && gx <= 525) return true;
                    return false;
                });

            // 2. Manufacturing
            ExtractIsland(src, "island-manufacturing", new Rectangle(65, 115, 260, 245), outDir,
                (gx, gy) => {
                    if (gx >= 110 && gx <= 300 && gy <= 165) return true;
                    if (gx >= 278 && gy >= 305) return true;
                    return false;
                });

            // 3. Construction
            ExtractIsland(src, "island-construction", new Rectangle(650, 120, 300, 250), outDir,
                (gx, gy) => {
                    if (gx >= 755 && gx <= 950 && gy <= 175) return true;
                    if (gx <= 730 && gy >= 315) return true;
                    return false;
                });

            // 4. Integration
            ExtractIsland(src, "island-integration", new Rectangle(65, 435, 260, 215), outDir,
                (gx, gy) => {
                    if (gx >= 85 && gx <= 280 && gy <= 455) return true;
                    if (gx >= 275 && gy <= 525) return true;
                    return false;
                });

            // 5. Inventory
            ExtractIsland(src, "island-inventory", new Rectangle(675, 425, 300, 200), outDir,
                (gx, gy) => {
                    if (gx >= 805 && gx <= 980 && gy <= 425) return true;
                    if (gx <= 735 && gy <= 525) return true;
                    return false;
                });

            // 6. Finance
            ExtractIsland(src, "island-finance", new Rectangle(365, 540, 265, 180), outDir,
                (gx, gy) => {
                    if (gx >= 450 && gx <= 610 && gy >= 660) return true;
                    if (gy <= 585 && gx >= 490 && gx <= 525) return true;
                    return false;
                });

            // 7. Base
            ExtractCleanBase(src, Path.Combine(outDir, "base.png"));
        }
    }

    public static void ProcessLogo(string inputPath, string outputPath)
    {
        using (Bitmap src = new Bitmap(inputPath))
        {
            int minX = src.Width, minY = src.Height, maxX = 0, maxY = 0;
            for (int y = 0; y < src.Height; y++)
            {
                for (int x = 0; x < src.Width; x++)
                {
                    Color c = src.GetPixel(x, y);
                    if (c.A > 20)
                    {
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            int pad = 24;
            minX = Math.Max(0, minX - pad);
            minY = Math.Max(0, minY - pad);
            maxX = Math.Min(src.Width - 1, maxX + pad);
            maxY = Math.Min(src.Height - 1, maxY + pad);

            int w = maxX - minX + 1;
            int h = maxY - minY + 1;
            int size = Math.Max(w, h);
            using (Bitmap square = new Bitmap(size, size, PixelFormat.Format32bppArgb))
            {
                using (Graphics g = Graphics.FromImage(square))
                {
                    g.Clear(Color.Transparent);
                    int offsetX = (size - w) / 2;
                    int offsetY = (size - h) / 2;
                    g.DrawImage(src, new Rectangle(offsetX, offsetY, w, h), new Rectangle(minX, minY, w, h), GraphicsUnit.Pixel);
                }
                square.Save(outputPath, ImageFormat.Png);
            }
            Console.WriteLine("Saved: " + outputPath);
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
