import { Box } from "@mui/material";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useAppTheme } from "../../theme/useAppTheme";
import { ECText } from "../../components/ECText";
import { useTranslation } from "react-i18next";

export const FavoritesDrawerNoItems = () => {
  const { palette } = useAppTheme();
  const { t } = useTranslation("products");
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"100%"}
      width={"300px"}
    >
      <HeartBrokenIcon
        sx={{
          fontSize: "100px",
          color: palette.error.main,
        }}
      />
      <ECText fontSize={18} component={"p"} textAlign="center">
        {t("noFavoritesItems")}
      </ECText>
    </Box>
  );
};
