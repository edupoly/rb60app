// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const employeesApi = createApi({
  reducerPath: "employeesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/" }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query({
      query: () => `/`,
    }),
    getRecipeDetails: builder.query({
      query: (id) => `/${id}`,
    }),
    addNewEmployee: builder.mutation({
      query: (details) => {
        return {
          url: "/addEmployee",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: details,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllRecipesQuery,
  useGetRecipeDetailsQuery,
  useAddNewEmployeeMutation,
} = employeesApi;
