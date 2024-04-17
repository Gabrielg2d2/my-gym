import axios from "axios";

type IReturnError = {
  data: any;
  errors: string[];
  messages: string[];
};

export function appError(error: any): IReturnError {
  if (axios.isAxiosError(error)) {
    // Padrão de erro da API => error.response && error.response.data
    if (error.response && error.response.data) {
      return {
        data: null,
        errors: [error.response.data.message],
        messages: [],
      };
    }
  }

  return {
    data: null,
    errors: ["Erro no servidor, tente novamente mais tarde!"],
    messages: [],
  };
}
