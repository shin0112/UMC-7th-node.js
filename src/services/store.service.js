import { responseFromMissions } from "../dtos/mission.dto.js";
import { responseFromStore } from "../dtos/store.dto.js";
import {
  addStore,
  getMissionsByStoreId,
  getRegionIdByRegion,
  getStoreById,
} from "../repositories/store.repository.js";

export const createStore = async (data) => {
  const regionResult = await getRegionIdByRegion(data.region);

  const regionId = regionResult.id;

  const storeId = await addStore({
    name: data.name,
    address: data.address,
    regionId: regionId,
  });

  const store = await getStoreById(storeId);
  return responseFromStore(store);
};

export const readMissionsByStoreId = async (storeId) => {
  const missions = await getMissionsByStoreId(storeId);

  return responseFromMissions(missions);
};
