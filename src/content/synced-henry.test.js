import fs from "fs";
import path from "path";

const ROOT = path.join(__dirname, "..", "..");

test("synced Henry working files are present (sync:henry ran)", () => {
  const vendor = path.join(ROOT, "src", "vendor", "henry");
  expect(fs.existsSync(path.join(vendor, "henry-animated.css"))).toBe(true);
  expect(fs.existsSync(path.join(vendor, "henry-illustration-glitched.svg"))).toBe(true);
  expect(fs.existsSync(path.join(ROOT, "public", "favicon.ico"))).toBe(true);
});

test("synced targets are gitignored (no committed duplicates)", () => {
  const gi = fs.readFileSync(path.join(ROOT, ".gitignore"), "utf8");
  expect(gi).toMatch(/\/src\/vendor\/henry\//);
  expect(gi).toMatch(/\/public\/favicon\.ico/);
});
