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
import { ProductsMainLayout } from "./shared/ProductsMainLayout";
import { Typography } from "@mui/material";
import { HomePage } from "./products/HomePage";
import { ProductsByCategory } from "./products/ProductsByCategory";

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
            <Route element={<ProductsMainLayout />}>
              <Route
                index
                path="/"
                element={<Navigate to="/ecommerce-app" replace />}
              />
              <Route path="/ecommerce-app" element={<HomePage />} />
              <Route
                path="/products-by-category/:categoryName/:categoryBrand"
                element={<ProductsByCategory />}
              />
            </Route>
            <Route path="*" element={<Typography>Not found</Typography>} />
          </Routes>
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
