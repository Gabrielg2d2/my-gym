import { IPromiseReturnDefault, Repository } from "./repository";

export class SignUpMain {
  constructor(private readonly repository = new Repository()) {}

  async signUp(
    name: string,
    email: string,
    password: string
  ): IPromiseReturnDefault {
    return await this.repository.signUp(name, email, password);
  }
}
