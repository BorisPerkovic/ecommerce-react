import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import { FavoritesModel } from "../../shared/models";
import { FavoritesDrawerActions } from "./FavoritesDrawerActions";
import { FavoritesDrawerItem } from "./FavoritesDrawerItem";
import { FavoritesDrawerNoItems } from "./FavoritesDrawerNoItems";

interface FavoritesDrawerItemsProps {
  products: FavoritesModel[];
}

export const FavoritesDrawerItems: FunctionComponent<
  FavoritesDrawerItemsProps
> = ({ products }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection="column"
      height={"90%"}
    >
      <Box
        sx={{
          height: "80vh",
          overflow: "scroll",
          overflowX: "hidden",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <FavoritesDrawerItem
                key={product.productsId}
                id={product.productsId}
                title={product.productsTitle}
                image={product.productsImage}
                price={product.productsPrice}
                rating={product.productsRating}
              />
            );
          })
        ) : (
          <FavoritesDrawerNoItems />
        )}
      </Box>
      {products.length > 0 ? <FavoritesDrawerActions /> : null}
    </Box>
  );
};
