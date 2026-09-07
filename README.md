# Personal-Website
Development repo for my personal resume website using React and Ant Design. Check
it out at [curthenrichs.github.io](https://curthenrichs.github.io/).

For this project I am using [Ant Design](https://ant.design/), primarily for its
clean, simple visual style.

## Local Build
Node 22.12 or newer (`.nvmrc` pins 22; Puppeteer needs it). Clone with the
submodule, since Henry's artwork comes from it and `npm install` fails without
it:

```
git clone --recurse-submodules git@github.com:curthenrichs/curthenrichs.github.io.git
npm install
```

On an existing clone, `git submodule update --init` does the same. Then run the
development server:

```
npm start
```

`npm test` runs the unit suite and `npm run lint` runs ESLint over `src/`.

## Henry
The robot mascot is vendored from the
[henry-mascot](https://github.com/curthenrichs/henry-mascot) repo through the
`vendor/henry-mascot` submodule. `scripts/sync-henry.js` runs on install, build,
start, and test and copies the `portfolio-blue` colorway into gitignored working
files: the favicons in `public/`, the illustration SVGs and `henry-animated.css`
in `src/vendor/henry/`, and the generated fallback `public/404.html` (from
`scripts/404.template.html`). Nothing about Henry is authored in this repo; the
components render the `cute-robot-` class contract from the vendored CSS. To
pick up a new Henry, bump the submodule and run `npm run sync:henry`.

Henry is not covered by this repo's MIT license. See the BRAND ASSETS EXCEPTION
in `LICENSE`, which lists every file that depicts him.

## Branches and CI
`dev` is the working branch. `main` is production: a push to `main` builds,
checks, and deploys the site (see below), so `main` moves only by a deliberate
PR from `dev`. A committed hook refuses accidental direct pushes; activate it
once per clone:

```
git config core.hooksPath .githooks
```

`.github/workflows/ci.yml` runs on every push to `main` or `dev` and on PRs:
lint, the unit suite, `npm run build` (which syncs Henry from the submodule and
prerenders every route), then `check:hydration`, `check:interactions`, and
`check:a11y` against that build. Any failure fails the run.

`.github/workflows/production-smoke.yml` probes the live site after each
successful `ci` run on `main`, weekly, and on demand from the Actions tab:
route status codes, the trailing-slash redirect, that the served 404 is the
prerendered page and not the fallback, and the privacy policy's no-cookies and
no-third-party-scripts claims.

## GitHub Deployment
On a green `ci` run for a push to `main`, the same `build/` that passed the
checks is uploaded as the Pages artifact and deployed by `actions/deploy-pages`.
The repo's Settings -> Pages source is set to **GitHub Actions** (switched
2026-09-06). The old path still exists as a fallback:

```
npm run deploy
```

which builds locally and pushes `build/` to the `gh-pages` branch. Once the
Actions deploy has shipped once, that script, the `gh-pages` package, and the
branch are unused and can go.

### Deployment Troubleshooting
The Actions run for the push shows the build, the checks, and the deploy step
with its URL. If the live site stays stale after a green deploy:

1. Give the Pages CDN a minute, then compare the hashed bundle name in
   `build/static/js/main.<hash>.js` against the one in the live HTML, and check
   `curl -sI https://curthenrichs.github.io/` for the `last-modified` header.
2. Run `production-smoke` from the Actions tab; its output names the failing
   invariant.
3. Confirm Settings -> Pages still says GitHub Actions. A "Timeout reached,
   aborting!" at the deploy step with a successful upload is a transient
   GitHub-side outage (observed 2026-07-02, self-resolved in ~8 hours); re-run
   the job.

## Updating
Content is data, and the components render it. Each section of the site reads
one module in `src/content/`:

- `biography.js`, `skills.js`, `domains.js`, `quotes.js`: the home page.
- `career.js`, `education.js`, `projects.js`: item cards. Each item names a
  `descriptionMarkdownPath` (the card text, under `markdown/brief/`) and a
  `modalMarkdownPath` (the full write-up, under `markdown/modal/`), plus
  thumbnail, images, skills, and links.
- `publications.js`, `contact.js`, `contracting.js`: their pages.
- `markdown/legal/`: Terms of Use, Privacy Policy, Accessibility Policy.
  `markdown/attribution/` with `attributionIcons.js`: the Attribution page.
- `pageMeta.js`, `primaryRouteOptions.js`, `secondaryRouteOptions.js`: titles,
  descriptions, and nav.

`src/content/schema.test.js` checks every module's shape and names the field
when something is off, so a bad edit fails `npm test` rather than rendering
blank.

To add a project, career entry, or education entry: add the item to its module,
write the brief and modal markdown, and register its detail route (see "Adding a
New Page" below).

### Images
Images live under `public/static/img/` and are referenced by served path
(`/static/img/...`). After adding or changing one, regenerate the two manifests
the components read:

```
npm run image-dims
npm run image-variants
```

The first records intrinsic dimensions (so layout can reserve space), the second
writes resized WebP and fallback variants next to the originals. Tests fail if a
referenced image is missing from either manifest.

### Icons
Content refers to icons by name (`icon: "arduino"`), resolved through
`IconLookupFromName` in `src/components/IconManager/index.jsx`. To add one, drop
the SVG in `src/components/IconManager/svg/`, add a wrapper function following
the existing ones (custom icons render `aria-hidden`; they always sit beside
text), export it, and add it to the lookup table. Then credit it in
`src/content/attributionIcons.js` and `markdown/attribution/Attribution.md`.
`iconReferences.test.js` fails on a name that content uses but the lookup does
not know; `attributionIcons.test.jsx` checks the credits file's shape.

## Acknowledgements
Thank you [Ant Design](https://ant.design/) for the amazing framework. I really
love the design language it provides out of the box.

And thanks to all the other library developers and teams who have made this
possible. I truly am standing on the shoulders of giants.

## Notes
My résumé and cover-letter source documents live in a separate private
repository. The published résumé PDF is `public/docs/curt-henrichs-resume.pdf`;
the top-level `docs/` directory holds side material (the career visualization
source file and social blurbs), none of it served.

## Adding a New Page

Prerendering requires each route to be registered in four places:

1. Add the `<Route>` in `src/index.jsx`.
2. Add a metadata entry in `src/content/pageMeta.js` (title format
   `Curt Henrichs | Portfolio | <Page>`), then render
   `<PageMeta {...pageMeta.<key>} />` inside the new page component.
3. Add the route to `scripts/base-routes.json` (`path`, `file`, and `title`;
   the title must match pageMeta exactly). Both the prerenderer and the
   hydration check read this shared file. (Item detail routes are exempt —
   they come from `src/content/detailRoutes.json`.)
4. Add the URL to `public/sitemap.xml`.

- Item detail pages: add the entry to `src/content/detailRoutes.json`; routes,
  prerender, and hydration checks pick it up automatically (a content item
  with `modalMarkdownPath` and no manifest entry fails `detailRoutes.test.js`).
  Also add the URL to `sitemap.xml` and `llms.txt`.

`npm run build` runs the prerenderer automatically (`postbuild`) and fails if a
route renders empty or with the wrong title.

- `npm run serve` uses a blanket SPA rewrite and does not emulate GitHub
  Pages' real per-route file serving, so use `npm run check:hydration` for
  local verification instead.
- Puppeteer (used by the prerenderer and every `check:*` script) requires
  Node >= 22.12; `.nvmrc` pins 22.
- `npm run check:a11y` runs axe-core (WCAG 2.1 Level A) over every prerendered
  route in headless Chrome. Needs a fresh build, like the other checks.
- GitHub Pages 301-redirects `/career` to `/career/` (and similarly for other
  routes), so post-deploy `curl` checks need `-L` to follow the redirect.
