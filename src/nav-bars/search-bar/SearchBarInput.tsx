import React from "react";
import { ECOutlinedInputField } from "../../components/ECOutlinedInputField";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

export const SearchBarInput = () => {
  const { t } = useTranslation("navigation");

  return (
    <ECOutlinedInputField
      placeholder={t("searchFor")}
      startAdornment={<SearchIcon />}
    />
  );
};
