import {
  responseFromMemberMission,
  responseFromMemberMissions,
  responseFromMission,
} from "../dtos/mission.dto.js";
import {
  addMemberMission,
  addMission,
  getMemberMission,
  getMission,
  getMemberMissionsByMemberId,
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
  const memberMissions = await getMemberMissionsByMemberId(memberId);
  return responseFromMemberMissions({ memberMissions });
};
