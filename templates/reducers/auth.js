import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "../constants/actionTypes";

const auth = (
  state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem("jwt"),
  },
  action,
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.user,
        isFetching: false,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        token: "",
      };
    case GET_USER:
      return {
        ...state,
        isFetching: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        ...action.user,
        isFetching: false,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default auth;
