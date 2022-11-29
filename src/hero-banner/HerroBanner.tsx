import { Box, Container, Grid } from "@mui/material/";
import { useTranslation } from "react-i18next";
import BannerImage from "../assets/images/FE_dark.png";
import { ECText } from "../components/ECText";
import { useAppTheme } from "../theme/useAppTheme";

const styles = {
  bgImage: {
    paddingTop: "20%",
    paddingBottom: "20%",
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};

export const HerroBanner = () => {
  const { palette } = useAppTheme();
  const { t } = useTranslation("navigation");

  return (
    <Box component={"header"} bgcolor={palette.grey[200]}>
      <Container maxWidth="xl">
        <Grid container paddingY={3}>
          <Grid item xs={6} style={styles.bgImage}></Grid>
          <Grid
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            item
            xs={6}
          >
            <ECText component="p" fontSize={16} textAlign="center">
              {t("shopAndService")}
            </ECText>
            <ECText component="h1" fontSize={48} textAlign="center" bold>
              {t("modernEcommerce")}
            </ECText>
            <ECText
              component="p"
              fontSize={16}
              textAlign="center"
              id="scrollGrid"
            >
              {t("bannerDecription")}
            </ECText>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
