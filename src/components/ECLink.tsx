import { LinkProps } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface ECLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
  onAction?: () => void;
}

export const ECLink: FunctionComponent<ECLinkProps> = ({
  to,
  children,
  onAction,
}) => {
  return (
    <Link to={to} onClick={onAction} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};
