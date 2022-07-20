import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import themeReducer from "./theme/themeSlice";
import languageReducer from "./nav-bars/top-nav-bar/menus/changeLanguageSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["theme", "language"],
};

const middleware = [
  ...getDefaultMiddleware({
    // NOTE: Disabled since we use immer
    immutableCheck: false,
    serializableCheck: false,
  }),
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: false,
});

export const persistor = persistStore(store);
