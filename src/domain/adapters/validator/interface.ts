export interface IAdapterValidator<V = any> {
  validator(): V;
  isValid(data: any, schema: any): boolean;
}
