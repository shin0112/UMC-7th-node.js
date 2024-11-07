import { pool, prisma } from "../db.config.js";

export const addStore = async (data) => {
  const store = await prisma.store.findFirst({
    where: { address: data.address },
  });

  if (store) {
    return null;
  }

  const created = await prisma.store.create({ data: data });
  return created.id;
};

export const getRegionIdByRegion = async (regionName) => {
  const region = await prisma.region.findFirst({ where: { name: regionName } });

  return region;
};

export const getMissionsByStoreId = async (storeId) => {
  const missions = await prisma.mission.findMany({
    where: { storeId: storeId },
  });

  return missions;
};
