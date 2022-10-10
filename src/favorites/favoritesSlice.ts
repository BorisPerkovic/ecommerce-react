import { createSlice } from "@reduxjs/toolkit";
import { ProductsModel } from "../shared/models";

export interface InitialState {
  favoritesItems: ProductsModel[];
}

const initialState: InitialState = {
  favoritesItems: [],
};

export const favortesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.favoritesItems.push(payload);
    },
    removeFromFavorites(state, { payload }) {
      const tempItems = state.favoritesItems.filter(
        (item) => item.productsId !== payload
      );
      state.favoritesItems = tempItems;
    },
    removeAllFromFavorites(state) {
      state.favoritesItems = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, removeAllFromFavorites } =
  favortesSlice.actions;

export default favortesSlice.reducer;
