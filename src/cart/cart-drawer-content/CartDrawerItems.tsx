import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import { CartModel } from "../../shared/models";
import { CartDrawerActions } from "./CartDrawerActions";
import { CartDrawerItem } from "./CartDrawerItem";
import { CartDrawerNoItems } from "./CartDrawerNoItems";

interface CartDrawerItemsProps {
  products: CartModel[];
}

export const CartDrawerItems: FunctionComponent<CartDrawerItemsProps> = ({
  products,
}) => {
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
              <CartDrawerItem
                key={product.id}
                id={product.id}
                title={product.title}
                cartQuantity={product.cartQuantity}
                image={product.image}
                price={product.price}
              />
            );
          })
        ) : (
          <CartDrawerNoItems />
        )}
      </Box>
      {products.length > 0 ? <CartDrawerActions /> : null}
    </Box>
  );
};
