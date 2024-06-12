import { configureStore } from "@reduxjs/toolkit";
import { stephenKingApi } from "./services/apiService";
import bookReducer from "./slices/book.slice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    [stephenKingApi.reducerPath]: stephenKingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stephenKingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
