import { Grid } from "@mui/material";
import { FunctionComponent } from "react";

interface SinbleProductImageProps {
  imageSource: string;
  imageAlt: string;
}

export const SingleProductImage: FunctionComponent<SinbleProductImageProps> = ({
  imageAlt,
  imageSource,
}) => {
  return (
    <Grid
      item
      xs={6}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={6}
    >
      <img
        src={imageSource}
        alt={imageAlt}
        style={{
          maxHeight: 300,
          alignSelf: "center",
          margin: "10px 0px",
        }}
      />
    </Grid>
  );
};
