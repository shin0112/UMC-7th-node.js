import express from "express";
import { handleMissionAdd } from "../controllers/mission.controller.js";
import {
  handleListStoreReviews,
  handleReviewAdd,
} from "../controllers/review.controller.js";
import {
  handleStoreAdd,
  handleStoreMissionRead,
} from "../controllers/store.controller.js";

const router = express.Router();

router.post("", handleStoreAdd);
router.get("/:storeId/reviews", handleListStoreReviews);
router.post("/:storeId/reviews", handleReviewAdd);
router.post("/:storeId/missions", handleMissionAdd);
router.get("/:storeId/missions", handleStoreMissionRead);

export default router;
