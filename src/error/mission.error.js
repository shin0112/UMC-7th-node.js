export class AlreadyChallengingMission extends Error {
  errorCode = "MIS001";

  constructor(data) {
    super("이미 도전 중인 미션입니다.");
    this.data = data;
  }
}
