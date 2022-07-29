import { LightThemePaletteColors } from "./lightThemePaletteColors";
import { createTheme, Theme } from "@mui/material";

export const lightTheme: Theme = createTheme({
  palette: {
    common: {
      white: LightThemePaletteColors.WHITE,
      black: LightThemePaletteColors.BLACK,
    },
    primary: {
      light: LightThemePaletteColors.WHITE,
      main: LightThemePaletteColors.PRIMARY,
      dark: LightThemePaletteColors.PRIMARY_DARK,
    },
    secondary: {
      light: LightThemePaletteColors.SECONDARY_LIGHT,
      main: LightThemePaletteColors.SECONDARY,
      dark: LightThemePaletteColors.SECONDARY_DARK,
    },
    error: {
      main: LightThemePaletteColors.ERROR,
    },
    grey: {
      "200": LightThemePaletteColors.GRAY_200,
    },
    background: {
      paper: LightThemePaletteColors.PAPER_BACKGROUND,
      default: LightThemePaletteColors.BACKGROUND,
    },
  },
});
