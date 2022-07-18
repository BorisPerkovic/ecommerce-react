import { DarkThemeSchemaColors } from "./darkThemeSchemaColors";

import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: DarkThemeSchemaColors.PRIMARY,
    },
    secondary: {
      main: DarkThemeSchemaColors.SECONDARY,
    },
  },
});
