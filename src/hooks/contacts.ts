import {
  useCreateInstance,
  useDeleteInstance,
  useFetchInstance,
  useFetchListing,
  useStoreInstance,
  useUpdateInstance,
} from "@/hooks/crud.ts";
import { PublicUser } from "@/api/entity-types.ts";
import api from "@/api/api.ts";

type ContactsQuery = {
  q: string;
  page: number;
  limit: number;
};

export const useContacts = () => {
  return useFetchListing<PublicUser, ContactsQuery>(api.contact.index, {
    q: "",
    page: 1,
    limit: 15,
  });
};

export const useShowContact = () => {
  return useFetchInstance<PublicUser>(api.contact.show);
};

export const useCreateContact = () => {
  return useCreateInstance<PublicUser>(() => ({
    uuid: "",
    name: "",
    email: "",
    location: {
      place_id: "",
      address: "",
      lat: 0,
      lon: 0,
    },
  }));
};

export const useStoreContact = () => {
  return useStoreInstance<PublicUser>(api.contact.store);
};

export const useUpdateContact = () => {
  return useUpdateInstance<PublicUser>(api.contact.update);
};

export const useDeleteContact = () => {
  return useDeleteInstance(api.contact.destroy);
};
