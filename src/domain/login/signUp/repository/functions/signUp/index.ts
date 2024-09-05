import { AppError } from "@domain/functions/appError";
import { AdapterAxios } from "@domain/infra/http/adapterAxios";
import { IReturnDefault_GLOBAL } from "@domain/types/returnDefault";
import { ITypeMessage_GLOBAL } from "@domain/types/typeMessage";

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

      console.log("response.data: ", response.data);

      return {
        data: response.data,
        message: "Cadastro realizado com sucesso!",
        typeMessage: ITypeMessage_GLOBAL.SUCCESS,
      };
    } catch (error: Error | any) {
      const appError = new AppError(error);
      return appError.getError();
    }
  }
}
