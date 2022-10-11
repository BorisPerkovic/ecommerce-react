import { Box } from "@mui/material";
import { ECIconButton } from "../../components/ECIconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const SearchBarIcons = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems
  );
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <Box display={"flex"} justifyContent={"flex-end"} alignItems={"end"}>
      <ECIconButton ariaLabel="user" onAction={() => console.log("clicked")}>
        <PersonOutlineOutlinedIcon />
      </ECIconButton>
      <ECIconButton
        ariaLabel="shopping-cart"
        badge={cartItems.length || "0"}
        onAction={() => console.log("clicked")}
      >
        <ShoppingBagOutlinedIcon />
      </ECIconButton>
      <ECIconButton
        ariaLabel="favorites"
        badge={favorites.length || "0"}
        onAction={() => console.log("clicked")}
      >
        <FavoriteBorderOutlinedIcon />
      </ECIconButton>
    </Box>
  );
};
