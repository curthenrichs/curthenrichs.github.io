import fs from "fs";
import path from "path";
import dims from "./imageDimensions.json";

const CONTENT_FILES = ["biography.js", "career.js", "education.js", "projects.js"];
const PUBLIC_DIR = path.join(__dirname, "..", "..", "public");

function referencedImages() {
  const set = new Set();
  for (const f of CONTENT_FILES) {
    const text = fs.readFileSync(path.join(__dirname, f), "utf8");
    for (const m of text.matchAll(/\/static\/img\/[A-Za-z0-9._/-]+\.(?:jpe?g|png|gif|webp)/g)) {
      set.add(m[0]);
    }
  }
  return [...set];
}

test("every content-referenced image that exists on disk has a dimensions entry with positive w/h", () => {
  // Only require entries for referenced images whose file exists. A referenced
  // path with no file would be a broken content reference tracked separately,
  // not a manifest gap (none exist today; the ides-logo.png reference was
  // nulled out in career.js rather than shipping a permanent 404). The manifest
  // is generated from files on disk, so a present-and-referenced image missing
  // here means the manifest is stale -- regenerate with `npm run image-dims`.
  const refs = referencedImages().filter((p) =>
    fs.existsSync(path.join(PUBLIC_DIR, p.replace(/^\//, "")))
  );
  expect(refs.length).toBeGreaterThan(0);
  const missing = refs.filter((p) => !dims[p]);
  expect(missing).toEqual([]);
  refs.forEach((p) => {
    expect(Number.isInteger(dims[p].w)).toBe(true);
    expect(Number.isInteger(dims[p].h)).toBe(true);
    expect(dims[p].w).toBeGreaterThan(0);
    expect(dims[p].h).toBeGreaterThan(0);
  });
});
