import * as yup from "yup";
import { IAdapterValidator } from "../interface";

type IYup = typeof yup;
type ISchema = yup.ObjectSchema<any>;

export class YupAdapter implements IAdapterValidator<IYup> {
  validator() {
    return yup;
  }

  isValid<DATA = any>(data: DATA, schema: ISchema) {
    try {
      schema.validateSync(data);
      return true;
    } catch {
      return false;
    }
  }
}
