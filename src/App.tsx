import { useEffect } from "react";
import "./App.css";
import { SnackbarProvider } from "notistack";
import { TopNavBar } from "./nav-bars/top-nav-bar/TopNavBar";
import { RootState } from "./store";
import i18n from "i18next";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAppTheme } from "./theme/useAppTheme";
import { SearchBar } from "./nav-bars/search-bar/SearchBar";
import { HomePage } from "./products/home-page/HomePage";
import { ProductsByCategory } from "./products/products-by-category/ProductsByCategory";
import { NotFound } from "./shared/NotFound";
import { Main } from "./products/Main";

const App = () => {
  const theme = useAppTheme();
  const language = useSelector(
    (state: RootState) => state.language.applanguage
  );

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={2} autoHideDuration={3000}>
          <TopNavBar />
          <SearchBar />
          <Routes>
            <Route element={<Main />}>
              <Route index path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/products-by-category/:categoryName/:categoryBrand"
                element={<ProductsByCategory />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
