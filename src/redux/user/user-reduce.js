import { UserActionTypes } from "./user-type";
const defaultState = {
  userId: null,
  email: null,
  token: null,
  role: null,
  isLoggedIn: false,
};
const userInfo = localStorage.getItem("USER_INFO");

const INITIAL_STATE = {
  form: "signUp",
  accountDropdown: false,
  currentUser: userInfo ? JSON.parse(userInfo) : defaultState,
  premissions: false,
  profile: {},
};

const userReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.TOGGLE_ACCOUNT_DORPDOWN:
      return {
        ...state,
        accountDropdown: !state.accountDropdown,
      };
    case UserActionTypes.SET_USER_INFO:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case UserActionTypes.RESET_USER_INFO:
      return {
        ...state,
        currentUser: defaultState,
      };
    case UserActionTypes.SET_PREMISSION:
      return {
        ...state,
        premissions: action.payload,
      };
    default:
      return state;
  }
};

export default userReduser;
