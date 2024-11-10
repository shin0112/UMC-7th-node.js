import express from "express";
import {
  handleMemberMissionRead,
  handleMissionChallenge,
  handleMissionMineChallenge,
} from "../controllers/mission.controller.js";

const router = express.Router();

router.post("/:missionId", handleMissionChallenge);
router.get("/mine/:memberId", handleMemberMissionRead);
router.get("", handleMissionMineChallenge);

export default router;
