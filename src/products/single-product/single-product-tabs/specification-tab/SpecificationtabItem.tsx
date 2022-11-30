import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { ECText } from "../../../../components/ECText";

interface SpecificationTabItemProps {
  title: string;
  value: string;
}

export const SpecificationTabItem: FunctionComponent<
  SpecificationTabItemProps
> = ({ title, value }) => {
  return (
    <Box mb={1}>
      <ECText component="p" fontSize={16}>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            marginRight: "10px",
          }}
        >
          {title}:
        </span>
        {value || "/"}
      </ECText>
    </Box>
  );
};
