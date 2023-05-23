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
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  EDIT_POST_WITH_IMAGES_SUCCESS,
  EDIT_POST_WITH_IMAGES_FAILURE,
  EDIT_POST_WITH_IMAGES_REQUEST,
  TOGGLE_SCROLL_REQUEST,
  GET_USER_POST_SUCCESS,
  GET_USER_POST_FAILURE,
  GET_USER_POST_REQUEST,
  GET_USER_LIKED_POST_SUCCESS,
  GET_USER_LIKED_POST_FAILURE,
  GET_USER_LIKED_POST_REQUEST,
  GET_LIKESORTED_REQUEST,
  GET_LIKESORTED_SUCCESS,
  GET_LIKESORTED_FAILURE,
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
  return axios.post(`/post/deletpost`, data);
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
  const lastId = data.lastId || null;
  const referenceId = data.referenceId;
  return axios.get(`/post/loadPost?lastId=${lastId}&referenceId=${referenceId}`);
}
function* loadPost(action) {
  try {
    console.log(action.data)
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
  return axios.post(`/post/getHashtags`, data);
}
function* getHashtags(action) {
  try {
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
    yield put({
      type: TOGGLE_SCROLL_REQUEST,
    })
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
  return axios.post(`/post/duplicate`, data);
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


//editpost
function editPostAPI(data) {
  return axios.post(`/post/editPost`,data);
}
function* editPost(action) {
  try {
    const result = yield call(editPostAPI, action.data);
    yield put({
      type: EDIT_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: EDIT_POST_FAILURE,
      error: err.response.data,
    });
  }
}


//getuserpost
function getUserPostAPI(data) {
  return axios.post(`/post/user`, data);
}
function* getUserPost(action) {
  try {
    const result = yield call(getUserPostAPI, action.data);
    yield put({
      type: GET_USER_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_USER_POST_FAILURE,
      error: err.response.data,
    });
  }
}


//getuserLikedpost
function getUserLikedPostAPI(data) {
  return axios.post(`/post/userLiked`, data);
}
function* getUserLikedPost(action) {
  try {
    const result = yield call(getUserLikedPostAPI, action.data);
    yield put({
      type: GET_USER_LIKED_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_USER_LIKED_POST_FAILURE,
      error: err.response.data,
    });
  }
}


//getLikesortedpost
function getLikedsortedPostAPI(data) {
  return axios.get(`/post/loadPost?sort=likes&referenceId=${data.referenceId}`);
}
function* getLikedsortedPost(action) {
  try {
    const result = yield call(getLikedsortedPostAPI, action.data);
    yield put({
      type: GET_LIKESORTED_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: GET_LIKESORTED_FAILURE,
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

function* watchEditPost() {
  yield takeLatest(EDIT_POST_REQUEST, editPost);
}
function* watchGetUserPost() {
  yield takeLatest(GET_USER_POST_REQUEST, getUserPost);
}

function* watchGetUserLikedPost() {
  yield takeLatest(GET_USER_LIKED_POST_REQUEST, getUserLikedPost);
}
function* watchGetLikedsrotedPost() {
  yield takeLatest(GET_LIKESORTED_REQUEST, getLikedsortedPost);
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
    fork(watchEditPost),
    fork(watchGetUserPost),
    fork(watchGetUserLikedPost),
    fork(watchGetLikedsrotedPost),
  ]);
}
