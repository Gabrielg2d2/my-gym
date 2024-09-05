import { _singIn } from "./functions/signIn";

export class Repository {
  async signIn(email: string, password: string) {
    const singIn = new _singIn();
    return await singIn.execute(email, password);
  }
}
