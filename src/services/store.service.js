import {
  addStore,
  getRegionIdByRegion,
} from "../repositories/store.repository.js";

export const createStore = async (data) => {
  const regionResult = await getRegionIdByRegion(data.region);

  if (!regionResult.length) {
    throw new Error("해당 지역이 존재하지 않습니다.");
  }

  const regionId = regionResult[0].id;

  await addStore({
    name: data.name,
    address: data.address,
    regionId: regionId,
  });

  return;
};
