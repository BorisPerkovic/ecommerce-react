import { Button, ButtonProps } from "@mui/material";
import React, { FunctionComponent } from "react";

interface ECMenuButtonProps extends ButtonProps {
  fontSize?: number;
  variant: "outlined" | "contained" | "text";
  disabled?: boolean;
  label: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  labelColor?: string;
  fulWidth?: boolean;
  onAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ECMenuButton: FunctionComponent<ECMenuButtonProps> = ({
  fontSize,
  variant,
  disabled,
  label,
  endIcon,
  startIcon,
  labelColor,
  fulWidth,
  onAction,
}) => {
  return (
    <Button
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: fontSize || "16px",
        color: labelColor,
        textTransform: "lowercase",
        width: "80px",
        textAlign: "center",
        margin: "0 10px",
      }}
      variant={variant}
      endIcon={endIcon ? endIcon : null}
      startIcon={startIcon ? startIcon : null}
      disableRipple={true}
      disabled={disabled}
      fullWidth={fulWidth}
      onClick={onAction}
    >
      {label}
    </Button>
  );
};
