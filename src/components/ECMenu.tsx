import { Menu, MenuProps } from "@mui/material";
import React, { FunctionComponent, ReactNode } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECMenuPorps extends MenuProps {
  children: ReactNode;
  menuColor?: string;
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

export const ECMenu: FunctionComponent<ECMenuPorps> = ({
  children,
  menuColor,
  open,
  onClose,
  anchorEl,
}) => {
  const { palette } = useAppTheme();
  return (
    <Menu
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: menuColor || palette.background.paper,
        },
      }}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
    >
      {children}
    </Menu>
  );
};
