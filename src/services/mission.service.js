import {
  responseFromMemberMission,
  responseFromMemberMissionList,
  responseFromMission,
} from "../dtos/mission.dto.js";
import { AlreadyChallengingMission } from "../error/mission.error.js";
import {
  addMemberMission,
  addMission,
  getMemberMissionById,
  getMission,
  getMemberMissionListByMemberId,
  getMemberMissionListByStatus,
  getMemberMissionByMemberIdAndMissionId,
} from "../repositories/mission.repository.js";

export const createMission = async (storeId, data) => {
  const missionId = await addMission({
    storeId: storeId,
    money: data.money,
    score: data.score,
  });
  const mission = await getMission(missionId);

  return responseFromMission(mission);
};

export const createMemberMission = async (missionId, memberId) => {
  const getMemberMission = await getMemberMissionByMemberIdAndMissionId(
    memberId,
    missionId
  );

  if (getMemberMission) {
    throw new AlreadyChallengingMission(
      "이미 도전 중인 미션입니다.",
      getMemberMission
    );
  }

  const newMemberMissionId = await addMemberMission(missionId, memberId);
  const memberMission = await getMemberMissionById(newMemberMissionId);

  return responseFromMemberMission(memberMission);
};

export const readMemberMissionList = async (memberId) => {
  const memberMissionList = await getMemberMissionListByMemberId(memberId);

  return responseFromMemberMissionList(memberMissionList);
};

export const readMemberMissionListByStatus = async (memberId, status) => {
  const memberMissionList = await getMemberMissionListByStatus(
    memberId,
    status
  );

  return responseFromMemberMissionList(memberMissionList);
};
