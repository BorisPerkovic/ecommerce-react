import { CircularProgress, CircularProgressProps } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECSPinnerProps extends CircularProgressProps {
  spinnerColor?: string;
  size: number;
}

export const ECSpinner: FunctionComponent<ECSPinnerProps> = ({
  spinnerColor,
  size,
}) => {
  const { palette } = useAppTheme();
  return (
    <CircularProgress
      size={size}
      sx={{
        color: spinnerColor || palette.primary.main,
      }}
    />
  );
};
