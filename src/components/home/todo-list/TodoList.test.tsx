import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

function setup() {
  render(<TodoList />);
  const newTaskInput: HTMLInputElement = screen.getByText(
    "Add your new task here",
  );
  const addButton = screen.getByRole("button", {
    name: /Add/i,
  });

  return { newTaskInput, addButton };
}
test("should render that the page is rendered correctly", () => {
  const { newTaskInput, addButton } = setup();
  expect(newTaskInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test("should add new todo task item to the list once user click `add`", () => {
  const { newTaskInput, addButton } = setup();
  fireEvent.change(newTaskInput, { target: { value: "Go to buy groceries" } });
  expect(newTaskInput.value).toContain("Go to buy groceries");

  fireEvent.click(addButton);

  expect(screen.getByRole("listitem")).toHaveTextContent("edit");
});