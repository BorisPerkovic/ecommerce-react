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
    background: {
      paper: DarkThemePaletteColors.PAPER_BACKGROUND,
      default: DarkThemePaletteColors.BACKGROUND,
    },
  },
});
