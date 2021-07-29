import { UserActionTypes } from "./user-type";
import { ActionTypes } from "../type";

export const ToggleSignInSignUp = () => ({
  type: UserActionTypes.TOGGLE_SIGN_IN_SIGN_UP,
});

export const registerUser = (data, onSuccess, onError) => ({
  type: ActionTypes.API,
  payload: {
    method: "POST",
    url: "/api/users/register",
    data,
    success: (response) => setUserInfo(response),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

export const loginUser = (data, onSuccess, onError) => ({
  type: ActionTypes.API,
  payload: {
    method: "POST",
    url: "/api/users/login",
    data,
    success: (response) => setUserInfo(response),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

export const logoutUser = () => {
  localStorage.removeItem("USER_INFO");
  return { type: UserActionTypes.RESET_USER_INFO };
};

const setUserInfo = (data) => {
  // const parsedToken = JSON.parse(atob(data.data.token.split(".")[1]));
  const userInfo = {
    userId: data.data.userId,
    email: data.data.email,
    token: data.data.token,
    role: data.data.role,
    isLoggedIn: true,
  };
  localStorage.setItem("USER_INFO", JSON.stringify(userInfo));
  return { type: UserActionTypes.SET_USER_INFO, payload: userInfo };
};

export const userPremission = (roleId, onSuccess) => ({
  type: ActionTypes.API,
  payload: {
    method: "GET",
    url: `/api/premission/${roleId}`,
    success: (response) => setPremission(response),
    postProcessSuccess: onSuccess,
  },
});

const setPremission = (data) => {
  console.log(data);
  return {
    type: UserActionTypes.SET_PREMISSION,
    payload: data,
  };
};
