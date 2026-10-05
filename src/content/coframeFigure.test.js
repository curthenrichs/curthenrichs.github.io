import fs from "fs";
import path from "path";

test("the CoFrame mapping figure is placed in the write-up, once, before the skill tree", () => {
  const md = fs.readFileSync(path.join(__dirname, "markdown", "modal", "EVDProject.md"), "utf8");
  const tag = ":image[]{id=\"img-coframe-frames\"}";
  expect(md.split(tag).length - 1).toBe(1);
  expect(md.indexOf(tag)).toBeLessThan(md.indexOf(":image[]{id=\"img-coframe-skills\"}"));
  expect(md.indexOf(tag)).toBeGreaterThan(md.indexOf("These frames don't isolate underlying concepts"));
});
