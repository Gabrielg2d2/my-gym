import * as yup from "yup";

interface IAdapterValidator {
  validator(): any;
  isValid(data: any, schema: any): boolean;
}

export class YupAdapter implements IAdapterValidator {
  validator() {
    return yup;
  }

  isValid<DATA = any>(data: DATA, schema: yup.ObjectSchema<any>) {
    try {
      schema.validateSync(data);
      return true;
    } catch {
      return false;
    }
  }
}
