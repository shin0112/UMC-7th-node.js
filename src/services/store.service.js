import { responseFromMissions } from "../dtos/mission.dto.js";
import {
  addStore,
  getMissionsByStoreId,
  getRegionIdByRegion,
} from "../repositories/store.repository.js";

export const createStore = async (data) => {
  const regionResult = await getRegionIdByRegion(data.region);

  const regionId = regionResult.id;

  await addStore({
    name: data.name,
    address: data.address,
    regionId: regionId,
  });

  return;
};

export const readMissionsByStoreId = async (storeId) => {
  const missions = await getMissionsByStoreId(storeId);

  return responseFromMissions(missions);
};
