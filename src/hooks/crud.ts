import { useCallback, useEffect, useState } from "react";
import { PaginatedResponse, ServerResponse } from "@/api/types.ts";

type IndexCallback<T, Q> = (params: Q) => Promise<PaginatedResponse<T>>;

type SingleCallback<T> = (uuid: string) => Promise<ServerResponse<T>>;

type StoreCallback<T> = (item: Omit<T, "uuid">) => Promise<ServerResponse<T>>;

type UpdateCallback<T> = (uuid: string, item: T) => Promise<ServerResponse<T>>;

type DeleteCallback<T> = (
  uuid: string,
  data?: object,
) => Promise<ServerResponse<T>>;

type SimplePagination = {
  page: number;
  pages: number;
};

export const useFetchItems = <T, Q>(
  callback: IndexCallback<T, Q>,
  initialQuery: Q,
) => {
  const [query, setQuery] = useState<Q>(initialQuery);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<T[]>([]);
  const [pagination, setPagination] = useState<SimplePagination>({
    page: 1,
    pages: 1,
  });

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const { data, ...rest } = await callback(query);
      setItems(data);
      setPagination({
        page: rest.current_page,
        pages: rest.last_page,
      });
    } catch (e: unknown) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [callback, query]);

  useEffect(() => {
    fetchItems();
    return () => {};
  }, [fetchItems, query]);

  return {
    query,
    items,
    loading,
    pagination,
    setQuery,
  };
};

export const useFetchInstance = <T>(callback: SingleCallback<T>) => {
  const [loading, setLoading] = useState(false);
  const [instance, setInstance] = useState<T | undefined>(undefined);

  const fetchItem = useCallback(
    async (uuid: string) => {
      setLoading(true);
      try {
        const { data } = await callback(uuid);
        setInstance(data);
      } catch (e: unknown) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [callback],
  );

  return {
    instance,
    loading,
    fetchItem,
  };
};

export const useStoreInstance = <T>(callback: StoreCallback<T>) => {
  const [saving, setSaving] = useState(false);

  const store = useCallback(
    async (instance: T) => {
      if (!instance) return;
      try {
        setSaving(true);
        await callback(instance);
      } catch (e: unknown) {
        console.error(e);
      } finally {
        setSaving(false);
      }
    },
    [callback],
  );

  return {
    store,
    saving,
  };
};

export const useUpdateInstance = <T>(callback: UpdateCallback<T>) => {
  const [saving, setSaving] = useState(false);

  const storeInstance = useCallback(
    async (uuid: string, data: T & { uuid: string }) => {
      try {
        setSaving(true);
        await callback(uuid, data);
      } catch (e: unknown) {
        console.error(e);
      } finally {
        setSaving(false);
      }
    },
    [callback],
  );

  return {
    store: storeInstance,
    saving,
  };
};

export const useDeleteInstance = <T>(callback: DeleteCallback<T>) => {
  const [deleting, setDeleting] = useState(false);

  const deleteInstance = useCallback(
    async (uuid: string, data?: object) => {
      try {
        setDeleting(true);
        await callback(uuid, data);
      } catch (e: unknown) {
        console.error(e);
      } finally {
        setDeleting(false);
      }
    },
    [callback],
  );

  return {
    deleteInstance,
    deleting,
  };
};
