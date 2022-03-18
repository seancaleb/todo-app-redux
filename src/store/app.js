import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todos/todosSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;
