import { useEffect } from "react";
import "./App.css";
import { TopNavBar } from "./nav-bars/top-nav-bar/TopNavBar";
import { RootState } from "./store";
import { ThemeContext } from "./theme/theme";
import { useTheme } from "./theme/useTheme";
import i18n from "i18next";
import { useSelector } from "react-redux";

const App = () => {
  const { appTheme } = useTheme();
  const language = useSelector(
    (state: RootState) => state.language.applanguage
  );

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <ThemeContext.Provider value={appTheme}>
      <TopNavBar />
    </ThemeContext.Provider>
  );
};

export default App;
