import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
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
    reloadDataBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    reloadDataShorts: (state, action: PayloadAction<Short[]>) => {
      state.shorts = action.payload;
    },
    reloadDataVillains: (state, action: PayloadAction<Villain[]>) => {
      state.villains = action.payload;
    },
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
      console.log(state.books);
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      const updatedBooks = state.books.slice();

      const indexToRemove = updatedBooks.findIndex(
        (book) => book.id === action.payload
      );
      if (indexToRemove !== -1) {
        updatedBooks.splice(indexToRemove, 1);
      }

      state.books = updatedBooks;
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
  reloadDataBooks,
  reloadDataShorts,
  reloadDataVillains,
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
