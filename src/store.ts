import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import themeReducer from "./theme/themeSlice";
import languageReducer from "./nav-bars/top-nav-bar/menus/changeLanguageSlice";
import searchProductsReducer from "./nav-bars/search-bar/searchSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  search: searchProductsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["theme", "language"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
  devTools: true,
});

export const persistor = persistStore(store);
