# Personal-Website
Development repo for my personal resume website using React and Ant Design. Check
it out at [curthenrichs.github.io](https://curthenrichs.github.io/).

For this project I am using [Ant Design](https://ant.design/), primarily for the
clean, simplistic visual style it offers.

## Local Build
To build and test locally, first clone this repo and navigate to the root project
directory. Then run:

```
npm install
```

Next to run the development server:

```
npm start
```

## Github Deployment
I am using the [gh-pages](https://www.npmjs.com/package/gh-pages) package to deploy the static website to Github pages.
To deploy, simply run:

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
This project is structured such that I should be able to merely update the content
files. I broke the content down by section on the webpage.

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

If adding projects then simply update the projects content and add a markdown
page with the writeup.

All images are provided in public and should be added there.

Icon SVGs should be added to the icon handler component and the Ant Wrapper written in
customIcons (within content directory).

## Acknowledgements
Thanks to this [repo](https://github.com/rafgraph/spa-github-pages) hard refreshes are
managed when deployed on Github Pages.

Thank you [Ant Design](https://ant.design/) for the amazing framework. I really
love the design language that is provided out of the box.

And thanks to all other technical libraries and code developers / teams who have
made this possible. I truly am standing on the shoulders of giants.

## Notes
My resume and cover letter design files are in the root's docs directory. This is
to make my life easier when updating my profile in the future.

## Adding a New Page

Prerendering requires each route to be registered in four places:

1. `src/index.jsx` — add the `<Route>`.
2. `src/content/pageMeta.js` — add a metadata entry (title format `Curt Henrichs | Portfolio | <Page>`); render `<PageMeta {...pageMeta.<key>} />` inside the new page component.
3. `scripts/prerender.js` — add the route to `ROUTES` (title must match pageMeta exactly).
4. `public/sitemap.xml` — add the URL.

`npm run build` runs the prerenderer automatically (`postbuild`) and fails if a
route renders empty or with the wrong title. Dev server (`npm start`) and
deploy (`npm run deploy`) are unchanged.
