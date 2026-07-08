import careerData from "./career";
import educationData from "./education";
import projectData from "./projects";
import publicationData from "./publications";
import skillsData from "./skills";
import bioData from "./biography";
import quotes from "./quotes";
import contactData from "./contact";
import { domains, CATEGORY_COLORS } from "./domains";

// Schema guard: renderers dereference these fields without guards (e.g.
// entry.positions.map, pos.title, publicationData[id].short), so a missing
// or mistyped field in a NEW entry fails as a cryptic render crash — or
// silently paints "undefined". This file turns that into a named,
// field-level failure at the data layer. Cross-reference validity lives in
// references.test.js; this file owns shape.

const isStr = (v) => typeof v === "string" && v.length > 0;
const isStrOrNull = (v) => v === null || isStr(v);
const isBool = (v) => typeof v === "boolean";
const arrayOf = (pred) => (v) => Array.isArray(v) && v.every(pred);
const optional = (pred) => (v) => v === undefined || pred(v);

const checkFields = (label, obj, spec) => {
  Object.entries(spec).forEach(([field, check]) => {
    expect({ at: `${label}.${field}`, ok: check(obj[field]) }).toEqual({
      at: `${label}.${field}`,
      ok: true
    });
  });
};

const isImage = (img) =>
  isStr(img.id) &&
  isStr(img.img) &&
  typeof img.alt === "string" &&
  (img.caption === undefined || typeof img.caption === "string") &&
  (img.carousel === undefined || isBool(img.carousel));

const isPrimaryLink = (v) =>
  v === null ||
  (isStr(v.link) && isStr(v.text) && (v.description === null || isStr(v.description)));

describe("career schema", () => {
  test.each(Object.entries(careerData))("%s", (key, entry) => {
    checkFields(key, entry, {
      id: isStr,
      company: isStr,
      brief: isStr,
      descriptionMarkdownPath: isStr,
      modalMarkdownPath: isStr,
      thumbnail: isStrOrNull,
      web: isStrOrNull,
      skills: arrayOf(isStr),
      publications: arrayOf(isStr),
      images: arrayOf(isImage),
      primaryLink: isPrimaryLink,
      positions: (v) => Array.isArray(v) && v.length > 0
    });
    entry.positions.forEach((pos, i) =>
      checkFields(`${key}.positions[${i}]`, pos, {
        id: isStr,
        title: isStr,
        field: isStr,
        start: isStr,
        end: isStrOrNull, // null = current role (nothing renders position end)
        brief: isStr
      })
    );
  });
});

describe("education schema", () => {
  test.each(Object.entries(educationData))("%s", (key, entry) => {
    checkFields(key, entry, {
      id: isStr,
      title: isStr,
      school: isStr,
      start: isStr,
      end: isStr,
      thumbnail: isStrOrNull,
      descriptionMarkdownPath: isStr,
      modalMarkdownPath: isStr,
      skills: arrayOf(isStr),
      publications: arrayOf(isStr),
      images: arrayOf(isImage),
      primaryLink: isPrimaryLink,
      web: optional(isStrOrNull),
      address: optional(isStrOrNull)
    });
  });
});

describe("project schema", () => {
  test.each(Object.entries(projectData))("%s", (key, entry) => {
    checkFields(key, entry, {
      id: isStr,
      title: isStr,
      brief: isStr,
      notable: isBool,
      // TypeToIcon lowercases before matching; membership keeps a new type
      // from silently rendering no icon.
      type: (v) => isStr(v) && ["research", "personal", "coursework"].includes(v.toLowerCase()),
      thumbnail: isStrOrNull,
      descriptionMarkdownPath: isStr,
      modalMarkdownPath: isStr,
      skills: arrayOf(isStr),
      publications: arrayOf(isStr),
      images: arrayOf(isImage),
      primaryLink: isPrimaryLink
    });
  });
});

describe("publication schema", () => {
  test.each(Object.entries(publicationData))("%s", (key, entry) => {
    checkFields(key, entry, {
      id: isStr,
      title: isStr,
      short: isStr,
      venue: isStr,
      reference: isStr,
      link: isStr,
      // PublicationCard's status switch knows exactly these:
      status: (v) => ["Published", "In Review", "In Progress"].includes(v)
    });
  });
});

describe("skill schema", () => {
  test.each(skillsData.map((s) => [s.id || s.name, s]))("%s", (label, skill) => {
    checkFields(label, skill, {
      id: isStr,
      name: isStr,
      icon: isStr,
      hover: isStr,
      // Tag color resolves via CATEGORY_COLORS[category]; a new category
      // needs a color entry or chips render uncolored.
      category: (v) => Object.keys(CATEGORY_COLORS).includes(v)
    });
  });
});

describe("domain schema", () => {
  test.each(domains.map((d) => [d.key, d]))("%s", (key, domain) => {
    checkFields(key, domain, {
      key: isStr,
      title: isStr,
      icon: isStr,
      description: isStr,
      skillIds: (v) => Array.isArray(v) && v.length > 0 && v.every(isStr)
    });
  });
});

test("quotes carry non-empty text and attribution", () => {
  expect(quotes.length).toBeGreaterThan(0);
  quotes.forEach((q, i) =>
    checkFields(`quotes[${i}]`, q, { quote: isStr, attribution: isStr })
  );
});

test("biography schema", () => {
  checkFields("biography", bioData, {
    id: isStr,
    markdownPath: isStr,
    name: isStr,
    img: isStr,
    interests: (v) => Array.isArray(v) && v.length > 0 && v.every(isStr),
    currentEmploymentId: (v) => isStr(v.company) && isStr(v.position)
  });
});

test("contact schema", () => {
  Object.entries(contactData).forEach(([key, entry]) =>
    checkFields(key, entry, {
      id: isStr,
      link: isStrOrNull,
      text: isStrOrNull
    })
  );
});
