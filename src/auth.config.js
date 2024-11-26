import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as KakaoStrategy } from "passport-kakao-oauth2";
import { prisma } from "./db.config.js";

dotenv.config();

export const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.PASSPORT_GOOGLE_CLIENT_ID,
    clientSecret: process.env.PASSPORT_GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/oauth2/callback/google",
    scope: ["email", "profile"],
    state: true,
  },
  (accessToken, refreshToken, profile, cb) => {
    return googleVerify(profile)
      .then((user) => cb(null, user))
      .catch((err) => cb(err));
  }
);

export const kakaoStrategy = new KakaoStrategy(
  {
    clientID: process.env.KAKAO_REST_API_KEY,
    callbackURL: "http://localhost:3000/oauth2/callback/kakao",
  },
  (accessToken, refreshToken, profile, cb) => {
    return googleVerify(profile)
      .then((user) => cb(null, user))
      .catch((err) => cb(err));
  }
);

const googleVerify = async (profile) => {
  const email = profile.emails?.[0]?.value ?? "kakao@email.com";

  const member = await prisma.member.findFirst({ where: { email } });
  if (member !== null) {
    return { id: member.id, email: member.email, name: member.name };
  }

  const created = await prisma.member.create({
    data: {
      email,
      name: profile.displayName,
      gender: "추후 수정",
      inactiveDate: new Date(1970, 0, 1),
      phone: "추후 수정",
      nickname: "추후 수정",
    },
  });

  return { id: created.id, email: created.email, name: created.name };
};
