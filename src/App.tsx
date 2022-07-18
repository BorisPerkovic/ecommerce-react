import "./App.css";
import { ThemeContext } from "./theme/theme";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { appTheme } = useTheme();

  return <ThemeContext.Provider value={appTheme}></ThemeContext.Provider>;
};

export default App;
