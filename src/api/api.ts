import { client } from "./client.ts";
import { ServerResponse, TokenResponse, UserResponse } from "./types.ts";

export default {
  auth: {
    register: async (data: object) =>
      await client.post<ServerResponse<UserResponse>>(`/auth/register`, data),
    login: (data: object) =>
      client.post<ServerResponse<TokenResponse>>(`/auth/login`, data),
    logout: () => client.post<ServerResponse<null>>(`/auth/logout`),
    me: () => client.get<ServerResponse<UserResponse>>(`/auth/me`),
  },
  contact: {
    index: () => {
      throw new Error("Not implemented");
    },
    show: () => {
      throw new Error("Not implemented");
    },
    create: () => {
      throw new Error("Not implemented");
    },
    update: () => {
      throw new Error("Not implemented");
    },
    destroy: () => {
      throw new Error("Not implemented");
    },
  },
  order: {
    index: () => {
      throw new Error("Not implemented");
    },
    show: () => {
      throw new Error("Not implemented");
    },
    create: () => {
      throw new Error("Not implemented");
    },
    update: () => {
      throw new Error("Not implemented");
    },
    watch: () => {
      throw new Error("Not implemented");
    },
  },
};
