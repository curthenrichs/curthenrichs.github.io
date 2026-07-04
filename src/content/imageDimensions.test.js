import fs from "fs";
import path from "path";
import dims from "./imageDimensions.json";

const CONTENT_FILES = ["biography.js", "career.js", "education.js", "projects.js"];

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

test("every content-referenced image has a dimensions entry with positive w/h", () => {
  const refs = referencedImages();
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
