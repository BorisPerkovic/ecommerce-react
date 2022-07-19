import "./App.css";
import { TopNavBar } from "./nav-bars/top-nav-bar/TopNavBar";
import { ThemeContext } from "./theme/theme";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { appTheme } = useTheme();

  return (
    <ThemeContext.Provider value={appTheme}>
      <TopNavBar />
    </ThemeContext.Provider>
  );
};

export default App;
