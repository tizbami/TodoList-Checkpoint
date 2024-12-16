// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/reducer/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
