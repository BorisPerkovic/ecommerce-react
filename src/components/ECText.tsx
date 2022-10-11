import { FunctionComponent } from "react";
import { TypographyProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useAppTheme } from "../theme/useAppTheme";

export interface ECTextPorps extends TypographyProps {
  bold?: boolean;
  textColor?: string;
  textAlign?: "left" | "center" | "right";
  component: "h1" | "h2" | "h3" | "h4" | "p";
  fontSize?: 12 | 14 | 16 | 18 | 24 | 32 | 40 | 48 | 56 | 64;
  children: any;
  space?: string;
  elipsis?: boolean;
}

export const ECText: FunctionComponent<ECTextPorps> = ({
  children,
  fontSize,
  bold,
  textColor,
  textAlign,
  component,
  space,
  elipsis,
}) => {
  const { palette } = useAppTheme();
  return (
    <Typography
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: bold ? 700 : 400,
        fontSize: fontSize || 12,
        margin: space,
        textAlign: textAlign || "left",
        whiteSpace: elipsis ? "nowrap" : null,
        overflow: elipsis ? "hidden" : null,
        textOverflow: elipsis ? "ellipsis" : null,
      }}
      component={component}
      color={textColor || palette.primary.main}
    >
      {children}
    </Typography>
  );
};
