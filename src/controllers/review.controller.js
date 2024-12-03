import { StatusCodes } from "http-status-codes";
import { bodyToReview } from "../dtos/review.dto.js";
import {
  createReview,
  readStoreReviewList,
} from "../services/review.service.js";

/**
 * 가게 리뷰 리스트 조회하기
 * @param {*} req
 * @param {{
    "resultType": "SUCCESS",
    "error": null,
    "success": {
        "data": [
            {
                "id": 2,
                "content": "맛집짱이에요",
                "store": {
                    "id": 1,
                    "address": "부산시 어쩌구3",
                    "name": "가게",
                    "score": 0,
                    "regionId": 1
                },
                "member": {
                    "id": 1,
                    "email": "email@test.com3",
                    "name": "신주은",
                    "nickname": "사야",
                    "gender": "MALE",
                    "inactiveDate": "2003-01-12T00:00:00.000Z",
                    "phone": "01044445555",
                    "photoLink": ""
                }
            }
        ],
        "pagination": {
            "cursor": 4
        }
    }
}} res
 * @param {*} next
 */
export const handleStoreReviewListRead = async (req, res, next) => {
  try {
    const reviewList = await readStoreReviewList(
      parseInt(req.params.storeId),
      typeof req.query.cursor === "string" ? parseInt(req.query.cursor) : 0
    );

    res.status(StatusCodes.OK).success(reviewList);
  } catch (error) {
    next(error);
  }
};

/**
 * 리뷰 추가하기
 * @param {{
    "memberId": 1,
    "star": 8.9,
    "content": "맛집짱이에요"
}} req
 * @param {{
    "resultType": "SUCCESS",
    "error": null,
    "success": {
        "id": 3,
        "star": 8.9,
        "content": "맛집짱이에요"
    }
}} res
 * @param {*} next
 */
export const handleReviewCreate = async (req, res, next) => {
  try {
    const review = await createReview(
      parseInt(req.params.storeId),
      bodyToReview(req.body)
    );

    res.status(StatusCodes.CREATED).success(review);
  } catch (error) {
    next(error);
  }
};
