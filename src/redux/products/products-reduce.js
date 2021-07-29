import { PorductsActionTypes } from "./products-type";

const INITIAL_STATE = {
  products: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PorductsActionTypes.SET_STORE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
