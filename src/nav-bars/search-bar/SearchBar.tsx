import { AppBar, Container, Grid } from "@mui/material";
import React, { Fragment } from "react";
import { useAppTheme } from "../../theme/useAppTheme";
import { SearchBarIcons } from "./SearchBarIcons";
import { SearchBarInput } from "./SearchBarInput";
import { SearchBarLogo } from "./SearchBarLogo";

export const SearchBar = () => {
  const { palette } = useAppTheme();
  return (
    <Fragment>
      <AppBar
        sx={{
          padding: "20px 0px",
          backgroundColor: palette.background.paper,
        }}
        position="sticky"
      >
        <Container maxWidth="xl">
          <Grid container alignItems={"center"}>
            <Grid item xs={3}>
              <SearchBarLogo />
            </Grid>
            <Grid item xs={6}>
              <SearchBarInput />
            </Grid>
            <Grid item xs={3}>
              <SearchBarIcons />
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Fragment>
  );
};
