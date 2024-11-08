import { StatusCodes } from "http-status-codes";
import { bodyToMission } from "../dtos/mission.dto.js";
import {
  createMemberMission,
  createMission,
  readMyChallengingMissions,
  readMyMissions,
} from "../services/mission.service.js";

export const handleMissionAdd = async (req, res) => {
  const mission = await createMission(
    parseInt(req.params.storeId),
    bodyToMission(req.body)
  );

  res.status(StatusCodes.CREATED).json({ result: mission });
};

export const handleMissionChallenge = async (req, res) => {
  const memberMission = await createMemberMission(
    parseInt(req.params.missionId),
    req.body.memberId
  );

  res.status(StatusCodes.CREATED).json({ result: memberMission });
};

export const handleMemberMissionRead = async (req, res) => {
  const missions = await readMyMissions(parseInt(req.params.memberId));
  res.status(StatusCodes.OK).json({ result: missions });
};

export const handleMissionMineChallenge = async (req, res) => {
  const status = req.query.status;
  const missions = await readMyChallengingMissions(
    parseInt(req.body.memberId),
    status
  );
  res.status(StatusCodes.OK).json({ result: missions });
};