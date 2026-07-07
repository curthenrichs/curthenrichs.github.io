import { chooseActiveNavItem } from "./activeNavSelection";

const H = 1000;
const pick = (sections, extra = {}) =>
  chooseActiveNavItem({
    sections,
    viewportHeight: H,
    activeNavItem: extra.active ?? sections.find((s) => s.navItem)?.navItem,
    clickedNavItem: extra.clicked ?? null
  });

test("fully visible section beats a partially visible one", () => {
  expect(
    pick([
      { navItem: "a", top: 100, bottom: 900 },   // fully visible: area 1
      { navItem: "b", top: 900, bottom: 1500 }   // partial: area 0.1
    ])
  ).toBe("a");
});

test("off-screen sections score zero and never win", () => {
  expect(
    pick([
      { navItem: "a", top: -2000, bottom: -1000 }, // off-screen
      { navItem: "b", top: 200, bottom: 600 }
    ], { active: "a" })
  ).toBe("b");
});

test("a section larger than the viewport outranks a fully visible one", () => {
  expect(
    pick([
      { navItem: "a", top: 0, bottom: 900 },       // area 1 (fully visible)
      { navItem: "b", top: -200, bottom: 1200 }    // area 1.4
    ])
  ).toBe("b");
});

test("partial-top and partial-bottom sections score by visible fraction", () => {
  expect(
    pick([
      { navItem: "a", top: -500, bottom: 300 },  // visible 300 -> 0.3
      { navItem: "b", top: 600, bottom: 1400 }   // visible 400 -> 0.4
    ], { active: "a" })
  ).toBe("b");
});

test("area tie: the clicked nav item wins when it is among the tied", () => {
  expect(
    pick([
      { navItem: "a", top: 0, bottom: 400 },   // area 1
      { navItem: "b", top: 500, bottom: 900 }  // area 1
    ], { active: "a", clicked: "b" })
  ).toBe("b");
});

test("area tie without clicked: first section containing the intersect point wins", () => {
  expect(
    pick([
      { navItem: "a", top: -100, bottom: 1100 },  // area 1.2, contains y=1000
      { navItem: "b", top: -150, bottom: 1050 }   // area 1.2, contains y=1000
    ], { active: "b", clicked: null })
  ).toBe("a"); // first key with point-intersect
});

test("area tie, no clicked, no intersect containment: keeps the active item", () => {
  expect(
    pick([
      { navItem: "a", top: 0, bottom: 400 },   // area 1, no point (1000 not < 400)
      { navItem: "b", top: 500, bottom: 900 }  // area 1, no point
    ], { active: "b", clicked: null })
  ).toBe("b");
});

test("sections without a navItem never win", () => {
  expect(
    pick([
      { navItem: "" },                       // scores -1
      { navItem: "b", top: -3000, bottom: -2000 } // 0
    ], { active: "b" })
  ).toBe("b");
});
