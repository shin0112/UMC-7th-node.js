import { StatusCodes } from "http-status-codes";
import { bodyToStore } from "../dtos/store.dto.js";
import { createStore } from "../services/store.service.js";

export const handleStoreAdd = async (req, res, next) => {
  const region = req.query.region;
  await createStore(bodyToStore(req.body, region));

  res.status(StatusCodes.CREATED).send();
};
