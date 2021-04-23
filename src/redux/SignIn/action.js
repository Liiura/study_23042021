export const START_TRANSACTION = "signIn/startTransaction";
export const FETCH_SUCCESS = "signIn/fetchSuccess";
export const TOGGLE_ERROR = "signIn/toggleError";

import Service from "../../services";
import * as NavigationAction from "../../navigation/RootNavigation";

export const fetchSignIn = (login) => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_TRANSACTION });
      const payload = await Service("users/signin", "POST", login);
      dispatch({ type: FETCH_SUCCESS, payload });
      NavigationAction.navigate("Dashboard");
    } catch (error) {
      dispatch(toggleError(error));
    }
  };
};

export const toggleError = (errorMessage) => ({
  type: TOGGLE_ERROR,
  payload: errorMessage,
});
