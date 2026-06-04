import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
var todoSlice = createSlice({
  name: "todolistslice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
var todoReducer = todoSlice.reducer;
export default todoReducer;
