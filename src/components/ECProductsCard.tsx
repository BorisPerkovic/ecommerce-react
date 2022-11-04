import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import { useAppTheme } from "../theme/useAppTheme";
import { ECText } from "./ECText";
import { ECRating } from "./ECRating";
import { FunctionComponent } from "react";
import { AddToFavoritesButton } from "../products/products-card-buttons/AddToFavoritesButton";
import { ViewMoreModal } from "../products/products-card-buttons/ViewMoreModal";
import { AddToCartButton } from "../products/products-card-buttons/AddToCartButton";
import { ECLink } from "./ECLink";

interface ECProductsCardProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
  addToFavoritesIcon?: boolean;
  viewMoreIcon?: boolean;
  description: string | number;
}

export const ECProductsCard: FunctionComponent<ECProductsCardProps> = ({
  id,
  title,
  price,
  rating,
  image,
  addToFavoritesIcon,
  viewMoreIcon,
  description,
}) => {
  const { palette } = useAppTheme();
  const urlTitle = title.split(" ").join("-");
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
        {addToFavoritesIcon ? (
          <AddToFavoritesButton
            id={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
          />
        ) : null}
        {viewMoreIcon ? (
          <ViewMoreModal
            id={id}
            title={title}
            price={price}
            rating={rating}
            description={description}
            image={image}
          />
        ) : null}
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <ECLink to={`/single-product/${urlTitle}/${id}`}>
          <img
            src={image}
            alt={title}
            style={{
              maxHeight: 120,
              alignSelf: "center",
              margin: "10px 0px",
            }}
          />
        </ECLink>
      </Box>
      <CardContent>
        <Box marginBottom={1}>
          <ECLink to={`/single-product/${urlTitle}/${id}`}>
            <ECText component="p" fontSize={14}>
              {title}
            </ECText>
          </ECLink>
        </Box>
        <ECRating name="read-only" value={rating} readonly size="small" />
        <Box marginTop={1} marginBottom={2}>
          <ECText component="p" fontSize={14} textColor={palette.error.main}>
            ${price}
          </ECText>
        </Box>
        <AddToCartButton id={id} title={title} price={price} image={image} />
      </CardContent>
    </Card>
  );
};
