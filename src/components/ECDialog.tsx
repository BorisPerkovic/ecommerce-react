import { FunctionComponent } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import { useAppTheme } from "../theme/useAppTheme";

interface ECDialogProps extends DialogProps {
  open: boolean;
  onClose: () => void;
  children: any;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const ECDialog: FunctionComponent<ECDialogProps> = ({
  children,
  open,
  onClose,
  size,
}) => {
  const { palette } = useAppTheme();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth={size || "sm"}
      role="presentation"
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
        "& .MuiDialog-paper": {
          boxShadow: "none",
          backgroundColor: palette.background.paper,
        },
      }}
    >
      {children}
    </Dialog>
  );
};
