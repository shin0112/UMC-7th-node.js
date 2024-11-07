import { StatusCodes } from "http-status-codes";
import { bodyToMission } from "../dtos/mission.dto.js";
import {
  createMemberMission,
  createMission,
} from "../services/mission.service.js";

export const handleMissionAdd = async (req, res, next) => {
  const mission = await createMission(
    parseInt(req.params.storeId),
    bodyToMission(req.body)
  );

  res.status(StatusCodes.CREATED).json({ result: mission });
};

export const handleMissionChallenge = async (req, res, next) => {
  const memberMission = await createMemberMission(
    parseInt(req.params.missionId),
    req.body.memberId
  );

  res.status(StatusCodes.CREATED).json({ result: memberMission });
};
