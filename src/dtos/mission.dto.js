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
