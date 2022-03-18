import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];
const DEFAULT_STATUS = "pending";

const options = {
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (todo) => {
        if (todo === null) {
          throw new Error("Value cannot be empty.");
        } else {
          const id = nanoid();
          const status = DEFAULT_STATUS;

          return {
            payload: {
              id,
              todo,
              status,
            },
          };
        }
      },
    },

    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    updateTodo: {
      reducer: (state, action) => {
        const todoItem = state.find((todo) => todo.id === action.payload.id);
        todoItem.todo = action.payload.todo;
      },
      prepare: (todo, id) => {
        return { payload: { id, todo } };
      },
    },

    updateTodoStatus: {
      reducer: (state, action) => {
        const todoItem = state.find((todo) => todo.id === action.payload.id);
        todoItem.status = action.payload.status;
      },
      prepare: (id, status) => {
        if (status === "pending" || "completed" || "in progress") {
          return { payload: { id, status } };
        } else {
          throw new Error("Invalid status.");
        }
      },
    },
  },
};

const todosSlice = createSlice(options);

// ACTIONS
export const { addTodo, deleteTodo, updateTodo, updateTodoStatus } =
  todosSlice.actions;

// SELECTORS
export const selectTodos = (state) => state.todos;
export const selectTodo = (state, id) =>
  state.todos.find((todo) => todo.id === id);
export const selectTodosByStatus = (state, status) =>
  state.todos.filter((todo) => todo.status === status);

export default todosSlice.reducer;
