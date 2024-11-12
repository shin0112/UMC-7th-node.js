export class DuplicateMemberEmailError extends Error {
  errorCode = "M001";

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
