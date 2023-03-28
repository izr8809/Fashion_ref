import { all, fork, call, put, takeLatest, throttle } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_HASHTAGS_FAILURE,
  GET_HASHTAGS_REQUEST,
  GET_HASHTAGS_SUCCESS,
  HASHTAG_SEARCH_FAILURE,
  HASHTAG_SEARCH_REQUEST,
  HASHTAG_SEARCH_SUCCESS,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  DUPLICATE_POST_SUCCESS,
  DUPLICATE_POST_FAILURE,
  DUPLICATE_POST_REQUEST,
} from "@/reducers/post";

//addpost
function addPostAPI(data) {
  return axios.post("/post/addPost", data);
}
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

//addpost
function deletePostAPI(data) {
  return axios.post(`/post/deletpost/${data}`, data);
}
function* deletePost(action) {
  try {
    const result = yield call(deletePostAPI, action.data);
    yield put({
      type: DELETE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

//addpost
function loadPostAPI(data) {
  return axios.get(`/post/loadPost?lastId=${data}`);
}
function* loadPost(action) {
  try {
    console.log(action.data);
    const result = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

//getHashtags
function getHashtagsAPI(data) {
  return axios.get(`/post/getHashtags`);
}
function* getHashtags(action) {
  try {
    console.log(action.data);
    const result = yield call(getHashtagsAPI, action.data);
    yield put({
      type: GET_HASHTAGS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_HASHTAGS_FAILURE,
      error: err.response.data,
    });
  }
}



//hashtag Search
function hashtagSearchAPI(data) {
  return axios.post(`/post/hashtagSearch`, data);
}
function* hashtagSearch(action) {
  try {
    const result = yield call(hashtagSearchAPI, action.data);
    yield put({
      type: HASHTAG_SEARCH_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: HASHTAG_SEARCH_FAILURE,
      error: err.response.data,
    });
  }
}


//like
function likePostAPI(data) {
  return axios.patch(`/post/${data}/like`);
}
function* likePost(action) {
  try {
    console.log(action.data);
    const result = yield call(likePostAPI, action.data);
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}


//unlike
function unlikePostAPI(data) {
  return axios.delete(`/post/${data}/unlike`);
}
function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    });
  }
}


//duplicate
function duplicatePostAPI(data) {
  return axios.patch(`/post/${data}/duplicate`);
}
function* duplicatePost(action) {
  try {
    const result = yield call(duplicatePostAPI, action.data);
    yield put({
      type: DUPLICATE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DUPLICATE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchLoadPost() {
  yield throttle(5000, LOAD_POST_REQUEST, loadPost);
}

function* watchDeletePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}

function* watchGetHashtags() {
  yield takeLatest(GET_HASHTAGS_REQUEST, getHashtags);
}

function* watchHashtagSearch() {
  yield takeLatest(HASHTAG_SEARCH_REQUEST, hashtagSearch);
}

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function* watchUnLikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchDuplicatePost() {
  yield takeLatest(DUPLICATE_POST_REQUEST, duplicatePost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadPost),
    fork(watchDeletePost),
    fork(watchGetHashtags),
    fork(watchHashtagSearch),
    fork(watchLikePost),
    fork(watchUnLikePost),
    fork(watchDuplicatePost),
  ]);
}