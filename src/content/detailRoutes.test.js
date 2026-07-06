import detailRoutes from "./detailRoutes.json";
import projects from "./projects";
import career from "./career";
import education from "./education";

const CONTENT = { projects, career, education };

// User-mandated canonical slugs — frozen; changing one is a breaking change.
const CANONICAL_PATHS = [
  "/projects/authr",
  "/projects/coframe",
  "/projects/iter",
  "/projects/hobby-blog",
  "/projects/website",
  "/career/ides",
  "/career/uw-madison",
  "/career/dedicated-computing",
  "/education/msoe",
  "/education/uw-madison"
];

describe("detailRoutes manifest", () => {
  test("paths are exactly the canonical set", () => {
    expect(detailRoutes.map((r) => r.path).sort()).toEqual(
      [...CANONICAL_PATHS].sort()
    );
  });

  test.each(detailRoutes.map((r) => [r.path, r]))(
    "%s entry is well-formed",
    (_path, r) => {
      expect(r.title).toBe(`Curt Henrichs | Portfolio | ${r.name}`);
      expect(r.description.length).toBeGreaterThan(20);
      expect(r.description.length).toBeLessThanOrEqual(170);
      expect(r.path.startsWith(`/${r.section}/`)).toBe(true);
      expect(["projects", "career", "education"]).toContain(r.section);
      expect(r.key).toMatch(/^[a-z0-9-]+$/);
    }
  );

  test("every entry points at a real content item with modal markdown", () => {
    detailRoutes.forEach((r) => {
      const entry = CONTENT[r.section][r.contentId];
      expect(entry).toBeDefined();
      expect(entry.modalMarkdownPath).toBeTruthy();
    });
  });

  test("every active content item with modal markdown has a detail route", () => {
    Object.entries(CONTENT).forEach(([section, data]) => {
      Object.values(data)
        .filter((e) => e.modalMarkdownPath)
        .forEach((e) => {
          const route = detailRoutes.find(
            (r) => r.section === section && r.contentId === e.id
          );
          expect(route).toBeDefined();
        });
    });
  });

  test("keys and paths are unique", () => {
    const keys = detailRoutes.map((r) => r.key);
    const paths = detailRoutes.map((r) => r.path);
    expect(new Set(keys).size).toBe(keys.length);
    expect(new Set(paths).size).toBe(paths.length);
  });
});
