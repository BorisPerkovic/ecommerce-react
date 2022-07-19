import React, { Fragment, useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../../theme/themeSlice";
import { makeStyles } from "@mui/styles";
import { useAppTheme } from "../../../theme/theme";
import { RootState } from "../../../store";

const useStyles = makeStyles({
  btn: {
    textTransform: "lowercase",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
  },
});

export const SelectThemeMenu = () => {
  const {
    colors: { topNavBarSelectMenuButtonColor },
  } = useAppTheme();
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorElement);
  const theme = useSelector((state: RootState) => state.theme.appTheme);
  const dispatch = useDispatch();
  const classes = useStyles();

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
        className={classes.btn}
        sx={{ color: topNavBarSelectMenuButtonColor }}
        aria-controls={open ? "theme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
        id="theme-button"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {theme}
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
        <MenuItem onClick={() => handleOnClose("light")}>Light Mode</MenuItem>
        <MenuItem onClick={() => handleOnClose("dark")}>Dark mode</MenuItem>
      </Menu>
    </Fragment>
  );
};
