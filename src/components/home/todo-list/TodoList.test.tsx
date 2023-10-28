import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("should render that the page is rendered correctly", () => {
  render(<TodoList />);
  const newTaskInput = screen.getByText("Add your new task here");
  const addButton = screen.getByRole("button", {
    name: /Add/i,
  });
  expect(newTaskInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test("should add new todo task item to the list once user click `add`", () => {
  render(<TodoList />);
  const newTaskInput: HTMLInputElement = screen.getByLabelText(
    "Add your new task here",
  );
  const addButton = screen.getByRole("button", {
    name: /Add/i,
  });
  fireEvent.change(newTaskInput, { target: { value: "Go to buy groceries" } });
  expect(newTaskInput.value).toContain("Go to buy groceries");

  fireEvent.click(addButton);

  expect(screen.getByRole("listitem")).toHaveTextContent("edit");
});