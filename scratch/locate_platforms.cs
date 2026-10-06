using System;
using System.Drawing;

public class PlatformLocator
{
    public static void Main()
    {
        string refPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg";
        using (Bitmap src = new Bitmap(refPath))
        {
            Console.WriteLine(string.Format("Dimensions: {0}x{1}", src.Width, src.Height));

            // Find blue neon edge lights of each platform:
            // Blue neon light on platform edge: R in 0..100, G in 180..255, B in 230..255
            // Let's sample regions:
            Console.WriteLine("Education: " + FindBBox(src, 350, 0, 320, 300));
            Console.WriteLine("Manufacturing: " + FindBBox(src, 30, 100, 340, 340));
            Console.WriteLine("Construction: " + FindBBox(src, 630, 100, 340, 340));
            Console.WriteLine("Integration: " + FindBBox(src, 30, 430, 340, 330));
            Console.WriteLine("Inventory: " + FindBBox(src, 630, 430, 340, 330));
            Console.WriteLine("Finance: " + FindBBox(src, 350, 480, 320, 280));
            Console.WriteLine("Center Base: " + FindBBox(src, 320, 300, 380, 260));
        }
    }

    private static string FindBBox(Bitmap src, int rx, int ry, int rw, int rh)
    {
        int minX = 9999, minY = 9999, maxX = 0, maxY = 0;
        for (int y = ry; y < ry + rh && y < src.Height; y++)
        {
            for (int x = rx; x < rx + rw && x < src.Width; x++)
            {
                Color c = src.GetPixel(x, y);
                int diff = Math.Max(c.R, Math.Max(c.G, c.B)) - Math.Min(c.R, Math.Min(c.G, c.B));
                if (diff > 16 || (c.R < 240 && c.G < 240 && c.B < 240))
                {
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                }
            }
        }
        return string.Format("X={0}..{1} (W={2}), Y={3}..{4} (H={5})", minX, maxX, maxX - minX + 1, minY, maxY, maxY - minY + 1);
    }
}
