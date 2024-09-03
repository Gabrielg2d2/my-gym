import { IsValidDataSignUp } from ".";

describe("isValidDataSignUp", () => {
  describe("Error", () => {
    test("Should return false if name is invalid", () => {
      const isValidDataSignUp = new IsValidDataSignUp();

      const result = isValidDataSignUp.execute("a", "gabs@gmail.com", "123456");

      expect(result).toBe(false);
    });

    test("Should return false if email is invalid", () => {
      const isValidDataSignUp = new IsValidDataSignUp();

      const result = isValidDataSignUp.execute(
        "Gabriel",
        "gabsgmail.com",
        "123456"
      );

      expect(result).toBe(false);
    });

    test("Should return false if password is invalid", () => {
      const isValidDataSignUp = new IsValidDataSignUp();

      const result = isValidDataSignUp.execute(
        "Gabriel",
        "gabs@gmail.com",
        "123"
      );

      expect(result).toBe(false);
    });
  });

  describe("Success", () => {
    test("Should return true if data is valid", () => {
      const isValidDataSignUp = new IsValidDataSignUp();

      const result = isValidDataSignUp.execute(
        "Gabriel",
        "gabs@gmail.com",
        "123456"
      );

      expect(result).toBe(true);
    });
  });
});
