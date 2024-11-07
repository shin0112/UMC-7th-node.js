import {
  addStore,
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
