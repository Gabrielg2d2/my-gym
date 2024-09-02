import { ITypeMessage_GLOBAL } from "@domain/types/typeMessage";
import axios from "axios";

type IReturnError = {
  data: any;
  message: string;
  typeMessage: ITypeMessage_GLOBAL;
};

export class AppError {
  constructor(private readonly error: Error) {}

  getError(): IReturnError {
    if (axios.isAxiosError(this.error)) {
      // Padrão de erro da API => error.response && error.response.data && error.response.data.message
      if (
        this.error.response &&
        this.error.response.data &&
        this.error.response.data.message
      ) {
        return {
          data: null,
          message: this.error.response.data.message,
          typeMessage: ITypeMessage_GLOBAL.ERROR,
        };
      }
    }

    return {
      data: null,
      message: "Erro no servidor, tente novamente mais tarde!",
      typeMessage: ITypeMessage_GLOBAL.FATAL,
    };
  }
}
