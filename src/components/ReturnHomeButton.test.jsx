import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import ReturnHomeButton from "./ReturnHomeButton";

const LocationProbe = () => {
  const location = useLocation();
  return <div data-testid="location">{location.pathname}</div>;
};

const renderOnDetourPage = () =>
  render(
    <MemoryRouter initialEntries={["/career"]}>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <ReturnHomeButton />
              <LocationProbe />
            </>
          }
        />
      </Routes>
    </MemoryRouter>
  );

test("links straight to / (not the /home redirect stub)", () => {
  renderOnDetourPage();
  const link = screen.getByRole("link", { name: "Take Me Back Home" });
  expect(link).toHaveAttribute("href", "/");
});

test("plain click navigates client-side without a page load", async () => {
  renderOnDetourPage();
  const user = userEvent.setup();
  await user.click(screen.getByRole("link", { name: "Take Me Back Home" }));
  // jsdom cannot do real navigation, so reaching "/" proves it was client-side.
  expect(screen.getByTestId("location").textContent).toBe("/");
});
