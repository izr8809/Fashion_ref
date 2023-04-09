import { all, fork } from "redux-saga/effects";
import postSaga from "./post";
import userSaga from "./user";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API
// axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(postSaga), 
    fork(userSaga)
  ]);
}
