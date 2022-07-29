import React from "react";
import { ECOutlinedInputField } from "../../components/ECOutlinedInputField";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBarInput = () => {
  return (
    <ECOutlinedInputField
      placeholder="Search For..."
      startAdornment={<SearchIcon />}
    />
  );
};
