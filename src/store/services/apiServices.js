import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5173/api",
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["todo"],
});
