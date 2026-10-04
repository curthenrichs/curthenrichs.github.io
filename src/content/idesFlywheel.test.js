import fs from "fs";
import path from "path";
import career from "./career";

const ROOT = path.join(__dirname, "..", "..");

test("the IDES carousel shows the flywheel with alt text", () => {
  const imgs = career["career-ides"].images;
  const fly = imgs.find((i) => i.img === "/static/img/career/ides/ides-flywheel.png");
  expect(fly).toBeDefined();
  expect(fly.carousel).toBe(true);
  expect(fly.alt.length).toBeGreaterThan(80);
  expect(fs.existsSync(path.join(ROOT, "public", fly.img))).toBe(true);
  expect(fs.existsSync(path.join(ROOT, "docs", "ides-flywheel.svg"))).toBe(true);
});

test("the old IDES career image is gone everywhere", () => {
  const hits = [
    "src/content/career.js",
    "src/content/imageDimensions.json",
    "src/content/imageVariants.json",
    "scripts/generate-image-variants.js",
  ].filter((f) => fs.readFileSync(path.join(ROOT, f), "utf8").includes("IDES-career-viz"));
  expect(hits).toEqual([]);
  expect(fs.existsSync(path.join(ROOT, "public/static/img/career/ides/IDES-career-viz.jpg"))).toBe(false);
});
