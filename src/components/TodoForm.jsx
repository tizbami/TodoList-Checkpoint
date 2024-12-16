// src/components/TodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer/todosSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText(""); // Clear the input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
