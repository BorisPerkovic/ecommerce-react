import { Box } from "@mui/material";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import { useAppTheme } from "../theme/useAppTheme";
import { ECText } from "../components/ECText";
import { ECButton } from "../components/ECButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const { palette } = useAppTheme();
  const { t } = useTranslation("products");
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      component={"div"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection={"column"}
      sx={{ height: "70vh", backgroundColor: palette.grey[300] }}
    >
      <DoNotTouchIcon
        fontSize="large"
        sx={{ color: palette.error.main, fontSize: 150 }}
      />
      <ECText component="h2" fontSize={56}>
        {t("notFound404")}
      </ECText>
      <ECText component="p" fontSize={24}>
        {t("notFound")}
      </ECText>
      <Box
        display={"flex"}
        justifyContent="space-between"
        width="30%"
        paddingY={3}
      >
        <Box width={200}>
          <ECButton
            variant={"outlined"}
            label={t("goBack")}
            color={"primary"}
            sx={{ marginRight: 10 }}
            onAction={handleGoBack}
          />
        </Box>
        <Box width={200}>
          <ECButton
            variant={"contained"}
            label={t("goHome")}
            color={"primary"}
            onAction={handleGoHome}
          />
        </Box>
      </Box>
    </Box>
  );
};
