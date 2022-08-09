import React, { Fragment, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../theme/themeSlice";
import { useTranslation } from "react-i18next";
import { ECMenuItem } from "../../../components/ECMenuItem";
import { ECMenu } from "../../../components/ECMenu";
import { ECMenuButton } from "../../../components/ECMenuButton";
import { useAppTheme } from "../../../theme/useAppTheme";

export const SelectThemeMenu = () => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorElement);
  const dispatch = useDispatch();
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
        label={t("theme")}
      />
      <ECMenu
        open={open}
        id="theme-menu"
        anchorEl={anchorElement}
        MenuListProps={{
          "aria-labelledby": "theme-button",
        }}
        onClose={handleOnClose}
      >
        <ECMenuItem
          label={t("lightTheme")}
          onAction={async () => {
            handleOnClose();
            setTimeout(() => {
              dispatch(changeTheme("light"));
            }, 100);
          }}
        />
        <ECMenuItem
          label={t("darkTheme")}
          onAction={() => {
            handleOnClose();
            setTimeout(() => {
              dispatch(changeTheme("dark"));
            }, 100);
          }}
        />
      </ECMenu>
    </Fragment>
  );
};
