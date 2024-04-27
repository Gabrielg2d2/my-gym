import { SignUpMain } from "./main";

describe("SignUpMain", () => {
  it("should return a new instance of SignUpMain", () => {
    const signUpMain = new SignUpMain();
    expect(signUpMain).toBeInstanceOf(SignUpMain);
  });

  describe("signUp", () => {
    describe("Error", () => {
      it("should return an error message if name is not provided", async () => {
        const signUpMain = new SignUpMain();
        const response = await signUpMain.signUp("", "email", "password");
        expect(response.typeMessage).toBe("error");
      });

      it("should return an error message if email is not provided", async () => {
        const signUpMain = new SignUpMain();
        const response = await signUpMain.signUp("name", "", "password");
        expect(response.typeMessage).toBe("error");
      });

      it("should return an error message if password is not provided", async () => {
        const signUpMain = new SignUpMain();
        const response = await signUpMain.signUp("name", "email", "");
        expect(response.typeMessage).toBe("error");
      });
    });

    describe("Success", () => {
      it("should return a success message if all fields are provided", async () => {
        const mockRepository = {
          signUp: jest.fn().mockResolvedValue({
            data: {},
            errors: [],
            messages: ["Cadastro realizado com sucesso!"],
          }),
        } as any;

        const signUpMain = new SignUpMain(mockRepository);
        const response = await signUpMain.signUp("name", "email", "password");
        expect(response.message).toContain("Cadastro realizado com sucesso!");
        expect(response.typeMessage).toBe("success");
      });
    });
  });
});
