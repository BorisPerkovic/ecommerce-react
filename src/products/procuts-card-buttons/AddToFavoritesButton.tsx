import React, { Fragment, useState } from "react";
import { ECCardIconButton } from "../../components/ECCardIconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ECSnackbar } from "../../components/ECSnackbar";

export const AddToFavoritesButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const isFavorite = false;
  return (
    <Fragment>
      <ECCardIconButton
        ariaLabel="add to favorites"
        icon={
          isFavorite ? (
            <FavoriteIcon fontSize="small" />
          ) : (
            <FavoriteBorderIcon fontSize="small" />
          )
        }
        onAction={handleOpen}
      />
      <ECSnackbar
        openSnackbar={open}
        severity="success"
        message={`added to favorites`}
        onClose={handleClose}
      />
    </Fragment>
  );
};
