import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";



//login
function loginAPI(data) {
  return axios.post("/login", data);
}
function* logIn(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}



//logout
function logoutAPI() {
  return axios.post("/logout");
}
function* logOut() {
  try {
    const result = yield call(logoutAPI);
    yield put({
      type: "LOG_OUT_REQUEST",
      data: result.data,
    });
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}
function* watchLogout() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga(){
  yield all([
    fork(watchLogin),
    fork(watchLogout)
  ])
}