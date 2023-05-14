import produce from "immer";
export const initialState = {
  workspaceInfo: [],
  currentCategory: null,
  currentSpaceId: null,
  loadWorkspaceInfoLoading: false,
  loadWorkspaceInfoDone: false,
  loadWorkspaceInfoError: null,
  referenceClickLoading: false,
  referenceClickDone: false,
  referenceClickError: null,
  addReferenceLoading: false,
  addReferenceDone: false,
  addReferenceError: null,
  addtagLoading: false,
  addtagDone: false,
  addtagError: null,
  deleteSavedtagsLoading: false,
  deleteSavedtagsDone: false,
  deleteSavedtagsError: null,
};

export const LOAD_WORKSPACE_INFO_REQUEST = "LOAD_WORKSPACE_INFO_REQUEST";
export const LOAD_WORKSPACE_INFO_SUCCESS = "LOAD_WORKSPACE_INFO_SUCCESS";
export const LOAD_WORKSPACE_INFO_FAILURE = "LOAD_WORKSPACE_INFO_FAILURE";

export const SET_WORKSPACE_INFO_REQUEST = "SET_WORKSPACE_INFO_REQUEST";

export const REFERENCE_CLICK_REQUEST = "REFERENCE_CLICK_REQUEST";
export const REFERENCE_CLICK_SUCCESS = "REFERENCE_CLICK_SUCCESS";
export const REFERENCE_CLICK_FAILURE = "REFERENCE_CLICK_FAILURE";

export const ADD_REFERENCE_REQUEST = "ADD_REFERENCE_REQUEST";
export const ADD_REFERENCE_SUCCESS = "ADD_REFERENCE_SUCCESS";
export const ADD_REFERENCE_FAILURE = "ADD_REFERENCE_FAILURE";

export const ADD_TAG_REQUEST = "ADD_TAG_REQUEST";
export const ADD_TAG_SUCCESS = "ADD_TAG_SUCCESS";
export const ADD_TAG_FALIURE = "ADD_TAG_FALIURE";

export const DELETE_SAVEDTAGS_REQUEST = "DELETE_SAVEDTAGS_REQUEST";
export const DELETE_SAVEDTAGS_SUCCESS = "DELETE_SAVEDTAGS_SUCCESS";
export const DELETE_SAVEDTAGS_FAILURE = "DELETE_SAVEDTAGS_FAILURE";

export const UPDATE_WORKSPACE_INFO = "UPDATE_WORKSPACE_INFO";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_WORKSPACE_INFO_REQUEST:
        draft.loadWorkspaceInfoLoading = true;
        draft.loadWorkspaceInfoError = null;
        draft.loadWorkspaceInfoDone = false;
        break;

      case LOAD_WORKSPACE_INFO_SUCCESS:
        draft.loadWorkspaceInfoLoading = false;
        draft.workspaceInfo = action.data;
        draft.loadWorkspaceInfoDone = true;
        break;

      case LOAD_WORKSPACE_INFO_FAILURE:
        draft.loadWorkspaceInfoLoading = false;
        draft.loadWorkspaceInfoError = action.error;
        break;

      case REFERENCE_CLICK_REQUEST:
        draft.currentCategory = "ref";
        draft.currentSpaceId = action.data.referenceId;
        draft.referenceClickLoading = true;
        draft.referenceClickError = null;
        draft.referenceClickDone = false;
        break;

      case REFERENCE_CLICK_SUCCESS:
        draft.referenceClickLoading = false;
        draft.referenceClickDone = true;
        break;

      case REFERENCE_CLICK_FAILURE:
        draft.referenceClickLoading = false;
        draft.referenceClickError = action.error;
        break;

      case SET_WORKSPACE_INFO_REQUEST:
        draft.workspaceInfo = action.data.Workspaces[0];
        //cureent??
        break;

      case ADD_REFERENCE_REQUEST:
        draft.addReferenceLoading = true;
        draft.addReferenceError = null;
        draft.addReferencDone = false;
        break;

      case ADD_REFERENCE_SUCCESS:
        draft.addReferenceLoading = false;
        draft.workspaceInfo = action.data;
        draft.addReferenceDone = true;
        break;

      case ADD_REFERENCE_FAILURE:
        draft.addReferenceLoading = false;
        draft.addReferenceError = action.error;
        break;

      case ADD_TAG_REQUEST:
        draft.addtagLoading = true;
        draft.addtagError = null;
        draft.addtagDone = false;
        break;

      case ADD_TAG_SUCCESS:
        draft.addtagLoading = false;
        draft.workspaceInfo = action.data;
        draft.addtagDone = true;
        break;

      case ADD_TAG_FALIURE:
        draft.addtagLoading = false;
        draft.addtagError = action.error;
        break;
      

      case DELETE_SAVEDTAGS_REQUEST:
        draft.deleteSavedtagsLoading = true;
        draft.deleteSavedtagsError = null;
        draft.deleteSavedtagsDone = false;
        break;

      case DELETE_SAVEDTAGS_SUCCESS:
        draft.deleteSavedtagsLoading = false;
        draft.workspaceInfo = action.data;
        draft.deleteSavedtagsDone = true;
        break;

      case DELETE_SAVEDTAGS_FAILURE:
        draft.deleteSavedtagsLoading = false;
        draft.deleteSavedtagsError = action.error;
        break;

      case UPDATE_WORKSPACE_INFO:
        draft.workspaceInfo = action.data.selectedWorkspaceInfo;
        break;

      default:
        return state;
    }
  });
};

export default reducer;
