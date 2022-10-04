import { AccordionDetails } from "@mui/material";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { ECAccordion } from "../../components/ECAccordion";
import { ECText } from "../../components/ECText";
import { categories } from "../../shared/ProductsCategories";

export const ProductsSideNavBar = () => {
  const [expanded, setExpanded] = useState<boolean | string>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { t } = useTranslation("products");
  return (
    <Fragment>
      <ECAccordion
        id="panel1-home"
        expandIcon={false}
        ariaControls="home"
        title={t("home")}
        children={""}
      />
      <ECAccordion
        id="panel1-navigation"
        expandIcon
        ariaControls="televisions"
        title={t("televisions")}
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        {categories["Television"].map((category, index) => {
          return (
            <AccordionDetails key={index + category}>
              <ECText component={"p"} fontSize={14}>
                {category}
              </ECText>
            </AccordionDetails>
          );
        })}
      </ECAccordion>
      <ECAccordion
        id="panel2-navigation"
        expandIcon
        ariaControls="Telephones"
        title={t("telephones")}
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        {categories["Telephones"].map((category, index) => {
          return (
            <AccordionDetails key={index + category}>
              <ECText component={"p"} fontSize={14}>
                {category}
              </ECText>
            </AccordionDetails>
          );
        })}
      </ECAccordion>
      <ECAccordion
        id="panel3-navigation"
        expandIcon
        ariaControls="Laptops"
        title={t("laptops")}
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        {categories["Laptops"].map((category, index) => {
          return (
            <AccordionDetails key={index + category}>
              <ECText component={"p"} fontSize={14}>
                {category}
              </ECText>
            </AccordionDetails>
          );
        })}
      </ECAccordion>
      <ECAccordion
        id="panel4-navigation"
        expandIcon
        ariaControls="Cameras"
        title={t("cameras")}
        expanded={expanded === "panel4"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        {categories["Cameras"].map((category, index) => {
          return (
            <AccordionDetails key={index + category}>
              <ECText component={"p"} fontSize={14}>
                {category}
              </ECText>
            </AccordionDetails>
          );
        })}
      </ECAccordion>
      <ECAccordion
        id="panel5-navigation"
        expandIcon
        ariaControls="Audio"
        title={t("audio")}
        expanded={expanded === "panel5"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel5")}
      >
        {categories["Audio"].map((category, index) => {
          return (
            <AccordionDetails key={index + category}>
              <ECText component={"p"} fontSize={14}>
                {category}
              </ECText>
            </AccordionDetails>
          );
        })}
      </ECAccordion>
    </Fragment>
  );
};
