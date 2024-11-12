export class NotExistRegion extends Error {
  errorCode = "STO001";

  constructor(data) {
    super("해당 지역이 존재하지 않습니다.");
    this.data = data;
  }
}

export class AlreadyExistStore extends Error {
  errorCode = "STO002";

  constructor(data) {
    super("이미 가게가 존재합니다.");
    this.data = data;
  }
}
