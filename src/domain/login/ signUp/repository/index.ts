import { AdapterAxios } from "@domain/infra/adapterAxios";
import { appError } from "@global/functions/appError";
import { IReturnDefault_GLOBAL } from "@global/types/returnDefault";

type IData = {} | null;

export type IPromiseReturnDefault = Promise<IReturnDefault_GLOBAL<IData>>;

export class Repository {
  constructor(private readonly infra = new AdapterAxios()) {}

  async signUp(
    name: string,
    email: string,
    password: string
  ): IPromiseReturnDefault {
    try {
      const response = await this.infra?.post<IData>("users", {
        name,
        email,
        password,
      });

      return {
        data: response.data,
        message: "Cadastro realizado com sucesso!",
        typeMessage: "success",
      };
    } catch (error: Error | any) {
      return appError(error);
    }
  }
}
