import { Repository } from "./repository";

export class SignUpMain {
  constructor(private readonly repository = new Repository()) {}

  async signUp(name: string, email: string, password: string) {
    return await this.repository.signUp(name, email, password);
  }
}
