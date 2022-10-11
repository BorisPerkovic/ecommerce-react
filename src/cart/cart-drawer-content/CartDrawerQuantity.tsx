import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ECCardIconButton } from "../../components/ECCardIconButton";
import { ECText } from "../../components/ECText";
import { useDispatch } from "react-redux";
import { decreaseCart, increaseCart } from "../cartSlice";

interface CartDrawerQuantityProps {
  id: number;
  quantity: number;
}

export const CartDrawerQuantity: FunctionComponent<CartDrawerQuantityProps> = ({
  id,
  quantity,
}) => {
  const dispatch = useDispatch();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <ECCardIconButton
        ariaLabel={"increase-quantity"}
        icon={<AddIcon fontSize="small" />}
        onAction={() => {
          dispatch(increaseCart(id));
        }}
      />
      <Box marginY={0.5}>
        <ECText fontSize={12} component={"p"}>
          {quantity}
        </ECText>
      </Box>

      <ECCardIconButton
        ariaLabel={"decrease-quantity"}
        icon={<RemoveIcon fontSize="small" />}
        onAction={() => {
          dispatch(decreaseCart(id));
        }}
      />
    </Box>
  );
};
