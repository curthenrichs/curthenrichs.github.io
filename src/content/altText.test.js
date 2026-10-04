import career from "./career";
import education from "./education";
import projects from "./projects";

/* Alt text rules (2026-10-04): the visible caption is the sighted takeaway,
   the alt describes what is drawn, and neither repeats the other, since
   ImageCarousel shows the caption as text that screen readers also read. */

const CREDIT = /\s*From [^©]*©\s*\d{4} IEEE\.?$/;
const norm = (s) => s.replace(CREDIT, "").trim().replace(/[.\s]+$/, "").toLowerCase();

function entries() {
  const out = [];
  for (const mod of [career, education, projects]) {
    for (const item of Object.values(mod)) {
      for (const img of item.images || []) out.push(img);
    }
  }
  return out.filter((i) => i.img);
}

test("every image has real alt text", () => {
  const short = entries().filter((i) => !i.alt || i.alt.trim().length < 40).map((i) => i.img);
  expect(short).toEqual([]);
});

test("alt text never repeats the caption", () => {
  const dup = entries()
    .filter((i) => i.caption)
    .filter((i) => {
      const a = norm(i.alt);
      const c = norm(i.caption);
      return a === c || a.includes(c) || c.includes(a);
    })
    .map((i) => i.img);
  expect(dup).toEqual([]);
});

test("no em or en dashes in alt or caption", () => {
  const bad = entries().filter((i) => /[—–]/.test(`${i.alt} ${i.caption || ""}`)).map((i) => i.img);
  expect(bad).toEqual([]);
});
