import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ServerErrorResponse } from "./types.ts";

type TokenResolver = () => string | null;

type ErrorHandler = (error: AxiosError) => void;

const bypassRequestError = (error: AxiosError) => Promise.reject(error);

const bypassResponse = (response: AxiosResponse): AxiosResponse => response;

export const handleAuthenticationHeaders = (
  axiosClient: AxiosInstance,
  tokenResolver: TokenResolver,
) => {
  axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const accessToken = tokenResolver();
    // Skip adding Authorization header if there is no access token.
    if (!accessToken) return config;
    // todo skip adding Authorization header for public URLs (like login, register, etc.)
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  }, bypassRequestError);
};

export const handleMethodSpoofing = (axiosClient: AxiosInstance) => {
  axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (
      config.method != "get" &&
      config.method != "post" &&
      config.data instanceof FormData
    ) {
      config.data.append("_method", config.method!.toUpperCase());
      config.method = "post";
      return config;
    }
    return config;
  }, bypassRequestError);
};

type RefreshHandler = () => Promise<string>;

export const handleUnauthorizedRequest = (
  axiosClient: AxiosInstance,
  refreshHandler: RefreshHandler,
  errorHandler: ErrorHandler,
) => {
  axiosClient.interceptors.response.use(
    bypassResponse,
    async (error: AxiosError) => {
      const config = error.config;
      if (config === undefined) {
        errorHandler(error);
        return Promise.reject(error);
      }

      if (error.response && error.response.status === 401) {
        // todo handle refresh token expiration
        await refreshHandler();
      }

      // Return a Promise rejection if the status code is not 401
      errorHandler(error);
      return Promise.reject(error);
    },
  );
};

export type ApiErrorHandler = (
  error: ServerErrorResponse,
  status: number,
) => void;

export const handleHttpErrors = (
  axiosClient: AxiosInstance,
  errorHandler: ApiErrorHandler,
) => {
  axiosClient.interceptors.response.use(bypassResponse, (error: AxiosError) => {
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      const status = error.response.status;
      // Ignore 401 status code, it is handled by handleUnauthorizedRequest interceptor
      if (status === 401) return error;
      // Otherwise, call the error handler
      errorHandler(error.response.data as ServerErrorResponse, status);
    } else if (error.request) {
      // The request was made but no response was received, `error.request` is an instance of XMLHttpRequest
      errorHandler(
        {
          errors: [
            {
              path: "error",
              message: "The request was made but no response was received",
            },
          ],
          meta: error.request,
        },
        500,
      );
      console.log(error.request);
    } else {
      // Something happened in setting up the request
      errorHandler(
        {
          errors: [
            {
              path: "error",
              message:
                "Something happened in setting up the request that triggered an error",
            },
          ],
          meta: null,
        },
        500,
      );
    }
    return error;
  });
};
