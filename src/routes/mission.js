import express from "express";
import {
  handleMissionChallenge,
  handleMemberMissionListReadByStatus,
} from "../controllers/mission.controller.js";

const router = express.Router();

router.post("/:missionId", handleMissionChallenge);
router.get("/mine/:memberId", handleMemberMissionListReadByStatus);

export default router;
