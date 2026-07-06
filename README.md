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

## GitHub Deployment
I am using the [gh-pages](https://www.npmjs.com/package/gh-pages) package to deploy
the static website to GitHub Pages. To deploy, simply run:

```
npm run deploy
```

### Deployment Troubleshooting
`npm run deploy` only pushes the build to the `gh-pages` branch; GitHub's internal
"pages build and deployment" workflow then publishes it to the live site. If the
live site stays stale after a deploy:

1. Check the repo's Actions tab for the latest "pages build and deployment" run.
   A failure at the "Deploy to GitHub Pages" step with "Timeout reached, aborting!"
   (while the build and artifact upload succeed) is a transient GitHub-side outage,
   not a problem with this repo. Observed 2026-07-02: three consecutive timeouts
   that self-resolved roughly 8 hours later with no config changes.
2. Retrigger publishing without rebuilding by pushing an empty commit to `gh-pages`:

   ```
   git fetch origin gh-pages
   git push origin $(git commit-tree "origin/gh-pages^{tree}" -p origin/gh-pages -m "Retrigger Pages deployment"):refs/heads/gh-pages
   ```

3. To confirm what is actually live, compare the hashed bundle name in
   `build/static/js/main.<hash>.js` against the one referenced by the live site's
   HTML, and check `curl -sI https://curthenrichs.github.io/` for the
   `last-modified` header (it reflects the last successful publish, not the last
   attempt shown in Settings -> Pages).
4. If failures persist beyond a day, verify Settings -> Pages still points at
   `gh-pages` / root, then escalate to GitHub Support with the failed run links.

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
- Puppeteer (used by both the prerenderer and `check:hydration`) requires
  Node >= 22.12.
- GitHub Pages 301-redirects `/career` to `/career/` (and similarly for other
  routes), so post-deploy `curl` checks need `-L` to follow the redirect.
