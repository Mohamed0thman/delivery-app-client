import { CategoriesActionTypes } from "./categories-type";

export const fetchAllCategories = () => ({
  type: "API",
  payload: {
    method: "GET",
    url: `/api/categories`,
    success: (response) => setAllCategories(response),
  },
});

const setAllCategories = (data) => ({
  type: CategoriesActionTypes.SET_ALL_CATEGORIES,
  payload: data.categories,
});
