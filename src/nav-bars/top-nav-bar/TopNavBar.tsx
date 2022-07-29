import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TopNavBarInfo } from "./TopNavBarInfo";
import { TopNavMenus } from "./TopNavMenus";

const useStyles = makeStyles(() => ({
  container: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const TopNavBar = () => {
  const classes = useStyles();
  return (
    <Box bgcolor={"primary.dark"}>
      <Container component={"section"} maxWidth="xl">
        <Box className={classes.wrapper} component={"article"}>
          <TopNavBarInfo />
          <TopNavMenus />
        </Box>
      </Container>
    </Box>
  );
};
