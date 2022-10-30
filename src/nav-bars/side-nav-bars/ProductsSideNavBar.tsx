import { AccordionDetails } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ECAccordion } from "../../components/ECAccordion";
import { ECText } from "../../components/ECText";
import { endpoints } from "../../shared/endpoints";
import { getProducts } from "../../products/productsSlice";
import { categories } from "../../shared/ProductsCategories";
import { AppThunkDispatch } from "../../store";
import { ECLink } from "../../components/ECLink";

export const ProductsSideNavBar = () => {
  const [expanded, setExpanded] = useState<boolean | string>(false);
  const [url, setUrl] = useState<string>(endpoints.PRODUCTS);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { t } = useTranslation("products");

  const dispatch = useDispatch<AppThunkDispatch>();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getProducts(`${endpoints.BASE_URL}${url}`));
    }

    return () => {
      mounted = false;
    };
  }, [dispatch, url]);

  return (
    <Fragment>
      <ECLink to={"/home"}>
        <ECAccordion
          id="panel1-home"
          expandIcon={false}
          ariaControls="home"
          title={t("home")}
          children={""}
          onChange={() => setUrl(`${endpoints.PRODUCTS}`)}
        />
      </ECLink>
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
            <AccordionDetails
              key={index + category}
              onClick={() =>
                setUrl(
                  `${endpoints.PRODUCTS_BY_CATEGORY}category=televisions&brand=${category}`
                )
              }
            >
              <ECLink to={`/products-by-category/televisions/${category}`}>
                <ECText component={"p"} fontSize={14}>
                  {category}
                </ECText>
              </ECLink>
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
            <AccordionDetails
              key={index + category}
              onClick={() =>
                setUrl(
                  `${endpoints.PRODUCTS_BY_CATEGORY}category=telephones&brand=${category}`
                )
              }
            >
              <ECLink to={`/products-by-category/telephones/${category}`}>
                <ECText component={"p"} fontSize={14}>
                  {category}
                </ECText>
              </ECLink>
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
            <AccordionDetails
              key={index + category}
              onClick={() =>
                setUrl(
                  `${endpoints.PRODUCTS_BY_CATEGORY}category=laptops&brand=${category}`
                )
              }
            >
              <ECLink to={`/products-by-category/laptops/${category}`}>
                <ECText component={"p"} fontSize={14}>
                  {category}
                </ECText>
              </ECLink>
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
            <AccordionDetails
              key={index + category}
              onClick={() =>
                setUrl(
                  `${endpoints.PRODUCTS_BY_CATEGORY}category=cameras&brand=${category}`
                )
              }
            >
              <ECLink to={`/products-by-category/cameras/${category}`}>
                <ECText component={"p"} fontSize={14}>
                  {category}
                </ECText>
              </ECLink>
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
            <AccordionDetails
              key={index + category}
              onClick={() =>
                setUrl(
                  `${endpoints.PRODUCTS_BY_CATEGORY}category=audio&brand=${category}`
                )
              }
            >
              <ECLink to={`/products-by-category/audio/${category}`}>
                <ECText component={"p"} fontSize={14}>
                  {category}
                </ECText>
              </ECLink>
            </AccordionDetails>
          );
        })}
      </ECAccordion>
    </Fragment>
  );
};
