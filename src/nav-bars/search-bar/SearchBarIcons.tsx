import { Box } from "@mui/material";
import { CartIcon } from "./search-bar-icons/CartIcon";
import { UserIcon } from "./search-bar-icons/UserIcon";
import { FavoritesIcon } from "./search-bar-icons/FavoritesIcon";

export const SearchBarIcons = () => {
  return (
    <Box display={"flex"} justifyContent={"flex-end"} alignItems={"end"}>
      <UserIcon />
      <CartIcon />
      <FavoritesIcon />
    </Box>
  );
};
