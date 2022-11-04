import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { ECText } from "../../../components/ECText";

interface SpecificationsProductTabProps {
  index: number;
  value: number;
}

export const SpecificationsProductTab: FunctionComponent<
  SpecificationsProductTabProps
> = ({ index, value }) => {
  return (
    <Box
      role={"tabpanel"}
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      paddingY={2}
    >
      <ECText component="p" fontSize={18}>
        dsadsad
      </ECText>
    </Box>
  );
};
