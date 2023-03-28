import produce from 'immer';

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
  signUpLoading: false,
  signUpDone: false,
  signUpFailure: null,
  user: null,
  signUpData: {},
  loginData: {},
  posts:[],
};

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";


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
  return produce (state, (draft)=>{
    switch (action.type) {
    
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = true;
        draft.user = action.data;
        draft.loadUserDone = true;
        break;
        
      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;
  
      case LOG_IN_REQUEST:
        draft.logInLoading = false;
        draft.logInError = null;
        draft.user = action.data;
        break;

      case LOG_IN_SUCCESS:
        draft.logInDone = true;
        draft.logInLoading = false;
        draft.user = action.data;
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
        draft.signUpLoading = true;
        draft.user = action.data;
        draft.signUpDone = true;
        break;
        
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
  
        
      default:
        return state;
    }
  });
  
};

export default reducer;
