import { Box, Tabs, TabsProps } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECTabsProps extends TabsProps {
  value: number;
  children: React.ReactNode;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const ECTabs: FunctionComponent<ECTabsProps> = ({
  value,
  children,
  onTabChange,
}) => {
  const { palette } = useAppTheme();

  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: 1,
        borderColor: palette.grey[100],
      }}
    >
      <Tabs
        value={value}
        onChange={onTabChange}
        sx={{
          "& .MuiTab-root": {
            fontFamily: "Montserrat, sans-serif",
            color: palette.primary.main,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: palette.primary.main,
          },
        }}
      >
        {children}
      </Tabs>
    </Box>
  );
};
