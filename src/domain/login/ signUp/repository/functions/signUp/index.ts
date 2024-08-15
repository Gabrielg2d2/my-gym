import { AppError } from "@domain/functions/appError";
import { AdapterAxios } from "@domain/infra/http/adapterAxios";
import { IReturnDefault_GLOBAL } from "@global/types/returnDefault";

type IDataSignUp = {} | null;
type IPromiseReturnDefault = Promise<IReturnDefault_GLOBAL<IDataSignUp>>;

export class _singUp {
  constructor(private readonly infra = new AdapterAxios()) {}

  async execute(
    name: string,
    email: string,
    password: string
  ): IPromiseReturnDefault {
    try {
      const response = await this.infra?.post<IDataSignUp>("users", {
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
      const appError = new AppError(error);
      return appError.getError();
    }
  }
}
