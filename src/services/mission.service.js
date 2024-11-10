import {
  responseFromMemberMission,
  responseFromMemberMissionList,
  responseFromMission,
} from "../dtos/mission.dto.js";
import {
  addMemberMission,
  addMission,
  getMemberMission,
  getMission,
  getMemberMissionsByMemberId as getMemberMissionListByMemberId,
  getMemberMissionListByStatus,
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
  const memberMissionId = await addMemberMission(missionId, memberId);

  const memberMission = await getMemberMission(memberMissionId);

  return responseFromMemberMission(memberMission);
};

export const readMyMissions = async (memberId) => {
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
