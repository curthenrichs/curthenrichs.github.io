import React from "react";
import { render, waitFor } from "@testing-library/react";
// eslint-disable-next-line import/namespace -- eslint-plugin-import cannot parse react-helmet-async's source
import { HelmetProvider } from "react-helmet-async";
import PageMeta from "./PageMeta";

describe("PageMeta", () => {
  test("sets title, description, canonical, and OG tags", async () => {
    render(
      <HelmetProvider>
        <PageMeta
          title="Curt Henrichs | Portfolio | Test"
          description="Test description."
          path="/test"
        />
      </HelmetProvider>
    );

    await waitFor(() =>
      expect(document.title).toBe("Curt Henrichs | Portfolio | Test")
    );
    expect(
      document.querySelector("meta[name=\"description\"]").getAttribute("content")
    ).toBe("Test description.");
    expect(
      document.querySelector("link[rel=\"canonical\"]").getAttribute("href")
    ).toBe("https://curthenrichs.github.io/test");
    expect(
      document.querySelector("meta[property=\"og:url\"]").getAttribute("content")
    ).toBe("https://curthenrichs.github.io/test");
    expect(
      document.querySelector("meta[property=\"og:type\"]").getAttribute("content")
    ).toBe("website");
    expect(
      document.querySelector("meta[name=\"twitter:card\"]").getAttribute("content")
    ).toBe("summary");
    expect(document.querySelector("meta[name=\"robots\"]")).toBeNull();
  });

  test("supports ogType and robots overrides", async () => {
    render(
      <HelmetProvider>
        <PageMeta
          title="Curt Henrichs | Portfolio | Test2"
          description="D."
          path="/"
          ogType="profile"
          robots="noindex"
        />
      </HelmetProvider>
    );

    await waitFor(() =>
      expect(document.title).toBe("Curt Henrichs | Portfolio | Test2")
    );
    expect(
      document.querySelector("meta[property=\"og:type\"]").getAttribute("content")
    ).toBe("profile");
    expect(
      document.querySelector("meta[name=\"robots\"]").getAttribute("content")
    ).toBe("noindex");
  });

  test("supports ogImage override", async () => {
    render(
      <HelmetProvider>
        <PageMeta
          title="Curt Henrichs | Portfolio | Test3"
          description="D."
          path="/x"
          ogImage="https://curthenrichs.github.io/static/img/projects/authr/authr-setup.jpg"
        />
      </HelmetProvider>
    );
    await waitFor(() =>
      expect(document.title).toBe("Curt Henrichs | Portfolio | Test3")
    );
    expect(
      document.querySelector("meta[property=\"og:image\"]").getAttribute("content")
    ).toBe("https://curthenrichs.github.io/static/img/projects/authr/authr-setup.jpg");
    expect(
      document.querySelector("meta[property=\"og:image:alt\"]").getAttribute("content")
    ).toBe("Portrait of Curt Henrichs");
  });

  test("supports ogImageAlt override", async () => {
    render(
      <HelmetProvider>
        <PageMeta
          title="Curt Henrichs | Portfolio | Test4"
          description="D."
          path="/y"
          ogImage="https://curthenrichs.github.io/static/img/projects/authr/authr-setup.jpg"
          ogImageAlt="Image from Authr"
        />
      </HelmetProvider>
    );
    await waitFor(() =>
      expect(document.title).toBe("Curt Henrichs | Portfolio | Test4")
    );
    expect(
      document.querySelector("meta[property=\"og:image:alt\"]").getAttribute("content")
    ).toBe("Image from Authr");
  });
});
