import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToOptimize = [
  path.join(__dirname, 'public/images/Ratan_Dhanjal.png'),
  path.join(__dirname, 'public/blog_images/Private_Link_Service.png'),
  path.join(__dirname, 'public/blog_images/LLD_private_link_service.png')
];

async function optimizeImages() {
  for (const imagePath of imagesToOptimize) {
    if (fs.existsSync(imagePath)) {
      const dir = path.dirname(imagePath);
      const ext = path.extname(imagePath);
      const basename = path.basename(imagePath, ext);
      const newPath = path.join(dir, `${basename}.webp`);
      
      console.log(`Optimizing ${imagePath}...`);
      await sharp(imagePath)
        .webp({ quality: 80, effort: 6 })
        .toFile(newPath);
      
      console.log(`Created ${newPath}`);
    } else {
      console.log(`File not found: ${imagePath}`);
    }
  }
}

optimizeImages().catch(console.error);
