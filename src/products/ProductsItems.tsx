/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ECProductsCard } from "../components/ECProductsCard";
import { ECText } from "../components/ECText";
import { ProductsPagination } from "../pagination/ProductsPagination";
import { RootState } from "../store";
import { setTimeoutLoading } from "./productsSlice";

export const ProductsItems = () => {
  const productsStatus = useSelector((state: RootState) => state.products);
  const paginationProducts = useSelector(
    (state: RootState) => state.products.paginationProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => dispatch(setTimeoutLoading()), 1000);
    return () => clearTimeout(timer);
  }, [paginationProducts]);

  return (
    <Fragment>
      <Grid container display={"flex"} spacing={{ xs: 2 }} paddingX={2}>
        {productsStatus.loading === "pending" ? (
          <ECText component="p">Loading...</ECText>
        ) : null}
        {productsStatus.loading === "succeeded"
          ? paginationProducts.map((product, index) => {
              return (
                <Grid key={index + product.productsTitle} item xs={3}>
                  <ECProductsCard
                    id={product.productsId}
                    title={product.productsTitle}
                    price={product.productsPrice}
                    rating={product.productsRating}
                    image={product.productsImage}
                  />
                </Grid>
              );
            })
          : null}
      </Grid>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingY={4}
      >
        <ProductsPagination pageCount={productsStatus.products.length} />
      </Box>
    </Fragment>
  );
};
