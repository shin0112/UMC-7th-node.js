import { StatusCodes } from "http-status-codes";
import { bodyToMember } from "../dtos/member.dto.js";
import { memberSignUp } from "../services/member.service.js";

export const handleMemberSignUp = async (req, res, next) => {
  console.log("회원가입을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  try {
    const member = await memberSignUp(bodyToMember(req.body));
    res.status(StatusCodes.OK).json({ result: member });
  } catch (error) {
    next(error);
  }
};
