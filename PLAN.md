# Dual-View Skills Section Implementation Plan

## Context

The current Skills section is a flat, ungrouped grid of 27 skill tiles (icon + name + progress bar). It mixes languages, platforms, tools, and domains without categorization, uses subjective proficiency percentages, and omits many skills evident from project/career modal content. This plan replaces it with two switchable "lenses" — domain narrative cards and a filterable technology tag cloud — that better communicate the breadth and depth of the skillset.

## Summary of Changes

| Area | Change |
|------|--------|
| New dependency | `framer-motion` for tag filter animations |
| Data: `skills.js` | Remove `percent`, add `category` field, add ~15 new skills |
| Data: `domains.js` | New file — 7 domain card definitions with descriptions |
| Component: `Skills.jsx` | Delete file, replace with `Skills/` directory (3 files + CSS) |
| No changes needed | `MainPage.jsx`, `IconManager`, `ItemCardTemplate`, career/education/project data |

---

## Step 1: Install framer-motion

```bash
npm install framer-motion
```

---

## Step 2: Update `src/content/skills.js`

- **Remove** `percent` field from all 27 entries
- **Add** `category` field to each entry (one of: `language`, `framework`, `platform`, `tool`, `domain`)
- **Add ~15 new skill entries** for skills found in modal content but not yet listed

**Category assignments for existing skills:**

| id | category | | id | category |
|----|----------|-|----|----------|
| `arduino` | platform | | `react` | framework |
| `microchip_atmel` | platform | | `angular` | framework |
| `linux` | platform | | `javascript` | language |
| `ros` | framework | | `keras` | framework |
| `c_c++` | language | | `matlab` | language |
| `python` | language | | `motion_planning` | domain |
| `java` | language | | `latex_overleaf` | tool |
| `nodejs` | framework | | `atlassian` | tool |
| `git` | tool | | `mongodb` | tool |
| `universal_robots` | platform | | `fpga_soc` | platform |
| `unity` | platform | | `assembly` | language |
| `csharp` | language | | `katana_mrp` | tool |
| `hololens` | platform | | `labview` | tool |
| `freertos` | framework | | `usb` | domain |

**New skills to add:**

| id | name | icon (reuse existing) | category |
|----|------|-----------------------|----------|
| `verilog_vhdl` | Verilog / VHDL | microchip | language |
| `altium_pcb` | Altium / PCB Design | gear | tool |
| `docker` | Docker | gear | tool |
| `threejs` | Three.js | javascript | framework |
| `vuejs` | Vue.js | javascript | framework |
| `blockly` | Blockly | javascript | framework |
| `i2c_spi` | I2C / SPI | microchip | domain |
| `computer_vision` | Computer Vision | keras | domain |
| `slam` | SLAM | robot | domain |
| `pybullet` | pyBullet | python | framework |
| `hri_methods` | HRI Research | robot | domain |
| `technical_writing` | Technical Writing | overleaf | domain |
| `rest_apis` | REST APIs | gear | domain |
| `cuda_openmp` | CUDA / OpenMP | microchip | tool |
| `supply_chain` | Supply Chain | gear | domain |

New entries reuse existing icon keys — no new SVGs or IconManager changes needed.

**Resulting shape:** `{ name, icon, hover, id, category }`

---

## Step 3: Create `src/content/domains.js`

New file exporting:
- `CATEGORY_COLORS` — Okabe-Ito color-blind-safe palette for the 5 tag categories:
  - `language: "#0072B2"`, `framework: "#56B4E9"`, `platform: "#D55E00"`, `tool: "#009E73"`, `domain: "#E69F00"`
- `domains` — Array of 7 domain objects `{ key, title, icon, description, skillIds[] }`

**Domains (with drafted descriptions):**

1. **Embedded Systems** (`microchip` icon) — "Designing firmware and hardware systems from bare-metal microcontrollers to FPGA-based SoC platforms, with professional experience in USB device classes, serial protocols, and real-time operating systems."
   - Skills: arduino, microchip_atmel, c_c++, assembly, fpga_soc, verilog_vhdl, freertos, usb, i2c_spi, altium_pcb

2. **Robotics & Motion Control** (`robot` icon) — "Research and development with industrial collaborative robots, including motion planning, real-time control, ROS driver development, and robot simulation."
   - Skills: ros, universal_robots, python, motion_planning, linux, pybullet, slam, labview

3. **Human-Robot Interaction** (`robot` icon) — "Graduate research in HRI with multiple publications, spanning user study design, ethnographic analysis, task modeling, and AR-based operator interfaces."
   - Skills: hri_methods, latex_overleaf, python, ros, blockly, universal_robots, technical_writing

4. **Full-Stack & Web** (`react` icon) — "Building robotics GUIs, automation dashboards, and data-driven web applications across the stack, from React frontends to Node.js backend services."
   - Skills: react, angular, javascript, nodejs, mongodb, git, rest_apis, vuejs, java

5. **AR / 3D Visualization** (`unity` icon) — "Developing augmented reality interfaces for robot programming and training, including HoloLens applications and 3D simulation environments."
   - Skills: unity, csharp, hololens, threejs, pybullet

6. **Manufacturing & Operations** (`gear` icon) — "Managing manufacturing resource planning, supply chain logistics, component procurement, and PCBA production processes."
   - Skills: katana_mrp, atlassian, supply_chain, altium_pcb, docker

7. **Machine Learning & Vision** (`keras` icon) — "Coursework and research applying deep learning, computer vision, and parallel computing to problems in robotics and computational photography."
   - Skills: keras, python, matlab, computer_vision, cuda_openmp

---

## Step 4: Refactor Skills section from file to directory

**Delete** `src/pages/sections/Skills.jsx` and create `src/pages/sections/Skills/` with 4 files.

The import in `MainPage.jsx` (`import SectionSkills from "./sections/Skills"`) resolves identically to `Skills/index.jsx` — no changes needed in MainPage.

### `Skills/index.jsx` — Main Wrapper

- Section title `<Title level={3}>Skills</Title>`
- View toggle via `<Radio.Group optionType="button" buttonStyle="solid">` with two options: "Domains" (default) and "Technologies"
  - Note: antd 4.12.2 lacks `Segmented`; `Radio.Group` is the appropriate substitute
- `useState("domains")` controls which view renders
- Conditionally renders `<DomainCards />` or `<SkillTags />`
- Imports `./Skills.css`

### `Skills/DomainCards.jsx` — View 1 (Narrative Cards)

- Reads `domains` from `domains.js` and builds a `skillsById` Map from `skills.js`
- Responsive grid: `Row/Col` with `span={12}` (2-col) when `width >= BP_CARD_HORIZONTAL (1000)`, `span={24}` (1-col) on mobile
- Each domain renders as an `antd Card` (className `type-c`) containing:
  - Domain icon (from `IconLookupFromName`) + title (`Title level={5}`)
  - Description text
  - Flex-wrapped skill `Tag` components colored by `CATEGORY_COLORS[skill.category]`
- Cards use `height: "100%"` for equal row heights
- Content padded with `padding: "0 5%"` (since `notApplyInnerSection: true` in MainPage config)

### `Skills/SkillTags.jsx` — View 2 (Filterable Tag Cloud)

- Filter bar: 6 `Tag.CheckableTag` buttons (All, Languages, Frameworks, Platforms, Tools, Domains/Methods)
- Single-select filtering via `useState("all")`
- Tag cloud: flex-wrap container with all filtered skills as `antd Tag` colored by `CATEGORY_COLORS`
  - Each tag wrapped in `Tooltip` showing `skill.hover` text
  - Font size `var(--fs-md)`, padding `4px 12px`
- **Animation**: framer-motion wrapping each tag in `motion.div`:
  - `layout` prop for smooth reflow
  - `AnimatePresence mode="popLayout"` for enter/exit
  - `initial={{ opacity: 0, scale: 0.8 }}`, `animate={{ opacity: 1, scale: 1 }}`, `exit={{ opacity: 0, scale: 0.8 }}`
  - `transition={{ duration: 0.2 }}`
  - `LayoutGroup` wrapper for coordinated animations

### `Skills/Skills.css` — Styles

- CheckableTag overrides for filter button appearance (border, hover color)
- Minimal — follows project pattern of inline styles for layout, CSS for antd class overrides

---

## File Change Summary

| File | Action |
|------|--------|
| `package.json` | Add `framer-motion` dependency |
| `src/content/skills.js` | Modify: remove `percent`, add `category`, add ~15 entries |
| `src/content/domains.js` | **Create**: domain definitions + category colors |
| `src/pages/sections/Skills.jsx` | **Delete** |
| `src/pages/sections/Skills/index.jsx` | **Create**: main wrapper with toggle |
| `src/pages/sections/Skills/DomainCards.jsx` | **Create**: narrative cards view |
| `src/pages/sections/Skills/SkillTags.jsx` | **Create**: filterable tag cloud |
| `src/pages/sections/Skills/Skills.css` | **Create**: style overrides |

**No changes to:** `MainPage.jsx`, `IconManager`, `ItemCardTemplate.jsx`, `career.js`, `education.js`, `projects.js`, `breakpoints.js`, `contexts.js`

---

## Verification

1. `npm start` — site builds and loads without errors
2. Skills section renders with "Domains" view by default showing 7 narrative cards
3. Clicking "Technologies" toggles to tag cloud showing all ~42 skills
4. Tag filter buttons correctly filter by category with smooth animations
5. Hovering tags shows tooltip text
6. Responsive: cards go single-column below 1000px width
7. Career/Education/Project cards still show their skill icon trays correctly (regression check)
8. All domain cards display correct skill tags matching their `skillIds`
