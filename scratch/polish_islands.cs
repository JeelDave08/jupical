using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

public class AssetPolisher
{
    public static void Main()
    {
        string refPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg";
        string outDir = @"d:\jupical\public\hero";

        using (Bitmap src = new Bitmap(refPath))
        {
            // 1. Education
            Extract(src, "island-education", new Rectangle(370, 85, 270, 155), outDir,
                (gx, gy) => gy < 88);

            // 2. Manufacturing
            Extract(src, "island-manufacturing", new Rectangle(65, 168, 260, 195), outDir,
                (gx, gy) => false);

            // 3. Construction
            Extract(src, "island-construction", new Rectangle(650, 165, 300, 205), outDir,
                (gx, gy) => false);

            // 4. Integration
            Extract(src, "island-integration", new Rectangle(65, 450, 260, 200), outDir,
                (gx, gy) => false);

            // 5. Inventory
            Extract(src, "island-inventory", new Rectangle(675, 425, 300, 200), outDir,
                (gx, gy) => false);

            // 6. Finance
            Extract(src, "island-finance", new Rectangle(365, 545, 265, 175), outDir,
                (gx, gy) => gy < 550);
        }
    }

    private static void Extract(Bitmap src, string name, Rectangle crop, string outDir, Func<int, int, bool> exclude)
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
                    if (exclude != null && exclude(gx, gy))
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

        if (maxX < minX || maxY < minY) return (Bitmap)bmp.Clone();
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
