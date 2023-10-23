import React from "react";
import "./Home.css";
import TodoList from "./todo-list/TodoList";

export default function Home() {
  return (
    <div className="home-page">
      <TodoList />
    </div>
  );
}
