import { AxiosInstance } from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { PaginatedResponse } from "@/api/types.ts";
import { Location, Order, PublicUser, RouteNode } from "@/api/entity-types.ts";

const paginate = <T>(data: T[], page: number): PaginatedResponse<T> => {
  return {
    first_page_url: "/",
    last_page_url: "/",
    next_page_url: "/",
    path: "/",
    prev_page_url: "/",
    data: data,
    per_page: Math.max(data.length, 15),
    total: 100,
    current_page: page,
    last_page: 10,
    from: 1,
    to: 10,
    links: [],
  };
};

const mockLocation = (name: string): Location => {
  const bbox = [22.21427, 48.589462, 22.357178, 48.639965];
  const genId = (length: number) => {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from(
      { length },
      () => chars[Math.floor(Math.random() * chars.length)],
    ).join("");
  };
  return {
    place_id: genId(36),
    address: name,
    lat: bbox[0] + Math.random() * (bbox[2] - bbox[0]),
    lon: bbox[1] + Math.random() * (bbox[3] - bbox[1]),
  };
};

const mockOrders = (count: number, page: number): Order[] => {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    const p = page.toString().padStart(4, "0");
    const s = n.toString().padStart(12, "0");

    const from: RouteNode = {
      name: "Sender",
      location: mockLocation(`From address ${n}`),
      type: "sender",
    };
    const to: RouteNode = {
      name: "Receiver",
      location: mockLocation(`To address ${n}`),
      type: "receiver",
    };
    const hub: RouteNode = {
      name: "Hub",
      location: mockLocation(`Hub ${n}`),
      type: "hub",
    };

    const order: Order = {
      uuid: `10000000-0000-0000-${p}-${s}`,
      sender_uuid: `21000000-0000-0000-0000-00000000000${n}`,
      receiver_uuid: `22000000-0000-0000-0000-00000000000${n}`,
      from: mockLocation(`From address ${n}`),
      to: mockLocation(`To address ${n}`),
      description: `Order ${i}`,
      status: "pending",
      sender: {
        uuid: `21000000-0000-0000-0000-00000000000${i}`,
        name: `Sender ${n}`,
        email: `sender-${n}@example.com`,
        location: mockLocation(`Sender location ${n}`),
        created_at: "2021-01-01T00:00:00Z",
        updated_at: "2021-01-01T00:00:00Z",
        last_seen_at: null,
      },
      receiver: {
        uuid: `22000000-0000-0000-0000-00000000000${i}`,
        name: `Receiver ${n}`,
        email: `receiver-${n}@example.com`,
        location: mockLocation(`Receiver location ${n}`),
        created_at: "2021-01-01T00:00:00Z",
        updated_at: "2021-01-01T00:00:00Z",
        last_seen_at: null,
      },
      rows: [],
      vehicle_uuid: null,
      vehicle: null,
      route: [hub, from, to, hub],
    };
    return order;
  });
};

const mockContacts = (count: number, page: number) => {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1 + count * (page - 1);
    const p = page.toString().padStart(4, "0");
    const s = n.toString().padStart(12, "0");

    return {
      uuid: `20000000-0000-0000-${p}-${s}`,
      name: `Contact ${n}`,
      email: `example-${n}@example.com`,
      location: mockLocation(`Contact location ${n}`),
    } as PublicUser;
  });
};

const mockJwt = (subUuid: string) => {
  return btoa(
    JSON.stringify({
      sub: subUuid,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600,
    }),
  );
};

const mockServer = (axios: AxiosInstance) => {
  const mock = new AxiosMockAdapter(axios);
  const delay = 1000;

  // Mock authentication
  mock
    .onGet("/auth/me")
    .withDelayInMs(delay)
    .reply(200, {
      data: {
        uuid: "00000000-0000-0000-0000-000000000001",
        name: "John Doe",
        email: "john.doe@example.com",
        created_at: "2021-01-01T00:00:00Z",
        updated_at: "2021-01-01T00:00:00Z",
      },
    });
  mock
    .onPost("/auth/register")
    .withDelayInMs(delay)
    .reply(200, {
      data: {
        token_type: "Bearer",
        access_token: mockJwt("00000000-0000-0000-0000-000000000001"),
        refresh_token: "refresh_token_1",
        expires_in: 3600,
        expires_at: new Date(Date.now() + 3600 * 1000).toISOString(),
      },
    });
  mock
    .onPost("/auth/login")
    .withDelayInMs(delay)
    .reply(200, {
      data: {
        token_type: "Bearer",
        access_token: mockJwt("00000000-0000-0000-0000-000000000001"),
        refresh_token: "refresh_token_1",
        expires_in: 3600,
        expires_at: new Date(Date.now() + 3600 * 1000).toISOString(),
      },
    });
  mock.onPost("/auth/logout").withDelayInMs(delay).reply(204, {});

  // Mock orders
  mock
    .onGet("/order")
    .withDelayInMs(delay)
    .reply((config) => {
      const page = parseInt(config.params.page) || 1;
      const limit = parseInt(config.params.limit) || 10;
      const orders = mockOrders(limit, page);
      return [200, paginate(orders, page)];
    });

  mock
    .onGet(new RegExp(`/order/*`))
    .withDelayInMs(delay)
    .reply((config) => {
      const uuid = config.url?.split("/").pop();
      const orders = mockOrders(1, 1);
      const order = orders[0];
      return [
        200,
        {
          data: {
            ...order,
            uuid: uuid,
          },
        },
      ];
    });

  // Mock contacts
  mock
    .onGet("/contact")
    .withDelayInMs(delay)
    .reply((config) => {
      const page = parseInt(config.params.page) || 1;
      const limit = parseInt(config.params.limit) || 10;
      const contacts = mockContacts(limit, page);
      return [200, paginate(contacts, page)];
    });

  mock
    .onGet(new RegExp(`/contact/*`))
    .withDelayInMs(delay)
    .reply((config) => {
      const uuid = config.url?.split("/").pop();
      const contacts = mockContacts(1, 1);
      const contact = contacts[0];
      return [
        200,
        {
          data: {
            ...contact,
            uuid: uuid,
          },
        },
      ];
    });
};

export default mockServer;
