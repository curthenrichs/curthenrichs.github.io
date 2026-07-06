/**
 * Writes intrinsic pixel dimensions of every image under public/static/img/
 * to src/content/imageDimensions.json, keyed by served URL path. Run via:
 * npm run image-dims (re-run when images are added/changed).
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const IMG_ROOT = path.join(PUBLIC_DIR, "static", "img");
const OUT = path.join(__dirname, "..", "src", "content", "imageDimensions.json");
const EXT = /\.(jpe?g|png|gif|webp)$/i;

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) out.push(...walk(full));
    else if (EXT.test(name)) out.push(full);
  }
  return out;
}

(async () => {
  const files = walk(IMG_ROOT).sort();
  const manifest = {};
  for (const file of files) {
    const meta = await sharp(file).metadata();
    const url = "/" + path.relative(PUBLIC_DIR, file).split(path.sep).join("/");
    manifest[url] = { w: meta.width, h: meta.height };
  }
  fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`wrote ${OUT}: ${Object.keys(manifest).length} images`);
})().catch((err) => {
  console.error("generate-image-dimensions FAILED:", err);
  process.exit(1);
});
