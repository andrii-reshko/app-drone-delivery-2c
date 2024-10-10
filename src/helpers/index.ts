// todo add some helper functions like "get", "set", "has" etc.

/**
 * Leave first N characters and last M characters of an UUID
 * @param uuid
 * @param first
 * @param last
 */
export const trimUuid = (uuid: string, first: number = 8, last: number = 4) => {
  return `${uuid.substring(0, first)}...${uuid.substring(uuid.length - last)}`;
};
