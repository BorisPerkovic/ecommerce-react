import { MenuItem } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useAppTheme } from "../../../theme/theme";

interface SelectMenuItemProps {
  label: string;
  onClose: () => void;
}

export const SelectMenuItem: FunctionComponent<SelectMenuItemProps> = ({
  label,
  onClose,
}) => {
  const {
    colors: { topNavDropdownTextColor },
  } = useAppTheme();
  const { t } = useTranslation("navigation");
  return (
    <MenuItem
      sx={{
        color: topNavDropdownTextColor,
        textTransform: "lowercase",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "13px",
      }}
      onClick={onClose}
    >
      {t(label)}
    </MenuItem>
  );
};
