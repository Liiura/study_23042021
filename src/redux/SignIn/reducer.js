import { START_TRANSACTION, FETCH_SUCCESS, TOGGLE_ERROR } from "./action";

const initialState = {
  user: null,
  loading: false,
  error: false,
  errorMessage: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_TRANSACTION:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, user: payload };
    case TOGGLE_ERROR:
      return {
        ...state,
        loading: false,
        error: !state.error,
        errorMessage: payload,
      };

    default:
      return state;
  }
};
