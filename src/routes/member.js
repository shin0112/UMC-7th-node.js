import express from "express";
import {
  handleMemberSignUp,
  handleMemberUpdate,
} from "../controllers/member.controllers.js";

const router = express.Router();

router.post("/signup", handleMemberSignUp);
router.post("/:memberId", handleMemberUpdate);

export default router;
