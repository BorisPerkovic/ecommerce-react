import { Box } from "@mui/material";
import { ECIconButton } from "../../components/ECIconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export const SearchBarIcons = () => {
  return (
    <Box display={"flex"} justifyContent={"flex-end"} alignItems={"end"}>
      <ECIconButton ariaLabel="user" onAction={() => console.log("clicked")}>
        <PersonOutlineOutlinedIcon />
      </ECIconButton>
      <ECIconButton
        ariaLabel="shopping-cart"
        badge={3}
        onAction={() => console.log("clicked")}
      >
        <ShoppingBagOutlinedIcon />
      </ECIconButton>
      <ECIconButton
        ariaLabel="favorites"
        badge={3}
        onAction={() => console.log("clicked")}
      >
        <FavoriteBorderOutlinedIcon />
      </ECIconButton>
    </Box>
  );
};
