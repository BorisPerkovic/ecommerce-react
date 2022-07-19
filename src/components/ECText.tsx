import { FunctionComponent } from "react";
import { Typography, TypographyProps } from "@mui/material";
import { useAppTheme } from "../theme/theme";

export interface ECTextPorps extends TypographyProps {
  bold?: boolean;
  textColor?: string;
  fontSize?: 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64;
  children: any;
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  textAlign: "center" | "justify" | "left" | "right";
  margin?: string;
}

export const ECText: FunctionComponent<ECTextPorps> = ({
  children,
  component,
  textAlign,
  textColor,
  fontSize,
  bold,
  margin,
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
        fontFamily: "Montserrat, sans-serif",
        fontWeight,
        fontSize: size,
        color,
        margin,
      }}
      component={component}
      textAlign={textAlign}
    >
      {children}
    </Typography>
  );
};
