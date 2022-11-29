import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchProductsModel } from "../../shared/models";
import { SearchProductsModelDto } from "../../shared/modelsDto";
import { endpoints } from "../../shared/endpoints";

export const SEARCH_FEATURE_KEY = "search";

export interface InitialState {
  searchProducts: SearchProductsModel[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: InitialState = {
  searchProducts: [],
  loading: "idle",
};

export const searchProductsThunk = createAsyncThunk(
  "search/searchProductsThunk",
  async (param: string) => {
    const response = await axios.get<SearchProductsModelDto[]>(
      `${endpoints.BASE_URL}${endpoints.SEARCH_PRODUCTS}${param}`
    );
    return response.data;
  }
);

export const searchProductsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetLoadingToIdle: (state) => {
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProductsThunk.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(searchProductsThunk.fulfilled, (state, { payload }) => {
        const data = payload.map((item) => ({
          productsId: +item.products_id,
          productsTitle: item.products_title,
        }));
        state.searchProducts = data;

        state.loading = "succeeded";
      })
      .addCase(searchProductsThunk.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { resetLoadingToIdle } = searchProductsSlice.actions;

export const searchProductsReducer = searchProductsSlice.reducer;
