declare module "@rbarisic/local-storage-cache" {
  type CacheDataFunction = (
    storageKey: string,
    data: any,
    ttlInMilliseconds: number
  ) => void;

  type GetCachedDataFunction = (
    storageKey: string
  ) => any | null;

  export const cacheData: CacheDataFunction;
  export const getCachedData: GetCachedDataFunction;
}