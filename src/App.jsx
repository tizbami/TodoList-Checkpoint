import React from "react";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
