import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsBody } from "../pagination/useProductspagination";
import { endpoints } from "../shared/endpoints";
import { ProductsModel, Feedbacks } from "../shared/models";
import { ProductsModelDto, FeedbacksDto } from "../shared/modelsDto";
import { singleProductNormalizer } from "./single-product/singleProductNormalizer";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: endpoints.BASE_URL,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsModel[], ProductsBody>({
      query: (productsParams) => ({
        url: `${endpoints.PRODUCTS}`,
        method: "GET",
        params: productsParams,
      }),
      transformResponse: (response: ProductsModelDto): ProductsModel[] => {
        const totalElements = response.total_elements;
        const content = response.content.map((res) => ({
          productsId: +res.products_id,
          productsTitle: res.products_title,
          de: res.de,
          en: res.en,
          it: res.it,
          es: res.es,
          productsRating: +res.products_rate,
          productsPrice: +res.products_price,
          productsImage: res.products_image,
        }));
        return [{ totalElements, content }];
      },
    }),
    getSingleProduct: builder.query<Feedbacks, number>({
      query: (productId) => ({
        url: `${endpoints.SINGLE_PRODUCT}product=${productId}`,
      }),
      transformResponse: (response: FeedbacksDto): Feedbacks => {
        return singleProductNormalizer(response);
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;
