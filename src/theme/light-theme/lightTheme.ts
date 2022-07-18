import { LightThemeSchemaColors } from "./lightThemeSchemaColors";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: LightThemeSchemaColors.PRIMARY,
    },
    secondary: {
      main: LightThemeSchemaColors.SECONDARY,
    },
  },
});
