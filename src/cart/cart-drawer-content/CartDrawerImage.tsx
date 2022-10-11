import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";
import { ECText } from "../../components/ECText";
import { useAppTheme } from "../../theme/useAppTheme";

interface CartDrawerImageProps {
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export const CartDrawerImage: FunctionComponent<CartDrawerImageProps> = ({
  image,
  title,
  price,
  quantity,
}) => {
  const { palette } = useAppTheme();
  return (
    <Box display={"flex"} alignItems={"center"} width={"70%"}>
      <Box>
        <img
          src={image}
          alt={title}
          style={{
            maxWidth: 80,
            alignSelf: "center",
            margin: "10px 15px",
          }}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <ECText bold fontSize={14} component={"p"} elipsis>
          {title.slice(0, 15)}...
        </ECText>
        <ECText fontSize={12} component={"p"}>
          ${price.toString()} * {quantity.toString()}
        </ECText>
        <ECText fontSize={16} component={"p"} textColor={palette.error.main}>
          ${price * quantity}
        </ECText>
      </Box>
    </Box>
  );
};
