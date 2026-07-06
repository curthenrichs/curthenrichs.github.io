/**
 * Regenerates the gitignored Henry working files from the henry-mascot
 * submodule's portfolio-blue dist. Single source of truth = the submodule;
 * nothing here is committed. Wired into npm postinstall/prebuild/prestart/pretest.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "vendor", "henry-mascot", "dist", "portfolio-blue");
const PUBLIC = path.join(ROOT, "public");
const VENDOR = path.join(ROOT, "src", "vendor", "henry");

const FAVICONS = [
  "favicon.ico",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "apple-touch-icon.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
];

if (!fs.existsSync(DIST)) {
  console.error(
    "sync:henry FAILED: vendor/henry-mascot/dist not found.\n" +
      "Run: git submodule update --init --recursive vendor/henry-mascot"
  );
  process.exit(1);
}

fs.mkdirSync(VENDOR, { recursive: true });

for (const f of FAVICONS) {
  fs.copyFileSync(path.join(DIST, f), path.join(PUBLIC, f));
}
fs.copyFileSync(
  path.join(DIST, "henry-animated.css"),
  path.join(VENDOR, "henry-animated.css")
);
for (const f of fs.readdirSync(DIST)) {
  if (/^henry-illustration-.*\.svg$/.test(f)) {
    fs.copyFileSync(path.join(DIST, f), path.join(VENDOR, f));
  }
}

// ---- favicon validity (mirrors the retired generate-favicons.js checks) ----
const ico = fs.readFileSync(path.join(PUBLIC, "favicon.ico"));
const layers = ico.readUInt16LE(4);
if (layers !== 3) {
  console.error(`sync:henry FAILED: favicon.ico expected 3 layers (16/32/48), got ${layers}`);
  process.exit(1);
}
for (const [f, size] of [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
  ["android-chrome-192x192.png", 192],
  ["android-chrome-512x512.png", 512],
]) {
  const buf = fs.readFileSync(path.join(PUBLIC, f));
  const w = buf.readUInt32BE(16); // PNG IHDR width
  const h = buf.readUInt32BE(20);
  if (w !== size || h !== size) {
    console.error(`sync:henry FAILED: ${f} expected ${size}x${size}, got ${w}x${h}`);
    process.exit(1);
  }
}
console.log("sync:henry: favicons + illustrations + henry-animated.css synced from submodule");
