import React, { Fragment, useState } from "react";
import { Menu, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { useAppTheme } from "../../../theme/theme";
import { Language, supportedLanguages } from "./supportedLanguages";
import { SelectMenuItem } from "./SelectMenuItem";
import { changeLanguage } from "./changeLanguageSlice";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../store";

export const SelectLanguageMenu = () => {
  const {
    colors: { topNavBarSelectMenuButtonColor },
  } = useAppTheme();
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorElement);
  const dispatch = useDispatch();
  const appLanguage = useSelector(
    (state: RootState) => state.language.languageName
  );
  const { t } = useTranslation("navigation");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleOnClose = () => {
    setAnchorElement(null);
  };

  return (
    <Fragment>
      <Button
        sx={{
          color: topNavBarSelectMenuButtonColor,
          textTransform: "lowercase",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "12px",
          marginLeft: "15px",
          width: "80px",
        }}
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
        id="language-button"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {t(appLanguage)}
      </Button>
      <Menu
        open={open}
        id="language-menu"
        anchorEl={anchorElement}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
        onClose={handleOnClose}
      >
        {supportedLanguages.map((language: Language) => {
          return (
            <SelectMenuItem
              key={language.languageTag}
              label={language.languageLabel}
              onClose={() => {
                handleOnClose();
                dispatch(
                  changeLanguage({
                    languageTag: language.languageTag,
                    languageName: language.languageLabel,
                  })
                );
              }}
            />
          );
        })}
      </Menu>
    </Fragment>
  );
};
