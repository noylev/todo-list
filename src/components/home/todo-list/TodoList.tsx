import React, { useState } from "react";
import "./TodoList.css";
import { Button, List, TextField } from "@mui/material";
import TaskItem, { Task } from "./task-item/TaskItem";

export default function TodoList() {
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [value, setValue] = useState<string>("");
  function getTaskInitialValues(): Task {
    return {
      key: todoList.length + 1,
      value: value,
      isDone: false,
    };
  }

  function addTask(): void {
    const newTask = getTaskInitialValues();
    setTodoList([...todoList, newTask]);
    setValue("");
  }
  function removeTask(taskToRemove: Task): void {
    setTodoList(todoList.filter((task) => task.key !== taskToRemove.key));
  }

  function editTask(editedTask: Task): void {
    const updatedTasks = todoList.map((task) =>
      task.key === editedTask.key ? editedTask : task,
    );

    setTodoList(updatedTasks);
  }

  return (
    <div className="list">
      <div className="add-task">
        <TextField
          label="Add your new task here"
          variant="standard"
          fullWidth
          value={value}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addTask();
            }
          }}
          onChange={(event) => setValue(event.target?.value)}
          inputProps={{ "data-testid": "new-task-input" }}
        />
        <Button onClick={addTask} disabled={!value}>
          Add
        </Button>
      </div>
      <List>
        {todoList.map((task, key) => {
          return (
            <TaskItem task={task} onDelete={removeTask} onChange={editTask} />
          );
        })}
      </List>
    </div>
  );
}
