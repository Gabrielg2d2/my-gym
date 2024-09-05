import { _singUp } from "./functions/signUp";

export class Repository {
  async signUp(name: string, email: string, password: string) {
    const singUp = new _singUp();
    return await singUp.execute(name, email, password);
  }
}
