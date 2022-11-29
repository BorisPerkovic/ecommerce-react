import { createSlice } from "@reduxjs/toolkit";

export const LANGUAGE_FEATURE_KEY = "language";

export type MainLanguage = "en" | "de" | "es" | "it";
export type LanguageName = "English" | "German" | "Italy" | "Spain";

interface ThemeState {
  applanguage: string;
  languageName: LanguageName;
}

const initialState: ThemeState = { applanguage: "en", languageName: "English" };

const languageSlice = createSlice({
  initialState,
  name: "language",
  reducers: {
    changeLanguage: (state, { payload }) => {
      state.applanguage = payload.languageTag;
      state.languageName = payload.languageName;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;
