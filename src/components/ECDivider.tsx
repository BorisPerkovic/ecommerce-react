import { Divider } from "@mui/material";
import { useAppTheme } from "../theme/useAppTheme";

export const ECDivider = () => {
  const { palette } = useAppTheme();
  return (
    <Divider
      variant="fullWidth"
      sx={{
        "&.MuiDivider-fullWidth": {
          borderColor: palette.primary.main,
        },
      }}
    />
  );
};
