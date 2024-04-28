import * as zod from "zod";

interface IAdapterValidator {
  validator(): any;
  isValid(data: any, schema: any): boolean;
}

export class ZodAdapter implements IAdapterValidator {
  validator() {
    return zod;
  }

  isValid<DATA = any>(data: DATA, schema: zod.ZodObject<zod.ZodRawShape>) {
    try {
      schema.parse(data);
      return true;
    } catch {
      return false;
    }
  }
}
