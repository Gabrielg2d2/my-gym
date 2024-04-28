import * as zod from "zod";

export class IsValidDataSignUp {
  execute(name: string, email: string, password: string) {
    try {
      const schema = zod.object({
        name: zod.string().min(3).max(255),
        email: zod.string().email(),
        password: zod.string().min(6).max(255),
      });

      const data = {
        name,
        email,
        password,
      };

      schema.parse(data);
      return true;
    } catch {
      return false;
    }
  }
}
