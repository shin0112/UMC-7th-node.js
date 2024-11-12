import { StatusCodes } from "http-status-codes";
import { bodyToMember } from "../dtos/member.dto.js";
import { memberSignUp } from "../services/member.service.js";

/**
 * 회원가입
 * @param {{
    "email": "email@test.com111",
    "name": "신주은",
    "nickname": "사야",
    "gender": "MALE",
    "inactiveDate": "2003-01-12",
    "phone": "01044445555",
    "preferences": [
        1
    ]
}} req 
 * @param {{
    "resultType": "SUCCESS",
    "error": null,
    "success": {
        "email": "email@test.com111",
        "name": "신주은",
        "preferCategory": [
            "양식"
        ]
    }
}} res 
 * @param {*} next 
 */
export const handleMemberSignUp = async (req, res, next) => {
  console.log("회원가입을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  // try {
  const member = await memberSignUp(bodyToMember(req.body));

  res.status(StatusCodes.CREATED).success(member);
  // } catch (error) {
  //   next(error);
  // }
};
