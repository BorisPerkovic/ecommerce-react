import { createTheme, Theme } from "@mui/material";
import { DarkThemePaletteColors } from "./darkThemePaletteColors";

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    common: {
      white: DarkThemePaletteColors.WHITE,
      black: DarkThemePaletteColors.BLACK,
    },
    primary: {
      light: DarkThemePaletteColors.PRIMARY_LIGHT,
      main: DarkThemePaletteColors.PRIMARY,
      dark: DarkThemePaletteColors.PRIMARY_DARK,
    },
    background: {
      paper: DarkThemePaletteColors.PAPER_BACKGROUND,
      default: DarkThemePaletteColors.BACKGROUND,
    },
  },
});
