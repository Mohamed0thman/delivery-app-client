import axios from "axios";
import { LoadingActionTypes } from "./loading/loading-type";
import { logoutUser } from "./user/user-action";

export const apiMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type !== "API") return next(action);
    const { url, method, success, data, postProcessSuccess, postProcessError } =
      action.payload;

    dispatch({ type: LoadingActionTypes.TOGGLE_LOADER });

    let BASE_URL = "https://eltayar.herokuapp.com";
    if (process.env.NODE_ENV === "development") {
      BASE_URL = "http://localhost:3000";
    }

    const AUTH_TOKEN = getState().user.currentUser.token;
    if (AUTH_TOKEN) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
    }

    axios({
      method,
      url: BASE_URL + url,
      data: data ? data : null,
    })
      .then((response) => {
        dispatch({ type: LoadingActionTypes.TOGGLE_LOADER });

        if (success) dispatch(success(response.data));
        if (postProcessSuccess) postProcessSuccess(response.data);
      })
      .catch((e) => {
        dispatch({ type: LoadingActionTypes.TOGGLE_LOADER });

        console.log(e);
        if (!e.response) console.warn(e);
        else {
          if (e.response && e.response.status === 403) {
            dispatch(logoutUser());
          }
          if (e.response.status === 401) {
            console.log(e.response);
          }
          if (e.response.data.message) {
            if (postProcessError) postProcessError(e.response.data.message);
          }
        }
      });
  };
