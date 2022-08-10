import { ECOutlinedInputField } from "../../components/ECOutlinedInputField";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { SearchBarResultsList } from "./SearchBarResultsList";
import { Controller, useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { resetLoadingToIdle, searchProductsThunk } from "./searchSlice";
import { useAppTheme } from "../../theme/useAppTheme";
import { Box } from "@mui/material";
import { RootState } from "../../store";
import { ECAlert } from "../../components/ECAlert";

interface FormData {
  search: string;
}

export const SearchBarInput = () => {
  const searchProducts = useSelector((state: RootState) => state.search);

  const dispatch = useDispatch<any>();
  const { t } = useTranslation("navigation");
  const { palette } = useAppTheme();

  const { control } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      search: "",
    },
  });

  const debounced = useDebouncedCallback(
    (param: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const searchParam = param.target.value;
      if (searchParam === "") {
        dispatch(resetLoadingToIdle());
      } else {
        dispatch(searchProductsThunk(searchParam));
      }
    },
    700
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <ECOutlinedInputField
            placeholder={t("searchFor")}
            startAdornment={
              searchProducts.loading === "pending" ? (
                <CircularProgress
                  sx={{ color: palette.secondary.main }}
                  size={24}
                  disableShrink
                />
              ) : (
                <SearchIcon />
              )
            }
            value={value}
            onChange={(e) => onChange(() => debounced(e))}
          />
        )}
        name="search"
      />
      {searchProducts.loading === "succeeded" ? (
        <SearchBarResultsList products={searchProducts.searchProducts} />
      ) : null}
      {searchProducts.loading === "failed" ? (
        <ECAlert variant="filled" severity="error" message={t("wentWrong")} />
      ) : null}
    </Box>
  );
};
