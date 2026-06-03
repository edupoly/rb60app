import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todoSlice";
import billingReducer from "../features/billing/billingSlice";
import { productApi } from "../services/products";
import { setupListeners } from "@reduxjs/toolkit/query";
import { recipeApi } from "../services/recipes";
import { employeesApi } from "../services/employees";
export const store = configureStore({
  reducer: {
    counterR: counterReducer,
    todolistR: todoReducer,
    billingR: billingReducer,
    [productApi.reducerPath]: productApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      recipeApi.middleware,
      employeesApi.middleware,
    ),
});
setupListeners(store.dispatch);
