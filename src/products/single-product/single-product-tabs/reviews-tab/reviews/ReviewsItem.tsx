import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { ECAvatar } from "../../../../../components/ECAvatar";
import { ECRating } from "../../../../../components/ECRating";
import { ECText } from "../../../../../components/ECText";
import { FeedbackModel } from "../../../../../shared/models";
import { format } from "date-fns";

interface ReviewsItemProps {
  review: FeedbackModel;
}

export const ReviewsItem: FunctionComponent<ReviewsItemProps> = ({
  review,
}) => {
  const date = new Date(review.feedbackAdded);

  return (
    <Box paddingY={2} marginBottom={2}>
      <Box display={"flex"} alignItems={"center"} marginBottom={2}>
        <ECAvatar user={review.feedbackUser} />
        <Box>
          <ECText component={"p"} fontSize={16}>
            {review.feedbackUser}
          </ECText>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"210px"}
          >
            <ECRating
              name={"read-only"}
              size={"small"}
              value={review.feedbackRating}
              readonly
            />
            <ECText component={"p"} fontSize={14}>
              {format(date, "dd.MM.yyyy HH:mm")}
            </ECText>
          </Box>
        </Box>
      </Box>
      <ECText component={"p"} fontSize={14}>
        {review.feedbackComment}
      </ECText>
    </Box>
  );
};
