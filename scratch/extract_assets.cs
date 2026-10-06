using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;

public class AssetExtractor
{
    public static void Main()
    {
        string refPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg";
        string logoPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269980131.png";
        string outDir = @"d:\jupical\public\hero";
        Directory.CreateDirectory(outDir);

        ProcessLogo(logoPath, Path.Combine(outDir, "logo.png"));
        ProcessHero(refPath, outDir);
    }

    public static void ProcessLogo(string inputPath, string outputPath)
    {
        using (Bitmap src = new Bitmap(inputPath))
        {
            // Find non-transparent bounds
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

            Console.WriteLine(string.Format("Logo bounds: ({0},{1}) to ({2},{3}) -> {4}x{5}", minX, minY, maxX, maxY, maxX - minX + 1, maxY - minY + 1));
            int pad = 20;
            minX = Math.Max(0, minX - pad);
            minY = Math.Max(0, minY - pad);
            maxX = Math.Min(src.Width - 1, maxX + pad);
            maxY = Math.Min(src.Height - 1, maxY + pad);

            int w = maxX - minX + 1;
            int h = maxY - minY + 1;
            // Make it square
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

    public static void ProcessHero(string inputPath, string outDir)
    {
        using (Bitmap src = new Bitmap(inputPath))
        {
            int w = src.Width;
            int h = src.Height;
            Console.WriteLine(string.Format("Hero size: {0}x{1}", w, h));

            // Extract each of the 6 islands:
            // 1. Education: School building (top center)
            ExtractIsland(src, "island-education", new Rectangle(360, 85, 275, 175), new Rectangle[] {
                new Rectangle(410, 0, 160, 65)
            }, outDir);

            // 2. Manufacturing: Factory with chimneys (top left)
            ExtractIsland(src, "island-manufacturing", new Rectangle(50, 140, 275, 235), new Rectangle[] {
                new Rectangle(70, 80, 200, 70),
                new Rectangle(260, 310, 100, 100)
            }, outDir);

            // 3. Construction: Crane and steel frame (top right)
            ExtractIsland(src, "island-construction", new Rectangle(630, 140, 290, 235), new Rectangle[] {
                new Rectangle(730, 80, 200, 70),
                new Rectangle(600, 310, 80, 100)
            }, outDir);

            // 4. Integration: Server racks & laptop (bottom left)
            ExtractIsland(src, "island-integration", new Rectangle(50, 525, 285, 220), new Rectangle[] {
                new Rectangle(60, 470, 200, 65),
                new Rectangle(250, 500, 100, 80)
            }, outDir);

            // 5. Inventory: Warehouse & forklifts (bottom right)
            ExtractIsland(src, "island-inventory", new Rectangle(645, 515, 295, 225), new Rectangle[] {
                new Rectangle(770, 450, 200, 65),
                new Rectangle(610, 500, 80, 80)
            }, outDir);

            // 6. Finance: Bank & coins (bottom center)
            ExtractIsland(src, "island-finance", new Rectangle(360, 640, 280, 145), new Rectangle[] {
                new Rectangle(440, 780, 160, 60),
                new Rectangle(470, 580, 60, 60)
            }, outDir);

            // Base: Glowing round platform
            ExtractBase(src, Path.Combine(outDir, "base.png"));
        }
    }

    private static void ExtractIsland(Bitmap src, string name, Rectangle crop, Rectangle[] exclusions, string outDir)
    {
        using (Bitmap cropped = new Bitmap(crop.Width, crop.Height, PixelFormat.Format32bppArgb))
        {
            using (Graphics g = Graphics.FromImage(cropped))
            {
                g.DrawImage(src, new Rectangle(0, 0, crop.Width, crop.Height), crop, GraphicsUnit.Pixel);
            }

            CleanWhiteBackground(cropped, crop, exclusions);

            Bitmap trimmed = TrimTransparent(cropped);
            string outPath = Path.Combine(outDir, name + ".png");
            trimmed.Save(outPath, ImageFormat.Png);
            trimmed.Dispose();
            Console.WriteLine("Saved: " + outPath);
        }
    }

    private static void CleanWhiteBackground(Bitmap bmp, Rectangle globalRect, Rectangle[] exclusions)
    {
        int w = bmp.Width;
        int h = bmp.Height;

        for (int y = 0; y < h; y++)
        {
            int globalY = globalRect.Y + y;
            for (int x = 0; x < w; x++)
            {
                int globalX = globalRect.X + x;
                Color p = bmp.GetPixel(x, y);

                bool isExcluded = false;
                if (exclusions != null)
                {
                    foreach (var exc in exclusions)
                    {
                        if (exc.Contains(globalX, globalY))
                        {
                            isExcluded = true;
                            break;
                        }
                    }
                }

                if (isExcluded)
                {
                    bmp.SetPixel(x, y, Color.Transparent);
                    continue;
                }

                int r = p.R, g = p.G, b = p.B;
                int max = Math.Max(r, Math.Max(g, b));
                int min = Math.Min(r, Math.Min(g, b));
                int satDiff = max - min;

                // Thresholding white and soft background shadows
                if (min > 248 && satDiff < 8)
                {
                    bmp.SetPixel(x, y, Color.Transparent);
                }
                else if (min > 232 && satDiff < 15)
                {
                    double alphaFactor = (255.0 - min) / 23.0;
                    if (alphaFactor < 0) alphaFactor = 0;
                    if (alphaFactor > 1) alphaFactor = 1;
                    int a = (int)(alphaFactor * 255);
                    if (a < 8)
                    {
                        bmp.SetPixel(x, y, Color.Transparent);
                    }
                    else
                    {
                        // Unmultiply white
                        double alphaD = a / 255.0;
                        int unR = (int)Math.Max(0, Math.Min(255, (r - (1.0 - alphaD) * 255) / alphaD));
                        int unG = (int)Math.Max(0, Math.Min(255, (g - (1.0 - alphaD) * 255) / alphaD));
                        int unB = (int)Math.Max(0, Math.Min(255, (b - (1.0 - alphaD) * 255) / alphaD));
                        bmp.SetPixel(x, y, Color.FromArgb(a, unR, unG, unB));
                    }
                }
            }
        }
    }

    private static void ExtractBase(Bitmap src, string outPath)
    {
        Rectangle baseRect = new Rectangle(330, 320, 370, 230);
        using (Bitmap bmp = new Bitmap(baseRect.Width, baseRect.Height, PixelFormat.Format32bppArgb))
        {
            using (Graphics g = Graphics.FromImage(bmp))
            {
                g.DrawImage(src, new Rectangle(0, 0, baseRect.Width, baseRect.Height), baseRect, GraphicsUnit.Pixel);
            }

            int w = bmp.Width;
            int h = bmp.Height;
            double centerX = w / 2.0;
            double centerY = h / 2.0 + 8;
            double radiusX = w * 0.49;
            double radiusY = h * 0.48;

            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    Color p = bmp.GetPixel(x, y);
                    int r = p.R, g = p.G, b = p.B;

                    double dx = (x - centerX) / radiusX;
                    double dy = (y - centerY) / radiusY;
                    double distSq = dx * dx + dy * dy;

                    int max = Math.Max(r, Math.Max(g, b));
                    int min = Math.Min(r, Math.Min(g, b));
                    int satDiff = max - min;

                    if (distSq > 1.02 || (min > 248 && satDiff < 8))
                    {
                        bmp.SetPixel(x, y, Color.Transparent);
                    }
                    else if (distSq > 0.93 && min > 230)
                    {
                        double aFactor = (1.02 - distSq) / 0.09;
                        if (aFactor < 0) aFactor = 0;
                        if (aFactor > 1) aFactor = 1;
                        int a = (int)(aFactor * 255);
                        bmp.SetPixel(x, y, Color.FromArgb(a, r, g, b));
                    }
                }
            }

            Bitmap trimmed = TrimTransparent(bmp);
            trimmed.Save(outPath, ImageFormat.Png);
            trimmed.Dispose();
            Console.WriteLine("Saved: " + outPath);
        }
    }

    private static Bitmap TrimTransparent(Bitmap bmp)
    {
        int minX = bmp.Width, minY = bmp.Height, maxX = 0, maxY = 0;
        for (int y = 0; y < bmp.Height; y++)
        {
            for (int x = 0; x < bmp.Width; x++)
            {
                if (bmp.GetPixel(x, y).A > 5)
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
