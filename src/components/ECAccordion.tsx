import { Accordion, AccordionProps, AccordionSummary } from "@mui/material";
import { useAppTheme } from "../theme/useAppTheme";
import React, { FunctionComponent, SyntheticEvent } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ECText } from "./ECText";
import { useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();

  const isSelected = pathname.includes(title.toLocaleLowerCase());

  return (
    <Accordion
      expanded={expanded}
      disableGutters
      sx={{
        backgroundColor: palette.background.paper,
        boxShadow: palette.grey[400],
        "& .MuiAccordionSummary-root": {
          borderRadius: "none",
          borderLeft: isSelected ? `2px solid ${palette.error.main}` : "",
        },
        "& .MuiAccordionSummary-content:hover": {
          color: palette.error.main,
          transition: "all 0.1s",
        },
        "& .MuiAccordionDetails-root": {
          padding: "10px 25px",
        },
        "& .MuiTypography-root:hover": {
          color: palette.error.main,
          transition: "all 0.1s",
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
