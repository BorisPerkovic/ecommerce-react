import { Box, Container, Grid } from "@mui/material/";
import { useTranslation } from "react-i18next";
import BannerImage from "../assets/images/FE.png";
import { ECText } from "../components/ECText";
import { useAppTheme } from "../theme/useAppTheme";

const styles = {
  bgImage: {
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  text: {
    height: "80vh",
  },
};

export const HerroBanner = () => {
  const { palette } = useAppTheme();
  const { t } = useTranslation("navigation");

  return (
    <Box component={"header"} bgcolor={palette.grey[200]}>
      <Container maxWidth="xl">
        <Grid container paddingY={2}>
          <Grid item xs={7} style={styles.bgImage} />
          <Grid
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            item
            xs={5}
            style={styles.text}
          >
            <ECText component="p" fontSize={16} textAlign="center">
              {t("shopAndService")}
            </ECText>
            <ECText component="h1" fontSize={48} textAlign="center" bold>
              {t("modernEcommerce")}
            </ECText>
            <ECText component="p" fontSize={16} textAlign="center">
              {t("bannerDecription")}
            </ECText>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
