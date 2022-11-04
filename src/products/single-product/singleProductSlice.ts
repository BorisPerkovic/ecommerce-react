import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../shared/endpoints";

import axios from "axios";
export interface SingleProductDTO {
  products_id: number;
  products_title: string;
  products_price: string;
  products_category: string;
  en: string;
  de: string;
  it: string;
  es: string;
  products_image: string;
  products_rate: string;
}

export interface SingleProduct {
  productsId: number;
  productsTitle: string;
  productsPrice: number;
  productsCategory: string;
  en: string;
  de: string;
  it: string;
  es: string;
  productsImage: string;
  productsRate: number;
  cartQuantity: number;
}

interface SingleProductsState {
  product: SingleProduct;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: SingleProductsState = {
  product: {
    productsId: 0,
    productsTitle: "",
    productsPrice: 0,
    productsCategory: "",
    en: "",
    de: "",
    it: "",
    es: "",
    productsImage: "",
    productsRate: 0,
    cartQuantity: 0,
  },
  loading: "idle",
};

export const singleProduct = createAsyncThunk(
  "product/singleProduct",
  async (param: string) => {
    const promise = await axios.get<SingleProductDTO>(
      `${endpoints.BASE_URL}${endpoints.SINGLE_PRODUCT}product=${param}`
    );
    return promise;
  }
);

export const singleProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(singleProduct.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(singleProduct.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.product = {
          productsId: +action.payload.data.products_id,
          productsTitle: action.payload.data.products_title,
          productsPrice: +action.payload.data.products_price,
          productsCategory: action.payload.data.products_category,
          en: action.payload.data.en,
          de: action.payload.data.de,
          it: action.payload.data.it,
          es: action.payload.data.es,
          productsImage: action.payload.data.products_image,
          productsRate: +action.payload.data.products_rate,
          cartQuantity: 0,
        };
      })
      .addCase(singleProduct.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default singleProductSlice.reducer;
