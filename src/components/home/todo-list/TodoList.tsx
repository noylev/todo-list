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
    const newList = todoList.filter((task) => task.key !== taskToRemove.key);
    setTodoList(newList);
  }

  function editTask(editedTask: Task): void {
    const newList = todoList.map((task) => {
      if (task.key === editedTask.key) {
        task.value = editedTask.value;
      }
      return task;
    });

    setTodoList([...newList]);
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
