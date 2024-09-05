import { IsValidDataSignUp } from "./functions/isValidDataSignUp";

interface IServicesInterface {
  isValidDataSignUp(name: string, email: string, password: string): boolean;
}

export class Services implements IServicesInterface {
  private readonly _isValidDataSignUp = new IsValidDataSignUp();

  isValidDataSignUp(name: string, email: string, password: string) {
    return this._isValidDataSignUp.execute(name, email, password);
  }
}
