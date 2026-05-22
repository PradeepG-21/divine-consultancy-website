import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, '..', 'Assets', '29641_Divine Consultancy Services_LOGO_SR_-01.png');
const dest = resolve(__dirname, '..', 'public', 'logo-transparent.png');

const threshold = 240;

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.from(data);

for (let i = 0; i < out.length; i += channels) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  if (r >= threshold && g >= threshold && b >= threshold) {
    out[i + 3] = 0;
  }
}

await sharp(out, { raw: { width, height, channels } })
  .png()
  .toFile(dest);

console.log(`wrote ${dest} (${width}x${height})`);
