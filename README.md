# Personal-Website
Development repo for my personal resume website using React and Ant Design. Check
it out at [curthenrichs.github.io](https://curthenrichs.github.io/).

For this project I am using [Ant Design](https://ant.design/), primarily for its
clean, simple visual style.

## Local Build
To build and test locally, first clone this repo and navigate to the root project
directory. Then run:

```
npm install
```

Then run the development server:

```
npm start
```

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
`check:a11y` against that build. The a11y check is report-only until the
violations it found are fixed; the rest fail the run.

`.github/workflows/production-smoke.yml` probes the live site after each
successful `ci` run on `main`, weekly, and on demand from the Actions tab:
route status codes, the trailing-slash redirect, that the served 404 is the
prerendered page and not the fallback, and the privacy policy's no-cookies and
no-third-party-scripts claims.

## GitHub Deployment
On a green `ci` run for a push to `main`, the same `build/` that passed the
checks is uploaded as the Pages artifact and deployed by `actions/deploy-pages`.
This needs the repo's Settings -> Pages source set to **GitHub Actions** (not
the `gh-pages` branch). Until that switch is made, the old path still works:

```
npm run deploy
```

which builds locally and pushes `build/` to the `gh-pages` branch. Once the
Actions deploy is live, that branch and the `gh-pages` package are unused.

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
This project is structured so that I should be able to just update the content
files. I broke the content down by section of the webpage:

- Main Page
  - biography
    - Biography (markdown)
  - skills
    - customIcons
    - And add icons to icon directory
  - career
    - Engineer (markdown)
    - Research (markdown)
    - Internship (markdown)
  - projects
    - Authr (markdown)
    - Coframe (markdown)
    - ITER (markdown)
    - Hobby (markdown)
  - publications
  - contact

To add a project, simply update the projects content file and add a markdown
page with the writeup.

All images live in `public`, and new ones should be added there too.

Icon SVGs should be added to the icon handler component, with the Ant wrapper
written in `customIcons` (within the content directory).

## Acknowledgements
Thank you [Ant Design](https://ant.design/) for the amazing framework. I really
love the design language it provides out of the box.

And thanks to all the other library developers and teams who have made this
possible. I truly am standing on the shoulders of giants.

## Notes
My résumé and cover-letter source documents now live in a separate private
repository, so they are no longer tracked here. The `docs` directory keeps only
web-facing material.

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
route renders empty or with the wrong title. Dev server (`npm start`) and
deploy (`npm run deploy`) are unchanged.

- `npm run serve` uses a blanket SPA rewrite and does not emulate GitHub
  Pages' real per-route file serving, so use `npm run check:hydration` for
  local verification instead.
- Puppeteer (used by the prerenderer and every `check:*` script) requires
  Node >= 22.12; `.nvmrc` pins 22.
- `npm run check:a11y` runs axe-core (WCAG 2.1 A/AA) over every prerendered
  route in headless Chrome and walks the home page's Tab order. Needs a fresh
  build, like the other checks.
- GitHub Pages 301-redirects `/career` to `/career/` (and similarly for other
  routes), so post-deploy `curl` checks need `-L` to follow the redirect.
