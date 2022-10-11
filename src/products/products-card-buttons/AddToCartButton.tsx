import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
import { ECButton } from "../../components/ECButton";
import { RootState } from "../../store";
import { useSnackbar, SnackbarKey } from "notistack";
import { Button } from "@mui/material";

interface AddToCartButtonProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const AddToCartButton: FunctionComponent<AddToCartButtonProps> = ({
  id,
  title,
  price,
  image,
}) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const itemIndex = cartItems.findIndex((item) => item.id === id);

  const dispatch = useDispatch();
  const { t } = useTranslation("products");

  const snackbarAction = (id: SnackbarKey) => (
    <Button color="inherit" size="small" onClick={() => closeSnackbar(id)}>
      Ok
    </Button>
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
        cartQuantity: itemIndex >= 0 ? cartItems[itemIndex].cartQuantity : 0,
      })
    );
    itemIndex >= 0
      ? enqueueSnackbar(`${title} ${t("increaseQuantity")}`, {
          variant: "info",
          action: (id) => snackbarAction(id),
        })
      : enqueueSnackbar(`${title} ${t("addedToCart")}`, {
          variant: "success",
          action: (id) => snackbarAction(id),
        });
  };
  return (
    <ECButton
      variant="outlined"
      color="primary"
      label={t("addToCart")}
      endIcon={<AddShoppingCartIcon />}
      onAction={handleAddToCart}
    />
  );
};
