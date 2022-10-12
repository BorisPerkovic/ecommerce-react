import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesModel } from "../shared/models";

export interface InitialState {
  favoritesItems: FavoritesModel[];
}

const initialState: InitialState = {
  favoritesItems: [],
};

export const favortesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, { payload }: PayloadAction<FavoritesModel>) {
      state.favoritesItems.push(payload);
    },
    removeFromFavorites(state, { payload }: PayloadAction<number>) {
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
