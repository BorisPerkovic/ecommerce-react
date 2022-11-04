import { Grid } from "@mui/material";
import { Fragment } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ECText } from "../components/ECText";
import { HerroBanner } from "../hero-banner/HerroBanner";
import { ProductsSideNavBar } from "../nav-bars/side-nav-bars/ProductsSideNavBar";
import { MainLayout } from "../shared/MainLayout";

export const Main = () => {
  const { categoryName, categoryBrand } = useParams<{
    categoryName: string;
    categoryBrand: string;
  }>();

  const categoryTitle = `${categoryName?.toUpperCase()} - ${categoryBrand?.toUpperCase()}`;
  const title = categoryName ? categoryTitle : "BEST SELLERS";
  return (
    <Fragment>
      <HerroBanner />
      <MainLayout>
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
      </MainLayout>
    </Fragment>
  );
};
