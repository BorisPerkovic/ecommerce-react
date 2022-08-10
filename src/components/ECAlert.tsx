import { Stack, Alert, AlertProps, Button } from "@mui/material";
import { Fragment, FunctionComponent, useState } from "react";

interface ECAlertProps extends AlertProps {
  variant: "filled" | "outlined" | "standard";
  severity: "error" | "info" | "success" | "warning";
  message: string;
}

export const ECAlert: FunctionComponent<ECAlertProps> = ({
  variant,
  severity,
  message,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <Fragment>
      {isVisible ? (
        <Stack
          sx={{
            position: "absolute",
            zIndex: "10",
            top: "50px",
            width: "97%",
            padding: "5px 10px",
          }}
          spacing={2}
        >
          <Alert
            variant={variant}
            severity={severity}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => setIsVisible(false)}
              >
                Ok
              </Button>
            }
          >
            {message}
          </Alert>
        </Stack>
      ) : null}
    </Fragment>
  );
};
