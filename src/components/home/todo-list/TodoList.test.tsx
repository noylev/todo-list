import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders learn react link", () => {
  render(<TodoList />);
  const newTaskInput = screen.getByText("Add your new task here");
  const addButton = screen.getByRole("button", {
    name: /Add/i,
  });
  expect(newTaskInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});
