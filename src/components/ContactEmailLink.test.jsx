import React from "react";
import { render, screen } from "@testing-library/react";
import ContactEmailLink from "./ContactEmailLink";

test("renders the contact email from contactData, opening a new tab", () => {
  render(<ContactEmailLink />);
  const link = screen.getByText("curthenrichs@gmail.com").closest("a");
  expect(link).toHaveAttribute("href", "mailto:curthenrichs@gmail.com");
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});
