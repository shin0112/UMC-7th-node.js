import { responseFromReview, responseFromReviews } from "../dtos/review.dto.js";
import {
  addReview,
  getStoreReviewList,
  getReview,
} from "../repositories/review.repository.js";

export const readStoreReviewList = async (storeId, cursor) => {
  const reviews = await getStoreReviewList(storeId, cursor);
  return responseFromReviews(reviews);
};

export const createReview = async (storeId, data) => {
  const reviewId = await addReview({
    memberId: data.memberId,
    star: data.star,
    content: data.content,
    storeId: storeId,
  });

  const review = await getReview(reviewId);
  return responseFromReview(review);
};
