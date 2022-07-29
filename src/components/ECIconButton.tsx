import { styled } from "@mui/material/styles";
import { Badge, IconButton, IconButtonProps } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECIConButtonProps extends IconButtonProps {
  badge?: number;
  ariaLabel: string;
  children: React.ReactNode;
  onAction: () => void;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: -10,
    padding: "0 4px",
  },
}));

export const ECIconButton: FunctionComponent<ECIConButtonProps> = ({
  badge,
  ariaLabel,
  children,
  onAction,
}) => {
  const { palette } = useAppTheme();
  return (
    <IconButton
      sx={{
        backgroundColor: palette.background.default,
        color: palette.primary.main,
        padding: "10px",
        margin: "0px 10px",
        ":hover": {
          backgroundColor: palette.background.default,
        },
      }}
      aria-label={ariaLabel}
      component="label"
      onClick={onAction}
    >
      {badge ? (
        <StyledBadge badgeContent={badge} color={"error"}>
          {children}
        </StyledBadge>
      ) : (
        children
      )}
    </IconButton>
  );
};
