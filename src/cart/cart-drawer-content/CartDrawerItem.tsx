import { Box } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import { ECDivider } from "../../components/ECDivider";
import { CartDrawerImage } from "./CartDrawerImage";
import { CartDrawerQuantity } from "./CartDrawerQuantity";
import { CartDrawerRemoveButton } from "./CartDrawerRemoveButton";

interface CartDrawerItemProps {
  id: number;
  title: string;
  cartQuantity: number;
  image: string;
  price: number;
}

export const CartDrawerItem: FunctionComponent<CartDrawerItemProps> = ({
  id,
  title,
  cartQuantity,
  image,
  price,
}) => {
  return (
    <Fragment>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginY={2}
      >
        <CartDrawerQuantity quantity={cartQuantity} id={id} />
        <CartDrawerImage
          image={image}
          title={title}
          price={price}
          quantity={cartQuantity}
        />
        <CartDrawerRemoveButton id={id} />
      </Box>
      <ECDivider />
    </Fragment>
  );
};
