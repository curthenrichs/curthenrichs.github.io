/**
 * Generates resized WebP + same-format fallback variants of every content image
 * under public/static/img, at two tiers (full/thumb), and writes a manifest to
 * src/content/imageVariants.json keyed by served URL. Run: npm run image-variants
 * (re-run when images change). Originals are left untouched. Uses sharp.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const IMG_ROOT = path.join(PUBLIC_DIR, "static", "img");
const OUT = path.join(__dirname, "..", "src", "content", "imageVariants.json");
const EXT = /\.(jpe?g|png|gif)$/i;

const FULL_MAX = 1600;
const THUMB_MAX = 800;
const DETAIL_MAX = 3000;

// Detail-heavy diagrams/visualizations: keep more resolution at the full tier.
const PRESERVE_DETAIL = new Set([
  "/static/img/projects/coframe/coframe-frames.png",
  "/static/img/projects/coframe/coframe-mapping.jpg",
  "/static/img/projects/coframe/coframe-structure.jpg",
  "/static/img/projects/iter/iter-displays.png",
  "/static/img/projects/iter/iter-workspace.png",
  "/static/img/career/ides/IDES-career-viz.jpg"
]);

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) out.push(...walk(full));
    else if (EXT.test(name)) out.push(full);
  }
  return out;
}

const urlOf = (file) => "/" + path.relative(PUBLIC_DIR, file).split(path.sep).join("/");

async function makeVariant(file, tier, targetW) {
  const dir = path.dirname(file);
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  const isGif = /\.gif$/i.test(file);
  const isPng = /\.png$/i.test(file);
  const readOpts = isGif ? { animated: true } : {};
  const resize = { width: targetW, withoutEnlargement: true };

  const webpOut = path.join(dir, `${base}-${tier}.webp`);
  let wp = sharp(file, readOpts).resize(resize);
  wp = isPng ? wp.webp({ lossless: true }) : wp.webp({ quality: 80 });
  await wp.toFile(webpOut);

  const fbOut = path.join(dir, `${base}-${tier}${ext}`);
  let fb = sharp(file, readOpts).resize(resize);
  if (isGif) fb = fb.gif();
  else if (isPng) fb = fb.png();
  else fb = fb.jpeg({ quality: 85, mozjpeg: true });
  await fb.toFile(fbOut);

  return { webp: urlOf(webpOut), fallback: urlOf(fbOut) };
}

(async () => {
  const files = walk(IMG_ROOT)
    .filter((f) => !/-(full|thumb)\.(webp|jpe?g|png|gif)$/i.test(f))
    .sort();
  const manifest = {};
  let origBytes = 0;
  let fullWebpBytes = 0;

  for (const file of files) {
    const url = urlOf(file);
    const meta = await sharp(file).metadata();
    origBytes += fs.statSync(file).size;

    const fullCap = PRESERVE_DETAIL.has(url) ? DETAIL_MAX : FULL_MAX;
    const fullW = Math.min(fullCap, meta.width);
    const thumbW = Math.min(THUMB_MAX, meta.width);

    manifest[url] = {
      full: await makeVariant(file, "full", fullW),
      thumb: await makeVariant(file, "thumb", thumbW)
    };
    fullWebpBytes += fs.statSync(
      path.join(PUBLIC_DIR, manifest[url].full.webp.replace(/^\//, ""))
    ).size;
    console.log(`variants ${url} (full ${fullW}px, thumb ${thumbW}px)`);
  }

  fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2) + "\n");
  console.log(
    `wrote ${OUT}: ${Object.keys(manifest).length} images. ` +
      `originals ${(origBytes / 1048576).toFixed(1)} MB, full-tier WebP ` +
      `${(fullWebpBytes / 1048576).toFixed(1)} MB ` +
      `(${(100 - (fullWebpBytes / origBytes) * 100).toFixed(0)}% smaller per-image served)`
  );
})().catch((err) => {
  console.error("generate-image-variants FAILED:", err);
  process.exit(1);
});
