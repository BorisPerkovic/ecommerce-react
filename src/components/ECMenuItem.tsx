import { MenuItem, MenuItemProps } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useAppTheme } from "../theme/useAppTheme";

interface ECMenuItemProps extends MenuItemProps {
  itemColor?: string;
  label: string;
  onClose: () => void;
}

export const ECMenuItem: FunctionComponent<ECMenuItemProps> = ({
  itemColor,
  label,
  onClose,
}) => {
  const { palette } = useAppTheme();
  const { t } = useTranslation("navigation");
  return (
    <MenuItem
      sx={{
        color: itemColor || palette.primary.main,
        fontFamily: "Montserrat, sans-serif",
        fontSize: "13px",
        ":hover": {
          backgroundColor: "transparent",
          opacity: 0.6,
        },
      }}
      onClick={onClose}
    >
      {t(label)}
    </MenuItem>
  );
};
