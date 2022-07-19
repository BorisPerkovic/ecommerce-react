import React, { Fragment, useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../theme/themeSlice";
import { useAppTheme } from "../../../theme/theme";

export const SelectLanguageMenu = () => {
  const {
    colors: { topNavBarSelectMenuButtonColor, topNavDropdownTextColor },
  } = useAppTheme();
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorElement);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleOnClose = (mode: string) => {
    setAnchorElement(null);
    dispatch(changeTheme(mode));
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
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
        id="language-button"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        language
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
        <MenuItem
          sx={{
            color: topNavDropdownTextColor,
            textTransform: "lowercase",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
          }}
          onClick={() => handleOnClose("light")}
        >
          English
        </MenuItem>
        <MenuItem
          sx={{
            color: topNavDropdownTextColor,
            textTransform: "lowercase",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
          }}
          onClick={() => handleOnClose("dark")}
        >
          Germany
        </MenuItem>
        <MenuItem
          sx={{
            color: topNavDropdownTextColor,
            textTransform: "lowercase",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
          }}
          onClick={() => handleOnClose("dark")}
        >
          Italy
        </MenuItem>
        <MenuItem
          sx={{
            color: topNavDropdownTextColor,
            textTransform: "lowercase",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
          }}
          onClick={() => handleOnClose("dark")}
        >
          Spanish
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
