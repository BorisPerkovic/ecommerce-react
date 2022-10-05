import { Button, ButtonProps } from "@mui/material";
import { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECButtonProps extends ButtonProps {
  fontSize?: number;
  variant: "outlined" | "contained" | "text";
  disabled?: boolean;
  label: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  labelColor?: string;
  onAction?: () => void;
}

export const ECButton: FunctionComponent<ECButtonProps> = ({
  fontSize,
  variant,
  disabled,
  label,
  endIcon,
  startIcon,
  color,
  labelColor,
  onAction,
}) => {
  const { palette } = useAppTheme();
  return (
    <Button
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: fontSize || "16px",
        textTransform: "none",
        borderRadius: "10px",
        "& .MuiButton-text": {
          backgroundColor: color || "transparent",
          color: labelColor || palette.primary.main,
          border: "none",
        },
      }}
      variant={variant}
      endIcon={endIcon ? endIcon : null}
      startIcon={startIcon ? startIcon : null}
      disabled={disabled}
      fullWidth
      onClick={onAction}
    >
      {label}
    </Button>
  );
};
