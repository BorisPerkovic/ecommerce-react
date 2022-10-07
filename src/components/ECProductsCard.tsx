import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";

import { useAppTheme } from "../theme/useAppTheme";
import { ECText } from "./ECText";
import { ECCardIconButton } from "./ECCardIconButton";
import { ECRating } from "./ECRating";
import { ECButton } from "./ECButton";
import { FunctionComponent } from "react";

interface ECProductsCardProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
}

export const ECProductsCard: FunctionComponent<ECProductsCardProps> = ({
  id,
  title,
  price,
  rating,
  image,
}) => {
  const { palette } = useAppTheme();
  const isFavorite = false;
  return (
    <Card
      sx={{
        backgroundColor: palette.background.paper,
        borderRadius: 2,
        boxShadow: palette.grey[400],
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        padding={1}
      >
        <ECCardIconButton
          ariaLabel="view more"
          icon={
            isFavorite ? (
              <FavoriteIcon fontSize="small" />
            ) : (
              <FavoriteBorderIcon fontSize="small" />
            )
          }
          onAction={() => {}}
        />
        <ECCardIconButton
          ariaLabel="add to favorites"
          icon={<FullscreenIcon fontSize="small" />}
          onAction={() => {}}
        />
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <img
          src={image}
          alt={title}
          style={{
            maxHeight: 120,
            alignSelf: "center",
            margin: "10px 0px",
          }}
        />
      </Box>
      <CardContent>
        <Box marginBottom={1}>
          <ECText component="p" fontSize={14}>
            {title}
          </ECText>
        </Box>
        <ECRating name="read-only" value={rating} readonly size="small" />
        <Box marginTop={1} marginBottom={2}>
          <ECText component="p" fontSize={14} textColor={palette.error.main}>
            ${price}
          </ECText>
        </Box>
        <ECButton
          variant="outlined"
          color="primary"
          label="Add to Card"
          endIcon={<AddShoppingCartIcon />}
        />
      </CardContent>
    </Card>
  );
};
