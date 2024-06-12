import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types";

const initialState: AuthState = {
  isAuth: false,
  accessToken: null,
  isExpired: null,
  loading: false,
  success: false,
  userData: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
