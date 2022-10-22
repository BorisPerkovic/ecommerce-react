import { Box, Container, Grid } from "@mui/material";
import { Fragment } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ECText } from "../components/ECText";
import { HerroBanner } from "../hero-banner/HerroBanner";
import { ProductsSideNavBar } from "../nav-bars/side-nav-bars/ProductsSideNavBar";
import { useAppTheme } from "../theme/useAppTheme";

export const ProductsMainLayout = () => {
  const { categoryName, categoryBrand } = useParams<{
    categoryName: string;
    categoryBrand: string;
  }>();
  const { palette } = useAppTheme();

  const categoryTitle = `${categoryName?.toUpperCase()} - ${categoryBrand?.toUpperCase()}`;
  const title = categoryName ? categoryTitle : "THE BEST SELLERS";
  return (
    <Fragment>
      <HerroBanner />
      <Box component={"main"} bgcolor={palette.grey[300]}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item paddingY={4} marginTop={0} xs={12}>
              <ECText component="h2" fontSize={32} textAlign="center">
                {title}
              </ECText>
            </Grid>
            <Grid component={"aside"} item xs={2}>
              <ProductsSideNavBar />
            </Grid>

            <Grid
              component={"section"}
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              item
              xs={10}
            >
              <Outlet />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};
