import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { ECText } from "../../../components/ECText";

interface ReviewProductTabProps {
  index: number;
  value: number;
}

export const ReviewProductTab: FunctionComponent<ReviewProductTabProps> = ({
  index,
  value,
}) => {
  return (
    <Box
      role={"tabpanel"}
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      paddingX={2}
      paddingY={4}
    >
      <ECText component="p" fontSize={18}>
        review
      </ECText>
    </Box>
  );
};
