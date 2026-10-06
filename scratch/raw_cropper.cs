using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

public class RawCropper
{
    public static void Main()
    {
        string refPath = @"C:\Users\KARAN\.gemini\antigravity-ide\brain\c9574f73-2051-4dc0-8998-db265ecacbe9\.user_uploaded\media_1791269975050.jpg";
        string outDir = @"d:\jupical\scratch\raw_islands";
        Directory.CreateDirectory(outDir);

        using (Bitmap src = new Bitmap(refPath))
        {
            CropAndSave(src, new Rectangle(360, 0, 310, 300), Path.Combine(outDir, "1_edu_raw.png"));
            CropAndSave(src, new Rectangle(40, 100, 340, 340), Path.Combine(outDir, "2_mfg_raw.png"));
            CropAndSave(src, new Rectangle(630, 100, 340, 340), Path.Combine(outDir, "3_const_raw.png"));
            CropAndSave(src, new Rectangle(40, 420, 340, 340), Path.Combine(outDir, "4_integ_raw.png"));
            CropAndSave(src, new Rectangle(630, 420, 350, 340), Path.Combine(outDir, "5_inv_raw.png"));
            CropAndSave(src, new Rectangle(350, 520, 320, 240), Path.Combine(outDir, "6_fin_raw.png"));
        }
    }

    private static void CropAndSave(Bitmap src, Rectangle r, string path)
    {
        using (Bitmap bmp = new Bitmap(r.Width, r.Height, PixelFormat.Format32bppArgb))
        {
            using (Graphics g = Graphics.FromImage(bmp))
            {
                g.DrawImage(src, new Rectangle(0, 0, r.Width, r.Height), r, GraphicsUnit.Pixel);
            }
            bmp.Save(path, ImageFormat.Png);
            Console.WriteLine("Saved: " + path);
        }
    }
}
