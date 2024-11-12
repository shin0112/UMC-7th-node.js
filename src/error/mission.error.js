export class AlreadyChallengingMission extends Error {
  errorCode = "MIS001";

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
