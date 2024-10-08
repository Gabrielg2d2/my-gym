import { ITypeMessage_GLOBAL } from "@domain/types/typeMessage";
import { Repository } from "./repository";
import { Services } from "./services";
export class SignUpMain {
  constructor(
    private readonly repository = new Repository(),
    private readonly services = new Services()
  ) {}

  async signUp(name: string, email: string, password: string) {
    if (!this.services.isValidDataSignUp(name, email, password)) {
      return {
        data: null,
        message: "Preencha todos os campos corretamente!",
        typeMessage: ITypeMessage_GLOBAL.ERROR,
      };
    }

    return await this.repository.signUp(name, email, password);
  }
}
