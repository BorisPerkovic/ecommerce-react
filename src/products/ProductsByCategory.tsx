import { Grid, Box } from "@mui/material";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ECAlert } from "../components/ECAlert";
import { ECProductsCard } from "../components/ECProductsCard";
import { ECProductsCardSkeleteon } from "../components/ECProductsCardSkeleteon";
import { ProductsPagination } from "../pagination/ProductsPagination";
import { RootState } from "../store";

export const ProductsByCategory = () => {
  const productsStatus = useSelector((state: RootState) => state.products);
  const paginationProducts = useSelector(
    (state: RootState) => state.products.paginationProducts
  );
  const languageTag = useSelector(
    (state: RootState) => state.language.applanguage
  );
  const { t } = useTranslation("products");

  return (
    <Fragment>
      <Grid
        container
        display={"flex"}
        spacing={{ xs: 2 }}
        paddingX={2}
        style={{ position: "relative" }}
      >
        {productsStatus.loading === "pending" ? (
          <ECProductsCardSkeleteon />
        ) : null}
        {productsStatus.loading === "failed" ? (
          <ECAlert
            variant={"filled"}
            severity={"error"}
            message={t("wentWrong")}
          />
        ) : null}
        {productsStatus.loading === "succeeded"
          ? paginationProducts.map((product, index) => {
              const translatedDescription =
                product[languageTag as keyof typeof product];
              return (
                <Grid key={index + product.productsTitle} item xs={3}>
                  <ECProductsCard
                    id={product.productsId}
                    title={product.productsTitle}
                    price={product.productsPrice}
                    rating={product.productsRating}
                    image={product.productsImage}
                    description={translatedDescription}
                    addToFavoritesIcon
                    viewMoreIcon
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
