import axios, { AxiosRequestConfig } from "axios";
import config from "@/config";
import {
  handleAuthenticationHeaders,
  handleHttpErrors,
  handleMethodSpoofing,
  handleUnauthorizedRequest,
} from "./interception.ts";
import { ServerErrorResponse } from "./types.ts";
import mockServer from "./mock.ts";

type ObjectLike = object | FormData;

const controller = new AbortController();

const axiosInstance = axios.create({
  baseURL: config.server.url,
  signal: controller.signal,
});

// Enable mock server if needed (see VITE_SERVER_MOCK in .env)
if (config.server.mock) mockServer(axiosInstance);

handleAuthenticationHeaders(axiosInstance, () => {
  // todo implement token storage
  return "todo";
});

handleMethodSpoofing(axiosInstance);

handleUnauthorizedRequest(
  axiosInstance,
  async () => {
    // todo implement token rotation
    return "todo";
  },
  (error) => {
    alert(error.message);
  },
);

handleHttpErrors(
  axiosInstance,
  async (error: ServerErrorResponse, status: number) => {
    // todo implement some error message flashing
    let msg = `Error ${status}.\n`;
    error.errors.forEach((e) => {
      msg += e.message + ".\n";
    });
    alert(msg);
  },
);

interface ClientInterface {
  get: <T>(url: string, params?: ObjectLike) => Promise<T>;
  post: <T>(
    url: string,
    payload?: ObjectLike,
    config?: AxiosRequestConfig,
  ) => Promise<T>;
  put: <T>(
    url: string,
    payload?: ObjectLike,
    config?: AxiosRequestConfig,
  ) => Promise<T>;
  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  sse: (url: string) => EventSource;
}

export const client: ClientInterface = {
  get: async function <T>(url: string, params = {}) {
    const { data } = await axiosInstance.get<T>(url, { params });
    return data;
  },
  post: async function <T>(url: string, payload = {}, config = {}) {
    const { data } = await axiosInstance.post<T>(url, payload, config);
    return data;
  },
  put: async function <T>(url: string, payload = {}, config = {}) {
    const { data } = await axiosInstance.put<T>(url, payload, config);
    return data;
  },
  delete: async function <T>(url: string, config = {}) {
    const { data } = await axiosInstance.delete<T>(url, config);
    return data;
  },
  sse: function (url: string): EventSource {
    return new EventSource(url);
  },
};

export const abort = () => controller.abort();
