type HasLocation = {
  location: Location;
};

type Vehicle = {
  uuid: string;
  name: string;
} & HasLocation;

export type Hub = {
  uuid: string;
  name: string;
} & HasLocation;

export type PublicUser = {
  uuid: string; // todo now "id" is used refactor server side to use "uuid"
  name: string;
  email: string;
  created_at?: string | null;
  updated_at?: string | null;
  last_seen_at?: string | null;
  location?: Location;
};

export type User = {} & PublicUser;

export type TokenResponse = {
  token_type: string;
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expires_at: string;
};

export type OrderStatus = "pending" | "in_transit" | "delivered";

export interface OrderRow {
  uuid: string;
  order_uuid: string;
  sequence_number: number;
  description: string;
  weight: number;
  length: number;
  width: number;
  height: number;
}

export type Location = {
  place_id: string;
  address: string;
  lat: number;
  lon: number;
};

export type RouteNode = {
  name: string;
  type: "hub" | "sender" | "receiver";
} & HasLocation;

export interface Order {
  uuid: string;
  sender_uuid: string;
  receiver_uuid: string;
  from: Location;
  to: Location;
  description: string;
  status: OrderStatus;
  sender: PublicUser;
  receiver: PublicUser;
  rows: OrderRow[];
  vehicle_uuid?: string | null;
  vehicle?: Vehicle | null;
  route?: RouteNode[];
}
