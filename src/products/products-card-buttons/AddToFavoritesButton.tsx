import React, { FunctionComponent } from "react";
import { ECCardIconButton } from "../../components/ECCardIconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../favorites/favoritesSlice";
import { useTranslation } from "react-i18next";
import { VariantType, useSnackbar, SnackbarKey } from "notistack";
import { Button } from "@mui/material";

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
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems
  );
  const isFavorite = favorites.findIndex((item) => item.productsId === id) >= 0;

  const dispatch = useDispatch();
  const { t } = useTranslation("products");

  const snackbarAction = (id: SnackbarKey) => (
    <Button color="inherit" size="small" onClick={() => closeSnackbar(id)}>
      Ok
    </Button>
  );

  const handleRemove = (variant: VariantType) => {
    dispatch(removeFromFavorites(id));
    enqueueSnackbar(`${title} ${t("removeFromFavorites")}`, {
      variant,
      action: (id) => snackbarAction(id),
    });
  };

  const handleAdd = (variant: VariantType) => {
    dispatch(
      addToFavorites({
        productsId: id,
        productsTitle: title,
        productsImage: image,
        productsRating: rating,
        productsPrice: price,
      })
    );
    enqueueSnackbar(`${title} ${t("addedToFavorites")}`, {
      variant,
      action: (id) => snackbarAction(id),
    });
  };

  return (
    <ECCardIconButton
      ariaLabel="add to favorites"
      icon={
        isFavorite ? (
          <FavoriteIcon fontSize="small" />
        ) : (
          <FavoriteBorderIcon fontSize="small" />
        )
      }
      onAction={() => {
        if (isFavorite) {
          handleRemove("error");
        } else {
          handleAdd("success");
        }
      }}
    />
  );
};
