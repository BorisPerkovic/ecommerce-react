import { Box, Container, Grid } from "@mui/material";
import { ProductsSideNavBar } from "../nav-bars/side-nav-bars/ProductsSideNavBar";
import { useAppTheme } from "../theme/useAppTheme";
import { ProductsItems } from "./ProductsItems";

export const Main = () => {
  const { palette } = useAppTheme();
  return (
    <Box component={"main"} bgcolor={palette.grey[300]}>
      <Container maxWidth="xl">
        <Grid container paddingY={10}>
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
            <ProductsItems />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
