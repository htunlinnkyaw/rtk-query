import { ApiService } from "../apiServices";

const todoEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "/todos",
    }),
    postTodo: builder.mutation({
      query: (formData) => ({
        url: "/todos",
        body: formData,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetTodoQuery, usePostTodoMutation } = todoEndpoint;

// Get => Query
// hook
// post,put,patch,delete => mutation
