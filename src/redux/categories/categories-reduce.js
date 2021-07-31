import { CategoriesActionTypes } from "./categories-type";

const INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.SET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
