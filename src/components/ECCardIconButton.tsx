import { IconButton, IconButtonProps } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECCardIConButtonProps extends IconButtonProps {
  ariaLabel: string;
  icon: React.ReactNode;
  onAction: () => void;
}

export const ECCardIconButton: FunctionComponent<ECCardIConButtonProps> = ({
  ariaLabel,
  icon,
  onAction,
}) => {
  const { palette } = useAppTheme();
  return (
    <IconButton
      sx={{
        backgroundColor: palette.background.paper,
        color: palette.primary.main,
        padding: "5px",
        margin: "0px 7px",
        border: `1px solid ${palette.primary.main}`,
        ":hover": {
          backgroundColor: palette.background.default,
        },
      }}
      aria-label={ariaLabel}
      component="label"
      onClick={onAction}
    >
      {icon}
    </IconButton>
  );
};
