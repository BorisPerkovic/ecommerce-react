import { Accordion, AccordionProps, AccordionSummary } from "@mui/material";
import { useAppTheme } from "../theme/useAppTheme";
import { FunctionComponent, SyntheticEvent } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ECText } from "./ECText";

interface ECAccordionProps extends AccordionProps {
  expanded?: boolean;
  title: string;
  ariaControls: string;
  expandIcon?: boolean;
  id: string;
  onChange?: (
    event: SyntheticEvent<Element, Event>,
    isExpanded: boolean
  ) => void;
}

export const ECAccordion: FunctionComponent<ECAccordionProps> = ({
  children,
  expanded,
  onChange,
  title,
  expandIcon,
  ariaControls,
  id,
}) => {
  const { palette } = useAppTheme();

  return (
    <Accordion
      expanded={expanded}
      disableGutters
      sx={{
        padding: "0px 10px",
        backgroundColor: palette.background.paper,
        color: palette.primary.main,
        boxShadow: palette.grey[400],
        "& .MuiAccordionSummary-content:hover": {
          color: palette.error.main,
          transition: "all 0.2s",
        },
        "& .MuiAccordionDetails-root": {
          padding: "10px 25px",
        },
        "& .MuiTypography-root:hover": {
          color: palette.error.main,
          transition: "all 0.2s",
        },
        "& .MuiSvgIcon-root": {
          color: palette.primary.main,
        },
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
          transform: "rotate(90deg)",
        },
      }}
      onChange={onChange}
    >
      <AccordionSummary
        id={id}
        aria-controls={ariaControls}
        expandIcon={expandIcon ? <ChevronRightIcon /> : null}
      >
        <ECText fontSize={16} component={"p"}>
          {title}
        </ECText>
      </AccordionSummary>
      {children}
    </Accordion>
  );
};
