import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todoSlice";
import billingReducer from "../features/billing/billingSlice";

export const store = configureStore({
  reducer: {
    counterR: counterReducer,
    todolistR: todoReducer,
    billingR: billingReducer,
  },
});
