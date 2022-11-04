import { Box } from "@mui/material";
import { ECSpinner } from "../components/ECSpinner";

export const BackdropSpinner = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        position: "fixed",
        top: -50,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.50)",
        inset: 0,
        zIndex: 10000,
      }}
    >
      <ECSpinner size={60} />
    </Box>
  );
};
