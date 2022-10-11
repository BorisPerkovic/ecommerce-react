import { Box } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ECButton } from "../../components/ECButton";
import { RootState } from "../../store";
import { clearCart, getTotals } from "../cartSlice";

export const CartDrawerActions = () => {
  const items = useSelector((state: RootState) => state.cart.cartItems);
  const totalSum = useSelector(
    (state: RootState) => state.cart.cartTotalAmmount
  );

  const dispatch = useDispatch();
  const { t } = useTranslation("products");

  useEffect(() => {
    dispatch(getTotals());

    return () => {};
  }, [dispatch, items]);
  return (
    <Box>
      <Box marginTop={2}>
        <ECButton
          variant={"contained"}
          label={`${t("checkout")} ( $${totalSum} )`}
          color={"error"}
        />
      </Box>
      <Box marginTop={1.5}>
        <ECButton
          variant={"outlined"}
          label={t("clearCart")}
          color={"error"}
          onAction={() => {
            dispatch(clearCart());
          }}
        />
      </Box>
    </Box>
  );
};
