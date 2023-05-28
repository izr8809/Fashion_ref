import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { 
  LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_IN_SUCCESS, 
  LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, 
  SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS,
  LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, ADD_WORKSPACE_SUCCESS, ADD_WORKSPACE_REQUEST, REQUEST_WORKSPACE_PERMISSION_SUCCESS, REQUEST_WORKSPACE_PERMISSION_FAILURE, REQUEST_WORKSPACE_PERMISSION_REQUEST, CONFIRM_REQUEST_SUCCESS, CONFIRM_REQUEST_FAILURE, DENY_REQUEST_SUCCESS, DENY_REQUEST_FAILURE, DENY_REQUEST_REQUEST, CONFIRM_REQUEST_REQUEST, DELELTE_NOTI_SUCCESS, DELELTE_NOTI_FAILURE, DELELTE_NOTI_REQUEST, } from "@/reducers/user";
import { SET_WORKSPACE_INFO_REQUEST } from "@/reducers/workspace";
import { ADD_POST_FAILURE } from "@/reducers/post";


//load user
function loadUserAPI() {
  return axios.get(`/user/user`);
}

function* loadUser() {  
  try {
    const result = yield call(loadUserAPI);
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
    yield put({
      type: SET_WORKSPACE_INFO_REQUEST,
      data: result.data
    })
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
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}


//addWorkspace user
function addWorkspaceAPI(data) {
  return axios.post(`/user/addWorkspace`, data);
}

function* addWorkspace(action) {  
  try {
    const result = yield call(addWorkspaceAPI, action.data);
    // console.log('loadUserData', result.data);
    yield put({
      type: ADD_WORKSPACE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

//request workspace permission 
function requestWorkspacePermisssionAPI(data) {
  return axios.post(`/user/requestPermission`, data);
}

function* requestWorkspacePermission(action) {  
  try {
    const result = yield call(requestWorkspacePermisssionAPI, action.data);
    // console.log('loadUserData', result.data);
    yield put({
      type: REQUEST_WORKSPACE_PERMISSION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: REQUEST_WORKSPACE_PERMISSION_FAILURE,
      error: err.response.data,
    });
  }
}


//confirm workspace permission 
function requestConfirmAPI(data) {
  return axios.post(`/user/requestConfirm`, data);
}

function* requestConfirm(action) {  
  try {
    const result = yield call(requestConfirmAPI, action.data);
    // console.log('loadUserData', result.data);
    yield put({
      type: CONFIRM_REQUEST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CONFIRM_REQUEST_FAILURE,
      error: err.response.data,
    });
  }
}


//deny workspace permission 
function requestDenyAPI(data) {
  return axios.post(`/user/requestDeny`, data);
}

function* requestDeny(action) {  
  try {
    const result = yield call(requestDenyAPI, action.data);
    // console.log('loadUserData', result.data);
    yield put({
      type: DENY_REQUEST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DENY_REQUEST_FAILURE,
      error: err.response.data,
    });
  }
}


//delete Noti
function deleteNotiAPI(data) {
  return axios.post(`/user/deleteNoti`, data);
}

function* deleteNoti(action) {  
  try {
    const result = yield call(deleteNotiAPI, action.data);
    // console.log('loadUserData', result.data);
    yield put({
      type: DELELTE_NOTI_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DELELTE_NOTI_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchDeleteNoti(){
  yield takeLatest(DELELTE_NOTI_REQUEST, deleteNoti)
}

function* watchRequestConfirm(){
  yield takeLatest(CONFIRM_REQUEST_REQUEST, requestConfirm)
}
function* watchRequestDeny(){
  yield takeLatest(DENY_REQUEST_REQUEST, requestDeny)
}

function* watchRequestWorkspacePermission(){
  yield takeLatest(REQUEST_WORKSPACE_PERMISSION_REQUEST, requestWorkspacePermission)
}
function* watchAddworkspace(){
  yield takeLatest(ADD_WORKSPACE_REQUEST, addWorkspace)
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
    fork(watchAddworkspace),
    fork(watchRequestWorkspacePermission),
    fork(watchRequestConfirm),
    fork(watchRequestDeny),
    fork(watchDeleteNoti),
  ])
}