import AdapterAxios from "@domain/infra/adapterAxios";

export class Repository {
  constructor(private readonly infra = AdapterAxios) {}

  async signUp(name: string, email: string, password: string) {
    try {
      const response = await this.infra?.post("users", {
        name,
        email,
        password,
      });
      console.log("response: ", response);
    } catch (error) {
      console.log("error: ", error);
    }
  }
}
