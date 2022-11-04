import { Box, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { ECRating } from "../../components/ECRating";
import { ECText } from "../../components/ECText";
import { AddToCartButton } from "../products-card-buttons/AddToCartButton";
import { AddToFavoritesButton } from "../products-card-buttons/AddToFavoritesButton";

interface SingleProductOverviewProps {
  id: number;
  title: string;
  price: number;
  rate: number;
  brand: string;
  image: string;
}

export const SingleProductOverview: FunctionComponent<
  SingleProductOverviewProps
> = ({ id, title, price, rate, brand, image }) => {
  return (
    <Grid
      item
      xs={6}
      display={"flex"}
      justifyContent="center"
      flexDirection={"column"}
      paddingY={3}
    >
      <Box display={"flex"} alignItems={"center"}>
        <ECText component={"h2"} fontSize={24} bold>
          <span style={{ marginRight: 7 }}>{title}</span>
        </ECText>
        <AddToFavoritesButton
          id={id}
          title={title}
          price={price}
          rating={rate}
          image={image}
        />
      </Box>
      <Box marginY={2}>
        <ECText component={"p"} fontSize={18}>
          Brand: <span style={{ fontWeight: 700, marginLeft: 7 }}>{brand}</span>
        </ECText>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <ECText component={"p"} fontSize={18}>
          <span style={{ marginRight: 7 }}>Rated:</span>
        </ECText>
        <ECRating name={"read-only"} size={"medium"} value={rate} readonly />
      </Box>
      <Box marginY={2}>
        <ECText component={"p"} fontSize={32} bold>
          ${price}
        </ECText>
      </Box>
      <Box width={250}>
        <AddToCartButton id={id} title={title} price={price} image={image} />
      </Box>
    </Grid>
  );
};
