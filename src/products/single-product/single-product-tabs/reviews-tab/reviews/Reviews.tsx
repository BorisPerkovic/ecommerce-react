import { Fragment, FunctionComponent } from "react";
import { FeedbackModel } from "../../../../../shared/models";
import { ReviewsItem } from "./ReviewsItem";

interface ReviewsProps {
  reviews: FeedbackModel[];
}

export const Reviews: FunctionComponent<ReviewsProps> = ({ reviews }) => {
  return (
    <Fragment>
      {reviews.map((review) => (
        <ReviewsItem key={review.feedbackId} review={review} />
      ))}
    </Fragment>
  );
};
