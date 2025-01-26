// features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api', // optional, default is 'api'
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), // replace with your API base URL
  endpoints: (builder) => ({
    // Define your endpoints here
    getPosts: builder.query({
      query: () => '/posts', // replace with your API endpoint
    }),
    // Add more endpoints as needed
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetPostsQuery } = apiSlice;