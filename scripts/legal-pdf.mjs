#!/usr/bin/env node
/**
 * Prints the legal documents to PDF after `astro build`:
 *   dist/terms/print/index.html   → dist/legal/pathways-terms-of-service-v<version>.pdf
 *   dist/privacy/print/index.html → dist/legal/pathways-privacy-policy-v<version>.pdf
 * The file names come from the `pdf` field in src/lib/terms.ts and src/lib/privacy.ts, read back from the
 * built web pages (the "Download PDF" link), so they cannot drift.
 * Needs Google Chrome or Chromium (set CHROME_PATH to override). SKIP_LEGAL_PDF=1 skips it.
 */
import { createServer } from 'node:http';
import { readFile, mkdir, access } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const run = promisify(execFile);
import { join, extname, dirname } from 'node:path';

if (process.env.SKIP_LEGAL_PDF) { console.log('legal-pdf: skipped'); process.exit(0); }
const DIST = new URL('../dist/', import.meta.url).pathname;
const DOCS = [['terms', 'terms/print'], ['privacy', 'privacy/print']];

const chrome = [process.env.CHROME_PATH, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium', '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser']
  .filter(Boolean);
let bin;
for (const c of chrome) { try { await access(c); bin = c; break; } catch {} }
if (!bin) { console.error('legal-pdf: Chrome not found. Set CHROME_PATH, or SKIP_LEGAL_PDF=1 (the Download PDF links will then 404).'); process.exit(1); }

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (!extname(p)) p = join(p, 'index.html');
  try { const body = await readFile(join(DIST, p)); res.writeHead(200, { 'content-type': TYPES[extname(p)] || 'application/octet-stream' }); res.end(body); }
  catch { res.writeHead(404); res.end(); }
}).listen(0);
const port = server.address().port;

for (const [page, print] of DOCS) {
  const html = await readFile(join(DIST, page, 'index.html'), 'utf8');
  const href = html.match(/href="(\/legal\/[^"]+\.pdf)"/)?.[1];
  if (!href) throw new Error(`legal-pdf: no /legal/*.pdf link found on /${page}`);
  const out = join(DIST, href);
  await mkdir(dirname(out), { recursive: true });
  // Async: the static server above runs in this process and must keep answering while Chrome loads.
  await run(bin, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000',
    `--print-to-pdf=${out}`, `http://localhost:${port}/${print}`], { timeout: 90000 });
  console.log(`legal-pdf: ${href}`);
}
server.close();
