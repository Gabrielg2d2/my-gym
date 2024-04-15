import { Repository } from "./repository";

export class SignUpMain {
  constructor(private readonly repository = new Repository()) {}

  async signUp(name: string, email: string, password: string) {
    if (!name || !email || !password) {
      return {
        data: null,
        errors: ["Preencha todos os campos! (name, email, password)"],
        messages: [],
      };
    }

    return await this.repository.signUp(name, email, password);
  }
}
