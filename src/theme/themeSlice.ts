import { createSlice } from "@reduxjs/toolkit";

export const THEME_FEATURE_KEY = "theme";

export type MainTheme = "light" | "dark";

interface ThemeState {
  appTheme: MainTheme;
}

const initialState: ThemeState = { appTheme: "light" };

const themeSlice = createSlice({
  initialState,
  name: "theme",
  reducers: {
    changeTheme: (state, { payload }) => {
      state.appTheme = payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
