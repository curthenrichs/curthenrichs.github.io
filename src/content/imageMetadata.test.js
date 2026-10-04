import fs from "fs";
import path from "path";

/* Published images carry no camera metadata. Old phone photos embedded
   EXIF with GPS coordinates, and everything under public/ is served byte
   for byte, so any EXIF, XMP, or IPTC block fails here. Strip it before
   committing the image. */

const PUBLIC_DIR = path.join(__dirname, "..", "..", "public");
const SRC_DIR = path.join(__dirname, "..");

function images(dir) {
  return fs.readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) return images(p);
    return /\.(jpe?g|png|webp)$/i.test(name) ? [p] : [];
  });
}

function metadata(file) {
  const b = fs.readFileSync(file);
  const found = [];

  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 4 <= b.length && b[i] === 0xff) {
      const marker = b[i + 1];
      if (marker === 0xda) break;
      const len = b.readUInt16BE(i + 2);
      const head = b.subarray(i + 4, i + 4 + 29).toString("latin1");
      if (marker === 0xe1 && head.startsWith("Exif")) found.push("EXIF");
      if (marker === 0xe1 && head.startsWith("http://ns.adobe.com/xap")) found.push("XMP");
      if (marker === 0xed) found.push("IPTC");
      i += 2 + len;
    }
  } else if (b.subarray(1, 4).toString("latin1") === "PNG") {
    let i = 8;
    while (i + 8 <= b.length) {
      const len = b.readUInt32BE(i);
      const type = b.subarray(i + 4, i + 8).toString("latin1");
      if (type === "eXIf") found.push("EXIF");
      if (type === "iTXt" && b.subarray(i + 8, i + 25).toString("latin1") === "XML:com.adobe.xmp") {
        found.push("XMP");
      }
      if (type === "IEND") break;
      i += 12 + len;
    }
  } else if (b.subarray(8, 12).toString("latin1") === "WEBP") {
    let i = 12;
    while (i + 8 <= b.length) {
      const type = b.subarray(i, i + 4).toString("latin1");
      const len = b.readUInt32LE(i + 4);
      if (type === "EXIF") found.push("EXIF");
      if (type === "XMP ") found.push("XMP");
      i += 8 + len + (len % 2);
    }
  }

  return found;
}

test("no published image carries EXIF, XMP, or IPTC", () => {
  const files = [...images(PUBLIC_DIR), ...images(SRC_DIR)];
  expect(files.length).toBeGreaterThan(0);
  const tagged = files
    .map((f) => [path.relative(path.join(__dirname, "..", ".."), f).replace(/\\/g, "/"), metadata(f).join("+")])
    .filter(([, m]) => m !== "");
  expect(tagged).toEqual([]);
});
