import { Grid } from "@mui/material";
import React from "react";
import { ECProductsCard } from "../components/ECProductsCard";

export const ProductsItems = () => {
  /* const productsStatus = useSelector((state: RootStateOrAny) => state.products); */

  return (
    <Grid container display={"flex"} spacing={{ xs: 2 }} paddingX={2}>
      <Grid item xs={3}>
        <ECProductsCard />
      </Grid>
      <Grid item xs={3}>
        <ECProductsCard />
      </Grid>
      <Grid item xs={3}>
        <ECProductsCard />
      </Grid>
      <Grid item xs={3}>
        <ECProductsCard />
      </Grid>
      <Grid item xs={3}>
        <ECProductsCard />
      </Grid>
    </Grid>
  );
};
