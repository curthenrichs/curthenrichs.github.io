import { IconLookupFromName } from "../components/IconManager";
import skillsData from "./skills";
import { domains } from "./domains";

// SkillTray/SkillTags/DomainCards resolve icons by name through
// IconLookupFromName. It is a Proxy whose get trap substitutes a
// WarningOutlined fallback for unknown names, so a typo doesn't render a
// blank — it silently ships a warning glyph in production. The Proxy defines
// only a get trap, so the `in` operator forwards to the underlying lookup
// object and gives honest membership — that's what fails loudly here at
// test time.

describe("skill icon references", () => {
  test.each(skillsData.map((s) => [s.id, s.icon]))(
    "skill %s icon %s resolves in IconLookupFromName",
    (skillId, icon) => {
      expect(icon in IconLookupFromName).toBe(true);
    }
  );
});

describe("domain icon references", () => {
  test.each(domains.map((d) => [d.key, d.icon]))(
    "domain %s icon %s resolves in IconLookupFromName",
    (key, icon) => {
      expect(icon in IconLookupFromName).toBe(true);
    }
  );
});
