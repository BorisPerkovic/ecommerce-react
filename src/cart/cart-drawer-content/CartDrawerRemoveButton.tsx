import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { ECCardIconButton } from "../../components/ECCardIconButton";
import { removeFromCart } from "../cartSlice";

interface CartDrawerRemoveButtonProps {
  id: number;
}

export const CartDrawerRemoveButton: FunctionComponent<
  CartDrawerRemoveButtonProps
> = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Box marginLeft={1}>
      <ECCardIconButton
        ariaLabel={"remove-from-cart"}
        icon={<DeleteOutlineIcon fontSize="small" />}
        onAction={() => {
          dispatch(removeFromCart(id));
        }}
      />
    </Box>
  );
};
