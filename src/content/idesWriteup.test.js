import fs from "fs";
import path from "path";

const FILE = path.join(__dirname, "markdown", "modal", "IDESCareer.md");

test("the IDES write-up follows the flywheel's groups in order", () => {
  const heads = fs.readFileSync(FILE, "utf8").split("\n").filter((l) => /^#{2,4} /.test(l));
  expect(heads).toEqual([
    "## Firmware Engineer",
    "## Senior Embedded Systems Engineer",
    "### Process & People",
    "### Hardware",
    "#### Board design",
    "#### FPGA / SoC",
    "### Firmware",
    "### Software",
    "#### Backend",
    "#### Vision",
    "### Manufacturing & QA",
    "### Tooling",
    "### MiniConsole",
  ]);
});
