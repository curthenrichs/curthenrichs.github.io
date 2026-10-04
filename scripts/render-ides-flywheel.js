/**
 * Renders the IDES flywheel to docs/ides-flywheel.svg (the editable
 * source) and public/static/img/career/ides/ides-flywheel.png (2400px,
 * white ground) for the IDES carousel. Run:
 * node scripts/render-ides-flywheel.js
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const C = { x: 210, y: 196 };
const R = 124; // node ring
const RING = 168; // MiniConsole ring
const NODE_R = 30;
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

// Clockwise from the top. Hardware and Firmware share the blue family on
// purpose: the board and its firmware are an embedded pair.
const GROUPS = [
  { label: ["Process", "& People"], color: "#1A237E", angle: -90 },
  { label: ["Hardware"], color: "#1976D2", angle: -30 },
  { label: ["Firmware"], color: "#0277BD", angle: 30 },
  { label: ["Software"], color: "#00838F", angle: 90 },
  { label: ["Mfg", "& QA"], color: "#2E7D32", angle: 150 },
  { label: ["Tooling"], color: "#546E7A", angle: 210 },
];
// Cross-couplings drawn inside the wheel (rim neighbours are coupled by the rim).
const COUPLINGS = [[0, 2], [0, 3], [1, 3], [1, 4], [2, 4], [5, 2], [5, 3], [5, 1]];
const GOLD = "#C77C02";

const f = (n) => n.toFixed(1);
const at = (deg, rad) => ({
  x: C.x + rad * Math.cos((deg * Math.PI) / 180),
  y: C.y + rad * Math.sin((deg * Math.PI) / 180),
});

function tint(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  const ch = [n >> 16, (n >> 8) & 255, n & 255].map((c) => Math.round(c * a + 255 * (1 - a)));
  return "#" + ch.map((c) => c.toString(16).padStart(2, "0")).join("");
}

function svg() {
  const P = GROUPS.map((g) => at(g.angle, R));

  const rim = GROUPS.map((g, k) => {
    const next = k < GROUPS.length - 1 ? GROUPS[k + 1].angle : 270;
    const s = at(g.angle + 14, R);
    const e = at(next - 14, R);
    return `<path d="M${f(s.x)},${f(s.y)} A${R},${R} 0 0 1 ${f(e.x)},${f(e.y)}" marker-end="url(#arrow)"/>`;
  }).join("");

  const web = COUPLINGS.map(([i, j]) =>
    `<path d="M${f(P[i].x)},${f(P[i].y)} A230,230 0 0 1 ${f(P[j].x)},${f(P[j].y)}"/>`).join("");

  // MiniConsole: solid from Process & People to Mfg & QA, dotted back.
  const s = at(-90, RING);
  const m = at(150, RING);
  const ring =
    `<path d="M${f(s.x)},${f(s.y)} A${RING},${RING} 0 1 1 ${f(m.x)},${f(m.y)}" fill="none" stroke="${GOLD}" stroke-width="3.5" stroke-linecap="round"/>` +
    `<path d="M${f(m.x)},${f(m.y)} A${RING},${RING} 0 0 1 ${f(s.x)},${f(s.y)}" fill="none" stroke="${GOLD}" stroke-width="2.5" stroke-dasharray="2 6" stroke-linecap="round"/>`;

  const ticks = GROUPS.slice(0, 5).map((g) => {
    const a = at(g.angle, R + NODE_R + 1);
    const b = at(g.angle, RING);
    return `<line x1="${f(a.x)}" y1="${f(a.y)}" x2="${f(b.x)}" y2="${f(b.y)}" stroke="${GOLD}" stroke-width="2"/>`;
  }).join("");

  const nodes = GROUPS.map((g, k) => {
    const { x, y } = P[k];
    const esc = (t) => t.replace("&", "&amp;");
    const text = g.label.length === 2
      ? `<text x="${f(x)}" y="${f(y - 3)}" fill="${g.color}">${esc(g.label[0])}</text><text x="${f(x)}" y="${f(y + 10)}" fill="${g.color}">${esc(g.label[1])}</text>`
      : `<text x="${f(x)}" y="${f(y + 4)}" fill="${g.color}">${esc(g.label[0])}</text>`;
    return `<circle cx="${f(x)}" cy="${f(y)}" r="${NODE_R}" fill="${tint(g.color, 0.12)}" stroke="${g.color}" stroke-width="2"/>${text}`;
  }).join("");

  const labelY = C.y + RING + 22;
  const h = labelY + 14;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 ${h}" width="420" height="${h}">
<rect width="420" height="${h}" fill="#ffffff"/>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#8f8f8f"/></marker></defs>
${ring}${ticks}
<g fill="none" stroke="#bfbfbf" stroke-width="2">${rim}</g>
<g fill="none" stroke="#d9d9d9" stroke-width="1.4">${web}</g>
<g font-family="${FONT}" font-size="11" font-weight="600" text-anchor="middle">${nodes}</g>
<text x="${C.x}" y="${labelY}" font-family="${FONT}" font-size="12" font-weight="600" text-anchor="middle" fill="${GOLD}">MiniConsole</text>
</svg>
`;
}

(async () => {
  const out = svg();
  fs.writeFileSync(path.join(ROOT, "docs", "ides-flywheel.svg"), out);
  const png = path.join(ROOT, "public", "static", "img", "career", "ides", "ides-flywheel.png");
  await sharp(Buffer.from(out), { density: 72 * (2400 / 420) })
    .resize({ width: 2400 })
    .png()
    .toFile(png);
  console.log("wrote docs/ides-flywheel.svg and", path.relative(ROOT, png));
})().catch((e) => {
  console.error("render-ides-flywheel FAILED:", e);
  process.exit(1);
});
