/**
 * Regenerates every favicon asset in public/ from the SVG sources in
 * assets/favicon/. Run via: npm run favicons
 *
 * Three sources, not one: 32px and 16px are separate pixel-fitted drawings
 * (the master's antenna and glow turn to mush below ~64px).
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const pngToIco = require("png-to-ico");

const ASSET_DIR = path.join(__dirname, "..", "assets", "favicon");
const OUT_DIR = path.join(__dirname, "..", "public");

const MASTER = path.join(ASSET_DIR, "robot-master.svg");
const PIXEL_32 = path.join(ASSET_DIR, "robot-32.svg");
const PIXEL_16 = path.join(ASSET_DIR, "robot-16.svg");

// PNG outputs: small sizes come from the pixel-fitted drawings,
// large sizes from the master.
const OUTPUTS = [
  { file: "favicon-16x16.png", source: PIXEL_16, size: 16 },
  { file: "favicon-32x32.png", source: PIXEL_32, size: 32 },
  { file: "apple-touch-icon.png", source: MASTER, size: 180 },
  { file: "android-chrome-192x192.png", source: MASTER, size: 192 },
  { file: "android-chrome-512x512.png", source: MASTER, size: 512 },
];

// ICO layers: 48 is required — manifest.json declares favicon.ico as 48x48.
const ICO_LAYERS = [
  { source: PIXEL_16, size: 16 },
  { source: PIXEL_32, size: 32 },
  { source: PIXEL_32, size: 48 },
];

async function renderPng(svgPath, size) {
  const svg = fs.readFileSync(svgPath);
  // Raster density scaled so the SVG rasterizes AT the target size --
  // resize() then never upsamples a smaller bitmap.
  const viewBox = Number(String(svg).match(/viewBox="0 0 (\d+)/)[1]);
  const density = (72 * size) / viewBox;
  return sharp(svg, { density }).resize(size, size).png().toBuffer();
}

async function main() {
  for (const { file, source, size } of OUTPUTS) {
    fs.writeFileSync(path.join(OUT_DIR, file), await renderPng(source, size));
  }

  const layers = await Promise.all(
    ICO_LAYERS.map(({ source, size }) => renderPng(source, size))
  );
  fs.writeFileSync(path.join(OUT_DIR, "favicon.ico"), await pngToIco(layers));

  // ---- verification: wrong output is a hard failure ----
  for (const { file, size } of OUTPUTS) {
    const meta = await sharp(path.join(OUT_DIR, file)).metadata();
    if (meta.width !== size || meta.height !== size) {
      throw new Error(
        `${file}: expected ${size}x${size}, got ${meta.width}x${meta.height}`
      );
    }
  }
  const ico = fs.readFileSync(path.join(OUT_DIR, "favicon.ico"));
  const count = ico.readUInt16LE(4); // ICONDIR idCount
  if (count !== ICO_LAYERS.length) {
    throw new Error(`favicon.ico: expected ${ICO_LAYERS.length} layers, got ${count}`);
  }

  console.log("All favicon assets generated and verified:");
  for (const { file, size } of OUTPUTS) console.log(`  ${file} (${size}x${size})`);
  console.log(`  favicon.ico (${ICO_LAYERS.map((l) => l.size).join("/")})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
