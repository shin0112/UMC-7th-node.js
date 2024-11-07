import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { handleMemberSignUp } from "./controllers/user.controllers.js";
import {
  handleStoreAdd,
  handleStoreMissionRead,
} from "./controllers/store.controller.js";
import {
  handleListStoreReviews,
  handleReviewAdd,
} from "./controllers/review.controller.js";
import {
  handleMemberMissionRead,
  handleMissionAdd,
  handleMissionChallenge,
} from "./controllers/mission.controller.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors()); // cors 방식 허용
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/members/signup", handleMemberSignUp);

// store
app.post("/stores", handleStoreAdd);
app.get("/stores/:storeId/reviews", handleListStoreReviews);
app.post("/stores/:storeId/reviews", handleReviewAdd);
app.post("/stores/:storeId/missions", handleMissionAdd);
app.get("/stores/:storeId/missions", handleStoreMissionRead);

// mission
app.post("/missions/:missionId", handleMissionChallenge);
app.get("/missions/mine/:memberId", handleMemberMissionRead);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
