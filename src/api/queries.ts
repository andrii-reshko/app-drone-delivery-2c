type PagedQuery = {
  page?: number | null;
  limit?: number | null;
};

type SearchableQuery = {
  search?: string | null;
};

type GenericQuery = SearchableQuery & PagedQuery;

export type ContactQuery = GenericQuery;

export type IncomingOrderQuery = GenericQuery & {
  receiver_uuid: string;
};

export type OutgoingOrderQuery = GenericQuery & {
  sender_uuid: string;
};

export type OrderQuery = IncomingOrderQuery | OutgoingOrderQuery;
