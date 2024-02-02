"use strict";

const cacheData = (storageKey, data, ttlInMilliseconds) => {
  const expires = new Date().getTime() + ttlInMilliseconds;
  localStorage.setItem(storageKey, JSON.stringify({ data, expires }));
};

const getCachedData = (storageKey) => {
  const objectData = localStorage.getItem(storageKey);

  if (!objectData) {
    return null;
  }

  const { data, expires } = JSON.parse(objectData);
  const now = new Date();

  if (now.getTime() > expires) {
    localStorage.removeItem(storageKey);
    return null;
  }

  return data;
};

export { cacheData, getCachedData };