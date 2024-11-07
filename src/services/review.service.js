import { responseFromReviews } from "../dtos/review.dto.js";
import { getAllStoreReviews } from "../repositories/review.repository.js";

export const listStoreReviews = async (storeId, cursor) => {
  const reviews = await getAllStoreReviews(storeId, cursor);
  return responseFromReviews(reviews);
};
