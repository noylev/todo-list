import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingPage from "./LoadingPage";

test("renders learn react link", () => {
  render(<LoadingPage />);
  const spinner = screen.getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});
