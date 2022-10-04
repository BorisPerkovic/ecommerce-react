import { Box, Container, Grid } from "@mui/material";
import { ECText } from "../components/ECText";
import { ProductsSideNavBar } from "../nav-bars/side-nav-bars/ProductsSideNavBar";
import { useAppTheme } from "../theme/useAppTheme";

export const Main = () => {
  const { palette } = useAppTheme();
  return (
    <Box component={"main"} bgcolor={palette.grey[300]}>
      <Container maxWidth="xl">
        <Grid container paddingY={10}>
          <Grid component={"aside"} item xs={3}>
            <ProductsSideNavBar />
          </Grid>

          <Grid
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            item
            xs={9}
          >
            <ECText component="p">Products</ECText>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
