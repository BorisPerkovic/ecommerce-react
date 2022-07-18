import React, { useContext } from "react";
import { lightTheme as DEFAULT_APP_THEME } from "./light-theme/lightTheme";
import { AppTheme } from "./appTheme";

export const ThemeContext = React.createContext<AppTheme>(DEFAULT_APP_THEME);
export const useAppTheme = (): AppTheme => {
  return useContext(ThemeContext);
};
