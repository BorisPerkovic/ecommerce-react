import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./store";
import { darkTheme } from "./theme/dark-theme/darkTheme";
import { lightTheme } from "./theme/light-theme/lightTheme";
function App() {
  const appTheme = useSelector((state: RootState) => state.theme.appTheme);
  const theme = appTheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" component="p" color="primary">
        dsadas
      </Typography>
    </ThemeProvider>
  );
}

export default App;
