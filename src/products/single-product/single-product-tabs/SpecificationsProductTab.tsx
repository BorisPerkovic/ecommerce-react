import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { ECText } from "../../../components/ECText";

interface SpecificationsProductTabProps {
  index: number;
  value: number;
  description: string | number;
}

export const SpecificationsProductTab: FunctionComponent<
  SpecificationsProductTabProps
> = ({ index, value, description }) => {
  return (
    <Box
      role={"tabpanel"}
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      paddingX={2}
      paddingY={4}
    >
      <ECText component="p" fontSize={16}>
        {description}
      </ECText>
    </Box>
  );
};
