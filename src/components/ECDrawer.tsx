import { Drawer, DrawerProps } from "@mui/material";
import { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";
import { ECText } from "./ECText";

interface ECDrawerProps extends DrawerProps {
  open: boolean;
  title: string;
  onClose: () => void;
}

export const ECDrawer: FunctionComponent<ECDrawerProps> = ({
  open,
  title,
  onClose,
  children,
}) => {
  const { palette } = useAppTheme();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          padding: "15px",
          backgroundColor: palette.background.paper,
        },
      }}
    >
      <ECText fontSize={16} component="h4">
        {title}
      </ECText>
      {children}
    </Drawer>
  );
};
