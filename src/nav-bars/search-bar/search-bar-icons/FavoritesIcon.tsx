import React, { Fragment, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSelector } from "react-redux";
import { ECIconButton } from "../../../components/ECIconButton";
import { RootState } from "../../../store";
import { ECDrawer } from "../../../components/ECDrawer";

export const FavoritesIcon = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems
  );

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <Fragment>
      <ECIconButton
        ariaLabel="favorites"
        badge={favorites.length || "0"}
        onAction={handleDrawerOpen}
      >
        <FavoriteBorderOutlinedIcon />
      </ECIconButton>
      <ECDrawer
        open={isDrawerOpen}
        title="My Favorites"
        onClose={handleDrawerClose}
      >
        dsadsadasdasd
      </ECDrawer>
    </Fragment>
  );
};
