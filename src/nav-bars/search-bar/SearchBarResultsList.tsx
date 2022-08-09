import { Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ECMenuItem } from "../../components/ECMenuItem";
import { ECText } from "../../components/ECText";
import { RootState } from "../../store";
import { useAppTheme } from "../../theme/useAppTheme";

export const SearchBarResultsList = () => {
  const products = useSelector(
    (state: RootState) => state.search.searchProducts
  );
  const { palette } = useAppTheme();
  const { t } = useTranslation("products");

  return (
    <Paper
      sx={{
        position: "absolute",
        zIndex: "10",
        top: "53px",
        width: "97%",
        backgroundColor: palette.background.paper,
        padding: "5px 10px",
        maxHeight: "70vh",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      {products.length > 0
        ? products.map((product) => {
            return (
              <ECMenuItem
                key={product.productsId}
                label={product.productsTitle}
                onAction={() => console.log("item clicked")}
              />
            );
          })
        : null}
      {products.length === 0 ? (
        <ECText fontSize={16} component="p">
          {t("noSearchitems")}
        </ECText>
      ) : null}
    </Paper>
  );
};
