import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import { themeReducer, THEME_FEATURE_KEY } from "./theme/themeSlice";
import {
  languageReducer,
  LANGUAGE_FEATURE_KEY,
} from "./nav-bars/top-nav-bar/menus/changeLanguageSlice";
import { productsApi } from "./products/productsSlice";
import {
  favoritesReducer,
  FAVORITES_FEATURE_KEY,
} from "./favorites/favoritesSlice";
import { cartReducer, CART_FEATURE_KEY } from "./cart/cartSlice";
import {
  searchProductsReducer,
  SEARCH_FEATURE_KEY,
} from "./nav-bars/search-bar/searchSlice";

const rootReducer = combineReducers({
  [THEME_FEATURE_KEY]: themeReducer,
  [LANGUAGE_FEATURE_KEY]: languageReducer,
  [FAVORITES_FEATURE_KEY]: favoritesReducer,
  [CART_FEATURE_KEY]: cartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [SEARCH_FEATURE_KEY]: searchProductsReducer,
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(productsApi.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
