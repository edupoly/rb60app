// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500/todos",
    prepareHeaders: (headers, { getState }) => {
      const token = window.localStorage.getItem("token");
      console.log("token in prepareHeaders", getState(), token);
      if (token) {
        headers.set("token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addTodo: builder.mutation({
      query: (details) => {
        return {
          url: "/",
          method: "POST",
          body: details,
        };
      },
    }),
    getUserTodos: builder.query({
      query: () => {
        return {
          url: `/`,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddTodoMutation, useGetUserTodosQuery } = todosApi;
