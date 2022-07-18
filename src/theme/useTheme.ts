import { MainTheme } from "./themeSlice";
import { AppTheme } from "./appTheme";
import { darkTheme } from "./dark-theme/darkTheme";
import { lightTheme } from "./light-theme/lightTheme";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useTheme = (): { appTheme: AppTheme } => {
  const theme = useSelector((state: RootState) => state.theme.appTheme);
  const themes: Record<MainTheme, AppTheme> = {
    light: lightTheme,
    dark: darkTheme,
  };

  const mainTheme = themes[theme] || lightTheme;
  return {
    appTheme: mainTheme,
  };
};
