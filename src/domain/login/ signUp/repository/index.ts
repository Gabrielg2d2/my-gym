import { AdapterAxios } from "@domain/infra/adapterAxios";
import { appError } from "@global/appError";

export class Repository {
  constructor(private readonly infra = new AdapterAxios()) {}

  async signUp(name: string, email: string, password: string) {
    try {
      const response = await this.infra?.post("users", {
        name,
        email,
        password,
      });

      return {
        data: response.data,
        erros: [],
        messages: ["Cadastro realizado com sucesso!"],
      };
    } catch (error) {
      return appError(error);
    }
  }
}
