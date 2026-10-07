// Masks the baked-in black device corners of the raw app screenshots to transparent,
// trims nothing else, and writes PNG (alpha) back into src/assets/screens/.
// Run once after dropping new screenshots in: node scripts/process-screens.mjs
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const dir = 'src/assets/screens';
const RADIUS_RATIO = 0.138; // a hair over the measured 142px/1080 so the anti-aliased rim goes too

for (const f of await readdir(dir)) {
  if (!f.endsWith('.png')) continue;
  const p = path.join(dir, f);
  const img = sharp(p);
  const { width, height } = await img.metadata();
  const r = Math.round(width * RADIUS_RATIO);
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect x="0" y="0" width="${width}" height="${height}" rx="${r}" ry="${r}" fill="#fff"/></svg>`
  );
  const out = await img
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
  await sharp(out).toFile(p);
  console.log('masked', f, width, height, 'r=' + r);
}
