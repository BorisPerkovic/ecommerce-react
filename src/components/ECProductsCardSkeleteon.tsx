import { Box, Card, CardContent, Grid, Skeleton } from "@mui/material";
import React from "react";
import { useAppTheme } from "../theme/useAppTheme";

export const ECProductsCardSkeleteonItem = () => {
  const { palette } = useAppTheme();
  return (
    <Card
      sx={{
        backgroundColor: palette.background.paper,
        borderRadius: 2,
        boxShadow: palette.grey[400],
      }}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Skeleton animation="wave" height={150} width="80%" />
      </Box>
      <CardContent>
        <Box marginBottom={1}>
          <Skeleton animation="wave" height={30} width="80%" />
        </Box>
        <Skeleton animation="wave" height={20} width="40%" />
        <Box marginTop={1} marginBottom={2}>
          <Skeleton animation="wave" height={20} width="20%" />
        </Box>
        <Skeleton animation="wave" height={70} width="100%" />
      </CardContent>
    </Card>
  );
};

export const ECProductsCardSkeleteon = () => {
  const skeleton = [
    "item1, 'item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
    "item11",
    "item12",
    "item13",
  ];
  return (
    <Grid container display={"flex"} spacing={{ xs: 2 }} padding={2}>
      {skeleton.map((item) => {
        return (
          <Grid key={item} item xs={3}>
            <ECProductsCardSkeleteonItem />
          </Grid>
        );
      })}
    </Grid>
  );
};
