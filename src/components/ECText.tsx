import { FunctionComponent } from "react";
import { Typography } from "@mui/material";
import { useAppTheme } from "../theme/theme";

export interface ECTextPorps {
  bold?: boolean;
  textColor?: string;
  fontSize?: 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64;
  children: any;
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  textAlign: "center" | "justify" | "left" | "right";
}

export const ECText: FunctionComponent<ECTextPorps> = ({
  children,
  component,
  textAlign,
  textColor,
  fontSize,
  bold,
}) => {
  const {
    colors: { primaryTextColor },
  } = useAppTheme();

  const fontWeight = bold ? 700 : 400;
  const size = fontSize || 12;
  const color = textColor || primaryTextColor;

  return (
    <Typography
      sx={{
        fontWeight,
        fontSize: size,
        color,
      }}
      component={component}
      textAlign={textAlign}
    >
      {children}
    </Typography>
  );
};
