import axios from "axios";

import { type IAdapter } from "./interfaceAdapter";

class Adapter implements IAdapter {
  private api = axios.create({
    baseURL: "http://192.168.15.2:3333/",
  });

  async get<T>(url: string, config?: any) {
    return await this.api.get<T>(url, config);
  }

  async post<T>(url: string, data?: any, config?: any) {
    return await this.api.post<T>(url, data, config);
  }

  async put<T>(url: string, data?: any, config?: any) {
    return await this.api.put<T>(url, data, config);
  }

  async delete<T>(url: string, config?: any) {
    return await this.api.delete<T>(url, config);
  }
}

let AdapterAxios: Adapter | null = null;

if (AdapterAxios === null) {
  AdapterAxios = new Adapter();
} else {
  AdapterAxios = AdapterAxios;
}

export default AdapterAxios;
