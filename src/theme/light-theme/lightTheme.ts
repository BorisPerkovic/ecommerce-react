import { LightThemePaletteColors } from "./lightThemePaletteColors";
import { createTheme, Theme } from "@mui/material";

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    common: {
      white: LightThemePaletteColors.WHITE,
      black: LightThemePaletteColors.BLACK,
    },
    primary: {
      light: LightThemePaletteColors.WHITE,
      main: LightThemePaletteColors.PRIMARY,
      dark: LightThemePaletteColors.PRIMARY_DARK,
    },
    background: {
      paper: LightThemePaletteColors.PAPER_BACKGROUND,
      default: LightThemePaletteColors.BACKGROUND,
    },
  },
});
