import { ITypeMessage } from "./typeMessage";

export type IReturnDefault_GLOBAL<DATA> = {
  data: DATA | null;
  message: string;
  typeMessage: ITypeMessage;
};
