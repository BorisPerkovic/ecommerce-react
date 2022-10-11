import React from "react";
import { ECIconButton } from "../../../components/ECIconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const UserIcon = () => {
  return (
    <ECIconButton ariaLabel="user" onAction={() => console.log("clicked")}>
      <PersonOutlineOutlinedIcon />
    </ECIconButton>
  );
};
