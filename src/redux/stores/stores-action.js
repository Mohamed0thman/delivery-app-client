import { StoresActionTypes } from "./stores-type";

export const fetchAllStores = () => ({
  type: "API",
  payload: {
    method: "GET",
    url: "/api/shops?page=1&limit=5",
    success: (response) => setAllStores(response),
  },
});

export const fetchAllByCategory = (categoryName) => ({
  type: "API",
  payload: {
    method: "GET",
    url: `/api/shops/${categoryName}?page=1&limit=5`,
    success: (response) => setAllStores(response),
  },
});
const setAllStores = (data) => ({
  type: StoresActionTypes.SET_ALL_STORES,
  payload: data.stores,
});
