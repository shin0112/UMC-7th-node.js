export const bodyToMission = (body) => {
  return {
    money: body.money,
    score: body.score,
  };
};

export const responseFromMission = (mission) => {
  return {
    id: mission.id,
    money: mission.money,
    score: mission.score,
  };
};

export const responseFromMemberMission = (memberMission) => {
  return {
    id: memberMission.id,
    status: memberMission.status,
  };
};
