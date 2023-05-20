import { LOAD_POST_REQUEST, RESET_POST_REQUEST } from "@/reducers/post";
import { ADD_ADMIN_USER_FAILURE, ADD_ADMIN_USER_REQUEST, ADD_ADMIN_USER_SUCCESS, ADD_REFERENCE_FAILURE, ADD_REFERENCE_REQUEST, ADD_REFERENCE_SUCCESS, ADD_TAG_FALIURE, ADD_TAG_REQUEST, ADD_TAG_SUCCESS, ADD_WORKSPACE_TAGS_FAILURE, ADD_WORKSPACE_TAGS_REQUEST, ADD_WORKSPACE_TAGS_SUCCESS, DELETE_ADMIN_USER_FAILURE, DELETE_ADMIN_USER_REQUEST, DELETE_ADMIN_USER_SUCCESS, DELETE_MEMBER_FAILURE, DELETE_MEMBER_REQUEST, DELETE_MEMBER_SUCCESS, DELETE_SAVEDTAGS_FAILURE, DELETE_SAVEDTAGS_REQUEST, DELETE_SAVEDTAGS_SUCCESS, DELETE_WORKSPACE_TAGS_FAILURE, DELETE_WORKSPACE_TAGS_REQUEST, DELETE_WORKSPACE_TAGS_SUCCESS, LOAD_WORKSPACE_INFO_FAILURE, LOAD_WORKSPACE_INFO_REQUEST, LOAD_WORKSPACE_INFO_SUCCESS, REFERENCE_CLICK_FAILURE, REFERENCE_CLICK_REQUEST, REFERENCE_CLICK_SUCCESS } from "@/reducers/workspace";
import axios from "axios";
import { all, call, put, takeLatest,fork } from "redux-saga/effects";



//load workspaceInfo
function loadWorkspaceInfoAPI(data) {
  return axios.post(`/workspace`);
}

function* loadWorkspaceInfo(action) {
  try {
    const result = yield call(loadWorkspaceInfoAPI, action.data);
    yield put({
      type: LOAD_WORKSPACE_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_WORKSPACE_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function* referenceClick(action) {
  try {
    yield put({
      type: RESET_POST_REQUEST,
    })
    yield put({
      type: LOAD_POST_REQUEST,
      data: action.data,
    });
    yield put({
      type: REFERENCE_CLICK_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: REFERENCE_CLICK_FAILURE,
      error: err.response.data,
    });
  }
}

//add Reference
function addReferenceAPI(data) {
  return axios.post(`/workspace/addReference`, data);
}

function* addReference(action) {
  try {
    const result = yield call(addReferenceAPI, action.data);
    yield put({
      type: ADD_REFERENCE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_REFERENCE_FAILURE,
      error: err.response.data,
    });
  }
}


//add Reference tag
function addTagAPI(data) {
return axios.post(`/workspace/addReferenceTag`, data);
}

function* addTag(action) {
try {
  const result = yield call(addTagAPI, action.data);
  yield put({
    type: ADD_TAG_SUCCESS,
    data: result.data,
  });
} catch (err) {
  yield put({
    type: ADD_TAG_FALIURE,
    error: err.response.data,
  });
}
}


//delete Saved Reference tag
function deleteSavedtagsAPI(data) {
  return axios.post(`/workspace/deleteSavedtags`, data);
  }
  
  function* deleteSavedtags(action) {
  try {
    const result = yield call(deleteSavedtagsAPI, action.data);
    yield put({
      type: DELETE_SAVEDTAGS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_SAVEDTAGS_FAILURE,
      error: err.response.data,
    });
  }
  }


//add admin user
function addAdminUserAPI(data) {
  return axios.post(`/workspace/addAdminUser`, data);
  }
  
  function* addAdminUser(action) {
  try {
    const result = yield call(addAdminUserAPI, action.data);
    yield put({
      type: ADD_ADMIN_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_ADMIN_USER_FAILURE,
      error: err.response.data,
    });
  }
  }

//delete admin user
function deleteAdminUserAPI(data) {
  return axios.post(`/workspace/deleteAdminUser`, data);
  }
  
  function* deleteAdminUser(action) {
  try {
    const result = yield call(deleteAdminUserAPI, action.data);
    yield put({
      type: DELETE_ADMIN_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_ADMIN_USER_FAILURE,
      error: err.response.data,
    });
  }
  }

//delete member 
function deleteMemberAPI(data) {
  return axios.post(`/workspace/deleteMember`, data);
  }
  
  function* deleteMember(action) {
  try {
    const result = yield call(deleteMemberAPI, action.data);
    yield put({
      type: DELETE_MEMBER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: DELETE_MEMBER_FAILURE,
      error: err.response.data,
    });
  }
  }

  function* watchAddAdminUser() {
    yield takeLatest(ADD_ADMIN_USER_REQUEST, addAdminUser);
  } 
  
  function* watchDeleteAdminUser() {
    yield takeLatest(DELETE_ADMIN_USER_REQUEST, deleteAdminUser);
  }
  
  function* watchDeleteMember() {
    yield takeLatest(DELETE_MEMBER_REQUEST, deleteMember);
  } 

function* watchDeleteSavedtags() {
  yield takeLatest(DELETE_SAVEDTAGS_REQUEST, deleteSavedtags);
} 

function* watchAddReference() {
  yield takeLatest(ADD_REFERENCE_REQUEST, addReference);
}

function* watchAddTag() {
  yield takeLatest(ADD_TAG_REQUEST, addTag);
}

function* watchReferenceClick() {
  yield takeLatest(REFERENCE_CLICK_REQUEST, referenceClick);
}
  

function* watchLoadWorkspaceInfo() {
  yield takeLatest(LOAD_WORKSPACE_INFO_REQUEST, loadWorkspaceInfo);
}



export default function* workspaceSaga() {
  yield all([
    fork(watchLoadWorkspaceInfo),
    fork(watchReferenceClick),
    fork(watchAddReference),
    fork(watchAddTag),
    fork(watchDeleteSavedtags),
    fork(watchAddAdminUser),
    fork(watchDeleteAdminUser),
    fork(watchDeleteMember),
  ]);
}
