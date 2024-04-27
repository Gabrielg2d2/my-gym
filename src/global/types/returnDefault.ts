import { ITypeMessage_GLOBAL } from "./typeMessage";

export type IReturnDefault_GLOBAL<DATA> = {
  data: DATA | null;
  message: string;
  typeMessage: ITypeMessage_GLOBAL;
};
