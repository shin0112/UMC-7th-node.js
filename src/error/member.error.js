export class DuplicateMemberEmailError extends Error {
  errorCode = "M001";

  constructor(data) {
    super("이미 존재하는 이메일입니다.");
    this.data = data;
  }
}
