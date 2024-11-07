import { StatusCodes } from "http-status-codes";
import { bodyToStore } from "../dtos/store.dto.js";
import {
  createStore,
  readMissionsByStoreId,
} from "../services/store.service.js";

export const handleStoreAdd = async (req, res, next) => {
  const region = req.query.region;
  await createStore(bodyToStore(req.body, region));

  res.status(StatusCodes.CREATED).send();
};

export const handleStoreMissionRead = async (req, res, next) => {
  const missions = await readMissionsByStoreId(parseInt(req.params.storeId));

  res.status(StatusCodes.OK).json(missions);
};
