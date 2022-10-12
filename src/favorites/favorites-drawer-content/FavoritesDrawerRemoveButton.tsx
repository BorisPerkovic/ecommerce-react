import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { ECCardIconButton } from "../../components/ECCardIconButton";
import { removeFromFavorites } from "../favoritesSlice";

interface FavoritesDrawerRemoveButtonProps {
  id: number;
}

export const FavoritesDrawerRemoveButton: FunctionComponent<
  FavoritesDrawerRemoveButtonProps
> = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Box marginLeft={1}>
      <ECCardIconButton
        ariaLabel={"remove-from-cart"}
        icon={<DeleteOutlineIcon fontSize="small" />}
        onAction={() => {
          dispatch(removeFromFavorites(id));
        }}
      />
    </Box>
  );
};
