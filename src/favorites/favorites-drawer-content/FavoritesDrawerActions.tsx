import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ECButton } from "../../components/ECButton";
import { removeAllFromFavorites } from "../favoritesSlice";

export const FavoritesDrawerActions = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("products");
  return (
    <Box>
      <Box marginTop={2}>
        <ECButton
          variant={"contained"}
          label={t("myWishlist")}
          color={"error"}
        />
      </Box>
      <Box marginTop={1.5}>
        <ECButton
          variant={"outlined"}
          label={t("clearFavorites")}
          color={"error"}
          onAction={() => {
            dispatch(removeAllFromFavorites());
          }}
        />
      </Box>
    </Box>
  );
};
