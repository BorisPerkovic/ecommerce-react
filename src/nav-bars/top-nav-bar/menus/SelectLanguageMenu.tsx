import React, { Fragment, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { Language, supportedLanguages } from "./supportedLanguages";
import { changeLanguage } from "./changeLanguageSlice";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../store";
import { ECMenuItem } from "../../../components/ECMenuItem";
import { ECMenu } from "../../../components/ECMenu";
import { ECMenuButton } from "../../../components/ECMenuButton";
import { useAppTheme } from "../../../theme/useAppTheme";

export const SelectLanguageMenu = () => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorElement);
  const dispatch = useDispatch();
  const appLanguage = useSelector(
    (state: RootState) => state.language.languageName
  );
  const { t } = useTranslation("navigation");

  const handleOnClose = () => {
    setAnchorElement(null);
  };

  const { palette } = useAppTheme();

  return (
    <Fragment>
      <ECMenuButton
        fontSize={12}
        variant="text"
        aria-controls={open ? "theme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        id="theme-button"
        onAction={(event) => {
          setAnchorElement(event?.currentTarget);
        }}
        endIcon={<KeyboardArrowDownIcon />}
        labelColor={palette.primary.light}
        label={t(appLanguage)}
      />
      <ECMenu
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
            <ECMenuItem
              key={language.languageTag}
              label={t(language.languageLabel)}
              onAction={() => {
                handleOnClose();
                setTimeout(() => {
                  dispatch(
                    changeLanguage({
                      languageTag: language.languageTag,
                      languageName: language.languageLabel,
                    })
                  );
                }, 100);
              }}
            />
          );
        })}
      </ECMenu>
    </Fragment>
  );
};
