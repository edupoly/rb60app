// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/todos" }),
  endpoints: (builder) => ({
    addTodo: builder.mutation({
      query: (details) => {
        return {
          url: "/",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: details,
        };
      },
    }),
    getUserTodos: builder.query({
      query: (username) => {
        console.log("getUserTodos::", username);
        return `/${username}`;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddTodoMutation, useGetUserTodosQuery } = todosApi;
