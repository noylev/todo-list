import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const userName = screen.getByText(/User Name/i);
  const password = screen.getByText(/Password/i);
  expect(userName).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});
