import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { ECText } from "../../../../components/ECText";
import { SpecificationTabItem } from "./SpecificationtabItem";

interface SpecificationsProductTabProps {
  index: number;
  value: number;
  description: string | number;
  system: string;
  ram: string;
  internal: string;
}

export const SpecificationsProductTab: FunctionComponent<
  SpecificationsProductTabProps
> = ({ index, value, description, system, ram, internal }) => {
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
      <Box sx={{ paddingY: 2 }}>
        <SpecificationTabItem title={"System"} value={system} />
        <SpecificationTabItem title={"RAM Memory"} value={ram} />
        <SpecificationTabItem title={"Internal Memory"} value={internal} />
      </Box>
    </Box>
  );
};
