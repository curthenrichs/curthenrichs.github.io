import pageMeta from "./pageMeta";

const REQUIRED_KEYS = [
  "home",
  "career",
  "education",
  "projects",
  "publications",
  "contract",
  "attribution",
  "terms",
  "accessibility",
  "privacy",
  "notFound",
  "docsNotFound"
];

describe("pageMeta content", () => {
  test("has an entry for every route", () => {
    expect(Object.keys(pageMeta).sort()).toEqual([...REQUIRED_KEYS].sort());
  });

  test.each(REQUIRED_KEYS)("%s entry is well-formed", (key) => {
    const entry = pageMeta[key];
    expect(entry.title).toMatch(/^Curt Henrichs \| Portfolio \| .+/);
    expect(entry.description.length).toBeGreaterThan(20);
    expect(entry.description.length).toBeLessThanOrEqual(170);
    expect(entry.path).toMatch(/^\//);
  });

  test("not-found entries are noindex", () => {
    expect(pageMeta.notFound.robots).toBe("noindex");
    expect(pageMeta.docsNotFound.robots).toBe("noindex");
  });
});
