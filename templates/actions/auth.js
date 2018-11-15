import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "../constants/actionTypes";

export function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

export function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user,
  };
}

export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

export function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutError(message) {
  return {
    type: LOGIN_FAILURE,
    message,
  };
}

export function requestUser() {
  return {
    type: GET_USER,
  };
}

export function receiveUser(user) {
  return {
    type: GET_USER_SUCCESS,
    user,
  };
}

export function requestUserError() {
  return {
    type: GET_USER_FAILURE,
  };
}
