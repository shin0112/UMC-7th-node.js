import { prisma } from "../db.config.js";
import { AlreadyExistStore } from "../error/store.error.js";

export const addStore = async (data) => {
  const store = await prisma.store.findFirst({
    where: { address: data.address },
  });

  if (store) {
    throw new AlreadyExistStore(data);
  }

  const created = await prisma.store.create({ data: data });
  return created.id;
};

export const getStoreById = async (storeId) => {
  const store = await prisma.store.findFirstOrThrow({
    where: { id: storeId },
  });

  return store;
};

export const getRegionByName = async (regionName) => {
  const region = await prisma.region.findFirstOrThrow({
    where: { name: regionName },
  });

  return region;
};

export const getMissionsByStoreId = async (storeId) => {
  const missions = await prisma.mission.findMany({
    where: { storeId: storeId },
  });

  return missions;
};
