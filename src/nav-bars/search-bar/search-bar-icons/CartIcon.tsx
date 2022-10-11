import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { ECIconButton } from "../../../components/ECIconButton";
import { RootState } from "../../../store";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { ECDrawer } from "../../../components/ECDrawer";

export const CartIcon = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Fragment>
      <ECIconButton
        ariaLabel="shopping-cart"
        badge={cartItems.length || "0"}
        onAction={handleDrawerOpen}
      >
        <ShoppingBagOutlinedIcon />
      </ECIconButton>
      <ECDrawer open={isDrawerOpen} title="My Cart" onClose={handleDrawerClose}>
        dsadsadasdasd
      </ECDrawer>
    </Fragment>
  );
};
