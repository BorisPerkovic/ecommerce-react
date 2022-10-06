import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductsModel } from "../shared/models";
import { ProductsModelDto } from "../shared/modelsDto";

interface ProductsState {
  products: ProductsModel[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ProductsState = {
  products: [],
  loading: "idle",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (url: string) => {
    const promise = await axios.get<ProductsModelDto[]>(url);
    return promise;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.products = action.payload.data.map((item) => {
          return {
            productsId: +item.products_id,
            productsPrice: +item.products_price,
            productsRating: +item.products_rate,
            productsImage: item.products_image,
            productsTitle: item.products_title,
            de: item.de,
            en: item.en,
            it: item.it,
            es: item.es,
          };
        });
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default productsSlice.reducer;
