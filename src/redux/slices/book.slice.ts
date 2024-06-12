import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Book {
  id: number;
  Title: string;
  Year: number;
  Publisher: string;
  ISBN: string;
  Pages: number;
  created_at: string;
}

export interface Short {
  id: number;
  title: string;
  originallyPublishedIn: string;
  collectedIn: string;
  year: number;
  created_at: string;
}

export interface Villain {
  id: number;
  name: string;
  gender: string;
  status: string;
  created_at: string;
}

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

export const googleSearchApi = createApi({
  reducerPath: "googleSearchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://serpapi.com", // URL base para la búsqueda de imágenes
  }),
  endpoints: (builder) => ({
    searchImagesForBook: builder.query<string[], string>({
      query: (bookTitle) => `/search.json?engine=google_images&q=${bookTitle}`,
      transformResponse: (response: { images: string[] }) => response.images,
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

export const { useSearchImagesForBookQuery } = googleSearchApi;
