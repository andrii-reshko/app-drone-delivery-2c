import { useAuth } from "@/hooks/auth.ts";
import {
  useCreateInstance,
  useDeleteInstance,
  useFetchInstance,
  useFetchListing,
  useStoreInstance,
  useUpdateInstance,
} from "@/hooks/crud.ts";
import { Order, PublicUser } from "@/api/entity-types.ts";
import { OutgoingOrderQuery } from "@/api/queries.ts";
import api from "@/api/api.ts";

export const useOutgoingOrders = () => {
  const auth = useAuth();

  const { loading, pagination, query, setQuery, items } = useFetchListing<
    Order,
    OutgoingOrderQuery
  >(api.order.index, {
    search: "",
    page: 1,
    limit: 15,
    sender_uuid: auth.authenticated ? "test" : null, // TODO: replace with auth.user.uuid
  } as OutgoingOrderQuery);

  return {
    loading,
    pagination,
    query,
    setQuery,
    items,
  };
};

export const useShowOutgoingOrder = () => {
  return useFetchInstance<Order>(api.order.show);
};

export const useCreateOutgoingOrder = () => {
  return useCreateInstance<Order>(() => ({
    uuid: "",
    receiver_uuid: "",
    sender_uuid: "",
    status: "pending",
    rows: [],
    from: {
      place_id: "",
      address: "",
      lat: 0,
      lon: 0,
    },
    to: {
      place_id: "",
      address: "",
      lat: 0,
      lon: 0,
    },
    description: "",
    sender: {
      uuid: "",
      name: "",
      email: "",
      location: undefined,
    },
    receiver: {
      uuid: "",
      name: "",
      email: "",
      location: undefined,
    },
  }));
};

export const useStoreOutgoingOrder = () => {
  return useStoreInstance<PublicUser>(api.contact.store);
};

export const useUpdateOutgoingOrder = () => {
  return useUpdateInstance<PublicUser>(api.contact.update);
};

export const useDeleteOutgoingOrder = () => {
  return useDeleteInstance(api.contact.destroy);
};
