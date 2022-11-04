import { createTheme, Theme } from "@mui/material";
import { DarkThemePaletteColors } from "./darkThemePaletteColors";

export const darkTheme: Theme = createTheme({
  palette: {
    common: {
      white: DarkThemePaletteColors.WHITE,
      black: DarkThemePaletteColors.BLACK,
    },
    primary: {
      light: DarkThemePaletteColors.PRIMARY_LIGHT,
      main: DarkThemePaletteColors.PRIMARY,
      dark: DarkThemePaletteColors.PRIMARY_DARK,
    },
    secondary: {
      light: DarkThemePaletteColors.SECONDARY_LIGHT,
      main: DarkThemePaletteColors.SECONDARY,
      dark: DarkThemePaletteColors.SECONDARY_DARK,
    },
    error: {
      main: DarkThemePaletteColors.ERROR,
    },
    success: {
      main: DarkThemePaletteColors.SUCCESS,
    },
    warning: {
      main: DarkThemePaletteColors.WARNING,
    },
    info: {
      main: DarkThemePaletteColors.INFO,
    },
    grey: {
      "100": DarkThemePaletteColors.GRAY_100,
      "200": DarkThemePaletteColors.GRAY_200,
      "300": DarkThemePaletteColors.GRAY_300,
      "400": DarkThemePaletteColors.GRAY_400,
    },
    background: {
      paper: DarkThemePaletteColors.PAPER_BACKGROUND,
      default: DarkThemePaletteColors.BACKGROUND,
    },
  },
});
