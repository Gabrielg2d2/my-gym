import { ITypeMessage_GLOBAL } from "@global/types/typeMessage";
import axios from "axios";

type IReturnError = {
  data: any;
  message: string;
  typeMessage: ITypeMessage_GLOBAL;
};

export function appError(error: Error): IReturnError {
  if (axios.isAxiosError(error)) {
    // Padrão de erro da API => error.response && error.response.data && error.response.data.message
    if (error.response && error.response.data && error.response.data.message) {
      return {
        data: null,
        message: error.response.data.message,
        typeMessage: "error",
      };
    }
  }

  return {
    data: null,
    message: "Erro no servidor, tente novamente mais tarde!",
    typeMessage: "error",
  };
}
