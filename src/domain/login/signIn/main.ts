import { Repository } from "./repository";

export class SignIDomain {
  constructor(private readonly repository = new Repository()) {}

  async signIn(email: string, password: string) {
    return await this.repository.signIn(email, password);
  }
}
