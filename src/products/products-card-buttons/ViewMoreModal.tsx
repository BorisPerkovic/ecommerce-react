import { Fragment, FunctionComponent, useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { ECCardIconButton } from "../../components/ECCardIconButton";
import { ECProductsDialog } from "../../components/ECProductsDialog";

interface ViewMoreModalProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string | number;
  image: string;
}

export const ViewMoreModal: FunctionComponent<ViewMoreModalProps> = ({
  id,
  title,
  price,
  rating,
  description,
  image,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <ECCardIconButton
        ariaLabel={"view more"}
        icon={<FullscreenIcon fontSize="small" />}
        onAction={handleOpen}
      />
      <ECProductsDialog
        id={id}
        title={title}
        price={price}
        rating={rating}
        description={description}
        image={image}
        open={open}
        onClose={handleClose}
      />
    </Fragment>
  );
};
