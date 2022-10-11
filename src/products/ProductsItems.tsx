/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ECAlert } from "../components/ECAlert";
import { ECProductsCard } from "../components/ECProductsCard";
import { ECProductsCardSkeleteon } from "../components/ECProductsCardSkeleteon";
import { ProductsPagination } from "../pagination/ProductsPagination";
import { RootState } from "../store";
import { setTimeoutLoading } from "./productsSlice";

export const ProductsItems = () => {
  const productsStatus = useSelector((state: RootState) => state.products);
  const paginationProducts = useSelector(
    (state: RootState) => state.products.paginationProducts
  );
  const languageTag = useSelector(
    (state: RootState) => state.language.applanguage
  );
  const dispatch = useDispatch();
  const { t } = useTranslation("products");

  useEffect(() => {
    const timer = setTimeout(() => dispatch(setTimeoutLoading()), 600);
    return () => clearTimeout(timer);
  }, [paginationProducts]);

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
        {productsStatus.loading !== "failed" ? (
          <ProductsPagination pageCount={productsStatus.products.length} />
        ) : null}
      </Box>
    </Fragment>
  );
};
