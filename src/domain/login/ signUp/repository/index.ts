import { _singUp } from "./functions/signUp";

export class Repository {
  private readonly _singUp = new _singUp();

  async signUp(name: string, email: string, password: string) {
    return await this._singUp.execute(name, email, password);
  }
}
