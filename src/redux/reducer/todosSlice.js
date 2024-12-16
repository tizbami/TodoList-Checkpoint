// src/features/todos/todosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(), // Unique ID based on timestamp
        text: action.payload, // The to-do text
        completed: false, // New tasks are initially incomplete
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // Toggle the completion status
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export actions
export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

// Export reducer
export default todosSlice.reducer;
