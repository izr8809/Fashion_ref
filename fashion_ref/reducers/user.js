import produce from "immer";
import { DELETE_POST_REQUEST } from "./post";

export const initialState = {
  loadUserLoading: false, // 유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  addWorkspaceLoading: false,
  addWorkspaceDone: false,
  addWrokspaceerror: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  accessWorkspaceLoading: false,
  accessWorkspaceDone: false,
  accessWorkspaceError: null,
  requestWorkspacePermissionLoading: false,
  requestWorkspacePermissionDone: false,
  requestWorkspacePermissionError: null,
  requestAddWorkspaceLoading: false,
  requestAddWorkspaceDone: false,
  requestAddWorkspaceError: null,
  confirmRequestLoading: false,
  confirmRequestDone: false,
  confirmRequestError: null,
  denyRequestLoading: false,
  denyRequestDone: false,
  denyRequestError: null,
  deleteNotiLoading: false,
  deleteNotiDone: false,
  deleteNotiError: null,
  user: null,
  signUpData: {},
  loginData: {},
  posts: [],
  userWorkspace: [],
  userCurrentWorkspaceId: 0,
};

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const TOGGLE_SIGNUP_DONE = "TOGGLE_SIGNUP_DONE";
export const TOGGLE_LOGIN_DONE = "TOGGLE_LOGIN_DONE";

export const CHANGE_WORKSPACE_ID = "CHANGE_WORKSPACE_ID";

export const ADD_WORKSPACE_REQUEST = "ADD_WORKSPACE_REQUEST";
export const ADD_WORKSPACE_SUCCESS = "ADD_WORKSPACE_SUCCESS";
export const ADD_WORKSPACE_FAILURE = "ADD_WORKSPACE_FAILURE";

export const REQUEST_ADD_WORKSPACE_REQUEST = "REQUEST_ADD_WORKSPACE_REQUEST";
export const REQUEST_ADD_WORKSPACE_SUCCESS = "REQUEST_ADD_WORKSPACE_SUCCESS";
export const REQUEST_ADD_WORKSPACE_FAILURE = "REQUEST_ADD_WORKSPACE_FAILURE";

export const REQUEST_WORKSPACE_PERMISSION_REQUEST =
  "REQUEST_WORKSPACE_PERMISSION_REQUEST";
export const REQUEST_WORKSPACE_PERMISSION_SUCCESS =
  "REQUEST_WORKSPACE_PERMISSION_SUCCESS";
export const REQUEST_WORKSPACE_PERMISSION_FAILURE =
  "REQUEST_WORKSPACE_PERMISSION_FAILURE";

export const ACCESS_WORKSPACE_REQUEST = "ACCESS_WORKSPACE_REQUEST";
export const ACCESS_WORKSPACE_SUCCESS = "ACCESS_WORKSPACE_SUCCESS";
export const ACCESS_WORKSPACE_FAILURE = "ACCESS_WORKSPACE_FAILURE";

export const CONFIRM_REQUEST_REQUEST = "CONFIRM_REQUEST_REQUEST";
export const CONFIRM_REQUEST_SUCCESS = "CONFIRM_REQUEST_SUCCESS";
export const CONFIRM_REQUEST_FAILURE = "CONFIRM_REQUEST_FAILURE";

export const DENY_REQUEST_REQUEST = "DENY_REQUEST_REQUEST";
export const DENY_REQUEST_SUCCESS = "DENY_REQUEST_SUCCESS";
export const DENY_REQUEST_FAILURE = "DENY_REQUEST_FAILURE";

export const DELELTE_NOTI_REQUEST = "DELELTE_NOTI_REQUEST";
export const DELELTE_NOTI_SUCCESS = "DELELTE_NOTI_SUCCESS";
export const DELELTE_NOTI_FAILURE = "DELELTE_NOTI_FAILURE";

export const UPDATE_WORKSPACE_ID = "UPDATE_WORKSPACE_ID";

export const loadUser = (data) => {
  return {
    type: LOAD_USER_REQUEST,
    data,
  };
};

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const loginSuccessAction = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

export const loginFailureAction = (data) => {
  return {
    type: LOG_IN_FAILURE,
    data,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: LOG_OUT_REQUEST,
    data,
  };
};

export const logoutSuccessAction = (data) => {
  return {
    type: LOG_OUT_SUCCESS,
    data,
  };
};

export const logoutFailureAction = (data) => {
  return {
    type: LOG_OUT_FAILURE,
    data,
  };
};

export const signupRequestAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data,
  };
};

export const signupSuccessAction = (data) => {
  return {
    type: SIGN_UP_SUCCESS,
    data,
  };
};

export const signupFailureAction = (data) => {
  return {
    type: SIGN_UP_FAILURE,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.user = action.data;
        draft.loadUserDone = true;
        //if workspace exists
        if (action.data) {
          draft.userWorkspace = action.data.Workspaces;
          draft.userCurrentWorkspaceId = action.data.Workspaces[0].id || 0;
        }
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.user = action.data;
        break;

      case LOG_IN_SUCCESS:
        draft.logInDone = true;
        draft.logInLoading = false;
        draft.user = action.data;
        draft.userWorkspace = action.data.Workspaces;
        draft.userCurrentWorkspaceId = action.data.Workspaces[0].id || 0;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        draft.user = null;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutDone = false;
        draft.logOutLoading = false;
        draft.logOutError = null;
        draft.user = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.user = action.data;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case TOGGLE_SIGNUP_DONE:
        draft.signUpDone = false;
        break;

      case TOGGLE_LOGIN_DONE:
        draft.logInDone = false;
        break;

      case CHANGE_WORKSPACE_ID:
        draft.userCurrentWorkspaceId = action.data.id;
        break;

      case ADD_WORKSPACE_REQUEST:
        draft.addWorkspaceLoading = true;
        draft.addWrokspaceerror = null;
        break;

      case ADD_WORKSPACE_SUCCESS:
        draft.addWorkspaceDone = true;
        draft.addWorkspaceLoading = false;
        draft.userWorkspace = action.data.Workspaces;
        break;

      case ADD_WORKSPACE_FAILURE:
        draft.addWorkspaceLoading = false;
        draft.addWrokspaceerror = action.error;
        break;

      case REQUEST_ADD_WORKSPACE_REQUEST:
        draft.requestAddWorkspaceLoading = true;
        draft.requestAddWorkspaceError = null;
        draft.requestAddWorkspaceDone = false;
        break;

      case REQUEST_ADD_WORKSPACE_SUCCESS:
        draft.requestAddWorkspaceLoading = false;
        draft.requestAddWorkspaceDone = true;
        break;

      case REQUEST_ADD_WORKSPACE_FAILURE:
        draft.requestAddWorkspaceLoading = false;
        draft.requestAddWorkspaceError = action.error;
        break;

      case ACCESS_WORKSPACE_REQUEST:
        draft.accessWorkspaceLoading = true;
        draft.accessWorkspaceError = null;
        draft.accessWorkspaceDone = false;
        break;

      case ACCESS_WORKSPACE_SUCCESS:
        draft.accessWorkspaceLoading = false;
        draft.accessWorkspaceDone = true;
        break;

      case ACCESS_WORKSPACE_FAILURE:
        draft.accessWorkspaceLoading = false;
        draft.accessWorkspaceError = action.error;
        break;

      case REQUEST_WORKSPACE_PERMISSION_REQUEST:
        draft.requestWorkspacePermissionLoading = true;
        draft.requestWorkspacePermissionDone = false;
        draft.requestWorkspacePermissionError = null;
        break;

      case REQUEST_WORKSPACE_PERMISSION_SUCCESS:
        draft.requestWorkspacePermissionLoading = false;
        draft.requestWorkspacePermissionDone = true;
        break;

      case REQUEST_WORKSPACE_PERMISSION_FAILURE:
        draft.requestWorkspacePermissionLoading = false;
        draft.requestWorkspacePermissionError = action.error;
        break;

      case CONFIRM_REQUEST_REQUEST:
        draft.confirmRequestLoading = true;
        draft.confirmRequestError = null;
        draft.confirmRequestDone = false;
        break;

      case CONFIRM_REQUEST_SUCCESS:
        draft.confirmRequestLoading = false;
        draft.user = action.data;
        draft.confirmRequestDone = true;
        break;

      case CONFIRM_REQUEST_FAILURE:
        draft.confirmRequestLoading = false;
        draft.confirmRequestError = action.error;
        break;

      case DENY_REQUEST_REQUEST:
        draft.denyRequestLoading = true;
        draft.denyRequestError = null;
        draft.denyRequestDone = false;
        break;

      case DENY_REQUEST_SUCCESS:
        draft.denyRequestLoading = false;
        draft.user = action.data;
        draft.denyRequestDone = true;
        break;

      case DENY_REQUEST_FAILURE:
        draft.denyRequestLoading = false;
        draft.denyRequestError = action.error;
        break;

      case DELELTE_NOTI_REQUEST:
        draft.deleteNotiLoading = true;
        draft.deleteNotiError = null;
        draft.deleteNotiDone = false;
        break;

      case DELELTE_NOTI_SUCCESS:
        draft.deleteNotiLoading = false;
        draft.user = action.data;
        draft.deleteNotiDone = true;
        break;

      case DELELTE_NOTI_FAILURE:
        draft.deleteNotiLoading = false;
        draft.deleteNotiError = action.error;
        break;

      case UPDATE_WORKSPACE_ID:
        draft.userCurrentWorkspaceId = action.data.id;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
