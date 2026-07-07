import { IconLookupFromName } from "../components/IconManager";
import skillsData from "./skills";
import { domains } from "./domains";

// SkillTray/SkillTags/DomainCards resolve icons by name through
// IconLookupFromName and silently render nothing for unknown names — a typo
// shows up as a blank chip in production. Fail it at test time instead.

describe("skill icon references", () => {
  test.each(skillsData.map((s) => [s.id, s.icon]))(
    "skill %s icon %s resolves in IconLookupFromName",
    (skillId, icon) => {
      expect(IconLookupFromName[icon]).toBeDefined();
    }
  );
});

describe("domain icon references", () => {
  test.each(domains.map((d) => [d.key, d.icon]))(
    "domain %s icon %s resolves in IconLookupFromName",
    (key, icon) => {
      expect(IconLookupFromName[icon]).toBeDefined();
    }
  );
});
