import { ITypeMessage_GLOBAL } from "@global/types/typeMessage";
import { IPromiseReturnDefault, Repository } from "./repository";

export class SignUpMain {
  constructor(private readonly repository = new Repository()) {}

  async signUp(
    name: string,
    email: string,
    password: string
  ): IPromiseReturnDefault {
    if (!name || !email || !password) {
      return {
        data: null,
        message: "Preencha todos os campos! (Nome, email, password)",
        typeMessage: "warning" as ITypeMessage_GLOBAL,
      };
    }

    return await this.repository.signUp(name, email, password);
  }
}
