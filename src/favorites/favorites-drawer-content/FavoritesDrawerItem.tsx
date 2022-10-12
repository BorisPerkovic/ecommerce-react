import { Box } from "@mui/material";
import { Fragment, FunctionComponent } from "react";
import { ECDivider } from "../../components/ECDivider";
import { FavoritesDrawerImage } from "./FavoritesDrawerImage";
import { FavoritesDrawerRemoveButton } from "./FavoritesDrawerRemoveButton";

interface FavoritesDrawerItemProps {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
}

export const FavoritesDrawerItem: FunctionComponent<
  FavoritesDrawerItemProps
> = ({ id, title, rating, image, price }) => {
  return (
    <Fragment>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginY={2}
      >
        <FavoritesDrawerImage
          image={image}
          title={title}
          price={price}
          rating={rating}
        />
        <FavoritesDrawerRemoveButton id={id} />
      </Box>
      <ECDivider />
    </Fragment>
  );
};
