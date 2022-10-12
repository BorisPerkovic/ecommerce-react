import { Fragment, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSelector } from "react-redux";
import { ECIconButton } from "../../../components/ECIconButton";
import { RootState } from "../../../store";
import { ECDrawer } from "../../../components/ECDrawer";
import { FavoritesDrawerItems } from "../../../favorites/favorites-drawer-content/FavoritesDrawerItems";
import { useTranslation } from "react-i18next";

export const FavoritesIcon = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems
  );

  const { t } = useTranslation("products");

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
        title={t("myFavorites")}
        onClose={handleDrawerClose}
      >
        <FavoritesDrawerItems products={favorites} />
      </ECDrawer>
    </Fragment>
  );
};
