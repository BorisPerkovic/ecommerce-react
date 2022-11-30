import { Box } from "@mui/material";
import { useState } from "react";
import { ECButton } from "../../../../../components/ECButton";
import { ECRating } from "../../../../../components/ECRating";
import { ECText } from "../../../../../components/ECText";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { ReviewProductTabForm } from "./ReviewProductTabForm";

export const WriteReview = () => {
  const [review, setReview] = useState<{
    rate: number;
    comment: string;
  }>({
    rate: 0,
    comment: "",
  });

  const handleRatingOnChange = (newValue: number) => {
    setReview({ ...review, rate: newValue });
  };

  return (
    <Box>
      <ECText component="h2" fontSize={24}>
        Write a Review for this product
      </ECText>
      <Box marginY={2}>
        <ECText component="h4" fontSize={16}>
          Your Rating *
        </ECText>
        <Box paddingY={1}>
          <ECRating
            name="simple-controlled"
            size="medium"
            value={review.rate}
            onAction={(value: number | null) =>
              handleRatingOnChange(value || 0)
            }
          />
        </Box>
      </Box>
      <Box marginY={2} sx={{ width: "100%" }}>
        <ECText component="h4" fontSize={16}>
          Your Review *
        </ECText>
        <Box paddingY={1}>
          <ReviewProductTabForm />
        </Box>
      </Box>
      <Box marginY={2} width={"200px"}>
        <ECButton
          variant={"contained"}
          label={"Save"}
          color={"success"}
          startIcon={<TaskAltIcon />}
        />
      </Box>
    </Box>
  );
};
