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

export const addMemberMission = async (missionId, memberId) => {
  const created = await prisma.memberMission.create({
    data: {
      missionId: missionId,
      memberId: memberId,
    },
  });

  return created.id;
};

export const getMemberMission = async (memberMissionId) => {
  const memberMission = await prisma.memberMission.findFirstOrThrow({
    where: { id: memberMissionId },
  });

  return memberMission;
};
