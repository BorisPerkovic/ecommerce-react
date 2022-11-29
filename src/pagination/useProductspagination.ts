import { useGetProductsQuery } from "../products/productsSlice";

export interface ProductsBody {
  to: number;
  category: string | undefined;
  brand: string | undefined;
}

export const useProductsPagination = (config: ProductsBody) => {
  const {
    data: products,
    isSuccess,
    isLoading,
    isError,
    isFetching,
  } = useGetProductsQuery(
    {
      brand: config?.brand,
      category: config?.category,
      to: config.to,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return {
    products,
    isSuccess,
    isError,
    isLoading,
    isFetching,
  };
};
