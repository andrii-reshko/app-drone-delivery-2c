import { client } from "./client.ts";
import { PaginatedResponse, ServerResponse } from "./types.ts";
import { Order, PublicUser, TokenResponse, User } from "@/api/entity-types.ts";

export default {
  auth: {
    register: async (data: object) =>
      await client.post<ServerResponse<User>>(`/auth/register`, data),
    login: (data: object) =>
      client.post<ServerResponse<TokenResponse>>(`/auth/login`, data),
    logout: () => client.post<ServerResponse<null>>(`/auth/logout`),
    me: () => client.get<ServerResponse<User>>(`/auth/me`),
  },
  contact: {
    index: (params?: object) => {
      return client.get<PaginatedResponse<PublicUser>>(`/contact`, params);
    },
    show: (uuid: string) => {
      return client.get<ServerResponse<PublicUser>>(`/contact/${uuid}`);
    },
    store: (data: Omit<PublicUser, "uuid">) => {
      return client.post<ServerResponse<PublicUser>>(`/contact`, data);
    },
    update: (uuid: string, data: PublicUser) => {
      return client.put<ServerResponse<PublicUser>>(`/contact/${uuid}`, data);
    },
    destroy: (uuid: string) => {
      return client.delete<ServerResponse<null>>(`/contact/${uuid}`);
    },
  },
  order: {
    index: (params?: object) => {
      return client.get<PaginatedResponse<Order>>(`/order`, params);
    },
    show: (uuid: string) => {
      return client.get<ServerResponse<Order>>(`/order/${uuid}`);
    },
    store: (data: Omit<Order, "uuid">) => {
      return client.post<ServerResponse<Order>>(`/order`, data);
    },
    update: (uuid: string, data: Order) => {
      return client.put<ServerResponse<Order>>(`/order/${uuid}`, data);
    },
    destroy: (uuid: string) => {
      throw new Error(`Deletion of order ${uuid} is not allowed`);
    },
    watch: () => {
      throw new Error("Not implemented");
    },
  },
};
