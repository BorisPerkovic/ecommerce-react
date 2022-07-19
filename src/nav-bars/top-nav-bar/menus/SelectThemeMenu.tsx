import React, { Fragment, useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../theme/themeSlice";
import { useAppTheme } from "../../../theme/theme";

export const SelectThemeMenu = () => {
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
        aria-controls={open ? "theme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
        id="theme-button"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        theme
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
        <MenuItem
          sx={{
            color: topNavDropdownTextColor,
            textTransform: "lowercase",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
          }}
          onClick={() => handleOnClose("light")}
        >
          Light Mode
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
          Dark mode
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
