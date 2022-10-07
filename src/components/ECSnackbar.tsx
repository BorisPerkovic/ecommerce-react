import { Snackbar, Alert } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECSnackbarProps {
  severity: "error" | "info" | "success" | "warning";
  message: string;
  openSnackbar: boolean;
  onClose: () => void;
}

export const ECSnackbar: FunctionComponent<ECSnackbarProps> = ({
  severity,
  message,
  openSnackbar,
  onClose,
}) => {
  const { palette } = useAppTheme();
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={2000}
      onClose={onClose}
      sx={{
        "& .MuiAlert-filledSuccess": {
          backgroundColor: palette.success.main,
        },
        "& .MuiAlert-filledError": {
          backgroundColor: palette.error.main,
        },
        "& .MuiAlert-filledWarning": {
          backgroundColor: palette.warning.main,
        },
        "& .MuiAlert-filledInfo": {
          backgroundColor: palette.info.main,
        },
      }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
