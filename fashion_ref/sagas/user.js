import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { 
  LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_IN_SUCCESS, 
  LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, 
  SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS,
  LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, } from "@/reducers/user";


//load user
function loadUserAPI(data) {
  return axios.get(`/user/user`);
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    // console.log('loadUserData', result.data);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_USER_FAILURE,
      error: err.response.data,
    });
  }
}



//login
function loginAPI(data) {
  return axios.post("/user/login", data);
}
function* logIn(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}



//logout
function logoutAPI() {
  return axios.get("/user/logout");
}
function* logOut() {
  try {
    const result = yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}
//signup
function signupAPI(data) { // is not gnerator
  console.log("data", data)
  return axios.post("/user/signup", data);
}
function* signUp(action) {
  try {
    const result = yield call(signupAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err)
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga(){
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchLoadUser),
  ])
}