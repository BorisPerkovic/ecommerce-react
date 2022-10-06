import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ECProductsCard } from "../components/ECProductsCard";
import { ECText } from "../components/ECText";
import { RootState } from "../store";

export const ProductsItems = () => {
  const productsStatus = useSelector((state: RootState) => state.products);

  console.log(productsStatus.products);

  return (
    <Grid container display={"flex"} spacing={{ xs: 2 }} paddingX={2}>
      {productsStatus.loading === "pending" ? (
        <ECText component="p">Loading...</ECText>
      ) : null}
      {productsStatus.loading === "succeeded"
        ? productsStatus.products.map((product, index) => {
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
  );
};
