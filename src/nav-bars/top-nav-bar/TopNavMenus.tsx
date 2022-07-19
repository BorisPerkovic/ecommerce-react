import { Box } from "@mui/material";
import { SelectLanguageMenu } from "./menus/SelectLanguageMenu";
import { SelectThemeMenu } from "./menus/SelectThemeMenu";

export const TopNavMenus = () => {
  return (
    <Box>
      <SelectThemeMenu />
      <SelectLanguageMenu />
    </Box>
  );
};
