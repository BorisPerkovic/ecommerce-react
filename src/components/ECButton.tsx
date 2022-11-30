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
  color:
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
  onAction,
}) => {
  const { palette } = useAppTheme();
  return (
    <Button
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: fontSize || "16px",
        textTransform: "none",
        borderRadius: "6px",
        fontWeight: "400",
        "&.MuiButton-containedPrimary": {
          backgroundColor: palette.primary.main,
          border: `1px solid ${palette.primary.main}`,
          color: palette.background.paper,
          boxShadow: "none",
        },
        "&.MuiButton-outlinedPrimary": {
          border: `1px solid ${palette.primary.main}`,
          color: palette.primary.main,
          boxShadow: "none",
        },
        "&.MuiButton-containedSuccess": {
          backgroundColor: palette.success.main,
          border: `1px solid ${palette.success.main}`,
          color: palette.common.white,
          boxShadow: "none",
        },
        "&.MuiButton-containedError": {
          backgroundColor: palette.error.main,
          border: `1px solid ${palette.error.main}`,
          color: palette.common.white,
          boxShadow: "none",
        },
        "&.MuiButton-outlinedError": {
          border: `1px solid ${palette.error.main}`,
          color: palette.error.main,
        },
      }}
      variant={variant}
      color={color}
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
