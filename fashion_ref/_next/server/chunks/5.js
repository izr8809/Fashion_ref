"use strict";
exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HV": () => (/* binding */ loadPost),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "q2": () => (/* binding */ addPost)
/* harmony export */ });
/* unused harmony export initialState */
const initialState = {
    postArray: [
        {
            id: 0,
            name: "",
            category: "",
            brand: "",
            Images: [
                {
                    src: ""
                }
            ],
            Hashtags: [
                {
                    PostHashtag: {
                        HashtagId: 1
                    },
                    name: ""
                }
            ],
            reason: "",
            season: "",
            link: ""
        }
    ],
    pagecount: 0,
    postAdded: false
};
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const addPost = (data)=>{
    return {
        type: ADD_POST_REQUEST,
        data
    };
};
const loadPost = (data)=>{
    return {
        type: LOAD_POST_REQUEST,
        data
    };
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOAD_POST_REQUEST:
            console.log("action.data" + action.data);
            return {
                ...state,
                postArray: action.data
            };
        case ADD_POST_REQUEST:
            return {
                ...state,
                postArray: [
                    action.data,
                    ...state.postArray
                ],
                postadded: true
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ }),

/***/ 6572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tP": () => (/* binding */ loginRequestAction),
/* harmony export */   "vR": () => (/* binding */ logoutRequestAction)
/* harmony export */ });
/* unused harmony exports initialState, loginSuccessAction, loginFailureAction, logoutSuccessAction, logoutFailureAction */
const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    isLoggingOut: false,
    user: null,
    signUpData: {},
    loginData: {}
};
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const loginRequestAction = (data)=>{
    return {
        type: LOG_IN_REQUEST,
        data
    };
};
const loginSuccessAction = (data)=>{
    return {
        type: LOG_IN_SUCCESS,
        data
    };
};
const loginFailureAction = (data)=>{
    return {
        type: LOG_IN_FAILURE,
        data
    };
};
const logoutRequestAction = (data)=>{
    return {
        type: LOG_OUT_REQUEST,
        data
    };
};
const logoutSuccessAction = (data)=>{
    return {
        type: LOG_OUT_SUCCESS,
        data
    };
};
const logoutFailureAction = (data)=>{
    return {
        type: LOG_OUT_FAILURE,
        data
    };
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: true,
                user: action.data
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                user: action.data
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                user: null
            };
        case LOG_OUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false
            };
        case LOG_OUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ })

};
;