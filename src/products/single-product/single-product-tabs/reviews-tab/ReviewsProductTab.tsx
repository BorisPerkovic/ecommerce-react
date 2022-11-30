import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { FeedbackModel } from "../../../../shared/models";
import { Reviews } from "./reviews/Reviews";
import { WriteReview } from "./write-review/WriteReview";

interface ReviewProductTabProps {
  index: number;
  value: number;
  reviews: FeedbackModel[];
}

export const ReviewProductTab: FunctionComponent<ReviewProductTabProps> = ({
  index,
  value,
  reviews,
}) => {
  return (
    <Box
      role={"tabpanel"}
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      paddingX={2}
      paddingY={4}
      width={"100%"}
    >
      <Reviews reviews={reviews} />
      <WriteReview />
    </Box>
  );
};
