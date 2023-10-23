import React, { useState } from "react";
import { Checkbox, ListItem, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TaskItem.css";
export interface Task {
  value: string;
  isDone: boolean;
}
export interface TaskProps {
  key: number;
  task: Task;
  onDelete?: (value: string) => void;
}
export default function TaskItem({ key, task, onDelete }: TaskProps) {
  const [done, setDone] = useState<boolean>(task.isDone);
  return (
    <ListItem
      key={key}
      disablePadding
      secondaryAction={
        <div className="delete-icon" onClick={() => onDelete?.(task.value)}>
          <DeleteIcon />
        </div>
      }
    >
      <Checkbox edge="start" checked={done} onChange={() => setDone(!done)} />{" "}
      <div className={done ? "mark-task-done" : "mark-task-active"}>
        {task.value}
      </div>
      <Button>edit</Button>
    </ListItem>
  );
}
