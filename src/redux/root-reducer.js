import { combineReducers } from "redux";

import storesReducer from "./stores/stores-reduce";
import productsReducer from "./products/products-reduce";
import userReduser from "./user/user-reduce";

const rootReducer = combineReducers({
  stores: storesReducer,
  user: userReduser,
  products: productsReducer,
});

export default rootReducer;
