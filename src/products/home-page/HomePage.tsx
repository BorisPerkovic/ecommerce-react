/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid } from "@mui/material";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ECAlert } from "../../components/ECAlert";
import { ECProductsCard } from "../../components/ECProductsCard";
import { ECProductsCardSkeleteon } from "../../components/ECProductsCardSkeleteon";
import { ProductsPagination } from "../../pagination/ProductsPagination";
import { useProductsPagination } from "../../pagination/useProductspagination";
import { RootState } from "../../store";

export const HomePage = () => {
  const [page, setPage] = useState<number>(0);
  const { products, isLoading, isError, isFetching } = useProductsPagination({
    brand: undefined,
    category: undefined,
    to: page,
  });
  const languageTag = useSelector(
    (state: RootState) => state.language.applanguage
  );
  const { t } = useTranslation("products");

  const onHandleScroll = () => {
    const scrollElement = document.getElementById("scrollGrid");
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Fragment>
      <Grid
        container
        display={"flex"}
        spacing={{ xs: 2 }}
        paddingX={2}
        style={{ position: "relative" }}
      >
        {isLoading || isFetching ? <ECProductsCardSkeleteon /> : null}
        {isError ? (
          <ECAlert
            variant={"filled"}
            severity={"error"}
            message={t("wentWrong")}
          />
        ) : null}
        {!isFetching && products
          ? products[0].content.map((product) => {
              const translatedDescription =
                product[languageTag as keyof typeof product];
              return (
                <Grid key={product.productsId} item xs={3}>
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
        <ProductsPagination
          pageCount={products ? products[0].totalElements : 0}
          onAction={setPage}
          onHandleScroll={onHandleScroll}
        />
      </Box>
    </Fragment>
  );
};
