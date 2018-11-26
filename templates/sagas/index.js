import { put, takeLatest } from "redux-saga/effects";

import { loginError, logoutError, logoutSuccess } from "actions";
import { LOGIN_REQUEST, LOGOUT_REQUEST } from "constants/actionTypes";

export function* fetchUser() {
  try {
    // const { email, password } = action.creds;
    // const options = {
    //   body: JSON.stringify({ email, password }),
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    // };

    // const { user } = yield call(fetchJSON, "/auth/login", options);

    // yield put(receiveLogin(user));
    yield put(loginError("Auth provider not configured"));
  } catch (e) {
    if (e.status === 400) {
      yield put(loginError("Incorrect email or password"));
    } else {
      yield put(loginError("An unknown error occured"));
    }
  }
}

function* logoutUser() {
  try {
    yield put(logoutSuccess());
  } catch (e) {
    yield put(logoutError(e.message));
  }
}

function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, fetchUser);
  yield takeLatest(LOGOUT_REQUEST, logoutUser);
}

export default rootSaga;
