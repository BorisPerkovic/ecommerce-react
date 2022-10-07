import React, { Fragment, FunctionComponent, useState } from "react";
import { ECCardIconButton } from "../../components/ECCardIconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ECSnackbar } from "../../components/ECSnackbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../favorites/favoritesSlice";
import { useTranslation } from "react-i18next";

interface AddToFavoritesButtonProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
}

export const AddToFavoritesButton: FunctionComponent<
  AddToFavoritesButtonProps
> = ({ id, title, price, rating, image }) => {
  const [open, setOpen] = useState<boolean>(false);
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems
  );
  const isFavorite = favorites.findIndex((item) => item.productsId === id) >= 0;

  const dispatch = useDispatch();
  const { t } = useTranslation("products");

  const handleOpen = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(
        addToFavorites({
          productsId: id,
          productsTitle: title,
          productsImage: image,
          productsRating: rating,
          productsPrice: price,
        })
      );
    }

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
        severity={isFavorite ? "success" : "error"}
        message={
          isFavorite
            ? `${title} ${t("addedToFavorites")}`
            : `${title} ${t("removeFromFavorites")}`
        }
        onClose={handleClose}
      />
    </Fragment>
  );
};
