import fs from "fs";
import path from "path";

/* RFC 9116 security.txt (2026-10-03). Contact and Expires are the
   required fields, and a file past its Expires date is invalid, so this
   fails 60 days ahead of expiry: renewing it becomes a normal change
   instead of a silent lapse. */

const FILE = path.join(__dirname, "..", "..", "public", ".well-known", "security.txt");
const DAY = 24 * 60 * 60 * 1000;

test("security.txt names a contact and its own canonical URL", () => {
  const txt = fs.readFileSync(FILE, "utf8");
  expect(txt).toMatch(/^Contact: mailto:\S+@\S+$/m);
  expect(txt).toContain("Canonical: https://curthenrichs.github.io/.well-known/security.txt");
});

test("security.txt expires more than 60 days out and less than a year out", () => {
  const txt = fs.readFileSync(FILE, "utf8");
  const m = /^Expires: (\S+)$/m.exec(txt);
  expect(m).not.toBeNull();
  const left = Date.parse(m[1]) - Date.now();
  expect(left).toBeGreaterThan(60 * DAY);
  expect(left).toBeLessThanOrEqual(366 * DAY);
});
