import { api } from "@services/api";
import { type IAdapter } from "./interfaceAdapter";

export class AdapterAxios implements IAdapter {
  async get<T>(url: string, config?: any) {
    return await api.get<T>(url, config);
  }

  async post<T>(url: string, data?: any, config?: any) {
    return await api.post<T>(url, data, config);
  }

  async put<T>(url: string, data?: any, config?: any) {
    return await api.put<T>(url, data, config);
  }

  async delete<T>(url: string, config?: any) {
    return await api.delete<T>(url, config);
  }
}
