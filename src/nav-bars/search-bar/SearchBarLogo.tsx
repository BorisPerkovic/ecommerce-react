import { Typography } from "@mui/material";
import { useAppTheme } from "../../theme/useAppTheme";
import { ECLink } from "../../components/ECLink";

export const SearchBarLogo = () => {
  const { palette } = useAppTheme();
  return (
    <ECLink to="/home">
      <Typography
        component={"h2"}
        variant="h2"
        sx={{
          fontFamily: "Edu TAS Beginner, cursive",
          fontSize: "30px",
          fontWeight: 700,
          color: palette.primary.main,
        }}
      >
        ECOMMERCE
      </Typography>
    </ECLink>
  );
};
