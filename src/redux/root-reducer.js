import { combineReducers } from "redux";

import storesReducer from "./stores/stores-reduce";
import productsReducer from "./products/products-reduce";
import userReduser from "./user/user-reduce";
import categoriesReducer from "./categories/categories-reduce";

const rootReducer = combineReducers({
  stores: storesReducer,
  user: userReduser,
  products: productsReducer,
  categories: categoriesReducer,
});

export default rootReducer;
