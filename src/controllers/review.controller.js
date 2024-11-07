import { StatusCodes } from "http-status-codes";
import { bodyToReview } from "../dtos/review.dto.js";
import { createReview, listStoreReviews } from "../services/review.service.js";

export const handleListStoreReviews = async (req, res, next) => {
  const reviews = await listStoreReviews(
    parseInt(req.params.storeId),
    typeof req.query.cursor === "string" ? parseInt(req.query.cursor) : 0
  );
  res.status(StatusCodes.OK).json(reviews);
};

export const handleReviewAdd = async (req, res, next) => {
  const review = await createReview(
    parseInt(req.params.storeId),
    bodyToReview(req.body)
  );

  res.status(StatusCodes.CREATED).json({ result: review });
};
