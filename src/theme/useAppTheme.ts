import { useSelector } from "react-redux";
import { RootState } from "../store";
import { darkTheme } from "./dark-theme/darkTheme";
import { lightTheme } from "./light-theme/lightTheme";

export const useAppTheme = () => {
  const appTheme = useSelector((state: RootState) => state.theme.appTheme);

  return appTheme === "light" ? lightTheme : darkTheme;
};
