import { Feedbacks } from "../../shared/models";
import { FeedbacksDto } from "../../shared/modelsDto";

export const singleProductNormalizer = (product: FeedbacksDto): Feedbacks => {
  const singleProduct: Feedbacks["product"] = {
    productsId: +product.product.products_id,
    productsBrand: product.product.products_brand,
    productsImage: product.product.products_image,
    productsCategory: product.product.products_category,
    productsPrice: +product.product.products_price,
    productsRate: +product.product.products_rate,
    productsTitle: product.product.products_title,
    productsInternal: product.product.products_internal,
    productsRam: product.product.products_ram,
    productsSystem: product.product.products_system,
    en: product.product.en,
    es: product.product.es,
    it: product.product.it,
    de: product.product.de,
    cartQuantity: 0,
  };
  const feedbacks: Feedbacks["feedbacks"] = product.feedbacks.map(
    (feedback) => ({
      feedbackId: +feedback.feedback_id,
      feedbackUser: feedback.feedback_user,
      feedbackRating: +feedback.feedback_rating,
      feedbackComment: feedback.feedback_comment,
      feedbackAdded: feedback.feedback_added,
    })
  );
  return { product: singleProduct, feedbacks: feedbacks };
};
