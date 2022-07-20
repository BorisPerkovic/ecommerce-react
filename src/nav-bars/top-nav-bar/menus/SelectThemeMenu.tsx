import React, { Fragment, useState } from "react";
import { Menu, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../theme/themeSlice";
import { useAppTheme } from "../../../theme/theme";
import { useTranslation } from "react-i18next";
import { SelectMenuItem } from "./SelectMenuItem";

export const SelectThemeMenu = () => {
  const {
    colors: { topNavBarSelectMenuButtonColor },
  } = useAppTheme();
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorElement);
  const dispatch = useDispatch();
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
        }}
        aria-controls={open ? "theme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
        id="theme-button"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {t("theme")}
      </Button>
      <Menu
        open={open}
        id="theme-menu"
        anchorEl={anchorElement}
        MenuListProps={{
          "aria-labelledby": "theme-button",
        }}
        onClose={handleOnClose}
      >
        <SelectMenuItem
          label="lightTheme"
          onClose={() => {
            handleOnClose();
            dispatch(changeTheme("light"));
          }}
        />
        <SelectMenuItem
          label="darkTheme"
          onClose={() => {
            handleOnClose();
            dispatch(changeTheme("dark"));
          }}
        />
      </Menu>
    </Fragment>
  );
};
