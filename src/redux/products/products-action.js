import { PorductsActionTypes } from "./products-type";

export const fetchStoreProducts = (storeName) => ({
  type: "API",
  payload: {
    method: "GET",
    url: `/api/${storeName}/products?page=1&limit=5`,
    success: (response) => setStoreProducts(response),
  },
});

const setStoreProducts = (data) => ({
  type: PorductsActionTypes.SET_STORE_PRODUCTS,
  payload: data.products,
});
