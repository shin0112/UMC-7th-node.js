import { responseFromMember } from "../dtos/member.dto.js";
import { DuplicateMemberEmailError } from "../error/member.error.js";
import {
  addMember,
  getMember,
  getMemberFoodByMemberId,
  addMemberFood,
} from "../repositories/member.repository.js";

export const memberSignUp = async (data) => {
  const joinMemberId = await addMember({
    email: data.email,
    name: data.name,
    nickname: data.nickname,
    gender: data.gender,
    inactiveDate: data.inactiveDate,
    phone: data.phone,
  });

  if (joinMemberId === null) {
    throw new DuplicateMemberEmailError(
      "이미 존재하는 이메일입니다.",
      data.email
    );
  }

  for (const preference of data.preferences) {
    await addMemberFood(joinMemberId, preference);
  }

  const member = await getMember(joinMemberId);
  const preferenceList = await getMemberFoodByMemberId(joinMemberId);

  return responseFromMember(member, preferenceList);
};
