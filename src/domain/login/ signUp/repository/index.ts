import { _singUp } from "./functions/signUp";

interface IRepositoryInterface {
  signUp(name: string, email: string, password: string): Promise<any>;
}

export class Repository implements IRepositoryInterface {
  private readonly _singUp = new _singUp();

  async signUp(name: string, email: string, password: string) {
    return await this._singUp.execute(name, email, password);
  }
}
