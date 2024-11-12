import { StatusCodes } from "http-status-codes";
import { bodyToStore } from "../dtos/store.dto.js";
import {
  createStore,
  readMissionListByStoreId,
} from "../services/store.service.js";

/**
 * 가게 특정 지역에 추가하기
 * @param {{
    "name": "가게",
    "address": "부산시 어쩌구1"
}} req 
 * @param {{
    "resultType": "SUCCESS",
    "error": null,
    "success": {
        "id": 3,
        "name": "가게"
    }
}} res 
 * @param {*} next 
 */
export const handleStoreCreate = async (req, res, next) => {
  try {
    const store = await createStore(bodyToStore(req.body, req.query.region));

    res.status(StatusCodes.CREATED).success(store);
  } catch (error) {
    next(error);
  }
};

/**
 * 가게 미션 리스트 조회하기
 * @param {*} req 
 * @param {{
    "resultType": "SUCCESS",
    "error": null,
    "success": [
        {
            "id": 1,
            "money": 10000,
            "score": 500
        },
        {
            "id": 2,
            "money": 10000,
            "score": 500
        }
    ]
}} res 
 * @param {*} next 
 */
export const handleStoreMissionRead = async (req, res, next) => {
  try {
    const missionList = await readMissionListByStoreId(
      parseInt(req.params.storeId)
    );

    res.status(StatusCodes.OK).success(missionList);
  } catch (error) {
    next(error);
  }
};
