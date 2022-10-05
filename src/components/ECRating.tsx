import { Rating, RatingProps } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useAppTheme } from "../theme/useAppTheme";

interface ECRatingProps extends RatingProps {
  value?: number;
  readonly?: boolean;
  name: "read-only" | "simple-controlled" | "no-value";
  size: "small" | "medium" | "large";
  onAction?: () => void;
}

export const ECRating: FunctionComponent<ECRatingProps> = ({
  value,
  readonly,
  name,
  size,
  onAction,
}) => {
  const { palette } = useAppTheme();
  return (
    <Rating
      name={name}
      value={value}
      onChange={onAction}
      readOnly={readonly}
      size={size}
      sx={{
        "& .MuiRating-iconEmpty": {
          color: palette.primary.main,
        },
      }}
    />
  );
};
