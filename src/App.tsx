import { useEffect } from "react";
import "./App.css";
import { TopNavBar } from "./nav-bars/top-nav-bar/TopNavBar";
import { RootState } from "./store";
import i18n from "i18next";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import { useAppTheme } from "./theme/useAppTheme";
import { SearchBar } from "./nav-bars/search-bar/SearchBar";

const App = () => {
  const theme = useAppTheme();
  const language = useSelector(
    (state: RootState) => state.language.applanguage
  );

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <ThemeProvider theme={theme}>
      <TopNavBar />
      <SearchBar />
    </ThemeProvider>
  );
};

export default App;
