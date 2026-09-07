import contactData from "./contact";

// The other sites in the same family, for the footer's Ecosystem group. Same
// shape as the blog's ECOSYSTEM (config.ts), the schema a future shared footer
// will own. An entry with href null is not shipped yet and renders unlinked.
export const ECOSYSTEM = [
  { key: "blog", label: "Half-Built Robots", href: contactData.blog.link },
  { key: "okospolip", label: "Okos Polip", href: null }
];
