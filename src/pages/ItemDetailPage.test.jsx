import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
// eslint-disable-next-line import/namespace -- eslint-plugin-import cannot parse react-helmet-async's source
import { HelmetProvider } from "react-helmet-async";
import ItemDetailPage from "./ItemDetailPage";
import detailRoutes from "../content/detailRoutes.json";
import imageVariants from "../content/imageVariants.json";
import projects from "../content/projects";
import career from "../content/career";
import education from "../content/education";

jest.mock("../components/MarkdownContent", () => {
  const M = (props) => <div data-testid="markdown-content" data-path={props.markdownPath} />;
  M.displayName = "MarkdownContent";
  return M;
});

const CONTENT = { projects, career, education };
const BACK_LABEL = { projects: "All Projects", career: "Career", education: "Education" };

// PageTemplate mounts -> react-scroll calls window.scrollTo (jsdom noise).
// The unmocked react-responsive-carousel also warns when it can't find a bare
// <img> child (ImageCarousel wraps images in ShimmerImage) to build thumbs
// from -- real behavior, not a bug, but console.warn noise. Filter just that
// message (the same way ErrorBoundary.test.jsx contains console.error) and
// let everything else -- including the accepted react-router deprecation
// warning -- through unchanged.
let scrollToSpy;
let warnSpy;
beforeEach(() => {
  scrollToSpy = jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  const realWarn = console.warn.bind(console);
  warnSpy = jest.spyOn(console, "warn").mockImplementation((msg, ...args) => {
    if (typeof msg === "string" && msg.includes("No images found")) {
      return;
    }
    realWarn(msg, ...args);
  });
});
afterEach(() => {
  scrollToSpy.mockRestore();
  warnSpy.mockRestore();
});

const LocationProbe = () => <div data-testid="loc">{useLocation().pathname}</div>;

const renderRoute = (route) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[route.path]}>
        <Routes>
          <Route path={route.path} element={<ItemDetailPage route={route} />} />
          <Route path="/projects" element={<LocationProbe />} />
          <Route path="/career" element={<LocationProbe />} />
          <Route path="/education" element={<LocationProbe />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>
  );

describe("every detail route renders", () => {
  test.each(detailRoutes.map((r) => [r.path, r]))("%s", (path, route) => {
    renderRoute(route);
    // The unguarded dereference would have thrown already; now assert shape:
    expect(screen.getAllByText(new RegExp(route.name)).length).toBeGreaterThan(0);
    const back = screen.getByText(`Back to ${BACK_LABEL[route.section]}`).closest("a");
    expect(back).toHaveAttribute("href", `/${route.section}`);
    expect(screen.getByTestId("markdown-content").getAttribute("data-path")).toBe(
      CONTENT[route.section][route.contentId].modalMarkdownPath
    );
  });
});

test("back button navigates client-side on plain click", () => {
  const route = detailRoutes[0];
  renderRoute(route);
  const back = screen.getByText(`Back to ${BACK_LABEL[route.section]}`).closest("a");
  fireEvent.click(back);
  expect(screen.getByTestId("loc").textContent).toBe(`/${route.section}`);
});

test("modifier click falls through to the real link (no SPA navigation)", () => {
  const route = detailRoutes[0];
  const stopNav = (e) => e.preventDefault(); // suppress jsdom navigation
  document.addEventListener("click", stopNav);
  try {
    renderRoute(route);
    const back = screen.getByText(`Back to ${BACK_LABEL[route.section]}`).closest("a");
    fireEvent.click(back, { ctrlKey: true });
    expect(screen.queryByTestId("loc")).toBeNull(); // still on the detail page
  } finally {
    document.removeEventListener("click", stopNav);
  }
});

test("og:image derives from the entry's carousel image variant", async () => {
  const route = detailRoutes.find((r) => {
    const entry = CONTENT[r.section][r.contentId];
    const img = (entry.images || []).filter((i) => i.carousel)[0];
    return img && imageVariants[img.img] && imageVariants[img.img].full;
  });
  expect(route).toBeDefined(); // at least one carousel-bearing entry exists
  const entry = CONTENT[route.section][route.contentId];
  const img = entry.images.filter((i) => i.carousel)[0];
  const expected = `https://curthenrichs.github.io${imageVariants[img.img].full.fallback}`;

  renderRoute(route);

  // react-helmet-async commits tags to the document head asynchronously
  // (via requestAnimationFrame on the client) -- mirrors the wait idiom in
  // src/components/PageMeta.test.jsx rather than inspecting a helmet
  // context object, since HelmetProvider.canUseDOM is true under jsdom and
  // the context's `helmet` server-state snapshot is never populated there.
  await waitFor(() =>
    expect(document.querySelector("meta[property=\"og:image\"]")).not.toBeNull()
  );
  expect(
    document.querySelector("meta[property=\"og:image\"]").getAttribute("content")
  ).toBe(expected);
});
