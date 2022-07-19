import React, { Fragment, useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../theme/themeSlice";
import { makeStyles } from "@mui/styles";
import { useAppTheme } from "../../../theme/theme";

const useStyles = makeStyles({
  btn: {
    textTransform: "lowercase",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    marginLeft: "15px",
  },
});

export const SelectLanguageMenu = () => {
  const {
    colors: { topNavBarSelectMenuButtonColor },
  } = useAppTheme();
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorElement);
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
        <MenuItem onClick={() => handleOnClose("light")}>English</MenuItem>
        <MenuItem onClick={() => handleOnClose("dark")}>Germany</MenuItem>
        <MenuItem onClick={() => handleOnClose("dark")}>Italy</MenuItem>
        <MenuItem onClick={() => handleOnClose("dark")}>Spanish</MenuItem>
      </Menu>
    </Fragment>
  );
};
