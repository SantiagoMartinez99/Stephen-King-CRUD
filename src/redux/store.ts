import { configureStore } from "@reduxjs/toolkit";
import { stephenKingApi } from "./services/apiService";
import bookReducer from "./slices/book.slice";
import { authSlice } from "./slices/auth.slice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    authReducer: authSlice.reducer,
    [stephenKingApi.reducerPath]: stephenKingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stephenKingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
