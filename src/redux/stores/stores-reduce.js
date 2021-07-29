import { StoresActionTypes } from "./stores-type";

const INITIAL_STATE = {
  stores: [],
  products: [],
};

const storesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StoresActionTypes.SET_ALL_STORES:
      return {
        ...state,
        stores: action.payload,
      };

    case StoresActionTypes.ADD_STORE:
      return {
        ...state,
        stores: state.stores.concat(action.payload),
      };
    case StoresActionTypes.REMOVE_STORE:
      return {
        ...state,
        stores: state.stores.filter((product) => product.id !== action.payload),
      };
    case StoresActionTypes.UPDATE_STORE:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default storesReducer;
