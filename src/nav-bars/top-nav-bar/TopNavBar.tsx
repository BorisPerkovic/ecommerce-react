import { Box, Container } from "@mui/material";
import { useAppTheme } from "../../theme/theme";
import { TopNavBarInfo } from "./TopNavBarInfo";
import { TopNavMenus } from "./TopNavMenus";

export const TopNavBar = () => {
  const {
    colors: { topNavBarBackGroundColor },
  } = useAppTheme();
  return (
    <Box
      sx={{
        backgroundColor: topNavBarBackGroundColor,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container component={"section"} maxWidth="lg">
        <Box
          component={"article"}
          display="flex"
          justifyContent={"space-between"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <TopNavBarInfo />
          <TopNavMenus />
        </Box>
      </Container>
    </Box>
  );
};
