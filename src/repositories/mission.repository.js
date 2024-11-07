import { prisma } from "../db.config.js";

export const addMission = async (data) => {
  const created = await prisma.mission.create({
    data: data,
  });
  return created.id;
};

export const getMission = async (missionId) => {
  const mission = await prisma.mission.findFirstOrThrow({
    where: { id: missionId },
  });

  return mission;
};
