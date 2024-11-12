export class NotExistRegion extends Error {
  errorCode = "STO001";

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}
