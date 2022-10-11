import { Box, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { FunctionComponent } from "react";
import { ECDialog } from "./ECDialog";
import CloseIcon from "@mui/icons-material/Close";
import { ECText } from "./ECText";
import { ECRating } from "./ECRating";
import { ECCardIconButton } from "./ECCardIconButton";
import { useAppTheme } from "../theme/useAppTheme";
import { AddToCartButton } from "../products/products-card-buttons/AddToCartButton";

interface ECProductDialogProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string | number;
  image: string;
  open: boolean;
  onClose: () => void;
}

export const ECProductsDialog: FunctionComponent<ECProductDialogProps> = ({
  id,
  title,
  price,
  rating,
  description,
  image,
  open,
  onClose,
}) => {
  const { palette } = useAppTheme();
  return (
    <ECDialog open={open} onClose={onClose} size="md">
      <DialogTitle display={"flex"} justifyContent={"flex-end"}>
        <ECCardIconButton
          ariaLabel="product-modal-close"
          onAction={onClose}
          icon={<CloseIcon fontSize="small" />}
        />
      </DialogTitle>
      <DialogContent>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"50%"}
          >
            <img
              src={image}
              alt={title}
              style={{
                width: "60%",
                alignSelf: "center",
                margin: "10px 0px",
              }}
            />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            width={"50%"}
          >
            <Box marginBottom={3}>
              <ECText bold fontSize={24} gutterBottom component={"h4"}>
                {title}
              </ECText>
            </Box>

            <Box>
              <ECText
                fontSize={24}
                gutterBottom
                component={"p"}
                textColor={palette.error.main}
              >
                ${price}
              </ECText>
            </Box>

            <Box>
              <ECRating name={"read-only"} size={"small"} value={rating} />
            </Box>

            <Box marginY={2}>
              <ECText fontSize={14} gutterBottom component={"p"}>
                {description.toString().slice(0, 300)}...
              </ECText>
            </Box>
            <DialogActions sx={{ width: 250, padding: 0 }}>
              <AddToCartButton
                id={id}
                title={title}
                price={price}
                image={image}
              />
            </DialogActions>
          </Box>
        </Box>
      </DialogContent>
    </ECDialog>
  );
};
