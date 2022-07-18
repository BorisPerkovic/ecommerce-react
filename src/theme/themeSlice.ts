import { createSlice } from "@reduxjs/toolkit";

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
      localStorage.setItem("EcommerceTheme", JSON.stringify(state.appTheme));
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
