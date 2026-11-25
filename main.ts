// Loading Screen Gold — one sharp, funny loading-screen tip for stressed
// developers and AI coding agents, 200 characters at most. Written out as a
// single line to entry.txt; the tip is assembled once, then checked, then saved.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const TIP =
  'Tip: if it says 99% for more than a minute, it is not 99%. Go drink water — the progress bar is lying to protect your feelings.';

const outDir = process.env['MAKEFUN_OUTPUT_DIR'] ?? '/output';
const entryPath = resolve(outDir, 'entry.txt');
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
if (TIP.length > 200 || TIP.trim().length === 0) {
  throw new Error('tip must be 1-200 characters');
}
writeFileSync(entryPath, TIP, 'utf8');
