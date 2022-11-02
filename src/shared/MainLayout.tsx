import { Box, Container, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
}) => {
  const { palette } = useAppTheme();
  return (
    <Box component={"main"} bgcolor={palette.grey[300]}>
      <Container maxWidth="xl">
        <Grid container>{children}</Grid>
      </Container>
    </Box>
  );
};
