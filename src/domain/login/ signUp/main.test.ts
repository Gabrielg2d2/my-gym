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
        expect(response.errors).toContain(
          "Preencha todos os campos! (name, email, password)"
        );
      });

      it("should return an error message if email is not provided", async () => {
        const signUpMain = new SignUpMain();
        const response = await signUpMain.signUp("name", "", "password");
        expect(response.errors).toContain(
          "Preencha todos os campos! (name, email, password)"
        );
      });

      it("should return an error message if password is not provided", async () => {
        const signUpMain = new SignUpMain();
        const response = await signUpMain.signUp("name", "email", "");
        expect(response.errors).toContain(
          "Preencha todos os campos! (name, email, password)"
        );
      });
    });

    describe("Success", () => {
      it("should return a success message if all fields are provided", async () => {
        const signUpMain = new SignUpMain();
        const response = await signUpMain.signUp("name", "email", "password");
        expect(response.errors).toEqual([]);
      });
    });
  });
});
