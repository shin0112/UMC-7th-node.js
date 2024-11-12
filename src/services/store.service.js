import { responseFromMissionList } from "../dtos/mission.dto.js";
import { responseFromStore } from "../dtos/store.dto.js";
import { NotExistRegion } from "../error/store.error.js";
import {
  addStore,
  getMissionsByStoreId,
  getRegionByName,
  getStoreById,
} from "../repositories/store.repository.js";

export const createStore = async (data) => {
  const region = await getRegionByName(data.region);

  if (!region) {
    throw new NotExistRegion("해당 지역이 없습니다.", data.region);
  }

  const storeId = await addStore({
    name: data.name,
    address: data.address,
    regionId: region.id,
  });

  const store = await getStoreById(storeId);
  return responseFromStore(store);
};

export const readMissionsByStoreId = async (storeId) => {
  const missionId = await getMissionsByStoreId(storeId);

  return responseFromMissionList(missionId);
};
