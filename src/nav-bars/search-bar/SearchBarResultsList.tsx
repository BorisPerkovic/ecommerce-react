import { Paper } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ECLink } from "../../components/ECLink";
import { ECMenuItem } from "../../components/ECMenuItem";
import { ECText } from "../../components/ECText";
import { SearchProductsModel } from "../../shared/models";
import { useAppTheme } from "../../theme/useAppTheme";
import { resetLoadingToIdle } from "./searchSlice";

interface SearchBarResultsListProps {
  products: SearchProductsModel[];
}

export const SearchBarResultsList: FunctionComponent<
  SearchBarResultsListProps
> = ({ products }) => {
  const { palette } = useAppTheme();
  const { t } = useTranslation("navigation");
  const dispatch = useDispatch();

  return (
    <Fragment>
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
                <ECLink
                  key={product.productsId}
                  to={`/single-product/${product.productsTitle}/${product.productsId}`}
                >
                  <ECMenuItem
                    label={product.productsTitle}
                    onAction={() => dispatch(resetLoadingToIdle())}
                  />
                </ECLink>
              );
            })
          : null}
        {products.length === 0 ? (
          <ECText fontSize={16} component="p">
            {t("noSearchItems")}
          </ECText>
        ) : null}
      </Paper>
    </Fragment>
  );
};
