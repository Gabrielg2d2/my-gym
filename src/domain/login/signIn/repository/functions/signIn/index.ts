import { AppError } from "@domain/functions/appError";
import { AdapterAxios } from "@domain/infra/http/adapterAxios";
import { IReturnDefault_GLOBAL } from "@domain/types/returnDefault";
import { ITypeMessage_GLOBAL } from "@domain/types/typeMessage";

type IDataSignIn = {
  refresh_token: string;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    avatar: null | string;
    created_at: Date;
    updated_at: Date;
  };
};
type IPromiseReturnDefault = Promise<IReturnDefault_GLOBAL<IDataSignIn>>;

export class _singIn {
  constructor(private readonly infra = new AdapterAxios()) {}

  async execute(email: string, password: string): IPromiseReturnDefault {
    try {
      const response = await this.infra?.post<IDataSignIn>("sessions", {
        email,
        password,
      });

      return {
        data: response.data,
        message: "Login realizado com sucesso!",
        typeMessage: ITypeMessage_GLOBAL.SUCCESS,
      };
    } catch (error: Error | any) {
      const appError = new AppError(error);
      return appError.getError();
    }
  }
}
