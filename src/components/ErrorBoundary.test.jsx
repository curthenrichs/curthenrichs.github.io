import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

const Bomb = () => {
  throw new Error("kaboom");
};

// React logs boundary-caught errors (plus jsdom's uncaught-error report)
// through console.error; contain it so output stays pristine and assert the
// boundary's own log actually happened.
let errorSpy;
beforeEach(() => {
  errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
});
afterEach(() => errorSpy.mockRestore());

test("renders the default fallback when a child throws", () => {
  render(
    <ErrorBoundary>
      <Bomb />
    </ErrorBoundary>
  );
  expect(screen.getByText(/Oops, something broke/)).toBeInTheDocument();
  expect(
    errorSpy.mock.calls.some((args) => String(args[0]).includes("ErrorBoundary caught an error:"))
  ).toBe(true);
});

test("renders the fallback prop when provided", () => {
  render(
    <ErrorBoundary fallback={<div data-testid="custom-fallback">custom</div>}>
      <Bomb />
    </ErrorBoundary>
  );
  expect(screen.getByTestId("custom-fallback")).toBeInTheDocument();
  expect(screen.queryByText(/Oops, something broke/)).toBeNull();
});

test("renders children untouched when nothing throws", () => {
  render(
    <ErrorBoundary>
      <div data-testid="healthy">fine</div>
    </ErrorBoundary>
  );
  expect(screen.getByTestId("healthy")).toBeInTheDocument();
});
