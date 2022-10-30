import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProducts } from "../../products/productsSlice";
import { useAppTheme } from "../../theme/useAppTheme";
import { endpoints } from "../../shared/endpoints";
import { AppThunkDispatch } from "../../store";
import { ECLink } from "../../components/ECLink";

export const SearchBarLogo = () => {
  const { palette } = useAppTheme();
  const dispatch = useDispatch<AppThunkDispatch>();
  return (
    <ECLink
      to="/home"
      onAction={() =>
        dispatch(getProducts(`${endpoints.BASE_URL}${endpoints.PRODUCTS}`))
      }
    >
      <Typography
        component={"h2"}
        variant="h2"
        sx={{
          fontFamily: "Edu TAS Beginner, cursive",
          fontSize: "30px",
          fontWeight: 700,
          color: palette.primary.main,
        }}
      >
        ECOMMERCE
      </Typography>
    </ECLink>
  );
};
