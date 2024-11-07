import { responseFromMission } from "../dtos/mission.dto.js";
import { addMission, getMission } from "../repositories/mission.repository.js";

export const createMission = async (storeId, data) => {
  const missionId = await addMission({
    storeId: storeId,
    money: data.money,
    score: data.score,
  });

  const mission = await getMission(missionId);

  return responseFromMission(mission);
};
