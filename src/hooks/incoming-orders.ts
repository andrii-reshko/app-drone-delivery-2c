import { Order } from "@/api/entity-types.ts";
import api from "@/api/api.ts";
import {
  useDeleteInstance,
  useFetchInstance,
  useFetchListing,
  useUpdateInstance,
} from "@/hooks/crud.ts";
import { useAuth } from "@/hooks/auth.ts";
import { IncomingOrderQuery } from "@/api/queries.ts";

export const useIncomingOrders = () => {
  const auth = useAuth();

  const { loading, pagination, query, setQuery, items } = useFetchListing<
    Order,
    IncomingOrderQuery
  >(api.order.index, {
    search: "",
    page: 1,
    limit: 15,
    receiver_uuid: auth.authenticated ? "test" : null, // TODO: replace with auth.user.uuid
  } as IncomingOrderQuery);

  return {
    loading,
    pagination,
    query,
    setQuery,
    items,
  };
};

export const useShowIncomingOrder = () => {
  return useFetchInstance<Order>(api.order.show);
};

export const useStoreIncomingOrder = () => {
  throw new Error("Not supported");
};

export const useUpdateIncomingOrder = () => {
  return useUpdateInstance<Order>(api.order.update);
};

export const useDeleteIncomingOrder = () => {
  return useDeleteInstance<Order>(api.order.destroy);
};
