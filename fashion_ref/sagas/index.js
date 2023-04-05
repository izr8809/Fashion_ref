import { all, fork } from "redux-saga/effects";
import postSaga from "./post";
import userSaga from "./user";
import axios from "axios";

// axios.defaults.baseURL = 'http://15.164.224.172:8080/';
axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(postSaga), 
    fork(userSaga)
  ]);
}
