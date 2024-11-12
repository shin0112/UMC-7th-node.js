import express from "express";
import { handleMemberSignUp } from "../controllers/member.controllers.js";

const router = express.Router();

router.post("/signup", handleMemberSignUp);

export default router;
