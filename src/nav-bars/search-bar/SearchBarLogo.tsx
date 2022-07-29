import { Typography } from "@mui/material";
import React from "react";
import { useAppTheme } from "../../theme/useAppTheme";

export const SearchBarLogo = () => {
  const { palette } = useAppTheme();
  return (
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
  );
};
