import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book, Short, Villain } from "../../types";

export const stephenKingApi = createApi({
  reducerPath: "stephenKingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stephen-king-api.onrender.com/api",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => "/books",
      transformResponse: (response: { data: Book[] }) => response.data,
    }),
    getBookById: builder.query<Book, number>({
      query: (id) => `/book/${id}`,
    }),
    getShorts: builder.query<Short[], void>({
      query: () => "/shorts",
      transformResponse: (response: { data: Short[] }) => response.data,
    }),
    getShortById: builder.query<any, number>({
      query: (id) => `/short/${id}`,
    }),
    getVillains: builder.query<Villain[], void>({
      query: () => "/villains",
      transformResponse: (response: { data: Villain[] }) => response.data,
    }),
    getVillainById: builder.query<Villain, number>({
      query: (id) => `/villain/${id}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useGetShortsQuery,
  useGetShortByIdQuery,
  useGetVillainsQuery,
  useGetVillainByIdQuery,
} = stephenKingApi;
