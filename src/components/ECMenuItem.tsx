import { MenuItem, MenuItemProps } from "@mui/material";
import { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECMenuItemProps extends MenuItemProps {
  itemColor?: string;
  label: string;
  onAction?: () => void;
}

export const ECMenuItem: FunctionComponent<ECMenuItemProps> = ({
  itemColor,
  label,
  onAction,
}) => {
  const { palette } = useAppTheme();
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
      onClick={onAction}
    >
      {label}
    </MenuItem>
  );
};
