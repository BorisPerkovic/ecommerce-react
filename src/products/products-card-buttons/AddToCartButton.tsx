import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTranslation } from "react-i18next";
import { ECButton } from "../../components/ECButton";

export const AddToCartButton = () => {
  const { t } = useTranslation("products");
  return (
    <ECButton
      variant="outlined"
      color="primary"
      label={t("addToCart")}
      endIcon={<AddShoppingCartIcon />}
    />
  );
};
