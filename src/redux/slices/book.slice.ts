import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Book, Short, Villain } from "../../types";

interface BookState {
  books: Book[];
  shorts: Short[];
  villains: Villain[];
}

const initialState: BookState = {
  books: [],
  shorts: [],
  villains: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    addShort: (state, action: PayloadAction<Short>) => {
      state.shorts.push(action.payload);
    },
    updateShort: (state, action: PayloadAction<Short>) => {
      const index = state.shorts.findIndex(
        (short) => short.id === action.payload.id
      );
      if (index !== -1) {
        state.shorts[index] = action.payload;
      }
    },
    deleteShort: (state, action: PayloadAction<number>) => {
      state.shorts = state.shorts.filter(
        (short) => short.id !== action.payload
      );
    },
    addVillain: (state, action: PayloadAction<Villain>) => {
      state.villains.push(action.payload);
    },
    updateVillain: (state, action: PayloadAction<Villain>) => {
      const index = state.villains.findIndex(
        (villain) => villain.id === action.payload.id
      );
      if (index !== -1) {
        state.villains[index] = action.payload;
      }
    },
    deleteVillain: (state, action: PayloadAction<number>) => {
      state.villains = state.villains.filter(
        (villain) => villain.id !== action.payload
      );
    },
  },
});

export const {
  addBook,
  updateBook,
  deleteBook,
  addShort,
  updateShort,
  deleteShort,
  addVillain,
  updateVillain,
  deleteVillain,
} = bookSlice.actions;

export default bookSlice.reducer;
