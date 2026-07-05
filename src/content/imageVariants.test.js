import fs from "fs";
import path from "path";
import variants from "./imageVariants.json";

const CONTENT_FILES = ["biography.js", "career.js", "education.js", "projects.js"];
const PUBLIC_DIR = path.join(__dirname, "..", "..", "public");

function referencedImages() {
  const set = new Set();
  for (const f of CONTENT_FILES) {
    const text = fs.readFileSync(path.join(__dirname, f), "utf8");
    for (const m of text.matchAll(/\/static\/img\/[A-Za-z0-9._/-]+\.(?:jpe?g|png|gif)/g)) {
      set.add(m[0]);
    }
  }
  return [...set];
}

test("every content-referenced image on disk has full+thumb webp+fallback variants that exist", () => {
  const refs = referencedImages().filter((p) =>
    fs.existsSync(path.join(PUBLIC_DIR, p.replace(/^\//, "")))
  );
  expect(refs.length).toBeGreaterThan(0);
  const missing = refs.filter((p) => !variants[p]);
  expect(missing).toEqual([]);
  refs.forEach((p) => {
    for (const tier of ["full", "thumb"]) {
      expect(variants[p][tier]).toBeDefined();
      for (const kind of ["webp", "fallback"]) {
        const url = variants[p][tier][kind];
        expect(typeof url).toBe("string");
        expect(fs.existsSync(path.join(PUBLIC_DIR, url.replace(/^\//, "")))).toBe(true);
      }
    }
  });
});
