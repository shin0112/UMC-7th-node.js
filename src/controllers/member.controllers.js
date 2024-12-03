import { StatusCodes } from "http-status-codes";
import { bodyToMember, bodyToMemberUpdate } from "../dtos/member.dto.js";
import { memberSignUp, memberUpdate } from "../services/member.service.js";

export const handleMemberSignUp = async (req, res, next) => {
  /*
    #swagger.summary = '회원 가입 API';
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: { type: "string", example: "email@test.com111" },
              name: { type: "string", example: "신주은" },
              nickname: { type: "string", example: "사야" },
              gender: { 
                type: "string", 
                enum: ["MALE", "FEMALE"], 
                example: "MALE" 
              },
              inactiveDate: { 
                type: "string", 
                format: "date", 
                example: "2003-01-12" 
              },
              phone: { type: "string", example: "01044445555" },
              preferences: { 
                type: "array", 
                items: { type: "number" },
                example: [1] 
              }
            },
            required: [
              "email", 
              "name", 
              "nickname", 
              "gender", 
              "inactiveDate", 
              "phone", 
              "preferences"
            ]
          }
        }
      }
    };
    #swagger.responses[201] = {
      description: "회원 가입 성공 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                properties: {
                  email: { type: "string", example: "email@test.com111" },
                  name: { type: "string", example: "신주은" },
                  preferCategory: { 
                    type: "array", 
                    items: { type: "string" },
                    example: ["양식"]
                  }
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[400] = {
      description: "회원 가입 실패 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string", example: "U001" },
                  reason: { type: "string", example: "Invalid email format" },
                  data: { type: "object", nullable: true, example: null }
                }
              },
              success: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    };
  */
  console.log("회원가입을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  try {
    const member = await memberSignUp(bodyToMember(req.body));

    res.status(StatusCodes.CREATED).success(member);
  } catch (error) {
    next(error);
  }
};

export const handleMemberUpdate = async (req, res, next) => {
  const member = await memberUpdate(
    parseInt(req.params.memberId),
    bodyToMemberUpdate(req.body)
  );

  res.status(StatusCodes.OK).success(member);
};
