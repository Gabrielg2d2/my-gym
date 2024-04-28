import { ZodAdapter } from "@domain/adapters/zod";

export class IsValidDataSignUp {
  constructor(private readonly adapter = new ZodAdapter()) {}

  execute(name: string, email: string, password: string) {
    const schema = this.adapter.validator().object({
      name: this.adapter.validator().string().min(3).max(255),
      email: this.adapter.validator().string().email(),
      password: this.adapter.validator().string().min(6).max(255),
    });

    return this.adapter.isValid({ name, email, password }, schema);
  }
}
