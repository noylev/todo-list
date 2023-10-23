import React, { useState } from "react";
import "./TodoList.css";
import { Button, List, TextField } from "@mui/material";
import TaskItem, { Task } from "./TaskItem";

const emptyTask = { value: "", isDone: false };
export default function TodoList() {
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>(emptyTask);

  function addTask(): void {
    setTodoList([...todoList, newTask as Task]);
    setNewTask(emptyTask);
  }
  function removeTask(value: string): void {
    const newList = todoList.filter((task) => task.value !== value);
    setTodoList(newList);
  }
  return (
    <div className="list">
      <div className="add-task">
        <TextField
          label="Add your new task here"
          variant="standard"
          value={newTask.value}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addTask();
            }
          }}
          onChange={(event) =>
            setNewTask({ ...newTask, value: event.target?.value })
          }
        />
        <Button onClick={addTask} disabled={!newTask}>
          Add
        </Button>
      </div>

      <List>
        {todoList.map((task, key) => {
          return <TaskItem key={key} task={task} onDelete={removeTask} />;
        })}
      </List>
    </div>
  );
}
