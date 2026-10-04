import fs from "fs";
import path from "path";
import crypto from "crypto";
import { execSync } from "child_process";

/* Keeps a term out of the public copy. The term is stored only as a
   SHA-256 hash; the local restore checklist says when to remove this
   test. Every tracked text file is checked word by word. */

const ROOT = path.join(__dirname, "..", "..");
const HASHES = new Set([
  "bec1e686af16d9ec6c5843541dd618741f551cf320b6c79122ae757073e155e6",
]);

const sha256 = (s) => crypto.createHash("sha256").update(s).digest("hex");

function tracked() {
  return execSync("git ls-files -z", { cwd: ROOT })
    .toString("utf8")
    .split("\0")
    .filter(Boolean);
}

test("tracked files stay clear of the excluded term", () => {
  const hits = tracked().filter((rel) => {
    const file = path.join(ROOT, rel);
    /* Submodules (vendor/henry-mascot) list as directories. */
    if (!fs.statSync(file).isFile()) return false;
    const buf = fs.readFileSync(file);
    if (buf.includes(0)) return false;
    const words = new Set(buf.toString("utf8").toLowerCase().split(/[^a-z0-9]+/));
    return [...words].some((w) => w && HASHES.has(sha256(w)));
  });
  expect(hits).toEqual([]);
});
