import { ITypeMessage_GLOBAL } from "@domain/types/typeMessage";
import { Repository } from "./repository";
import { IDataSignIn } from "./repository/functions/signIn";

export { IDataSignIn };

export class SignIDomain {
  private persistData: IDataSignIn | null = null;

  constructor(private readonly repository = new Repository()) {}

  signOut() {
    // TODO: remover dados do localStorage
    this.persistData = null;
  }

  getUserData() {
    // TODO: Implementar recuperação de dados localStorage
    return this.persistData;
  }

  persisterUserData(data: IDataSignIn | null) {
    // TODO: Implementar persistência de dados localStorage
    this.persistData = data;
  }

  async signIn(email: string, password: string) {
    if (!email || !password) {
      return {
        data: null,
        message: "E-mail e senha são obrigatórios",
        typeMessage: ITypeMessage_GLOBAL.ERROR,
      };
    }

    const result = await this.repository.signIn(email, password);
    this.persisterUserData(result.data);

    return result;
  }
}
