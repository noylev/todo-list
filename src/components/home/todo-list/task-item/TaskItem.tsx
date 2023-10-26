import React, { useEffect, useState } from "react";
import { useBoolean } from "ahooks";
import { Checkbox, ListItem, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TaskItem.css";
export interface Task {
  key: number;
  value: string;
  isDone: boolean;
}
export interface TaskItemProps {
  task: Task;
  onChange: (task: Task) => void;
  onDelete?: (task: Task) => void;
}
export default function TaskItem({ task, onChange, onDelete }: TaskItemProps) {
  const [isMarkedDone, setIsMarkedDone] = useBoolean(task.isDone);
  const [isEditMode, setIsEditMode] = useBoolean(false);
  const [value, setValue] = useState<string>(task.value);

  // This effect is for when value of the task gets changed and component should be re-rendered
  useEffect(() => {
    setValue(task.value);
    setIsMarkedDone.set(task.isDone);
  }, [task.value, task.isDone]);

  function stopEditMode() {
    setIsEditMode.setFalse();
    onChange({ ...task, value });
  }

  return (
    <ListItem
      key={task.key}
      disablePadding
      secondaryAction={
        <div className="actions">
          <Button
            disabled={isMarkedDone}
            onClick={() => {
              setIsEditMode.toggle();
            }}
          >
            edit
          </Button>
          <div className="delete-icon" onClick={() => onDelete?.(task)}>
            <DeleteIcon />
          </div>
        </div>
      }
    >
      <Checkbox
        edge="start"
        checked={isMarkedDone}
        onChange={() => {
          onChange({ ...task, isDone: !isMarkedDone });
          setIsMarkedDone.toggle();
        }}
      />
      <TextField
        value={value}
        className={isMarkedDone ? "mark-task-done" : "mark-task-active"}
        aria-readonly={true}
        variant="standard"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onBlur={() => {
          stopEditMode();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            stopEditMode();
          }
        }}
        style={{ width: 400 }}
        InputProps={{
          readOnly: !isEditMode,
          disableUnderline: !isEditMode,
        }}
      />
    </ListItem>
  );
}
