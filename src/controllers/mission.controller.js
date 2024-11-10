import { StatusCodes } from "http-status-codes";
import { bodyToMission } from "../dtos/mission.dto.js";
import {
  createMemberMission,
  createMission,
  readMemberMissionListByStatus,
  readMyMissions as readMemberMissionList,
} from "../services/mission.service.js";

/**
 * 미션 추가하기
 * @param {{
    "money": 10000,
    "score": 500
}} req 
 * @param {{
    "result": {
        "id": 4,
        "money": 10000,
        "score": 500
    }
}} res 
 */
export const handleMissionAdd = async (req, res) => {
  const mission = await createMission(
    parseInt(req.params.storeId),
    bodyToMission(req.body)
  );

  res.status(StatusCodes.CREATED).json({ result: mission });
};

/**
 * 미션 도전하기
 * @param {{
    "memberId": 1
}} req
 * @param {{
    "result": {
        "id": 3,
        "status": "CHALLENGING"
    }
}} res
 */
export const handleMissionChallenge = async (req, res) => {
  const memberMission = await createMemberMission(
    parseInt(req.params.missionId),
    req.body.memberId
  );

  res.status(StatusCodes.CREATED).json({ result: memberMission });
};

/**
 * 내 미션 리스트 조회하기 (param 존재 시 상태로 검색)
 * @param {*} req 
 * @param {{
    "result": {
        "missions": [
            {
                "id": 1,
                "money": 10000,
                "score": 500
            },
            {
                "id": 1,
                "money": 10000,
                "score": 500
            }
        ]
    }
}} res 
 */
export const handleMemberMissionListReadByStatus = async (req, res) => {
  const status = req.query.status;
  const memberId = parseInt(req.params.memberId);

  const missions = status
    ? await readMemberMissionListByStatus(memberId, status)
    : await readMemberMissionList(memberId);

  res.status(StatusCodes.OK).json({ result: missions });
};
