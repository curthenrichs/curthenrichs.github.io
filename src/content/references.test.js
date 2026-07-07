import careerData from "./career";
import educationData from "./education";
import projectData from "./projects";
import publicationData from "./publications";
import skillsData from "./skills";
import bioData from "./biography";
import detailRoutes from "./detailRoutes.json";

// Content files cross-reference by string id and renderers dereference
// without guards (e.g. publicationData[pub].short). A typo'd id crashes at
// render time; this guard makes it fail at test time instead.

const contentEntries = [
  ...Object.values(careerData),
  ...Object.values(educationData),
  ...Object.values(projectData)
];
const skillIds = new Set(skillsData.map((s) => s.id));

describe("publication references", () => {
  test.each(
    contentEntries
      .filter((e) => Array.isArray(e.publications))
      .flatMap((e) => e.publications.map((pubId) => [e.id, pubId]))
  )("%s references existing publication %s", (entryId, pubId) => {
    const pub = publicationData[pubId];
    expect(pub).toBeDefined();
    // Fields the card renderers dereference directly:
    expect(typeof pub.short).toBe("string");
    expect(pub.short.length).toBeGreaterThan(0);
    expect(typeof pub.venue).toBe("string");
    expect(pub.venue.length).toBeGreaterThan(0);
  });
});

describe("skill references", () => {
  test.each(
    contentEntries
      .filter((e) => Array.isArray(e.skills))
      .flatMap((e) => e.skills.map((skillId) => [e.id, skillId]))
  )("%s references existing skill %s", (entryId, skillId) => {
    expect(skillIds.has(skillId)).toBe(true);
  });
});

test("biography currentEmploymentId resolves (module-scope dereference on /)", () => {
  // Mirrors production's lookup (Biography.jsx:19-25), which filters by the
  // `.id` FIELD rather than indexing by object key -- the two happen to
  // coincide today, but the guard should track the code path actually used.
  const company = Object.values(careerData).filter(
    (c) => c.id === bioData.currentEmploymentId.company
  )[0];
  expect(company).toBeDefined();
  const position = company.positions.find(
    (p) => p.id === bioData.currentEmploymentId.position
  );
  expect(position).toBeDefined();
});

test("careerData, educationData, and projectData object keys match their entry ids", () => {
  // Pins the invariant both the object-key lookup style and production's
  // id-field filter style rely on: they only agree because keys === ids.
  const sources = { careerData, educationData, projectData };
  const mismatches = Object.entries(sources).flatMap(([sourceName, data]) =>
    Object.entries(data)
      .filter(([key, entry]) => entry.id !== key)
      .map(([key, entry]) => ({ source: sourceName, key, entryId: entry.id }))
  );
  expect(mismatches).toEqual([]);
});

test("entry and position ids are unique site-wide", () => {
  const ids = [];
  contentEntries.forEach((e) => {
    ids.push(e.id);
    (e.positions || []).forEach((p) => ids.push(p.id));
  });
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  expect(dupes).toEqual([]);
});

// Image directive lookups are entry-scoped (MarkdownContent.jsx resolves
// :image[]{id} against the entry's own images array), so the same image id
// may legitimately appear on multiple entries — uniqueness only matters
// within one entry.
test("image ids are unique within each entry", () => {
  contentEntries.forEach((e) => {
    const ids = (e.images || []).map((img) => img.id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect({ entry: e.id, dupes }).toEqual({ entry: e.id, dupes: [] });
  });
});

test("every detail route's contentId exists in content data", () => {
  const contentIds = new Set(contentEntries.map((e) => e.id));
  detailRoutes.forEach((r) => {
    expect(contentIds.has(r.contentId)).toBe(true);
  });
});
