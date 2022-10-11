import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import themeReducer from "./theme/themeSlice";
import languageReducer from "./nav-bars/top-nav-bar/menus/changeLanguageSlice";
import searchProductsReducer from "./nav-bars/search-bar/searchSlice";
import productsReducer from "./products/productsSlice";
import favoritesReducer from "./favorites/favoritesSlice";
import cartReducer from "./cart/cartSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  search: searchProductsReducer,
  products: productsReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["theme", "language", "favorites", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
  devTools: true,
});

export const persistor = persistStore(store);
