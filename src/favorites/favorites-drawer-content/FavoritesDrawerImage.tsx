import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import { ECRating } from "../../components/ECRating";
import { ECText } from "../../components/ECText";
import { useAppTheme } from "../../theme/useAppTheme";

interface FavoritesDrawerImageProps {
  image: string;
  title: string;
  price: number;
  rating: number;
}

export const FavoritesDrawerImage: FunctionComponent<
  FavoritesDrawerImageProps
> = ({ image, title, price, rating }) => {
  const { palette } = useAppTheme();
  return (
    <Box display={"flex"} alignItems={"center"} width={"70%"}>
      <Box>
        <img
          src={image}
          alt={title}
          style={{
            maxWidth: 80,
            alignSelf: "center",
            margin: "10px 15px",
          }}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <ECText bold fontSize={14} component={"p"} elipsis>
          {title.slice(0, 15)}...
        </ECText>
        <ECRating name="read-only" size="small" value={rating} readonly />
        <ECText fontSize={16} component={"p"} textColor={palette.error.main}>
          ${price}
        </ECText>
      </Box>
    </Box>
  );
};
