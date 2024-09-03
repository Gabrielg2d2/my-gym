import * as zod from "zod";
import { IAdapterValidator } from "../interface";

type IZod = typeof zod;
type ISchema = zod.ZodObject<zod.ZodRawShape>;

export class ZodAdapter implements IAdapterValidator<IZod> {
  validator() {
    return zod;
  }

  isValid<DATA = any>(data: DATA, schema: ISchema) {
    try {
      schema.parse(data);
      return true;
    } catch {
      return false;
    }
  }
}
