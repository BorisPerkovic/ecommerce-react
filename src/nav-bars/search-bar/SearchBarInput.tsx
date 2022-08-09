import { ECOutlinedInputField } from "../../components/ECOutlinedInputField";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { SearchBarResultsList } from "./SearchBarResultsList";
import { Controller, useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { searchProductsThunk } from "./searchSlice";
import { useState } from "react";
import { useAppTheme } from "../../theme/useAppTheme";
import { Box } from "@mui/material";

interface FormData {
  search: string;
}

export const SearchBarInput = () => {
  const [isLoading, setIsLoading] = useState<"idle" | "fullfiled" | "pending">(
    "idle"
  );
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
      setIsLoading("pending");
      if (searchParam === "") {
        setTimeout(() => {
          setIsLoading("idle");
        }, 200);
      } else {
        dispatch(searchProductsThunk(searchParam));
        setTimeout(() => {
          setIsLoading("fullfiled");
        }, 2000);
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
              isLoading === "pending" ? (
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
      {isLoading === "fullfiled" ? <SearchBarResultsList /> : null}
    </Box>
  );
};
