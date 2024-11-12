export const bodyToMember = (body) => {
  const inactiveDate = new Date(body.inactiveDate);

  return {
    email: body.email,
    name: body.name,
    nickname: body.nickname,
    gender: body.gender,
    inactiveDate,
    phone: body.phone,
    preferences: body.preferences,
  };
};

export const responseFromMember = (member, preferenceList) => {
  const preferFoodList = preferenceList.map(
    (preference) => preference.food.name
  );

  return {
    email: member.email,
    name: member.name,
    preferCategory: preferFoodList,
  };
};
