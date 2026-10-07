// Generates favicon.ico, apple-touch-icon, PWA icons and the default OG card from the brand SVG
// and Pola art. Run: node scripts/make-icons.mjs
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const svg = await readFile('public/favicon.svg');
const pola = await readFile('src/assets/pola/pola-hello.webp');

// Icons
for (const [name, size] of [['logo-192.png', 192], ['logo-512.png', 512], ['apple-touch-icon.png', 180]]) {
  await sharp(svg).resize(size, size).png().toFile(`public/${name}`);
}
// favicon.ico (32px PNG inside an ICO container)
const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
const ico = Buffer.alloc(6 + 16 + png32.length);
ico.writeUInt16LE(0, 0); ico.writeUInt16LE(1, 2); ico.writeUInt16LE(1, 4);
ico.writeUInt8(32, 6); ico.writeUInt8(32, 7); ico.writeUInt8(0, 8); ico.writeUInt8(0, 9);
ico.writeUInt16LE(1, 10); ico.writeUInt16LE(32, 12); ico.writeUInt32LE(png32.length, 14); ico.writeUInt32LE(22, 18);
png32.copy(ico, 22);
await writeFile('public/favicon.ico', ico);

// OG cards: brand gradient, compass mark, headline, Pola waving.
const card = async (file, title, sub) => {
  const W = 1200, H = 630;
  const bg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f766e"/><stop offset="1" stop-color="#0d9488"/></linearGradient>
      <radialGradient id="h" cx="80%" cy="20%" r="60%"><stop offset="0" stop-color="#2bb3a9" stop-opacity=".9"/><stop offset="1" stop-color="#0d9488" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/><rect width="${W}" height="${H}" fill="url(#h)"/>
    <g fill="none" stroke="#ffffff" stroke-opacity=".18" stroke-width="2" stroke-dasharray="3 10" stroke-linecap="round">
      <circle cx="960" cy="330" r="190"/><circle cx="960" cy="330" r="290"/>
    </g>
    <g transform="translate(72,72) scale(0.42)">
      <circle cx="100" cy="100" r="100" fill="#ffffff" fill-opacity=".14"/>
      <path d="M100,34 L116,84 L166,100 L116,116 L100,166 L84,116 L34,100 L84,84Z" fill="#f1f5f7"/>
      <path d="M100,34 L116,84 L100,100 L84,84Z" fill="#fcd34d"/>
      <circle cx="100" cy="100" r="9" fill="#0d9488" stroke="#f1f5f7" stroke-width="3"/>
    </g>
    <text x="172" y="128" font-family="Georgia, serif" font-size="40" font-weight="700" fill="#ffffff">Pathways</text>
    ${title.split('|').map((line, i) => `<text x="72" y="${300 + i * 72}" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="700" fill="#ffffff" letter-spacing="-1">${line}</text>`).join('')}
    <text x="72" y="560" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#ccfbf1">${sub}</text>
  </svg>`);
  const polaPng = await sharp(pola).resize(380, 380).png().toBuffer();
  await sharp(bg).composite([{ input: polaPng, left: 780, top: 150 }]).png().toFile(`public/og/${file}`);
};
await card('default.png', 'CBC learning, for schools|and for home.', 'pathways.ke · Learn together.');
await card('schools.png', 'One system for planning,|teaching and merit lists.', 'Pathways for Schools · Book a demo');
await card('parents.png', 'CBC study notes and practice|your child can use at home.', 'Pathways for Parents · Free to start');
console.log('icons + og written');
