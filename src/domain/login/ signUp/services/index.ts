import { IsValidDataSignUp } from "./functions/isValidDataSignUp";

export class Services {
  private readonly _isValidDataSignUp = new IsValidDataSignUp();

  isValidDataSignUp(name: string, email: string, password: string) {
    return this._isValidDataSignUp.execute(name, email, password);
  }
}
